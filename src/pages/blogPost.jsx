import { useParams } from "react-router-dom";

const blogPosts = {
  "boost-shopify-sales-whatsapp": {
    title: "Boost Your Shopify Sales with WhatsApp",
    date: "May 12, 2025",
    image: "https://via.placeholder.com/1000x500?text=WhatsApp+Widget",
    content: `WhatsApp is transforming how merchants connect with customers...
    
Here’s how you can integrate WhatsApp into your Shopify store to increase engagement and conversions.`,
  },
  "building-shopify-app-react": {
    title: "Building a Shopify App with React",
    date: "May 7, 2025",
    image: "https://via.placeholder.com/1000x500?text=React+Shopify+App",
    content: `In this post, we go behind the scenes of how Cloudhouse's Shopify app was developed using React, Vite, and Tailwind...`,
  },
  "freemium-models-smart-growth": {
    title: "Freemium Models: Smart Growth for Apps",
    date: "April 28, 2025",
    image: "https://via.placeholder.com/1000x500?text=Freemium+Model",
    content: `Freemium is more than a buzzword. It’s a strategy that fuels rapid growth — when done right.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <div className="p-10 text-center">Post not found.</div>;
  }

  return (
    <div className="font-[Poppins] px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-[#5B3CC4] mb-4 pt-64">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8 max-h-[500px] object-cover"
      />
      <div className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
