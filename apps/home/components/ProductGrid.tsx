"use client";

import { siteConfig } from "@config/siteConfig";

export default function ProductGrid() {
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
          {siteConfig.products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <span className="inline-flex items-center text-gray-500 font-semibold cursor-not-allowed">
                {siteConfig.cta.learnMore}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

