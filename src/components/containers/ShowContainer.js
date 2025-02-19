import { useState, useEffect } from 'react';

import React from 'react';
import DetailsCard from '../common/DetailsCard';
import Loading from '../layout/Loading';
import { getMovieDetail, getTvSerieDetail } from '../../services/api';

const ShowContainer = ({ mediaId, mediaType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [media, setMedia] = useState(null);

  const fetchMedia = async (mediaId) => {
    setIsLoading(true);
    if (mediaType === 'movie') {
      getMovieDetail(mediaId)
        .then((data) => {
          setMedia(data);
        })
        .catch((err) => console.error('API Error:', err));
    } else if (mediaType == 'tv') {
      getTvSerieDetail(mediaId)
        .then((data) => setMedia(data))
        .catch((err) => console.error('API Error:', err));
    } else {
      console.log('Unkown media type');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMedia(mediaId);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <DetailsCard
          title={mediaType === 'movie' ? media?.title : media?.name}
          image={
            media?.poster_path
              ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${media.poster_path}`
              : require('../../../assets/icon.png')
          }
          description={media?.overview}
          popularity={media?.popularity}
          releaseDate={media?.release_date}
        />
      )}
    </>
  );
};

export default ShowContainer;
