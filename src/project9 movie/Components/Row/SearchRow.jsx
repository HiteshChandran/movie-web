import React from 'react'
import "./SearchRow.css"
import { useNavigate } from 'react-router-dom';
const SearchRow = ({title,searchList}) => {
    const navigate = useNavigate();
  return (
                <div className='row'>
                    {title && (
                                <div className="movie-container">
                                    {searchList.map((item) => {
                                        const img = item.backdrop_path || item.poster_path;
                                        return (
                                                                                    <div className="poster-wrap" key={item.id} onClick={() => navigate(`/movie/${item.id}`)} tabIndex={0} onKeyDown={(e)=>{if(e.key==='Enter') navigate(`/movie/${item.id}`)}}>
                                                                                        <img
                                                                                            className="poster"
                                                                                            src={img ? `https://image.tmdb.org/t/p/original/${img}` : '/placeholder.png'}
                                                                                            alt={item.title || item.name}
                                                                                        />
                                                                                        <div className="poster-overlay"><div className="poster-title">{item.title || item.name}</div></div>
                                                                                        <div className="poster-actions" aria-hidden="true">
                                                                                            <button className="action-btn play">▶</button>
                                                                                            <div className="action-row">
                                                                                                <button className="action-btn">Details</button>
                                                                                                <button className="action-btn">+ My List</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                        );
                                    })}
                                </div>
                    )}
                </div>
  )
}

export default SearchRow