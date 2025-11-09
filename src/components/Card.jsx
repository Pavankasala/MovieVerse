import React from "react";
function Card({
  poster_path,
  name,
  handleaddtoWatchlist,
  movieobj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doescontain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieobj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-105 duration-300 flex flex-col m-5 justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doescontain(movieobj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >&#10060;</div>
      ) : (
        <div
          onClick={() => handleaddtoWatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center rounded-b-xl bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Card;
