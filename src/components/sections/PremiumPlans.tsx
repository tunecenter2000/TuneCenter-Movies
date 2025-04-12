import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlanProps } from "../../utils/types";
import { PREMIUM_PLANS } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { QRCodeCanvas } from "qrcode.react"; // ✅ Correct import
import Modal from "../shared/Modal"; // ✅ Ensure Modal accepts children

interface PremiumPlansProps {
  onSelectPlan: (planId: string) => void;
}

const PremiumPlans: React.FC<PremiumPlansProps> = ({ }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: PlanProps) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
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
              onSelect={() => handleSelectPlan(plan)}
            />
          ))}
        </motion.div>
      </div>

      {isModalOpen && selectedPlan && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Scan to Pay</h3>
            <p className="text-gray-400 mb-6 text-center">
              Pay <span className="text-green-400 font-semibold text-lg">{formatPrice(selectedPlan.price)}</span> for
              <strong className="text-white ml-1">{selectedPlan.name}</strong>
            </p>

            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <QRCodeCanvas
                  value={`upi://pay?pa=umapathy1305-1@okicici&pn=Tune Center movie HUB&mc=123456&tid=${Date.now()}&tr=order_${selectedPlan.id}&tn=Subscription Payment&am=${selectedPlan.price}&cu=INR`}
                  size={200}
                />
              </div>
            </div>

            {/* <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-200"
            >
              Close
            </button> */}
          </div>
        </Modal>
      )}

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
            Choose Plan
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PremiumPlans;
