import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import toast from 'react-hot-toast'; // Import toast for notifications

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (slug) {
      // Fetch the blog post
      client
        .fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            title,
            publishedAt,
            mainImage {
              asset -> {
                url
              }
            },
            body
          }`,
          { slug }
        )
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch(console.error);

      // Fetch comments for this post
      client
        .fetch(
          `*[_type == "comment" && post->slug.current == $slug]{
            _id,
            name,
            comment,
            _createdAt
          }`,
          { slug }
        )
        .then((commentsData) => setComments(commentsData))
        .catch(console.error);
    }
  }, [slug]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!name || !commentText) {
      toast.error("Please fill out both fields.");
      return;
    }

    const newComment = {
      _type: "comment",
      name,
      comment: commentText,
      post: {
        _type: "reference",
        _ref: post._id,
      },
    };

    client
      .create(newComment)
      .then((createdComment) => {
        // After successful creation, update comments list
        setComments((prevComments) => [
          ...prevComments,
          createdComment, // Use the response to get the correct _id and _createdAt
        ]);
        setName("");
        setCommentText("");
        toast.success("Comment added successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add comment.");
      });
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center py-20 text-red-500">Post not found.</div>;
  }

  return (
    <div className="font-[Poppins] max-w-4xl mx-auto px-4 py-20 pt-64">
      {/* Post Content */}
      <h1 className="text-4xl font-bold text-[#5B3CC4] mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full max-h-[500px] object-cover rounded-xl mb-8"
        />
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#5B3CC4] mb-6">Comments</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment._id} className="bg-[#f9f8ff] p-4 rounded-xl shadow-sm">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-500 text-sm">{new Date(comment._createdAt).toDateString()}</p>
                <p className="mt-2">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Comment Form */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-[#5B3CC4] mb-4">Leave a Comment</h3>
        <form className="space-y-4" onSubmit={handleCommentSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600">Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border rounded-lg"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm text-gray-600">Comment</label>
            <textarea
              id="comment"
              rows="4"
              className="w-full p-3 border rounded-lg"
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#5B3CC4] text-white px-6 py-3 rounded-lg"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
