//"use client";

import Producto from "../products/producto";
import * as Dataproductos from "../../../app/utils/Dataproductos";
import { useQueryGetAllproductos } from "@/app/utils/ReactQueryhocks";
//import { useEffect, useState } from 'react';
//import { useMutation, useQueryClient } from '@tanstack/react-query';



const Allproducts = () => {
  const { isLoading, data, isError, error } = useQueryGetAllproductos([
    "allproductos",
  ]);


  return (
    <div className="bg-rose-500 ">
      <Producto datos={/*Dataproductos.products*/data && data.slice(0 , 5)} titulo={"Ofertas - ver más"}   />
      <Producto datos={/*Dataproductos.laptos*/data && data.slice(5 , 9)} titulo={"Laptos - ver más"} ruta={'/laptos'} />
      <Producto datos={/*Dataproductos.computadoras*/data && data.slice(9 , 13)} titulo={"Computadoras - ver más"} />
      <Producto datos={/*Dataproductos.mouses*/data && data.slice(13 , 20)} titulo={"Mouses - ver más"} />
    </div>
  );
};

export default Allproducts;

