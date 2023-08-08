import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useSound from 'use-sound';
// import Lottie from 'lottie-react';
import { FcIdea } from 'react-icons/fc';
// import lampAnimation from '../../utils/lamp.json';
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
  Lamp,
  Wrapper,
} from './SlotApp.styled';
import { AppDispatch } from '../../redux/store';
import {
  getAnimate,
  getAnimateHelper,
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
import { animateHelper } from '../../redux/slots/slotsSlice';

export const SlotApp = () => {
  const dispatch: AppDispatch = useDispatch();
  const slotImg = useSelector(getSlotImg);
  const balance = useSelector(getUserBalance);
  const lines = useSelector(getSlotLines);
  const refreshed = useSelector(getRefreshed);
  const slotAnimate = useSelector(getAnimate);
  let result = useSelector(getUserResult);
  const bet = useSelector(getUserBet);
  const confetti = useSelector(getConfetti);
  const helperAnimate = useSelector(getAnimateHelper);
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
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showBet, setShowBet] = useState(false);
  const [expense, setExpense] = useState(false);
  const [resultRender, setResultRender] = useState(false);
  const [autoModal, setAutoModal] = useState(false);
  const [playSpin] = useSound(spinSound);
  const [playWin] = useSound(winSound);
  const [playLine] = useSound(lineSound);
  const [playBet] = useSound(betSound);
  const [isWinSoundPlayed, setWinSoundPlayed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!slotAnimate && helperAnimate) {
      setTimeout(() => {
        dispatch(animateHelper(false));
        setAnimate(false);
        setW8(false);
      }, 1500);
    }
  }, [dispatch, slotAnimate, helperAnimate])
  useEffect(() => {
    if (result > 0 && !animate) {
      if (!isWinSoundPlayed) {
        playWin();
        setWinSoundPlayed(true);
        setResultRender(true);
      }
    } else {
      setWinSoundPlayed(false);
      setResultRender(false);
    }
  }, [result, isWinSoundPlayed, playWin, animate]);

  const startAnimation = async (flag?: string, countAuto?: number) => {
    const reqData = {
      id,
    };
    if (w8) return;
    if (balance < bet) return;
    console.log('sadsa');
    setExpense(true);
    setW8(true);
    setStart(true);
    if (flag === 'auto') {
      setAutoModal(false);
      setAuto(true);
      setCount(countAuto as number);
      let count = 0;
      const interval = setInterval(async () => {
        if (count === countAuto) {
          clearInterval(interval);
          setAuto(false);
          return;
        }
        playSpin();
        setAnimate(true);
        dispatch(animateHelper(true));
        await dispatch(postStartGame(reqData));
        setCount(prev => prev - 1);
        count++;
      }, 3000);

      setIntervalId(interval);
    } else {
      playSpin();
      setAnimate(true);
      dispatch(animateHelper(true));
      await dispatch(postStartGame(reqData));
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
      case 'autoModal':
        setAutoModal(true);
        setW8(false);
        break;
      default:
        break;
    }
  };
  const onClickBack = () => {
    setAutoModal(false);
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
          <Lamp>
            {isOpen && (
              <TextModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h1>HELLO WORLD!</h1>
              </TextModal>
            )}
            <FcIdea
              onClick={toggleModal}
              title="Інструкції"
              style={{ height: 32, width: 32 }}
            />
          </Lamp>
          <Balance>
            Balance: {balance}
            {expense ? (
              <Span primary={!resultRender ? true : false}>
                {result > 0 && resultRender ? `+(${result})` : `-(${bet * lines})`}
              </Span>
            ) : null}
          </Balance>
          <LineCount>Lines:{lines}</LineCount>
          <LineCount>Bet:{bet}</LineCount>
          <LineCount>TotalBet:{bet * lines}</LineCount>
        </HeaderStyled>
        <Container>
          {result > 0 && resultRender && <NumberModal number={result} />}

          <WrapSlots win={confetti}>
            <Slots start={start} lines={lines} animate={animate} id={id} />
          </WrapSlots>
          {/* {confetti ? <Confetti /> : null} */}
          <ButtonsContainer win={confetti}>
            {!showModal && !autoModal && (
              <SpinButton
                onClick={() => onClickLines('modalBet')}
                primary={false}
                disabled={auto}
              >
                Bet
              </SpinButton>
            )}

            {!showModal && !autoModal && (
              <SpinButton
                primary={!auto ? false : true}
                onClick={() => startAnimation()}
                disabled={auto}
              >
                {!auto ? 'Spin' : count}
              </SpinButton>
            )}
            {!showModal && !autoModal && (
              <SpinButton
                primary={false}
                onClick={() =>
                  !auto ? onClickLines('autoModal') : stopAnimation()
                }
              >
                {!auto ? 'Auto' : 'Stop'}
              </SpinButton>
            )}
            {!showModal && !autoModal && (
              <SpinButton
                onClick={() => onClickLines('modalLine')}
                primary={false}
                disabled={auto}
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
            {autoModal && (
              <SpinButton onClick={onClickBack} primary={false}>
                back
              </SpinButton>
            )}
            {autoModal && (
              <SpinButton
                onClick={() => startAnimation('auto', 5)}
                primary={false}
              >
                5
              </SpinButton>
            )}
            {autoModal && (
              <SpinButton
                onClick={() => startAnimation('auto', 10)}
                primary={false}
              >
                10
              </SpinButton>
            )}
          </ButtonsContainer>
        </Container>
      </MainContainer>
    </>
  );
};
