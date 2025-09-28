import React, { useState } from "react";
import { Link } from "react-router-dom";

const Packages = () => {
  const plans = [
    {
      name: "Starter Package",
      description:
        "For new businesses looking to get started with a professional online presence.",
      features: [
        "Complete Shopify store setup (themes, navigation, collections, pages)",
        "Theme customization (Liquid, CSS, JavaScript)",
        "Page builder support (GemPages, PageFly, Replo)",
        "Custom WordPress site design",
        "Elementor / Gutenberg page building",
        "Basic blog setup",
        "Single-page website (React, Next.js, or HTML/CSS/JS)",
      ],
      button: "Get Started",
      highlight: false,
      link: null,
    },
    {
      name: "Growth Package",
      description:
        "For businesses looking to scale with professional design, SEO, and integrations.",
      features: [
        "Custom Shopify theme design",
        "UX/UI optimization for better conversions",
        "App installation & configuration (reviews, email, subscriptions, upsells)",
        "Conversion rate optimization (CRO)",
        "Checkout optimization",
        "SEO for Shopify stores",
        "Speed & performance optimization",
        "WooCommerce store setup & product pages",
        "Plugin integration (payment gateways, shipping, subscriptions)",
        "Website speed optimization & Core Web Vitals",
        "API & CRM integrations (Mailchimp, Klaviyo, HubSpot)",
      ],
      button: "Get Started",
      highlight: true, // most popular
      link: null,
    },
    {
      name: "Custom Package",
      description:
        "For brands that need tailored solutions, advanced features, or full-stack projects.",
      features: [
        "Custom Shopify app development",
        "Advanced WooCommerce customizations",
        "Plugin customization or development",
        "Theme development for unique brand needs",
        "Progressive Web Apps (PWAs)",
        "Advanced full-stack projects",
        "Mobile-first optimization",
        "Custom API & third-party integrations",
      ],
      button: "Contact Us",
      highlight: false,
      link: "/contact",
    },
    {
      name: "Monthly Maintenance",
      description:
        "For ongoing updates, monitoring, and professional support.",
      features: [
        "Product uploads & management",
        "Store updates & maintenance",
        "Monthly support plans",
        "Backup & restore setup",
        "Site hardening & security monitoring",
        "Regular updates & fixes",
        "Google Analytics & tracking setup",
        "Email marketing automation (Mailchimp, Klaviyo, MailPoet)",
        "Website audits & consultations",
        "Training & tutorials for client teams",
      ],
      button: "Subscribe",
      highlight: false,
      link: "/contact",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Service Packages
        </h2>

        <div className="grid md:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const isExpanded = expanded[idx];
            const visibleFeatures = isExpanded
              ? plan.features
              : plan.features.slice(0, 5);

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-xl shadow-md p-4 flex flex-col h-full border transition
                  ${
                    plan.highlight
                      ? "border-emerald-500 ring-2 ring-emerald-500/30"
                      : "border-gray-200"
                  }
                `}
              >
                {/* Highlight label */}
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 mb-2">
                    {visibleFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.features.length > 5 && (
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="mt-2 inline-block text-xs px-3 py-1 rounded-full border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>

                {/* Buttons */}
                {plan.link ? (
                  <Link
                    to={plan.link}
                    className={`mt-4 w-full py-2 rounded-lg font-medium transition text-center
                      ${
                        plan.highlight
                          ? "bg-emerald-500 text-[#F9FAFB] hover:bg-emerald-600"
                          : "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-emerald-500 hover:text-[#F9FAFB]"
                      }
                    `}
                  >
                    {plan.button}
                  </Link>
                ) : (
                  <button
                    className={`mt-4 w-full py-2 rounded-lg font-medium transition
                      ${
                        plan.highlight
                          ? "bg-emerald-500 text-[#F9FAFB] hover:bg-emerald-600"
                          : "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-emerald-500 hover:text-[#F9FAFB]"
                      }
                    `}
                  >
                    {plan.button}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
