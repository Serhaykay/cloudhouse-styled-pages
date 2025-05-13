import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{
        title,
        slug,
        publishedAt,
        mainImage {
          asset -> {
            url
          }
        }
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="font-[Poppins]">
      {/* Hero */}
      <div className="bg-[#5B3CC4] py-20 px-6 md:px-20 text-center pt-64">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloudhouse Blog</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Insights, tutorials, and updates on everything from Shopify apps to smart customer engagement.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="bg-white px-6 md:px-20 py-16 space-y-10">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row max-h-[400px] bg-[#f9f8ff] rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={
                  post.mainImage?.asset?.url ||
                  "https://cdn.sanity.io/images/ncoi8u9l/production/e1ebdc6d916f6b52afd8fbdd9639e0a220a6eee1-204x192.png?w=2000&fit=max&auto=format"
                }
                alt={post.title}
                className="w-full md:w-[45%] h-[250px] md:h-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-center md:w-[55%]">
                <h2 className="text-2xl font-semibold text-[#5B3CC4] mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toDateString()}
                </p>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="text-[#5B3CC4] hover:underline font-medium mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
