export const memberships = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₹6,000",
    period: "/ month",
    popular: false,
    features: ["Gym Access", "All Equipment", "1 Trainer Session / Month"],
  },
  {
    id: "3-months",
    name: "3 Months",
    price: "₹16,000",
    period: "/ 3 months",
    popular: false,
    features: ["Gym Access", "All Equipment", "4 Trainer Sessions Total"],
  },
  {
    id: "6-months",
    name: "6 Months",
    price: "₹19,000",
    period: "/ 6 months",
    popular: false,
    features: ["Gym Access", "All Equipment", "Nutrition Guide"],
  },
  {
    id: "12-months",
    name: "Annual",
    price: "₹26,000",
    period: "/ 12 months",
    popular: true,
    features: [
      "Gym Access",
      "All Equipment",
      "2 Complimentary Personal Training Sessions",
      "Nutrition Guide",
      "Priority Support",
    ],
  },
];

export const comparisonFeatures = [
  {
    feature: "Gym Access",
    monthly: true,
    "3-months": true,
    "6-months": true,
    "12-months": true,
  },
  {
    feature: "All Equipment",
    monthly: true,
    "3-months": true,
    "6-months": true,
    "12-months": true,
  },
  {
    feature: "Nutrition Guide",
    monthly: false,
    "3-months": false,
    "6-months": true,
    "12-months": true,
  },
  {
    feature: "Priority Support",
    monthly: false,
    "3-months": false,
    "6-months": false,
    "12-months": true,
  },
  {
    feature: "Complimentary PT Sessions",
    monthly: false,
    "3-months": false,
    "6-months": false,
    "12-months": "2 Sessions",
  },
  {
    feature: "24/7 Access",
    monthly: true,
    "3-months": true,
    "6-months": true,
    "12-months": true,
  },
  {
    feature: "Locker Room",
    monthly: true,
    "3-months": true,
    "6-months": true,
    "12-months": true,
  },
];

export const membershipFaqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade to a longer-term plan at any time from your account dashboard or at the front desk.",
  },
  {
    q: "Is there a joining fee?",
    a: "No hidden joining fees. The price you see is the price you pay.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, memberships can be frozen for up to 30 days per year for travel or medical reasons.",
  },
  {
    q: "Is personal training included?",
    a: "The Annual plan includes 2 complimentary personal training sessions. Additional sessions can be purchased separately on any plan.",
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Monthly plans can be cancelled anytime with no cancellation fees. Multi-month plans run for their full term.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, we offer a one-day free trial pass so you can experience the facility, equipment, and a session with a trainer before committing to a plan.",
  },
  {
    q: "What happens if I miss my trainer sessions?",
    a: "Unused trainer sessions do not roll over, so we recommend scheduling them in advance through the app or front desk.",
  },
  {
    q: "Is there a discount for longer plans?",
    a: "Yes — the 3, 6, and 12 month plans work out cheaper per month than paying monthly, with the Annual plan offering the best value plus 2 free PT sessions.",
  },
];
