import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const BASE = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab1da08307f82007e9975d4dccf67670';

const Person = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setLoading(true);
        const [pRes, creditsRes] = await Promise.all([
          fetch(`${BASE}person/${id}?api_key=${API_KEY}&language=en-US`),
          fetch(`${BASE}person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
        ]);
        if(!pRes.ok) throw new Error('Failed');
        const pData = await pRes.json();
        const cData = await creditsRes.json();
        setPerson(pData);
        setCredits((cData.cast || []).sort((a,b) => (b.popularity||0)-(a.popularity||0)));
      } catch (err) {
        console.error(err);
      } finally { setLoading(false) }
    };
    if(id) fetchPerson();
  }, [id]);

  if(loading) return <div className="person-loading">Loading...</div>;
  if(!person) return <div className="person-error">Person not found</div>;

  return (
    <div className="person-page">
      <button className="btn" onClick={()=>navigate(-1)}>Back</button>
      <div className="person-hero">
        <img src={person.profile_path ? `https://image.tmdb.org/t/p/w300/${person.profile_path}` : 'https://via.placeholder.com/300x450?text=No+Image'} alt={person.name} />
        <div className="person-info">
          <h1>{person.name}</h1>
          <p className="known">Known for: {person.known_for_department}</p>
          <p className="bio">{person.biography || 'No biography available.'}</p>
        </div>
      </div>

      <section className="person-credits">
        <h2>Movies</h2>
        <div className="credits-grid">
          {credits.map(movie => (
            <div key={movie.credit_id || movie.id} className="credit-card" onClick={()=>navigate(`/movie/${movie.id}`)}>
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : 'https://via.placeholder.com/185x278?text=No+Image'} alt={movie.title} />
              <div className="credit-info"><p>{movie.title}</p><small>{movie.release_date?.slice(0,4)}</small></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Person;
