import { siteConfig } from "@config/siteConfig";

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {siteConfig.vision}
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {siteConfig.mission}
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {siteConfig.missionDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

