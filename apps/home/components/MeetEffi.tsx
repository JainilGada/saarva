import { siteConfig } from "@config/siteConfig";

export default function MeetEffi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl flex-shrink-0">
              👋
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {siteConfig.meetEffi.greeting}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {siteConfig.meetEffi.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

