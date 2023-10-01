import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useSound from 'use-sound';
// import Lottie from 'lottie-react';
import { FcIdea } from 'react-icons/fc';
// import lampAnimation from '../../utils/lamp.json';
import { Slots } from '../Slot';
import Modal from 'react-modal';
import spinSound from '../../audio/spin.mp3';
import winSound from '../../audio/money.mp3';
import lineSound from '../../audio/line.mp3';
import betSound from '../../audio/bet.mp3';
import { IPostSlotLine, ISlotDemo } from '../../types';
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
  FcIdeaIcon,
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
import {
  getLanguage,
  getRefreshed,
  getToken,
  getUpdateBalance,
  getUserBalance,
} from '../../redux/auth/authSelectors';
import {
  getSlotsById,
  postBetSlot,
  postSlotLine,
  postStartGame,
} from '../../redux/slots/slotsOperations';
import { animateHelper } from '../../redux/slots/slotsSlice';
import { updateBalance } from '../../redux/auth/authSlice';
import ReactModal from 'react-modal';
import { Content, Overlay } from '../Modal/TextModal.styled';
import { GlobalStyle } from '../../utils/GlobalStyle.styled';

export const SlotApp = () => {
  const dispatch: AppDispatch = useDispatch();
  const language = useSelector(getLanguage);
  const localItem = 'demoSlots';
  const localBalance = 'demoBalance';
  const slotImg = useSelector(getSlotImg);
  const token = useSelector(getToken);
  const balance = useSelector(getUserBalance);
  const updatedBalance = useSelector(getUpdateBalance);
  const lines = useSelector(getSlotLines);
  const refreshed = useSelector(getRefreshed);
  const slotAnimate = useSelector(getAnimate);
  let result = useSelector(getUserResult);
  const bet = useSelector(getUserBet);
  const confetti = useSelector(getConfetti);
  const helperAnimate = useSelector(getAnimateHelper);
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const namePath = pathname.split('/')[1];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const getDemoBalanceNumber = () => {
    return parseInt(localStorage.getItem(localBalance) as string);
  };
  useEffect(() => {
    if (refreshed || namePath === 'demoSlots') {
      if (namePath === 'demoSlots') {
        const storedData = localStorage.getItem(localItem) || [];
        if (storedData.length === 0) {
          const newArr = [];
          const obj = {
            id,
            lines: 1,
            bet: 1,
            totalBet: 1,
          };
          newArr.push(obj);
          localStorage.setItem(localItem, JSON.stringify(newArr));
          localStorage.setItem(localBalance, '1000');
          dispatch(getSlotsById(newArr));
        } else {
          const arr: ISlotDemo[] = JSON.parse(storedData as string);
          const index = arr.findIndex((item) => item.id === id);
          if (index === -1) {
            const obj = {
              id,
              lines: 1,
              bet: 1,
              totalBet: 1,
            };
            arr.push(obj);
            localStorage.setItem(localItem, JSON.stringify(arr));
            const arrToRequest = arr[arr.length - 1];
            dispatch(getSlotsById([arrToRequest]));
          } else {
            const arrToRequest = arr[index];
            dispatch(getSlotsById([arrToRequest]));
          }
        }
      } else {
        dispatch(getSlotsById(id));
      }
    }
  }, [id, dispatch, refreshed, namePath]);
  useEffect(() => {
    if (updatedBalance) {
      setRenderBalance(balance);
    }
  }, [updateBalance, balance]);
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
  const [renderBalance, setRenderBalance] = useState(
    token ? balance : getDemoBalanceNumber() || 1000
  );
  const [play, setPlay] = useState(false);
  const [playSpin] = useSound(spinSound);
  const [playWin] = useSound(winSound);
  const [playLine] = useSound(lineSound);
  const [playBet] = useSound(betSound);
  const [isWinSoundPlayed, setWinSoundPlayed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const linesFunc = () => {
    const storedData = localStorage.getItem(localItem) || [];
    if (storedData.length > 0) {
      const arr: ISlotDemo[] = JSON.parse(storedData as string);
      const index = arr.findIndex((item) => item.id === id);
      if (index !== -1) {
        return arr[index].lines;
      }
    }
  };
  const betFunc = () => {
    const storedData = localStorage.getItem(localItem) || [];
    if (storedData.length > 0) {
      const arr: ISlotDemo[] = JSON.parse(storedData as string);
      const index = arr.findIndex((item) => item.id === id);
      if (index !== -1) {
        return arr[index].bet;
      }
    }
  };
  const [demoLines, setDemoLines] = useState(linesFunc());
  const [demoBet, setDemoBet] = useState(betFunc());
  useEffect(() => {
    if (!slotAnimate && helperAnimate) {
      setTimeout(() => {
        dispatch(animateHelper(false));
        setAnimate(false);
        setW8(false);
      }, 1500);
    }
  }, [dispatch, slotAnimate, helperAnimate]);
  useEffect(() => {
    if (result > 0 && !animate) {
      if (!isWinSoundPlayed) {
        playWin();
        setWinSoundPlayed(true);
        setResultRender(true);
        setRenderBalance(
          token
            ? balance
            : parseInt(localStorage.getItem(localBalance) as string)
        );
      }
    } else {
      setWinSoundPlayed(false);
      setResultRender(false);
    }
  }, [result, isWinSoundPlayed, playWin, animate, token, balance]);
  const startAnimation = async (flag?: string, countAuto?: number) => {
    if (w8) return;
    dispatch(updateBalance(false));
    if (token) {
      if (balance < bet * lines) return;
      const reqData = {
        id,
      };
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
          setRenderBalance((prev) => prev - bet * lines);
          playSpin();
          setAnimate(true);
          dispatch(animateHelper(true));
          await dispatch(postStartGame(reqData));
          setCount((prev) => prev - 1);
          count++;
        }, 4000);

        setIntervalId(interval);
      } else {
        setRenderBalance((prev) => prev - bet * lines);
        playSpin();
        setAnimate(true);
        dispatch(animateHelper(true));
        await dispatch(postStartGame(reqData));
      }
    } else {
      if ((renderBalance || 1000) < (demoBet || 1) * (demoLines || 1)) return;
      setExpense(true);
      setW8(true);
      setStart(true);
      const newArr: ISlotDemo[] = [];
      const reqData = {
        id,
        balance: renderBalance || 1000,
        bet: demoBet || 1,
        lines: demoLines || 1,
      };
      newArr.push(reqData as ISlotDemo);
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
          setRenderBalance((prev) => prev - (demoBet || 1) * (demoLines || 1));
          localStorage.setItem(
            localBalance,
            '' + (getDemoBalanceNumber() - (demoBet || 1) * (demoLines || 1))
          );
          setAnimate(true);
          dispatch(animateHelper(true));
          await dispatch(postStartGame(newArr as ISlotDemo[]));
          setCount((prev) => prev - 1);
          count++;
        }, 4000);

        setIntervalId(interval);
      } else {
        playSpin();
        setRenderBalance((prev) => prev - (demoBet || 1) * (demoLines || 1));
        localStorage.setItem(
          localBalance,
          '' + (getDemoBalanceNumber() - (demoBet || 1) * (demoLines || 1))
        );
        setAnimate(true);
        dispatch(animateHelper(true));
        await dispatch(postStartGame(newArr as ISlotDemo[]));
      }
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
        if (token) {
          if (line === 3) return;
          reqData = {
            lines: line + 1,
            id,
          };
          dispatch(postSlotLine(reqData));
        } else {
          if (demoLines === 3) return;
          const storedData = localStorage.getItem(localItem) || [];
          const arr: ISlotDemo[] = JSON.parse(storedData as string);
          const index = arr.findIndex((item) => item.id === id);
          arr[index].lines = arr[index].lines + 1;
          arr.splice(index, 1, arr[index]);
          localStorage.setItem(localItem, JSON.stringify(arr));
          setDemoLines(arr[index].lines);
        }
        playLine();
        setW8(false);
        break;
      case 'decLines':
        if (token) {
          if (line === 1) return;
          reqData = {
            lines: line - 1,
            id,
          };
          dispatch(postSlotLine(reqData));
        } else {
          if (demoLines === 1) return;
          const storedData = localStorage.getItem(localItem) || [];
          const arr: ISlotDemo[] = JSON.parse(storedData as string);
          const index = arr.findIndex((item) => item.id === id);
          arr[index].lines = arr[index].lines - 1;
          arr.splice(index, 1, arr[index]);
          localStorage.setItem(localItem, JSON.stringify(arr));
          setDemoLines(arr[index].lines);
        }
        playLine();
        setW8(false);
        break;
      case 'incBets':
        if (token) {
          if (bet === 20) return;
          reqData = {
            bet: bets + 1,
            id,
          };
          dispatch(postBetSlot(reqData));
        } else {
          if (demoBet === 20) return;
          const storedData = localStorage.getItem(localItem) || [];
          const arr: ISlotDemo[] = JSON.parse(storedData as string);
          const index = arr.findIndex((item) => item.id === id);
          arr[index].bet = arr[index].bet + 1;
          arr.splice(index, 1, arr[index]);
          localStorage.setItem(localItem, JSON.stringify(arr));
          setDemoBet(arr[index].bet);
        }
        playBet();
        setW8(false);
        break;
      case 'decBets':
        if (token) {
          if (bet === 1) return;
          reqData = {
            bet: bets - 1,
            id,
          };
          dispatch(postBetSlot(reqData));
        } else {
          if (demoBet === 20) return;
          const storedData = localStorage.getItem(localItem) || [];
          const arr: ISlotDemo[] = JSON.parse(storedData as string);
          const index = arr.findIndex((item) => item.id === id);
          arr[index].bet = arr[index].bet - 1;
          arr.splice(index, 1, arr[index]);
          localStorage.setItem(localItem, JSON.stringify(arr));
          setDemoBet(arr[index].bet);
        }
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

  return (
    <>
      {/* <GlobalStyle modal={modalIsOpen} /> */}
      <Wrapper />
      <MainContainer imgUrl={slotImg}>
        <HeaderStyled>
          <Balance>
            {language === 'en'
              ? 'Balance'
              : language === 'ru'
              ? 'Баланс'
              : 'Баланс'}
            : {renderBalance}
            {expense ? (
              <Span primary={!resultRender ? true : false}>
                {result > 0 && resultRender
                  ? `+(${result})`
                  : `-(${
                      token ? bet * lines : (demoLines || 1) * (demoBet || 1)
                    })`}
              </Span>
            ) : null}
          </Balance>
          <LineCount>
            {language === 'en'
              ? 'Lines'
              : language === 'ru'
              ? 'Линии'
              : 'Лінії'}
            :{token ? lines : demoLines || 1}
          </LineCount>
          <LineCount>
            {language === 'en'
              ? 'Bet'
              : language === 'ru'
              ? 'Ставка'
              : 'Ставка'}
            :{token ? bet : demoBet || 1}
          </LineCount>
          <LineCount>
            {language === 'en'
              ? 'Total bet'
              : language === 'ru'
              ? 'Общая ставка'
              : 'Загальна ставка'}
            :{token ? bet * lines : (demoLines || 1) * (demoBet || 1) || 1}
          </LineCount>
          <Lamp>
            <FcIdeaIcon onClick={openModal} title="Інструкції" />
            <Modal
              appElement={document.getElementById('root') || undefined}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Інструкції"
            >
              <TextModal onClose={closeModal} />
            </Modal>
          </Lamp>
        </HeaderStyled>
        <Container>
          {result > 0 && resultRender && <NumberModal number={result} />}

          <WrapSlots win={!animate && confetti}>
            <Slots start={start} lines={lines} animate={animate} id={id} />
          </WrapSlots>
          {/* {confetti ? <Confetti /> : null} */}
          <ButtonsContainer win={!animate && confetti}>
            {!showModal && !autoModal && (
              <SpinButton
                onClick={() => onClickLines('modalBet')}
                primary={false}
                disabled={auto}
              >
                {language === 'en'
                  ? 'Bet'
                  : language === 'ru'
                  ? 'Ставка'
                  : 'Ставка'}
              </SpinButton>
            )}

            {!showModal && !autoModal && (
              <SpinButton
                primary={!auto ? false : true}
                onClick={() => startAnimation()}
                disabled={auto}
              >
                {!auto
                  ? language === 'en'
                    ? 'Spin'
                    : language === 'ru'
                    ? 'Крутить'
                    : 'Крутити'
                  : count}
              </SpinButton>
            )}
            {!showModal && !autoModal && (
              <SpinButton
                primary={false}
                onClick={() =>
                  !auto ? onClickLines('autoModal') : stopAnimation()
                }
              >
                {!auto
                  ? language === 'en'
                    ? 'Auto'
                    : language === 'ru'
                    ? 'Авто'
                    : 'Авто'
                  : language === 'en'
                  ? 'Stop'
                  : language === 'ru'
                  ? 'Стоп'
                  : 'Стоп'}
              </SpinButton>
            )}
            {!showModal && !autoModal && (
              <SpinButton
                onClick={() => onClickLines('modalLine')}
                primary={false}
                disabled={auto}
              >
                {language === 'en'
                  ? 'Lines'
                  : language === 'ru'
                  ? 'Линии'
                  : 'Лінії'}
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
                {language === 'en'
                  ? 'Back'
                  : language === 'ru'
                  ? 'назад'
                  : 'назад'}
              </SpinButton>
            )}
            {autoModal && (
              <SpinButton onClick={onClickBack} primary={false}>
                {language === 'en'
                  ? 'Back'
                  : language === 'ru'
                  ? 'назад'
                  : 'назад'}
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
