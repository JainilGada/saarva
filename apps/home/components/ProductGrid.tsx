"use client";

import { useState } from "react";
import { siteConfig } from "@config/siteConfig";

export default function ProductGrid() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleToggle = (productName: string) => {
    setExpandedProduct((prev) => {
      // If clicking the same product, collapse it
      if (prev === productName) {
        return null;
      }
      // Otherwise, expand the clicked product
      return productName;
    });
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Copilots
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized AI assistants for every profession
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.products.map((product, productIndex) => {
            const isExpanded = expandedProduct === product.name;
            return (
              <div
                key={`${product.name}-${productIndex}`}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border ${
                  isExpanded ? "border-gray-300 shadow-lg" : "border-gray-100"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <button
                  onClick={() => handleToggle(product.name)}
                  className={`inline-flex items-center font-semibold transition-colors duration-200 mb-4 ${
                    isExpanded 
                      ? "text-blue-600 hover:text-blue-700" 
                      : "text-gray-900 hover:text-gray-700"
                  }`}
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${product.name}`}
                >
                  {isExpanded ? "Show Less ←" : siteConfig.cta.learnMore}
                </button>

                {isExpanded && product.features && (
                  <div className="mt-4 pt-4 border-t border-gray-200 transition-all duration-300 ease-in-out">
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={`${product.name}-feature-${index}`} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-2 mt-1 flex-shrink-0 font-bold">•</span>
                          <span className="leading-relaxed text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

