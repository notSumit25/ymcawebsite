import React from 'react';
import { getMarquee } from '../../http';
import {useState,useEffect} from "react";



const Marquee = () => {
  const [Dmarquee,setMarquee] = useState([]);
  useEffect(() => {
    getMarquee().then((resp)=>{
       // console.log(resp.data["Notice List"]);
        setMarquee(resp.data['Marque List']);
    })}, []);

  return (
    <div class="relative flex overflow-x-hidden bg-white">
      <div class="py-3 z-10">
        <div class="w-30 p-3 md:text-md mr-4 bg-secondaryLight text-white rounded-r-md hidden md:block">Important Links</div>
      </div>
      <div class="py-2 md:py-3 animate-marquee whitespace-nowrap">
        {Dmarquee && Dmarquee.map((marquee,i)=>(<span key={marquee.marque_id} class="text-xs md:text-lg mx-4">{marquee?.title}</span>))}
        {/* <span class="text-2xl mx-4">Marquee Item 1</span>
        <span class="text-2xl mx-4">Marquee Item 2</span>
        <span class="text-2xl mx-4">Marquee Item 3</span>
        <span class="text-2xl mx-4">Marquee Item 4</span>
        <span class="text-2xl mx-4">Marquee Item 5</span> */}
      </div>
    </div>

  );
};

export default Marquee;
