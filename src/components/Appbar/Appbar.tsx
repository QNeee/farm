import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react';

import { UserContainer, UserInfo, UserEmail } from './AppBar.styled';
import { AppDispatch } from '../../redux/store';
import { getRefreshed, getUserEmail } from '../../redux/auth/authSelectors';
import { getUserInfo } from '../../redux/auth/authOperations';
import attentionArrow from '../../utils/attention.json';
import { useNavigate } from 'react-router';
import { ImProfile } from 'react-icons/im';

const AppBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // const userEmail = useSelector(getUserEmail);
  const refreshed = useSelector(getRefreshed);
  const navigate = useNavigate();

  const handleContainerClick = () => {
    navigate('user/profile');
  };

  useEffect(() => {
    if (refreshed) dispatch(getUserInfo());
  }, [dispatch, refreshed]);

  return (
    <>
      <UserContainer onClick={handleContainerClick}>
        {/* <Lottie
          style={{
            height: 24,
            width: 24,
            marginBottom: '-13px',
            marginRight: '3px',
          }}
          animationData={attentionArrow}
        /> */}
        {/* <UserInfo> */}
        {/* <UserEmail> */}
        Профіль
        {/* </UserEmail> */}
        {/* </UserInfo> */}
      </UserContainer>
    </>
  );
};

export default AppBar;
