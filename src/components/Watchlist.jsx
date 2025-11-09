import React, { useEffect, useState } from "react";
import genreids from "../utility/genre";
function Watchlist({ watchlist, setwatchlist, handelremovefromWatchlist }) {
  const [search, setsearch] = useState("");
  const [genrelist, setgenrelist] = useState(["All Genres"]);
  const [currgenre, setcurrgenre] = useState("All Genres");
  let handlesearch = (e) => {
    setsearch(e.target.value);
  };
  let sortbyfield = (field, ascending = true) => {
    let sorted = [...watchlist].sort((a, b) => {
      if (ascending) {
        return a[field] - b[field];
      } else return b[field] - a[field];
    });
    setwatchlist(sorted);
  };
  useEffect(() => {
    let allgenreslist = watchlist.map(
      (movieobj) => genreids[movieobj.genre_ids[0]]
    );
    allgenreslist = Array.from(new Set(allgenreslist));
    setgenrelist(["All Genres", ...allgenreslist]);
  }, [watchlist]);

  let handlefilter = (genre) => {
    setcurrgenre(genre);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre) => {
          return (
            <div key={genre}
              onClick={() => handlefilter(genre)}
              className={
                currgenre == genre
                  ? "cursor-pointer flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                  : "cursor-pointer flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          placeholder="Search movies"
        />
      </div>
      <div className="border border-gray-200 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-black text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className="flex items-center justify-center">
                  Rating
                  <div
                    onClick={() => sortbyfield("vote_average", true)}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div
                    onClick={() => sortbyfield("vote_average", false)}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center justify-center">
                  Popularity
                  <span
                    onClick={() => sortbyfield("popularity", true)}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </span>
                  <span
                    onClick={() => sortbyfield("popularity", false)}
                    className="p-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter(
                (movieobj) =>
                  currgenre === "All Genres" ||
                  genreids[movieobj.genre_ids[0]] === currgenre
              )
              .filter((movieobj) =>
                movieobj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieobj) => (
                <tr key={movieobj.id}>
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                    />
                    <div className="mx-10">{movieobj.original_title}</div>
                  </td>
                  <td>{movieobj.vote_average}</td>
                  <td>{movieobj.popularity}</td>
                  <td>{genreids[movieobj.genre_ids[0]]}</td>
                  <td
                    onClick={() => handelremovefromWatchlist(movieobj)}
                    className="text-red-800 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
