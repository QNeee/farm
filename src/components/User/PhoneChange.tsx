import { useSelector } from 'react-redux';
import { getUserPhone } from '../../redux/auth/authSelectors';
import { Button } from '../Appbar/AppBar.styled';
import { useState } from 'react';
import PhoneForm from './PhoneForm';

const PhoneChange = () => {
  const userPhone = useSelector(getUserPhone);
  const [change, setChange] = useState(false);

  return (
    <>
      {!userPhone || change ? (
        <PhoneForm
          change={change}
          changeFunc={setChange}
          initialPhoneNumber=""
        />
      ) : (
        <>
          {userPhone}
          <Button
            style={{ width: '100%', marginTop: 10 }}
            onClick={() => setChange(true)}
            type="button"
          >
            Змінити
          </Button>
        </>
      )}
    </>
  );
};

export default PhoneChange;
