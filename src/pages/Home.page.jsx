import React, { useState } from "react";

//Layout HOC
import DefaultLayoutHoc from "../layouts/Default.Layout";

//components

import EntertainmentCardComponente from "../Components/Entertainment/EntertainmentCardComponente";
import HeroCarouselComponent from "../Components/HeroCarousel/HeroCarouselComponent";
import PosterSliderComponent from "../Components/PosterSlider/PosterSliderComponent";



const HomePage=()=>{
    const [RecomendedMovies,SetRecomendedMovies]=useState([]);
    const [premiumMovies,setPremiumMovies]=useState([]);
    const [onlinestreamEvents,setonlinestreamEvents]=useState([]);

    return(
        <>
        <HeroCarouselComponent/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 class="text-2xl font-bold-text-gray-800 sm:ml-3 ml-0 my-3">The best of entertainment</h1>
            <EntertainmentCardComponente rec={RecomendedMovies}/>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
            
            <PosterSliderComponent 
            title="Recomended Movies" 
            subtitle="List of recmemnded movies" 
            posters={RecomendedMovies} 
            isDark={false}/>
        </div>
        <div class="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="" alt="rupay" className="w-full h-full"/>
                </div>
            </div>
        </div>
        <div className="mx-auto px-4 md:px-12 my-8 flex-col gap-3">
        <PosterSliderComponent title="premium Movies" subtitle="brand new releases every friday" posters={premiumMovies} isDark={true}/>
        </div>

        {/* <div class="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.GfJVfDxUWHZP9HMgL-9BkwHaB8&pid=Api&rs=1&c=1&qlt=95&w=316&h=82" alt="rupay" className="w-full h-full"/>
                </div>
            </div>
        </div>
         */}
        <div className="mx-auto px-4 md:px-12 my-8 flex-col gap-3">
        <PosterSliderComponent title="onlinestream events" subtitle="online stream events" posters={onlinestreamEvents} isDark={false}/>
        </div>


        </>
    );
}

export default DefaultLayoutHoc(HomePage);