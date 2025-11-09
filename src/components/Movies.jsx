import Card from './Card'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Pagination from './Pagination'
function Movies({handleaddtoWatchlist, handleRemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageno, setpageno] = useState(1);
  const api_key= import.meta.env.VITE_TMDB_API_KEY;
  const handleprev = () =>{
    if(pageno==1){
      setpageno(1)
    }
    else{
    setpageno(pageno-1)
    }
  }
  
  const handlenext = () =>{
    setpageno(pageno+1)
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${pageno}`).then(function(res){ 
      setMovies(res.data.results);
    })
  }, [api_key, pageno])
  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center '>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-10'>
        {movies.map((movieobj) => {
          return <Card poster_path={movieobj.poster_path} name={movieobj.original_title} handleaddtoWatchlist={handleaddtoWatchlist} movieobj={movieobj} handleRemoveFromWatchlist={handleRemoveFromWatchlist} key={movieobj.id} watchlist={watchlist} />
        })}
      </div>
      <Pagination handleprev={handleprev} pageno={pageno} handlenext={handlenext} />
    </div>
  )
}

export default Movies