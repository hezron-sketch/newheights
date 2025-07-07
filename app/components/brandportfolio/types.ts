export interface NavItem {
  id: string;
  label: string;
}

export interface PortfolioItem {
  [x: string]: any;
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

