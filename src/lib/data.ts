export const CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'desserts', name: 'Desserts' },
];

export const PIZZAS = [
    {
        id: 1,
        name: 'Pepperoni Feast',
        description: 'Double pepperoni, mozzarella, tomato sauce',
        price: 189,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
        category: 'pizza',
        isPopular: true,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    },
    {
        id: 2,
        name: 'BBQ Chicken',
        description: 'Grilled chicken, BBQ sauce, red onions, corn',
        price: 219,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
        category: 'pizza',
        isPopular: true,
        ingredients: ['Chicken', 'BBQ Sauce', 'Red Onion', 'Corn', 'Mozzarella'],
    },
    {
        id: 3,
        name: 'Four Cheese',
        description: 'Mozzarella, cheddar, parmesan, blue cheese',
        price: 209,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
        category: 'pizza',
        isPopular: false,
        ingredients: ['Mozzarella', 'Cheddar', 'Parmesan', 'Blue Cheese'],
    },
    {
        id: 4,
        name: 'Spicy Diablo',
        description: 'Chorizo, jalapenos, chili flakes, mozzarella',
        price: 229,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
        category: 'pizza',
        isPopular: false,
        ingredients: ['Chorizo', 'Jalapenos', 'Chili', 'Mozzarella'],
    },
    {
        id: 5,
        name: 'Margarita',
        description: 'Classic tomato sauce, mozzarella, basil',
        price: 159,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', // Placeholder
        category: 'pizza',
        isPopular: false,
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
    },
    {
        id: 6,
        name: 'Hawaiian',
        description: 'Ham, pineapple, mozzarella',
        price: 199,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', // Placeholder
        category: 'pizza',
        isPopular: false,
        ingredients: ['Ham', 'Pineapple', 'Mozzarella'],
    },
];

export const REVIEWS = [
    {
        id: 1,
        name: 'Alex K.',
        text: 'Best pizza in town! Delivered in 20 mins.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Maria S.',
        text: 'Hot and delicious. The crust is amazing.',
        rating: 5,
    },
    {
        id: 3,
        name: 'John D.',
        text: 'Great service and tasty food.',
        rating: 4,
    },
];
