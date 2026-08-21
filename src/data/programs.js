import {
  Dumbbell,
  Flame,
  Zap,
  Move,
  Bike,
  Timer,
  UserCheck,
  Wind,
} from "lucide-react";

export const programs = [
  {
    id: "muscle-building",
    title: "Muscle Building",
    icon: Dumbbell,
    description: "Build strength and gain lean muscle effectively.",
    longDescription:
      "A structured hypertrophy program combining progressive overload with compound and isolation lifts to pack on quality lean muscle mass.",
    image: "/image/image11.webp",
    duration: "60 min",
    difficulty: "Intermediate",
    trainer: "Vikrant Tomar",
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    icon: Flame,
    description: "Burn fat and achieve a fitter, healthier you.",
    longDescription:
      "High-intensity metabolic conditioning paired with nutrition coaching designed to accelerate fat loss while preserving lean muscle.",
    image: "/image/image20.webp",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Arjun",
  },
  {
    id: "strength-training",
    title: "Strength Training",
    icon: Zap,
    description: "Improve endurance, strength and overall performance.",
    longDescription:
      "Barbell-focused strength cycles built around the big lifts to increase raw power, endurance, and total-body performance.",
    image: "/image/image10.webp",
    duration: "75 min",
    difficulty: "Advanced",
    trainer: "Aman",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    icon: Move,
    description: "Train for real-life movements and everyday strength.",
    longDescription:
      "Multi-planar movement patterns that build mobility, balance and real-world strength for everyday life and sport.",
    image: "/image/image12.webp",
    duration: "50 min",
    difficulty: "Intermediate",
    trainer: "Arjun ",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    icon: Timer,
    description: "Constantly varied, high-intensity functional movement.",
    longDescription:
      "Community-driven WODs blending gymnastics, weightlifting and conditioning for elite, all-round fitness.",
    image:
      "/image/image27.webp",
    duration: "60 min",
    difficulty: "Advanced",
    trainer: "Aman",
  },
  {
    id: "hiit",
    title: "HIIT",
    icon: Bike,
    description: "Short, intense intervals for maximum calorie burn.",
    longDescription:
      "Explosive interval circuits engineered to spike your metabolism and torch calories long after the session ends.",
    image:
      "/image/image30.webp",
    duration: "30 min",
    difficulty: "Intermediate",
    trainer: "Himanshu",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: UserCheck,
    description: "One-on-one coaching tailored to your goals.",
    longDescription:
      "Fully personalized programming, form correction and accountability with a dedicated coach by your side.",
    image: "/image/image24.webp",
    duration: "60 min",
    difficulty: "All Levels",
    trainer: "Vikrant Tomar",
  },
  {
    id: "yoga-mobility",
    title: "Yoga & Mobility",
    icon: Wind,
    description: "Recover, stretch and move with more freedom.",
    longDescription:
      "Guided mobility flows and breathwork to improve recovery, flexibility and long-term joint health.",
    image:
      "/image/image32.webp",
    duration: "45 min",
    difficulty: "Beginner",
    trainer: "Monu",
  },
];
