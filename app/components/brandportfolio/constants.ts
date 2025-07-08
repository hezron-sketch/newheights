import { NavItem, PortfolioItem, Testimonial } from "./types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];



export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mercy Wairimu",
    company: "Bloom Cosmetics",
    content:
      "New Heights completely transformed our brand identity. Their team delivered a stunning visual system that perfectly captures our essence and has increased our engagement by 200%.",
    avatar: "/images/jpg.jpg",
  },
  {
    id: 2,
    name: "Fred Omollo",
    company: "TechNova",
    content:
      "The packaging design work exceeded our expectations. Not only is it beautiful, but it's also practical and has significantly boosted our shelf presence. Couldn't be happier!",
    avatar: "/images/ava.jpg",
  },
  {
    id: 3,
    name: "Elizabeth Kinya",
    company: "GreenLife Organics",
    content:
      "Working with New Heights was a game-changer for our social media strategy. Their creative graphics and cohesive branding have helped us double our followers in just three months.",
    avatar: "/images/avat.jpg",
  },
];



export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nova SaaS Dashboard",
    category: "SaaS",
    imageUrl: "/images/saas-dashboard.png",
    description: "Clean analytics interface for financial data visualization",
  },
  {
    id: 2,
    title: "Lumina Mobile App",
    category: "Mobile",
    imageUrl: "/images/mobile-app.jpg",
    description: "Fitness tracking with minimalist user experience",
  },
  {
    id: 3,
    title: "Aether Design System",
    category: "Design",
    imageUrl: "/images/design-system.png",
    description: "Component library for consistent digital products",
  },
  {
    id: 4,
    title: "Edge Commerce API",
    category: "Development",
    imageUrl: "/images/api-code.png",
    description: "High-performance e-commerce backend solution",
  },
  {
    id: 5,
    title: "Polaris Brand Identity",
    category: "Branding",
    imageUrl: "/images/tech-startup.jpg",
    description: "Visual language for tech startup",
  },
  {
    id: 6,
    title: "Horizon Web Platform",
    category: "Web",
    imageUrl: "/images/dashb.jpeg",
    description: "Content management with intuitive admin",
  },
];

export const categories = [
  "All",
  "SaaS",
  "Mobile",
  "Web",
  "Design",
  "Branding",
  "Development",
];
