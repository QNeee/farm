import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { googleAuth } from '../../redux/auth/authSlice';

const Google = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (search !== '') {
      const obj = {
        accessToken: search.split('&')[0].split('=')[1],
        refreshToken: search.split('&')[1].split('=')[1],
        sid: search.split('&')[2].split('=')[1],
        email: search.split('&')[3].split('=')[1],
        id: search.split('&')[4].split('=')[1],
        google: search.split('&')[5].split('=')[1],
      };
      dispatch(googleAuth(obj));
    }
  }, [search]);
  return <div>google</div>;
};

export default Google;
