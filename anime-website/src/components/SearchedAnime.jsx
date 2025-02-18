import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoChevronBackCircle } from "react-icons/io5";

const SearchedAnime = ({ onRecieveData, inputData, setPreviousPage }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?sfw=true&q=${inputData}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const resData = await res.json();
      setApiData(resData.data);
      setLoading(false);
      console.log(resData.data);
    } catch (error) {
      console.error(`An error occurred while fetching the data:`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [inputData]);

  return (
    <div className="flex justify-center relative">
      <IoChevronBackCircle
        className="absolute top-[1rem] right-5"
        fontSize={"2.5rem"}
        onClick={() => {
          onRecieveData(null);
        }}
      ></IoChevronBackCircle>
      {!apiData || (!apiData.length && !loading) ? (
        <div className="flex justify-center w-ful mt-5">
          <p className="text-2xl">No Anime Found</p>
        </div>
      ) : (
        <div className="grid items-start xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[5rem] w-full max-w-[125rem] mt-[7rem] px-siteX">
          {apiData && apiData.length
            ? apiData.map((anime, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <div
                    className="flex flex-col items-center"
                    key={index}
                    onClick={() => {
                      setPreviousPage("searching");
                      onRecieveData(anime.mal_id);
                    }}
                  >
                    <img
                      className="w-full max-w-[25rem] aspect-[100/141] object-fit cursor-pointer rounded-lg"
                      src={anime.images.jpg.large_image_url}
                    ></img>
                    <h3 className="text-xl text-center">
                      {anime.title_english}
                    </h3>
                    <h4 className="text-lg text-center">
                      {anime.title_japanese}
                    </h4>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default SearchedAnime;
