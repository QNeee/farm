import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import ConfettiComponent from 'react-confetti';
import EventEmitter from 'events';

const ANIMATION_DURATION = 5_000;
const SCROLL_BAR_WIDTH = 20;

class ConfettiEmmiter extends EventEmitter {
  run = () => {
    this.emit('confetti', true);
  };

  close = () => {
    this.emit('confetti', false);
  };
}

export const confetti = new ConfettiEmmiter();

export const Confetti = () => {
  const [party, setParty] = useState(true);
  const [size, setSize] = useState({
    y: window.innerHeight,
    x: window.innerWidth - SCROLL_BAR_WIDTH,
  });

  useEffect(() => {
    const resize = () =>
      setSize({
        y: window?.innerHeight,
        x: window.innerWidth - SCROLL_BAR_WIDTH,
      });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  useEffect(() => {
    const id = setTimeout(() => {
      setParty(false);
    }, ANIMATION_DURATION);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return ReactDOM.createPortal(
    <ConfettiComponent
      style={{
        position: 'fixed',
        top: 100,
        left: 0,
        zIndex: 100000,
        width: '100%',
        pointerEvents: 'none',
      }}
      numberOfPieces={party ? 800 : 0}
      gravity={0.3}
      onConfettiComplete={(c: { reset: () => void }) => {
        setParty(false);
        c?.reset();
      }}
      width={size.x}
      height={size.y}
    />,
    document.body
  );
};
