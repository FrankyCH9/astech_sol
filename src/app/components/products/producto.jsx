import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Producto = ({ datos, titulo, ruta, rutadetalle }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {ruta ? <Link className="cursor-pointer" href={ruta}>{titulo}</Link> : <>{titulo}</>}
        </h2>                          

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {datos &&
            datos.map((product) => (
              <div
                key={product.id}
                className="group relative border p-4 rounded-md shadow-md"
              >
                <div
                  style={{ zIndex: "1" }}
                  className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-br-md "
                >
                  Stock: {/*product.stock*/ 4}
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={/*product.imageSrc*/ product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h3
                    style={{ fontSize: "clamp(0.68rem,1.5vw, 0.85rem)" }}
                    className="text-sm text-gray-700 text-center"
                  >
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {/*product.name*/ product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <div className="flex items-center mt-2">
                    <p className="text-sm font-medium  text-red-600 line-through mr-2">
                      {product.price}
                    </p>
                    <p className="text-sm font-medium text-green-600">
                      {/*product.webPrice*/ 500}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full bg-black    text-white text-sm font-medium py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
                  >
                    <FaShoppingCart className="mr-2" />{" "}
                    {/* Aquí se usa el icono */}
                    Añadir Carrito
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Producto;
