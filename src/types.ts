export type PageId = 'home' | 'how-it-works' | 'sell-your-house' | 'about' | 'contact';

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  situation: string;
  rating: number;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bought & Rented' | 'Renovated & Rented' | 'Direct Cash Purchase';
  location: string;
  description: string;
  image: string;
  stats: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Cash Offer' | 'Foreclosure' | 'As-Is Condition' | 'Process & Fees';
}

export interface SituationItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  solution: string;
}

export interface CashOfferFormData {
  address: string;
  city: string;
  zip: string;
  propertyType: string;
  condition: string;
  situation: string;
  timeframe: string;
  fullName: string;
  phone: string;
  email: string;
  notes?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'text' | 'email';
  preferredTime: string;
  address: string;
  topic: string;
  notes?: string;
}
