import React from "react";

const FeaturedAnime = ({
  animeId,
  titleEnglish,
  titleJapanese,
  genres,
  onRecieveData,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-end w-full">
      <div className="relative w-full">
        <img
          className="w-full max-h-[75rem] object-cover"
          src={image}
          alt={`${titleEnglish} cover`}
        />
        <div className="flex flex-col justify-end absolute bottom-0 w-full h-[75%] px-siteX z-[2] bg-gradient-to-t from-zinc-900">
          <div className="flex justify-center">
            <div className="lg:flex justify-between items-center hidden w-full max-w-[125rem] mb-[7rem]">
              <div>
                <h1 className="xl:text-5xl text-3xl">{titleEnglish}</h1>
                <h2 className="xl:text-3xl text-xl">{titleJapanese}</h2>
                <div className="flex gap-5 mt-7">
                  {genres.map((genre, index) => (
                    <button
                      className="xl:py-2 xl:px-7 py-1 px-3 border rounded-full text-white"
                      key={index}
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <button
                  className="py-3 px-10 bg-white rounded-full text-lg text-black"
                  onClick={() => onRecieveData(animeId)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col mt-7 px-siteX">
        <h1 className="text-3xl">{titleEnglish}</h1>
        <h2 className="text-xl">{titleJapanese}</h2>
      </div>
    </div>
  );
};

export default FeaturedAnime;
