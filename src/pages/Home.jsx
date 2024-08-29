import React from "react";
import map from "/src/assets/orange-map.png";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row  min-h-screen items-center">
            <div className="flex flex-col left-container border-black rounded-md p-8 w-1/2 m-2 justify-center space-y-4">
                <div className=" border-black rounded-md">
                    <h1 className="font-mono text-5xl">Welcome to DraftMaps!</h1>
                </div>
                <div className="text-xl">
                    <h2 className="">Explore local pubs, view their beer offerings, and rate your favorites all in one app. </h2>
                </div>
                <button type="button" class="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-l px-5 py-2.5 me-2 mb-2 dark:bg-oranage-500 dark:hover:bg-orange-400 focus:outline-none w-1/2">Explore Now</button>
            </div>
            <div className="flex left-container items-center justify-center w-1/2 m-2">
                <img src={map} className="flex object-scale-down" alt="Logo" />
            </div>
        </div>

    );
}

export default Home

