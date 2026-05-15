import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Audio', slug: 'audio', description: 'Premium headphones and speakers', iconName: 'Headphones' },
  { id: '2', name: 'Computing', slug: 'computing', description: 'High-performance laptops and workstations', iconName: 'Laptop' },
  { id: '3', name: 'Imaging', slug: 'imaging', description: 'Professional cameras and lenses', iconName: 'Camera' },
  { id: '4', name: 'Mobile', slug: 'mobile', description: 'Flagship smartphones and tablets', iconName: 'Smartphone' },
  { id: '5', name: 'Storage', slug: 'storage', description: 'Fast SSDs and external drives', iconName: 'HardDrive' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nexus Alpha Headphones',
    description: 'Ultra-low latency wireless audio with adaptive noise cancellation.',
    price: 349.99,
    category: 'audio',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    specs: { 'Battery': '40h', 'Freq': '5Hz - 40kHz', 'Weight': '250g' },
    rating: 4.8,
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Quantum X Workstation',
    description: 'The ultimate tool for creative professionals and researchers.',
    price: 2499.00,
    category: 'computing',
    stock: 10,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    specs: { 'CPU': '32-Core', 'RAM': '64GB', 'GPU': 'RTX 4090' },
    rating: 4.9,
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Lumix Z-Pro Camera',
    description: 'Capture every detail with our next-generation full-frame sensor.',
    price: 1899.99,
    category: 'imaging',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    specs: { 'Sensor': '45MP', 'Video': '8K 60fps', 'Mount': 'Z-Mount' },
    rating: 4.7,
    isFeatured: false
  },
  {
    id: 'p4',
    name: 'Edge Slate Pro',
    description: 'Redefining the boundaries of mobile productivity and design.',
    price: 1099.00,
    category: 'mobile',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    specs: { 'Display': '12.9" ProMotion', 'Storage': '512GB', 'Chip': 'A17 Ultra' },
    rating: 4.6,
    isFeatured: true
  },
  {
    id: 'p5',
    name: 'Sonic Tower Speaker',
    description: 'Immersive 360-degree sound for your modern living space.',
    price: 599.99,
    category: 'audio',
    stock: 20,
    imageUrl: 'https://images.unsplash.com/photo-1545453338-bd916b677a28?auto=format&fit=crop&q=80&w=800',
    specs: { 'Power': '200W', 'Drivers': '8-Array', 'Connectivity': 'WiFi/BT' },
    rating: 4.5,
    isFeatured: false
  }
];
