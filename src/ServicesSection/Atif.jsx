// import React from "react";
import { useLoaderData } from "react-router-dom";
import AtifsCard from "./AtifsCard";

const Atif = () => {
  const data = useLoaderData();
// console.log(data)
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {
            data.map(atif=><AtifsCard key={atif.id} atif={atif}></AtifsCard>)
        }
    </div>
  );
};

export default Atif;
