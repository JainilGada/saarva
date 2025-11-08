"use client";

import { useState } from "react";
import { siteConfig } from "@config/siteConfig";

export default function ProductGrid() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleProduct = (productName: string) => {
    setExpandedProduct(expandedProduct === productName ? null : productName);
  };

  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Copilots
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized AI assistants for every profession
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.products.map((product) => {
            const isExpanded = expandedProduct === product.name;
            return (
              <div
                key={product.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <button
                  onClick={() => toggleProduct(product.name)}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200 mb-4"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${product.name}`}
                >
                  {siteConfig.cta.learnMore}
                  <span className={`ml-2 transition-transform duration-200 inline-block ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {isExpanded && product.features && (
                  <div className="mt-4 pt-4 border-t border-gray-200 transition-all duration-300 ease-in-out">
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{feature}</span>
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

