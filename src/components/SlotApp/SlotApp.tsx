import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useSound from 'use-sound';
import Lottie from 'lottie-react';

import lampAnimation from '../../utils/lamp.json';
import { Slots } from '../Slot';

import spinSound from '../../audio/spin.mp3';
import winSound from '../../audio/money.mp3';
import lineSound from '../../audio/line.mp3';
import betSound from '../../audio/bet.mp3';
import { IPostSlotLine } from '../../types';
import NumberModal, { TextModal } from '../Modal';
import { Confetti } from '../Confetti';
import {
  Span,
  LineCount,
  Balance,
  HeaderStyled,
  SpinButton,
  ButtonsContainer,
  Container,
  MainContainer,
  WrapSlots,
  LottieLamp,
  Wrapper,
} from './SlotApp.styled';
import { AppDispatch } from '../../redux/store';
import {
  getConfetti,
  getSlotImg,
  getSlotLines,
  getUserBet,
  getUserResult,
} from '../../redux/slots/slotsSelectors';
import { getRefreshed, getUserBalance } from '../../redux/auth/authSelectors';
import {
  getSlotsById,
  postBetSlot,
  postSlotLine,
  postStartGame,
} from '../../redux/slots/slotsOperations';

export const SlotApp = () => {
  const dispatch: AppDispatch = useDispatch();
  const slotImg = useSelector(getSlotImg);
  const balance = useSelector(getUserBalance);
  const lines = useSelector(getSlotLines);
  const refreshed = useSelector(getRefreshed);
  let result = useSelector(getUserResult);
  const bet = useSelector(getUserBet);
  const confetti = useSelector(getConfetti);

  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  useEffect(() => {
    if (refreshed) {
      dispatch(getSlotsById(id));
    }
  }, [id, dispatch, refreshed]);

  const [animate, setAnimate] = useState(false);
  const [w8, setW8] = useState(false);
  const [auto, setAuto] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [start, setStart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBet, setShowBet] = useState(false);
  const [expense, setExpense] = useState(false);
  const [playSpin] = useSound(spinSound);
  const [playWin] = useSound(winSound);
  const [playLine] = useSound(lineSound);
  const [playBet] = useSound(betSound);
  const [isWinSoundPlayed, setWinSoundPlayed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (result > 0) {
      if (!isWinSoundPlayed) {
        playWin();
        setWinSoundPlayed(true);
      }
    } else {
      setWinSoundPlayed(false);
    }
  }, [result, isWinSoundPlayed, playWin]);

  const startAnimation = async (flag?: string) => {
    const reqData = {
      id,
    };
    if (w8) return;
    if (balance < bet) return;
    setExpense(true);
    setW8(true);
    setStart(true);
    if (flag === 'auto') {
      setAuto(true);
      let count = 0;
      const interval = setInterval(() => {
        if (count === 20) {
          clearInterval(interval);
          setAnimate(false);
          setAuto(false);
          setStart(false);
          setW8(false);
          return;
        }
        playSpin();
        setAnimate(true);
        dispatch(postStartGame(reqData));
        setTimeout(() => {
          setAnimate(false);
        }, 1000);

        count++;
      }, 800);

      setIntervalId(interval);
    } else {
      playSpin();
      setAnimate(true);
      dispatch(postStartGame(reqData));
      setTimeout(() => {
        setAnimate(false);
        setStart(false);
        setW8(false);
      }, 800);
    }
  };

  const stopAnimation = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setAuto(false);
      setAnimate(false);
      setW8(false);
    }
  };
  const onClickLines = (flag?: string) => {
    let reqData: IPostSlotLine;
    let line = lines;
    let bets = bet;
    setW8(true);
    switch (flag) {
      case 'modalBet':
        setShowModal(true);
        setShowBet(true);
        setW8(false);
        break;
      case 'modalLine':
        setShowModal(true);
        setShowBet(false);
        setW8(false);
        break;
      case 'incLines':
        if (line === 3) return;
        reqData = {
          lines: line + 1,
          id,
        };
        dispatch(postSlotLine(reqData));
        playLine();
        setW8(false);
        break;
      case 'decLines':
        if (line === 1) return;
        reqData = {
          lines: line - 1,
          id,
        };
        dispatch(postSlotLine(reqData));
        playLine();
        setW8(false);
        break;
      case 'incBets':
        if (bet === 20) return;
        reqData = {
          bet: bets + 1,
          id,
        };
        dispatch(postBetSlot(reqData));
        playBet();
        setW8(false);
        break;
      case 'decBets':
        if (bet === 1) return;
        reqData = {
          bet: bets - 1,
          id,
        };
        dispatch(postBetSlot(reqData));
        playBet();
        setW8(false);
        break;
      default:
        break;
    }
  };
  const onClickBack = () => {
    setShowModal(false);
    setShowBet(false);
    setW8(false);
  };
  // const checkWin = () => {
  //     if (result > 0) {
  //         if (!isWinSoundPlayed) {
  //             playWin();
  //             setWinSoundPlayed(true);
  //         }
  //         return `(+${result})`;
  //     } else {
  //         setWinSoundPlayed(false);
  //     }
  // };
  const toggleModal = () => setIsOpen((prev) => !prev);
  // const toggleModal = () => setIsOpen(true);
  return (
    <>
      <Wrapper />
      <MainContainer imgUrl={slotImg}>
        <HeaderStyled>
          {/* <LottieLamp>
          {isOpen && (
            <TextModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <h1>HELLO WORLD!</h1>
            </TextModal>
          )}
          <Lottie
            animationData={lampAnimation}
            onClick={toggleModal}
            title="Інструкція"
          />
        </LottieLamp> */}
          <Balance>
            Balance: {balance}
            {expense ? (
              <Span primary={result === 0 ? true : false}>
                {result > 0 ? `+(${result})` : `-(${bet * lines})`}
              </Span>
            ) : null}
          </Balance>
          <LineCount>Lines:{lines}</LineCount>
          <LineCount>Bet:{bet}</LineCount>
          <LineCount>TotalBet:{bet * lines}</LineCount>
        </HeaderStyled>
        <Container>
          {result > 0 && <NumberModal number={result} />}

          <WrapSlots win={confetti}>
            <Slots start={start} lines={lines} animate={animate} id={id} />
          </WrapSlots>
          {/* {confetti ? <Confetti /> : null} */}
          <ButtonsContainer win={confetti}>
            {!showModal && (
              <SpinButton
                onClick={() => onClickLines('modalBet')}
                primary={false}
              >
                Bet
              </SpinButton>
            )}

            {!showModal && (
              <SpinButton
                primary={!auto ? false : true}
                onClick={() => startAnimation()}
              >
                Spin
              </SpinButton>
            )}
            {!showModal && (
              <SpinButton
                primary={false}
                onClick={() =>
                  !auto ? startAnimation('auto') : stopAnimation()
                }
              >
                {!auto ? 'Auto' : 'Stop'}
              </SpinButton>
            )}
            {!showModal && (
              <SpinButton
                onClick={() => onClickLines('modalLine')}
                primary={false}
              >
                Lines
              </SpinButton>
            )}
            {showModal && (
              <SpinButton
                onClick={() => onClickLines(!showBet ? 'incLines' : 'incBets')}
                primary={false}
              >
                +
              </SpinButton>
            )}
            {showModal && (
              <SpinButton
                onClick={() => onClickLines(!showBet ? 'decLines' : 'decBets')}
                primary={false}
              >
                -
              </SpinButton>
            )}
            {showModal && (
              <SpinButton onClick={onClickBack} primary={false}>
                back
              </SpinButton>
            )}
          </ButtonsContainer>
        </Container>
      </MainContainer>
    </>
  );
};
