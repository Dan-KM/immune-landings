import { Check } from "lucide-react";


const plans = [
  {
    name: "Basic",
    subtitle: "Freemium Pilot",
    price: "Free",
    features: [
      "SMS reminders",
      "Mother & child registration",
      "Basic vaccine tracking",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    subtitle: "Most Popular",
    price: "$29/month",
    features: [
      "SMS reminders",
      "USSD access for mothers",
      "Complete vaccine history & schedules",
      "Priority support",
      "Multi-language support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "For Organizations",
    price: "$99/month",
    features: [
      "All Standard features",
      "AI-powered analytics & insights",
      "Advanced dashboard for hospitals & NGOs",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
];



const PricingPlanSection = () => {
    return (
      <section className="bg-[#F8F8FF] text-[#02343B] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to meet the needs of individuals,
              organizations, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg relative ${
                  plan.popular
                    ? "ring-4 ring-[#04A699] transform scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute px-4 py-2 text-center flex items-center -top-4 left-1/2 transform -translate-x-1/2 bg-[#04A699] rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-500 mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-[#04A699] mb-2">
                    {plan.price}
                  </div>
                  {plan.name !== "Basic" && (
                    <p className="text-gray-500">per organization</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#04A699]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition duration-300 ${
                    plan.popular
                      ? "bg-[#04A699] hover:bg-[#038C7F] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-[#02343B]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default PricingPlanSection;

