import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Vaccination Tracking Smarter?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join thousands of health workers and families already using our
            platform to ensure no child misses their vaccinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#04A699] hover:bg-[#038C7F] text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 flex items-center justify-center gap-2 min-w-48">
              Sign Up for Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-[#04A699] hover:bg-[#04A699] text-[#04A699] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 min-w-48">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    );
}

export default FinalCTASection;