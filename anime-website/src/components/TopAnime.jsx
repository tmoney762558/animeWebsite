import React from "react";

const TopAnime = ({ animeData, onRecieveData }) => {
  return (
    <div className="flex justify-center">
      <div className="grid items-start xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[5rem] w-full max-w-[125rem] mt-10 px-siteX">
        {animeData.map((anime, index) => {
          if ((index === 0)) {
            return null;
          }
          return (
            <div className="flex flex-col items-center" key={index} onClick={() => {
              onRecieveData(anime.mal_id);
            }}>
              <img
                className="w-full max-w-[25rem] aspect-[100/141] object-fit cursor-pointer rounded-lg"
                src={anime.images.jpg.large_image_url}
              ></img>
              <h3 className="text-xl">{anime.title_english}</h3>
              <h4 className="text-lg">{anime.title_japanese}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopAnime;
