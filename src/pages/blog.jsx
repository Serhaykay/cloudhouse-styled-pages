import React, { useEffect, useState } from "react";
import { client } from "../sanityClient"; // Assuming client is properly configured
import { Link } from "react-router-dom"; // For linking to individual blog posts
import { PortableText } from "@portabletext/react"; // For rendering rich text

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "post"]{
            title,
            slug {
              current
            },
            mainImage {
              asset -> {
                url
              }
            },
            publishedAt
          }`
        );
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching blog posts");
        setLoading(false);
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  // Loading and error handling
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-20">No blog posts found.</div>;
  }

  return (
    <div className="font-[Poppins] max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-emerald-500 mb-12 text-center">Our Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug.current}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-emerald-500 mb-2">
                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.publishedAt).toDateString()}
              </p>
              <div className="flex-grow line-clamp-3 text-gray-700 text-sm">
                {/* Optional: Short excerpt from body */}
                <PortableText value={post.body} />
              </div>
              <Link
                to={`/blog/${post.slug.current}`}
                className="mt-4 text-emerald-500 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default Blog;
