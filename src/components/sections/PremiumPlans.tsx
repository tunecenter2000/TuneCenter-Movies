import React from "react";
import { motion } from "framer-motion";
import { PlanProps } from "../../utils/types";
import { PREMIUM_PLANS } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import Card from "../shared/Card";
import Button from "../shared/Button";

interface PremiumPlansProps {}

const PremiumPlans: React.FC<PremiumPlansProps> = () => {
  const RAZORPAY_KEY = "rzp_test_dsz1wdlDry3ngl"; 

  const handleRazorpayPayment = async (plan: PlanProps) => {
    if (!(window as any).Razorpay) {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: plan.price * 100,
      currency: "INR",
      name: "Tune Center Movie HUB",
      description: `Subscription for ${plan.name}`,
      image: "/logo.png", 
      handler: function (response: any) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
      },
      // prefill: {
      //   name: "User Name",
      //   email: "user@example.com",
      //   contact: "9999999999",
      // },
      notes: {
        plan_id: plan.id,
      },
      theme: {
        color: "#E50914",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the plan that works best for you. Downgrade or upgrade at any time.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {PREMIUM_PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelect={() => handleRazorpayPayment(plan)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: PlanProps;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <motion.div>
      <Card className={`h-full flex flex-col ${plan.isPopular ? 'border-2 border-[#E50914] relative' : ''}`}>
        {plan.isPopular && (
          <div className="absolute top-0 right-0 bg-[#E50914] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            MOST POPULAR
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">{formatPrice(plan.price)}</span>
            <span className="text-gray-400">/month</span>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button variant={plan.isPopular ? "primary" : "outline"} fullWidth onClick={onSelect}>
            Pay with Razorpay
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PremiumPlans;
