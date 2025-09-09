import { Check, Stethoscope, Baby, BookOpen, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves every stakeholder in the vaccination ecosystem
              with tailored tools and features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white text-[#02343B] p-8 rounded-xl shadow-lg"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-6">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#04A699] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

const features = [
  {
    icon: <Stethoscope className="w-12 h-12 text-[#04A699]" />,
    title: "For Community Health Workers",
    items: [
      "Register mothers & children",
      "Record vaccines given & upcoming schedules",
      "Automated SMS reminders for both mother & health worker",
      "Update child's vaccine history instantly",
    ],
  },
  {
    icon: <Baby className="w-12 h-12 text-[#04A699]" />,
    title: "For Mothers",
    items: [
      "View child's vaccination records",
      "Check appointment schedules",
      "Access via USSD (for non-smartphone users)",
      "Receive timely SMS reminders",
    ],
  },
  {
    icon: <BookOpen className="w-12 h-12 text-[#04A699]" />,
    title: "Information Hub",
    items: [
      "Easy-to-read info on vaccine benefits & types",
      "Educational content for better health outcomes",
      "Multilingual support for diverse communities",
      "Offline access to essential information",
    ],
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-[#04A699]" />,
    title: "Analytics Dashboard",
    items: [
      "Monthly vaccination statistics",
      "Missed vs. completed vaccinations tracking",
      "Total clients tracked and managed",
      "Custom reports for hospitals & NGOs",
    ],
  },
];

export default FeaturesSection;