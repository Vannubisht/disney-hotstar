import React, { useEffect, useState } from 'react';
import tmdbAxiosInstance from './tmdbAxiosInstance';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const base_url = 'https://image.tmdb.org/t/p/original/';

function MovieSlider({ title, fetchUrl }) {
  const [allMovies, setAllMovies] = useState([]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    try {
      const { data } = await tmdbAxiosInstance.get(fetchUrl);
      setAllMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUrl]);


  return (
    <div className='mx-auto'>
      <h3 className='movie-head'>{title}</h3>
      <Slider {...settings}>
        {allMovies.map((item, index) => (
          <div key={index} className='ba'>
            <div className='iim mx-1'>
              <img
                className='movie border border-transparent rounded'
                src={`${base_url}/${item.poster_path}`}
                alt=''
              />
              <div className='back'>
                <img className='bacimg' src={`${base_url}/${item.backdrop_path}`} alt='' />
                <div className='card px-4'>
                  <div className='butt'>
                    <button className='watchnow text-black rounded-[10px] sm:text-lg md:text-xl lg:text-2xl'>
                      <span className='px-2'><FontAwesomeIcon icon={faPlay} /></span>Watch now
                    </button>
                    <button className='plus bg-gray-400 bg-opacity-50 rounded-[10px]'>+</button>
                  </div>
                  <h4 className=' '>{item.original_title}</h4>
                  <div style={{ display: 'flex' }}>
                    {item.release_date && (
                      <>
                        <h4>{item.release_date.slice(0, 4)}</h4>
                        <h4>&nbsp;.&nbsp;</h4>
                      </>
                    )}
                    {item.vote_average && <h4>Rating: {item.vote_average}</h4>}
                  </div>
                  {item.overview && <p className='sm:text-sm md:text-base lg:text-lg xl:text-xl'>{item.overview.slice(0, 80)}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default MovieSlider;
