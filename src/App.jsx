import "./index.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleaddtoWatchlist = (movieobj) => {
    let newWatchlist = [...watchlist, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setwatchlist(newWatchlist);
    console.log(newWatchlist);
  };
  let handelremovefromWatchlist = (movieobj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieobj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    setwatchlist(filteredWatchlist);
  };
  useEffect(() => {
    let moviesfromlocalstorage = localStorage.getItem("moviesApp");
    if (!moviesfromlocalstorage) {
      return;
    } else {
      setwatchlist(JSON.parse(moviesfromlocalstorage));
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchlist={watchlist}
                handleaddtoWatchlist={handleaddtoWatchlist}
                handleRemoveFromWatchlist={handelremovefromWatchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              setwatchlist={setwatchlist}
              handelremovefromWatchlist={handelremovefromWatchlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
