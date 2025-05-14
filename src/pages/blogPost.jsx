import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";


const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current blog post
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

    // Fetch 3 other featured posts
    client
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
          title,
          slug,
          mainImage {
            asset -> {
              url
            }
          },
          publishedAt
        }`,
        { slug }
      )
      .then(setFeaturedPosts)
      .catch(console.error);
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center py-20 text-red-500">Post not found.</div>;
  }

  return (
    <div className="font-[Poppins] max-w-4xl mx-auto px-4 py-20 pt-64">
      {/* Post Title & Date */}
      <h1 className="text-4xl font-bold text-[#5B3CC4] mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {/* Main Image */}
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full max-h-[500px] object-cover rounded-xl mb-8"
        />
      )}

      {/* Blog Body */}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-[#5B3CC4]">You may also like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((feat) => (
              <Link
                key={feat.slug.current}
                to={`/blog/${feat.slug.current}`}
                className="bg-[#f9f8ff] rounded-xl overflow-hidden shadow hover:shadow-lg"
              >
                <img
                  src={feat.mainImage?.asset?.url}
                  alt={feat.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#5B3CC4]">{feat.title}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(feat.publishedAt).toDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
