'use client';
// ProductDetails.js

import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { detalleProducto } from '../../utils/Detalleproductos';
import './ProductDetails.css';

const ProductDetails = () => {
  const producto = detalleProducto.find(prod => prod.id === 1);
  const initialColor = producto?.colors[0] ?? null;
  const initialSize = producto?.sizes.find(size => size.inStock) ?? null;

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);

  const reviews = producto?.reviews ?? { average: 0, totalCount: 0, href: '#' };

  if (!producto) {
    return <div>Loading...</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    // Implementar lógica para añadir al carrito
  };

  return (
    <div className="bg-gray-50 main-content mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Product Image */}
        <div className="lg:col-start-1 lg:row-start-1 lg:aspect-w-1 lg:aspect-h-1 lg:max-h-full">
          <div className="image-container">
            <img
              src={producto.imageSrc}
              alt={producto.imageAlt}
              className="w-full h-full object-center object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{producto.name}</h1>

          {/* Options */}
          <div className="mt-4">
            <h2 className="text-2xl text-indigo-600 font-semibold">{producto.price}</h2>

            {/* Reviews */}
            <div className="mt-6 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${reviews.average > rating ? 'text-yellow-500' : 'text-gray-200'}`}
                    aria-hidden="true"
                  />
                ))}
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <RadioGroup value={selectedColor} onChange={handleColorChange} className="mt-4 flex items-center space-x-3">
                {producto.colors.map((color) => (
                  <Radio
                    key={color.name}
                    value={color}
                    className={({ checked }) =>
                      `radio-button relative rounded-full border border-gray-300 bg-white shadow-sm p-0.5 focus:outline-none ${checked ? 'ring-2 ring-indigo-500' : ''}`
                    }
                  >
                    <span className={`h-8 w-8 rounded-full ${color.class}`} />
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>
              <RadioGroup
                value={selectedSize}
                onChange={handleSizeChange}
                className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
              >
                {producto.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ focus, disabled }) =>
                      `radio-button group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase ${disabled ? 'bg-gray-50 text-gray-200 cursor-not-allowed' : 'bg-white text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none'} ${focus ? 'ring-2 ring-indigo-500' : ''}`
                    }
                  >
                    {size.name}
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              className="mt-8 w-full add-to-cart-button flex items-center justify-center shadow-md"
              onClick={addToCart}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 lg:col-span-2">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
          <p className="mt-4 text-base text-gray-600">{producto.description}</p>
        </div>

        {/* Highlights */}
        <div className="mt-8 lg:col-span-2">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
          <ul role="list" className="mt-4 text-sm text-gray-600 space-y-2 list-disc pl-5">
            {producto.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="mt-8 lg:col-span-2">
          <h3 className="text-sm font-medium text-gray-900">Details</h3>
          <p className="mt-4 text-sm text-gray-600">{producto.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
