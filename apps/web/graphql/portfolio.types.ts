export interface Portfolio {
  about: string;
  careersCollection: {
    items: CareerItem[];
  };
  experience: string;
  toolsCollection: {
    items: ToolItem[];
  }
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