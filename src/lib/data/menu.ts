export interface MenuItem {
  id: number
  name: string
  category: string
  price: number
  description: string
  tags: string[]
  image: string
}

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'biryani', label: 'Biryani' },
  { id: 'bbq', label: 'BBQ & Grill' },
  { id: 'karahi', label: 'Karahi' },
  { id: 'breads', label: 'Breads' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
]

export const menuItems: MenuItem[] = [
  // Starters
  { id: 1, name: 'Dahi Bhalle', category: 'starters', price: 250, description: 'Soft lentil dumplings in tangy yogurt, tamarind chutney & spices', tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
  { id: 2, name: 'Chicken Tikka', category: 'starters', price: 550, description: 'Tender chicken marinated in aromatic spices, grilled in tandoor', tags: ['bestseller', 'spicy'], image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80' },
  { id: 3, name: 'Samosa Chaat', category: 'starters', price: 200, description: 'Crispy samosas topped with chickpeas, yogurt and chutneys', tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80' },
  { id: 17, name: 'Pakora Platter', category: 'starters', price: 300, description: 'Assorted vegetable fritters with mint and tamarind chutneys', tags: ['vegetarian', 'spicy'], image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80' },
  // Biryani
  { id: 4, name: 'Dum Pukht Biryani', category: 'biryani', price: 850, description: 'Slow-cooked aromatic basmati with tender mutton & whole spices', tags: ['bestseller', 'chefs-pick'], image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80' },
  { id: 5, name: 'Chicken Biryani', category: 'biryani', price: 650, description: 'Fragrant rice layered with spiced chicken & caramelized onions', tags: ['bestseller'], image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80' },
  { id: 6, name: 'Prawn Biryani', category: 'biryani', price: 950, description: 'Coastal-style biryani with jumbo prawns & aromatic herbs', tags: ['spicy'], image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&q=80' },
  // BBQ
  { id: 7, name: 'Seekh Kebab', category: 'bbq', price: 750, description: 'Minced lamb with herbs grilled on skewers over live coals', tags: ['chefs-pick'], image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80' },
  { id: 8, name: 'Boti Kebab', category: 'bbq', price: 850, description: 'Marinated beef chunks, slow-cooked to perfection', tags: ['spicy'], image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
  { id: 9, name: 'Malai Boti', category: 'bbq', price: 900, description: 'Cream-marinated chicken tikka, extra tender & mild', tags: ['bestseller'], image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400&q=80' },
  { id: 18, name: 'Chapli Kebab', category: 'bbq', price: 600, description: 'Peshawar-style flat patties with pomegranate seeds & spices', tags: ['spicy'], image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80' },
  // Karahi
  { id: 10, name: 'Mutton Karahi', category: 'karahi', price: 1200, description: 'Slow-cooked mutton in a wok with tomatoes & ginger', tags: ['chefs-pick', 'spicy'], image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
  { id: 11, name: 'Chicken White Karahi', category: 'karahi', price: 950, description: 'Cream-based mild karahi with whole spices & yogurt', tags: ['bestseller'], image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80' },
  { id: 19, name: 'Prawn Karahi', category: 'karahi', price: 1400, description: 'Jumbo prawns tossed in a rich tomato-ginger wok sauce', tags: ['spicy'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  // Breads
  { id: 20, name: 'Tandoori Naan', category: 'breads', price: 60, description: 'Soft leavened bread baked in clay tandoor oven', tags: [], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  { id: 21, name: 'Garlic Naan', category: 'breads', price: 100, description: 'Buttery naan brushed with roasted garlic & fresh herbs', tags: ['bestseller'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  { id: 22, name: 'Laccha Paratha', category: 'breads', price: 80, description: 'Layered flaky flatbread with butter, baked to golden perfection', tags: [], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  // Desserts
  { id: 12, name: 'Gulab Jamun', category: 'desserts', price: 200, description: 'Soft milk-solid dumplings soaked in rose-cardamom syrup', tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1666190094762-2e05489ccfea?w=400&q=80' },
  { id: 13, name: 'Shahi Tukray', category: 'desserts', price: 280, description: 'Royal bread pudding with saffron-infused cream & pistachios', tags: ['chefs-pick'], image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80' },
  { id: 14, name: 'Kheer', category: 'desserts', price: 220, description: 'Traditional rice pudding slow-cooked with cardamom & dry fruits', tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
  // Beverages
  { id: 15, name: 'Doodh Pati Chai', category: 'beverages', price: 120, description: 'Traditional Pakistani milk tea brewed strong with spices', tags: [], image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  { id: 16, name: 'Mango Lassi', category: 'beverages', price: 180, description: 'Thick blended yogurt drink with Anwar Ratool mangoes', tags: ['bestseller'], image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&q=80' },
  { id: 23, name: 'Kashmiri Chai', category: 'beverages', price: 180, description: 'Pink tea with cardamom, almonds & pistachios', tags: ['chefs-pick'], image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80' },
]
