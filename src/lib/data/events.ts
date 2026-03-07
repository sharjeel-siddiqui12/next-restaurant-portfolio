export interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  image: string
  badge: string
  category: string
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Eid Special Dawat',
    date: 'March 30, 2025',
    time: '7:00 PM',
    description: 'Celebrate Eid with a grand royal feast featuring exclusive dishes only served once a year.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
    badge: 'SOLD OUT',
    category: 'Special Occasion',
  },
  {
    id: 2,
    title: 'Live Qawwali Night',
    date: 'April 5, 2025',
    time: '8:00 PM',
    description: 'An evening of soulful Sufi music paired with a 5-course traditional Pakistani dinner.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85',
    badge: 'LIMITED SEATS',
    category: 'Cultural Evening',
  },
  {
    id: 3,
    title: "Chef's Table Experience",
    date: 'April 12, 2025',
    time: '7:30 PM',
    description: 'An intimate 7-course tasting menu prepared tableside by Head Chef Ustad Zafar.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85',
    badge: 'BOOK NOW',
    category: 'Exclusive',
  },
  {
    id: 4,
    title: 'Wedding Catering Showcase',
    date: 'April 20, 2025',
    time: '6:00 PM',
    description: 'Discover our premium wedding catering packages with full menu tasting.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=85',
    badge: 'FREE ENTRY',
    category: 'Corporate',
  },
  {
    id: 5,
    title: 'Cooking Masterclass',
    date: 'May 1, 2025',
    time: '3:00 PM',
    description: 'Learn the secrets of authentic Biryani and Nihari from our master chefs.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=85',
    badge: 'BOOK NOW',
    category: 'Workshop',
  },
  {
    id: 6,
    title: 'Iftar Buffet',
    date: 'Ramadan Season',
    time: 'Iftar Time',
    description: 'Grand Ramadan Iftar buffet with 50+ dishes and live dessert counter.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=85',
    badge: 'SEASONAL',
    category: 'Religious',
  },
]
