import { AlertTriangle, PhoneOff, Hospital } from "lucide-react";

const ProblemStatementSection = () => {
    return (
      <section className="bg-[#F8F8FF] text-[#02343B] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Challenge We Address
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4 flex justify-center">
                  <AlertTriangle className="w-12 h-12 text-[#04A699]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Missed Vaccinations
                </h3>
                <p className="text-gray-700">
                  Missed vaccinations put children at risk and compromise
                  community health.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4 flex justify-center">
                  <PhoneOff className="w-12 h-12 text-[#04A699]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Limited Technology Access
                </h3>
                <p className="text-gray-700">
                  Many mothers don't have smartphones or reliable internet
                  connectivity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4 flex justify-center">
                  <Hospital className="w-12 h-12 text-[#04A699]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Inadequate Tracking Tools
                </h3>
                <p className="text-gray-700">
                  Health workers often lack effective tools to track and follow
                  up with families.
                </p>
              </div>
            </div>

            <div className="bg-[#04A699] text-white p-8 rounded-xl inline-block">
              <h3 className="text-2xl md:text-3xl font-bold">
                We solve this with simple, accessible, and reliable technology.
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProblemStatementSection;