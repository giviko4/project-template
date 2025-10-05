// src/data/menuItems.js

import cappucinoImg from '../assets/menu/cappucino.jpg';
import espressoImg from '../assets/menu/espresso.jpg';
import latteImg from '../assets/menu/latte.jpg';
import croissantImg from '../assets/menu/croissant.jpg';
import cinnamonrollImg from '../assets/menu/cinnamonroll.jpg';
// === აი, მთავარი შესწორება ===
import cheesecakeImg from '../assets/menu/cheesecake.jpg'; // <-- აქ ეწერა "cheeskake", ახლა სწორია

export const menuData = {
  coffee: [
    { 
      id: 1, 
      name: "Espresso", 
      description: "Rich and aromatic single shot.", 
      price: "5.00 ₾",
      image: espressoImg
    },
    { 
      id: 2, 
      name: "Cappuccino", 
      description: "Espresso with steamed milk foam.", 
      price: "7.00 ₾",
      image: cappucinoImg
    },
    { 
      id: 3, 
      name: "Latte", 
      description: "A creamy coffee with a lot of milk.", 
      price: "7.50 ₾",
      image: latteImg
    },
  ],
  pastries: [
    { 
      id: 4, 
      name: "Croissant", 
      description: "Buttery and flaky, fresh from the oven.", 
      price: "4.00 ₾",
      image: croissantImg
    },
    { 
      id: 5, 
      name: "Cinnamon Roll", 
      description: "Sweet and spicy, a perfect treat.", 
      price: "6.00 ₾",
      image: cinnamonrollImg
    },
    { 
      id: 6, 
      name: "Cheesecake", 
      description: "Classic New York style cheesecake.", 
      price: "9.00 ₾",
      image: cheesecakeImg
    },
  ],
};