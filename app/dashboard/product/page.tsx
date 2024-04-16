
'use client'
import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid'; // Importiere die uuid-Bibliothek

const plans = [
  { id: 1, name: 'Startup' },
  { id: 2, name: 'Business' },
  { id: 3, name: 'Enterprise' },
]
const value = 100

const CustomRadioGroup = () => {
  interface User {
    sessionId: string;
    // Weitere Benutzerinformationen hier, falls nötig
  }

  // Überprüfe, ob bereits eine sessionId im localStorage vorhanden ist
  const initialSessionId = localStorage.getItem('sessionId') || uuidv4();

  // Initialisiere den Benutzerzustand mit der sessionId aus dem localStorage oder einer neuen sessionId
  const [user, setUser] = useState<User>({ sessionId: initialSessionId });

  // Überprüfe, ob bereits ausgewählte Produkte im localStorage vorhanden sind
  const initialSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');

  // Initialisiere den Zustand für ausgewählte Produkte mit den Daten aus dem localStorage
  const [selectedProducts, setSelectedProducts] = useState<number[]>(initialSelectedProducts);

  // Effekt zum Speichern der ausgewählten Produkte im localStorage, wenn sich der Zustand ändert
  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Funktion zum Überprüfen, ob ein Produkt ausgewählt ist
  const isSelected = (productId: number) => selectedProducts.includes(productId);

  const products = [
    {
      id: 1,
      name: '1. Führungspersönlichkeit',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '',
      color: 'Als Führungskraft ist es wichtig, die persönlichen Werte, Motive und Ziele zu identifizieren',
    },
    {
      id: 2,
      name: '1. Führungspersönlichkeit',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '',
      color: 'Als Führungskraft ist es wichtig, die persönlichen Werte, Motive und Ziele zu identifizieren',
    },
    {
      id: 3,
      name: '1. Führungspersönlichkeit',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '',
      color: 'Als Führungskraft ist es wichtig, die persönlichen Werte, Motive und Ziele zu identifizieren',
    },
    {
      id: 41,
      name: '1. Führungspersönlichkeit',
      href: 'https://www.google.de',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '',
      color: 'Als Führungskraft ist es wichtig, die persönlichen Werte, Motive und Ziele zu identifizieren',
    },
    // More products...
  ]



  const handleProductSelect = (productId) => {
    // Überprüfe, ob das Produkt bereits ausgewählt ist
    const isSelected = selectedProducts.includes(productId);
  
    // Aktualisiere den Zustand basierend auf der Auswahl
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  
    // Aktualisiere die ausgewählten Produkte im localStorage
    // Verwende den aktuellen Wert von selectedProducts, da setState asynchron sein kann
    const updatedSelectedProducts = isSelected ?
      selectedProducts.filter(id => id !== productId) :
      [...selectedProducts, productId];
    localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
  };

  const handleCheckboxChange = (productId) => {
    handleProductSelect(productId);
    console.log("ad")
  };

  function addItem(id) {
      console.log("test", id)
  };


  return (
     <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Unsere Führungsmodule</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer">
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
                <div className="absolute top-0 right-0 p-2">
                  <input
                    type="checkbox"
                    id={`product_${product.id}`}
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id)}
                    className="mr-2"
                  />
                  <label htmlFor={`product_${product.id}`} className="text-white"></label>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-10" onClick={() => handleProductSelect(product.id)} />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <div className="mt-2">
              <Link href="product/1/view">  <Button >Mehr Informationen</Button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-8 ">
        <Button>Weiter</Button>
      </div>
    </div>
  );
};
export default CustomRadioGroup;
