import { NavItem, PortfolioItem, Testimonial } from "./types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Bloom Cosmetics Rebrand",
    description: "Complete brand identity refresh",
    category: "Branding",
    imageUrl: "/images/cosmetics-brand.jpg",
  },
  {
    id: 2,
    title: "Organic Tea Packaging",
    description: "Sustainable packaging design",
    category: "Packaging",
    imageUrl: "/images/tea-packaging.jpg",
  },
  {
    id: 3,
    title: "Tech Startup Website",
    description: "Modern web design & development",
    category: "Digital",
    imageUrl: "/images/tech-website.jpg",
  },
  {
    id: 4,
    title: "Coffee Brand Identity",
    description: "From logo to packaging system",
    category: "Branding",
    imageUrl: "/images/coffee-branding.jpg",
  },
  {
    id: 5,
    title: "Fashion Lookbook",
    description: "Editorial design & photography",
    category: "Print",
    imageUrl: "/images/fashion-lookbook.jpg",
  },
  {
    id: 6,
    title: "Restaurant Menu Design",
    description: "Culinary branding experience",
    category: "Print",
    imageUrl: "/images/restaurant-menu.jpg",
  },
  {
    id: 7,
    title: "Mobile Banking App",
    description: "UI/UX design for fintech",
    category: "Digital",
    imageUrl: "/images/mobile-app.jpg",
  },
  {
    id: 8,
    title: "Wine Label Collection",
    description: "Premium packaging design",
    category: "Packaging",
    imageUrl: "/images/wine-labels.jpg",
  },
  {
    id: 9,
    title: "Corporate Brand System",
    description: "Complete visual identity",
    category: "Branding",
    imageUrl: "/images/corporate-brand.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Bloom Cosmetics",
    content:
      "New Heights completely transformed our brand identity. Their team delivered a stunning visual system that perfectly captures our essence and has increased our engagement by 200%.",
    avatar: "/images/jpg.jpg",
  },
  {
    id: 2,
    name: "Michael Torres",
    company: "TechNova",
    content:
      "The packaging design work exceeded our expectations. Not only is it beautiful, but it's also practical and has significantly boosted our shelf presence. Couldn't be happier!",
    avatar: "/images/ava.jpg",
  },
  {
    id: 3,
    name: "Emma Richardson",
    company: "GreenLife Organics",
    content:
      "Working with New Heights was a game-changer for our social media strategy. Their creative graphics and cohesive branding have helped us double our followers in just three months.",
    avatar: "/images/avat.jpg",
  },
];

export const categories = ["All", "Branding", "Packaging", "Digital", "Print"];
