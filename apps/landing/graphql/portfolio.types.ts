export interface Portfolio {
  about: string;
  careersCollection: {
    items: CareerItem[];
  };
  experience: string;
  toolsCollection: {
    items: ToolItem[];
  };
  contact: Contact;
  whatIDo: string[];
  writing: string;
}

export interface CareerItem {
  title: string;
  company: string;
  startDate: string;
}

export interface ToolItem {
  name: string;
  items: string[];
}

export interface Contact {
  linkedin: string;
  facebook: string;
  instagram: string;
  email: string;
  mobile: string;
}
