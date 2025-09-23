import { Check } from "lucide-react";

const PricingSection = ({ pricingPlans }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-purple-500 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              {/* Header: name, badge, description, price */}
              <div
                className={`px-6 py-8 ${
                  plan.highlighted ? "bg-gradient-to-br from-purple-50 to-white" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">{plan.name}</h3>
                    <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                  </div>

                  {plan.highlighted && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-4xl font-extrabold text-gray-900">${plan.price}</p>
                  <p className="mt-2 text-sm text-gray-500">{plan.priceSubtitle}</p>
                </div>
              </div>

              {/* Features and CTA */}
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6">
                <ul className="space-y-4">
                  {plan.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-purple-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="rounded-md shadow">
                  <button
                    type="button"
                    className={`w-full flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md transition-colors duration-200 ${
                      plan.highlighted
                        ? "text-white bg-purple-500 hover:bg-purple-600 border-transparent"
                        : "text-purple-600 bg-white hover:bg-gray-50 border border-purple-500"
                    }`}
                    aria-label={`Choose ${plan.name} plan`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
