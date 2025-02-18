import React from "react";
import { useState, useEffect } from "react";
import { AnimeEpisodes } from "../components";
import { BsStarFill } from "react-icons/bs";
import { IoChevronBackCircle } from "react-icons/io5";

const AnimeInformation = ({ animeId, onRecieveData, previousPage }) => {
  // Holds data from Jikan API
  const [animeInfo, setAnimeInfo] = useState(null);
  const [episodeInfo, setEpisodeInfo] = useState(null);
  // Handles the loading state of the page
  const [loading, setLoading] = useState(true);
  const [stars, setStars] = useState(0);

  // Fetches data from the API with error handling
  const getData = async (url, currentlyLoading) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const resData = await res.json();
      if (currentlyLoading === "animeInfo") {
        setAnimeInfo(resData.data);
      } else {
        setEpisodeInfo(resData.data);
      }
    } catch (error) {
      console.error(`An error occurred while fetching the data:`, error);
      if (currentlyLoading === "episodeInfo") {
        setLoading(false);
      }
    }
  };

  // Renders the API data on page load
  useEffect(() => {
    getData(`https://api.jikan.moe/v4/anime/${animeId}/full`, "animeInfo");
    getData(
      `https://api.jikan.moe/v4/anime/${animeId}/episodes`,
      "episodeInfo"
    );
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen px-[1rem] bg-zinc-900">
        <h1 className="lg:text-4xl text-xl">
          Loading Anime Information, Please Wait...
        </h1>
      </div>
    );
  }

  return (
    <div className="relative xl:py-[12rem] py-[4rem] xl:px-siteX px-[1rem]">
      <IoChevronBackCircle
        className="absolute top-[2rem] right-3 cursor-pointer"
        fontSize={"2.5rem"}
        onClick={() => {
          onRecieveData(previousPage);
        }}
      ></IoChevronBackCircle>
      {animeInfo ? (
        <div className="flex flex-col items-center mt-[3rem]">
          <div className="flex xl:flex-row flex-col justify-center items-center gap-10 w-full max-w-[75rem]">
            <img
              className="flex-1 w-full max-w-[20rem] rounded-lg"
              src={animeInfo.images.jpg.large_image_url}
            ></img>
            <div className="flex flex-col xl:items-start items-center max-w-[50rem] xl:mt-0 mt-5 xl:text-left text-center">
              <div>
                <h2 className="mt-3 text-2xl">{animeInfo.title_english}</h2>
                <h3 className="text-xl">{animeInfo.title_japanese}</h3>
              </div>
              <div className="mt-3">
                <p>
                  Rank: <span className="font-bold">{animeInfo.rank}</span>
                </p>
                <p>Score: {animeInfo.score ? animeInfo.score : "N/A"}</p>
                <div className="flex">
                  {animeInfo.score >= 1 ? (
                    <BsStarFill fill="white" />
                  ) : (
                    <BsStarFill fill="grey" />
                  )}
                  {animeInfo.score >= 3 ? (
                    <BsStarFill fill="white" />
                  ) : (
                    <BsStarFill fill="grey" />
                  )}
                  {animeInfo.score >= 5 ? (
                    <BsStarFill fill="white" />
                  ) : (
                    <BsStarFill fill="grey" />
                  )}
                  {animeInfo.score >= 7 ? (
                    <BsStarFill fill="white" />
                  ) : (
                    <BsStarFill fill="grey" />
                  )}
                  {animeInfo.score >= 9 ? (
                    <BsStarFill fill="white" />
                  ) : (
                    <BsStarFill fill="grey" />
                  )}
                </div>
              </div>
              <p className="mt-5">Rating: {animeInfo.rating}</p>
              <p className="mt-3">
                Currently Airing: {animeInfo.airing ? "Yes" : "No"}
              </p>
              <p className="mt-5">{animeInfo.synopsis}</p>
              <div className="flex gap-5 mt-7">
                {animeInfo.genres.map((genre, index) => (
                  <button
                    className="md:py-3 py-1 md:px-7 px-3 border-[1px] border-white rounded-full"
                    key={index}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <AnimeEpisodes episodeInfo={episodeInfo}></AnimeEpisodes>
        </div>
      ) : null}
    </div>
  );
};

export default AnimeInformation;
