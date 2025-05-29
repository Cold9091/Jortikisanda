export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}
