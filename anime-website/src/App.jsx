import React, { useState, useEffect } from "react";
import {
  Navbar,
  FeaturedAnime,
  TopAnime,
  SearchedAnime,
  AnimeInformation,
} from "./components";
import FeatureImage1 from "./assets/featureImage1.jpeg";

const App = () => {
  // Holds data from Jikan API
  const [apiData, setApiData] = useState(null);
  // Handles the loading state of the page
  const [loading, setLoading] = useState(true);
  // Handles the selected anime when looking at deeper descriptions
  const [selectedAnime, setSelectedAnime] = useState(null);
  // Handles the input data from the Navbar input
  const [inputData, setInputData] = useState("");
  // Handles taking the user back to the previous window when clicking the back button
  const [previousPage, setPreviousPage] = useState(null);

  const handleSetSelectedAnime = (animeId) => {
    setSelectedAnime(animeId);
  };

  const handleChangeInputData = (input) => {
    setInputData(input);
  };

  // Fetches data from the API with error handling
  const getData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const resData = await res.json();
      setApiData(resData.data);
      setLoading(false);
    } catch (error) {
      console.error(`An error occurred while fetching the data:`, error);
      setLoading(false);
    }
  };

  // Renders the API data on page load
  useEffect(() => {
    getData();
  }, []);

  // Displays loading screen if the page is loading data
  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen px-[1rem] bg-neutral-900">
        <h1 className="lg:text-4xl text-xl">Loading Anime, Please Wait...</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-[100vh] bg-neutral-900 pb-10"
    >
      <Navbar
        onRecieveData={handleSetSelectedAnime}
        onChangeInput={handleChangeInputData}
      />
      {apiData && apiData.length > 0 && selectedAnime === null ? (
        <div>
          <FeaturedAnime
            animeId={apiData[0].mal_id}
            titleEnglish={apiData[0].title_english}
            titleJapanese={apiData[0].title_japanese}
            genres={apiData[0].genres}
            synopsis={apiData[0].synopsis}
            image={
              apiData[0].mal_id === 52991
                ? FeatureImage1
                : apiData[0].images.jpg.large_image_url
            }
            onRecieveData={handleSetSelectedAnime}
          />
          <TopAnime
            animeData={apiData}
            onRecieveData={handleSetSelectedAnime}
            setPreviousPage={setPreviousPage}
          ></TopAnime>
        </div>
      ) : null}
      {selectedAnime === "searching" ? (
        <SearchedAnime
          inputData={inputData}
          onRecieveData={handleSetSelectedAnime}
          setPreviousPage={setPreviousPage}
        ></SearchedAnime>
      ) : null}
      {selectedAnime !== null && selectedAnime !== "searching" ? (
        <AnimeInformation animeId={selectedAnime} onRecieveData={handleSetSelectedAnime} previousPage={previousPage}></AnimeInformation>
      ) : null}
    </div>
  );
};

export default App;
