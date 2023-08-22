import { useSelector } from 'react-redux';
import { getUserPhone } from '../../redux/auth/authSelectors';
import { Button } from '../Appbar/AppBar.styled';
import { useState } from 'react';
import PhoneForm from './PhoneForm';
import { GiSmartphone } from 'react-icons/gi';

const PhoneChange = () => {
  const userPhone = useSelector(getUserPhone);
  const [change, setChange] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
          <p style={{ fontWeight: 500, margin: '8px 0' }}>Ваш номер Телефону</p>
          <div
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: '45px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5,
            }}
          >
            <GiSmartphone
              onClick={() =>
                userPhone !== null &&
                handleCopyToClipboard(userPhone.toString())
              }
              style={{
                position: 'absolute',
                top: '50%',
                left: 14,
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.75)',
                width: 18,
                height: 18,
                cursor: 'pointer',
              }}
            />
            <div
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '0 5px 5px 0',
                outline: 'none',
                border: 'none',
                borderLeft: '1px solid rgba(0,0,0,0.35)',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              {userPhone}
            </div>
          </div>
          <Button
            style={{ width: '100%', margin: '18px 0' }}
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
