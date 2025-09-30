import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-semibold gradient-brand-text text-lg mb-4 uppercase tracking-wide">Pricing</p>
          <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-6">
            Choose Your Path to <span className="gradient-brand-text">Funding</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent pricing. Start connecting with investors today.
          </p>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-sm">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="gradient-brand text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide"
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className="absolute -inset-[2px] rounded-2xl gradient-brand z-10"
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-6 lg:gap-8 z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900">{plan.name}</p>
                    {plan.description && (
                      <p className="text-gray-600 mt-2 text-base">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-baseline">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end text-lg">
                      <p className="relative">
                        <span className="absolute bg-gray-400 h-[2px] inset-x-0 top-[50%]"></span>
                        <span className="text-gray-400">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className="text-5xl lg:text-6xl tracking-tight font-extrabold gradient-brand-text">
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-2">
                    <p className="text-sm text-gray-500 font-medium">
                      /month
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-4 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 text-[#667eea] shrink-0 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-gray-700">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-3">
                  <ButtonCheckout priceId={plan.priceId} />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-gray-500 font-medium">
                    No long-term contracts
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
