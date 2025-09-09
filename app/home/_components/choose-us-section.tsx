import { Smartphone, Clock, Target, BarChart3 } from "lucide-react";

const ChooseUsSection = () => {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#04A699] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Universal Access</h3>
              <p className="text-gray-300">
                Works on any phone through SMS and USSD technology.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#04A699] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Time-Saving</h3>
              <p className="text-gray-300">
                Automated reminders and tracking save valuable time for health
                workers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#04A699] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Reduced Missed Vaccinations
              </h3>
              <p className="text-gray-300">
                Significant reduction in missed appointments through timely
                reminders.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#04A699] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-300">
                Comprehensive analytics for hospitals and NGOs to improve
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ChooseUsSection;