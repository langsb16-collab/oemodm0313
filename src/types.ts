export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'buyer' | 'factory' | 'admin';
  companyName?: string;
  photoURL?: string;
}

export interface Factory {
  id: string;
  name: string;
  country: string;
  categories: string[];
  capacity: string;
  certifications: string[];
  moq: number;
  rating: number;
  description: string;
  images: string[];
}

export interface RFQ {
  id: string;
  buyerId: string;
  productName: string;
  category: string;
  quantity: number;
  targetPrice: number;
  description: string;
  status: 'pending' | 'quoted' | 'sampling' | 'production' | 'completed';
  createdAt: string;
}

export interface Quote {
  id: string;
  rfqId: string;
  factoryId: string;
  price: number;
  leadTime: number; // in days
  notes: string;
  status: 'pending' | 'accepted' | 'rejected';
}
