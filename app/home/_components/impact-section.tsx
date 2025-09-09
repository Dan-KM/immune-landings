import { Users, Heart, Shield } from "lucide-react";

const ImpactSection = () => {
    return (
      <section className="bg-[#04A699] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Impact</h2>
          <blockquote className="text-2xl md:text-3xl font-semibold mb-12 max-w-4xl mx-auto leading-relaxed">
            "Every child deserves timely vaccinations. Our platform ensures no
            one is left behind—whether they use a smartphone or a simple feature
            phone."
          </blockquote>

          <div className="text-[#02343B] grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Trusted by Health Workers
              </h3>
              <p>Empowering community health workers with reliable tools.</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Accessible in Remote Communities
              </h3>
              <p>Reaching families in the most underserved areas.</p>
            </div>

            <div className="bg-white bg-opacity-20 p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Partnerships</h3>
              <p>Growing impact through NGO and hospital collaborations.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ImpactSection;