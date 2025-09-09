import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mwangi",
    role: "Community Health Director",
    text: "This platform has transformed how we track vaccinations in our rural communities. The SMS system works perfectly even in areas with poor internet.",
  },
  {
    name: "Grace Achieng",
    role: "Mother of 3",
    text: "I never miss my children's vaccination appointments anymore. The USSD feature works on my basic phone and keeps me informed.",
  },
  {
    name: "James Kipchoge",
    role: "NGO Program Manager",
    text: "The analytics dashboard gives us clear insights into vaccination coverage. We've increased our completion rates by 40% since implementation.",
  },
];


const TestimonialSection = () => {
    return (
      <section className="bg-[#F8F8FF] text-[#02343B] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Communities Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#04A699] text-[#04A699]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-[#02343B]">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default TestimonialSection;