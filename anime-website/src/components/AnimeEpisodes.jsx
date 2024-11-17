import React from "react";

const AnimeEpisodes = ({episodeInfo, onRecieveData}) => {
  return (
    <div className="flex-1 w-full max-w-[75rem] mt-[5rem]">
      <h2 className="text-2xl font-bold">Episodes</h2>
      {episodeInfo && episodeInfo.length > 0 ? (
        <div className="flex flex-col w-full max-h-[40rem] mt-7 rounded-md overflow-y-scroll">
          {episodeInfo.map((episode, index) => (
            <div
              className={`flex justify-between gap-3 w-full py-7 px-7 ${
                index % 2 === 0 ? "bg-neutral-950" : "bg-neutral-900"
              }`}
              key={index}
            >
              <h3>{episode.title}</h3>
              <p>{episode.mal_id}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="mt-5 text-xl">No Episodes Found</h2>
      )}
    </div>
  );
};

export default AnimeEpisodes;
