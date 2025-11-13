import { CreditCard, Files, LayoutDashboard, Receipt, Upload}from "lucide-react";


export const features = [
  {
    iconName: "",
    iconColor: "#8B5CF6",
    title: "Easy File Upload",
    description: "Quickly upload files of any type and size with our intuitive drag-and-drop interface."
  },
  {
    iconName: "shield",
    iconColor: "#EC4899",
    title: "Secure Storage",
    description: "Your files are encrypted and stored securely in our cloud infrastructure."
  },
  {
    iconName: "share",
    iconColor: "#10B981",
    title: "Simple Sharing",
    description: "Share files with anyone using secure links that you control."
  },
  {
    iconName: "credit-card",
    iconColor: "#F59E0B",
    title: "Flexible Credits",
    description: "Pay only for what you use with our credit-based system."
  },
  {
    iconName: "file-text",
    iconColor: "#3B82F6",
    title: "File Management",
    description: "Organize,preview and manage your files from andy device."
  },
  {
    iconName: "clock",
    iconColor: "#6366F1",
    title: "Transaction History",
    description: "Keep track of all your credit purchases and usage."
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for personal use",
    features: [
      "5 GB Storage",
      "Basic File Sharing",
      "2 Team Members",
      "Mobile Access",
      "Email Support",
      "Basic Security"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Premium",
    price: "12",
    description: "Ideal for professionals",
    features: [
      "100 GB Storage",
      "Advanced Sharing",
      "10 Team Members",
      "Priority Support",
      "Advanced Security",
      "Version History"
    ],
    cta: "Go Premium",
    highlighted: true
  },
  {
    name: "Ultimate",
    price: "28",
    description: "Best for teams",
    features: [
      "Unlimited Storage",
      "Enterprise Features",
      "Unlimited Team Members",
      "24/7 Support",
      "Custom Security",
      "Advanced Analytics"
    ],
    cta: "Go Ultimate",
    highlighted: false
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Solutions",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "CloudShare has transformed how our team collaborates. The security features and ease of use are unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "Design Studio Pro",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "As a creative agency, we needed a reliable solution for sharing large files. CloudShare exceeded our expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    company: "Global Innovations",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The real-time collaboration features have made remote work seamless for our entire team.",
    rating: 4.8
  }
];

// Side menu data
export const SIDE_MENU_DATA=[
  {
    id:"01",
    label:"Dashboard",
    icon:LayoutDashboard,
    path:"/dashboard"
  },
  {
    id:"02",
    label:"Upload",
    icon:Upload,
    path:"/upload"
  },
  {
    id:"03",
    label:"My Files",
    icon:Files,
    path:"/my-files"
  },
  {
    id:"04",
    label:"Subscription",
    icon:CreditCard,
    path:"/subscription"
  },
  { 
    id:"05",
    label:"Transactions",
    icon:Receipt,
    path:"/transactions"
  }
];