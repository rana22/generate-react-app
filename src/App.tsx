import React, { useState }  from 'react';
import { Home, Search, Menu, Users } from "lucide-react";
import "@radix-ui/themes/styles.css";
import { Theme, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

type Props = {
  children?: React.ReactNode
};

// const Button = ({children}: Props) : React.ReactNode => {
//   return (
//     <button>
//       {children}
//     </button>
//   )
// };

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Classic Burger", description: "A juicy beef patty with lettuce, tomato, and cheese.", price: 8.99 },
  { id: 2, name: "Fish and Chips", description: "Crispy fish fillet served with thick-cut fries.", price: 10.99 },
  { id: 3, name: "Cheeseburger", description: "A beef patty with cheddar cheese, lettuce, tomato, and ketchup.", price: 9.99 },
  { id: 4, name: "Truffle Fries", description: "Crispy fries with a truffle aioli dipping sauce.", price: 5.99 },
]

const App: React.FC = () => {

  const [cart, setCart] = useState<MenuItem[]>([])

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item])
  }


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-4xl font-bold text-red-600">Bff</div>
          <div className="ml-2 text-lg font-semibold text-gray-800">BURGERS, FISH & FRIES</div>
        </div>
        <nav className="space-x-4">
          <Button variant="ghost" className="flex items-center">
            <Home className="mr-2" /> HOME
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Search className="mr-2" /> MENU
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Users className="mr-2" /> ABOUT
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Menu className="mr-2" /> CONTACT
          </Button>
        </nav>
      </header>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <img
          src="https://via.placeholder.com/1200x600"
          alt="Bff Burgers, Fish & Fries"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
          <div className="text-4xl font-bold">Bff Burgers, Fish & Fries</div>
          <div className="mt-2 text-lg">Delivering the best burgers, fish, and fries in town!</div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-red-600 text-white text-center py-12 mt-8">
        <div className="container mx-auto">
          <div className="text-3xl font-bold mb-4">ABOUT US</div>
          <p className="text-lg">
            Bff Burgers, Fish & Fries has been serving up delicious burgers, crispy fries, and fresh fish since 2010. Our mission is to provide our customers with the best possible dining experience, using only the freshest ingredients and traditional cooking methods.
          </p>
          <Button variant="secondary" className="mt-6">
            Learn More
          </Button>
        </div>
      </div>

      {/* Ratings and Reviews Section */}
      <div className="bg-gray-100 text-center py-12 mt-8">
        <div className="container mx-auto">
          <div className="text-2xl font-bold mb-4">Google Rating: 4.5/5 | Yelp Rating: 4.5/5</div>
          <p className="text-lg">
            "The food is amazing and the service is top-notch! Highly recommend Bff Burgers, Fish & Fries to anyone looking for a great meal."
          </p>
          <div className="mt-4 text-gray-600">- John Doe</div>
        </div>
      </div>
    </div>
  )
};

export default App;