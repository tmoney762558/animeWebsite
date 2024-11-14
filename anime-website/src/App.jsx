import React from "react";
import { useState, useRef, useEffect } from "react";
import { Navbar, FeaturedAnime } from "./components";
import FeatureImage1 from "./assets/featureImage1.jpeg"

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const resData = await res.json();
      setApiData(resData.data);
      setLoading(false);
      console.log(apiData);
    } catch (error) {
      console.error(`An error occured while fetching the data:`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-zinc-900">
        <h1 className="text-4xl">Loading Anime, Please Wait...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900">
        <Navbar></Navbar>
        <div className="pt-10">
        <FeaturedAnime
          titleEnglish={apiData[0].title_english}
          titleJapanese={apiData[0].title_japanese}
          image={FeatureImage1}
        ></FeaturedAnime>
        </div>
      </div>
  );
};

export default App;
