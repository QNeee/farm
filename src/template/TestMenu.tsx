import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Links, Quit, A, Burger } from './TestMenu.styled';
import Header from '../components/Header/Header';

function TestMenu() {
  const [open, setOpen] = useState(false);

  // const toggle = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <Burger
        onClick={() => setOpen(true)}
        style={{
          padding: open ? '5px 200vw 200vw 200vw' : '5px 16px 5px 16px',
          // padding: open ? '16px 16px 200vw 200vw' : '16px 16px 32px 32px',
        }}
      >
        <AiOutlineMenu />
      </Burger>
      <Quit
        onClick={() => setOpen(false)}
        style={{ display: open ? 'inline' : 'none' }}
      >
        <AiOutlineCloseCircle />
      </Quit>
      <Links style={{ display: open ? 'flex' : 'none' }}>
        <Header />
        {/* <A href="">Lorem</A>
        <A href="">Ispum</A>
        <A href="">TKT</A> */}
      </Links>
    </>
  );
}

export default TestMenu;
