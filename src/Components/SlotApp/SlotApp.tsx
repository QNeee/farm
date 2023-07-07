import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Slots } from "../Slot/Slot";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { useLocation } from "react-router-dom";
import { getSlotsById, postBetSlot, postSlotLine, postStartGame } from "../../Redux/slotsOperations";
import { getSlotLines, getUserBalance, getUserBet, getUserResult } from "../../Redux/chatSlice";
import { IPostSlotLine } from "../../types";
import spinSound from '../../audio/spin.mp3';
import winSound from '../../audio/money.mp3';
import lineSound from '../../audio/line.mp3';
import betSound from '../../audio/bet.mp3';
import useSound from "use-sound";
import NumberComponent from "../Modal/Modal";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SpinButton = styled.button<{ primary: boolean }>`
  background-color:${props => !props.primary ? '#ff4081' : 'grey'};
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
  font-size: 24px;

  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Balance = styled.div`
  font-size: 18px;
  margin-right: 10px;
`;

const LineCount = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;
const Span = styled.span<{ primary: boolean }>`
    color:${props => props.primary ? 'red' : 'green'};
`;
export const SlotApp = () => {
    const { pathname } = useLocation();
    const id = pathname.split('/')[2];
    const balance = useSelector(getUserBalance);
    const lines = useSelector(getSlotLines);
    let result = useSelector(getUserResult);
    const bet = useSelector(getUserBet);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getSlotsById(id));
    }, [id, dispatch]);
    const [playedWinSound, setPlayedWinSound] = useState(false);
    useEffect(() => {
        if (result > 0 && playedWinSound) {
            setPlayedWinSound(false);
        }
    }, [result, playedWinSound]);
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

    const startAnimation = async (flag?: string) => {
        const reqData = {
            id
        }
        if (w8) return;
        if (balance < bet) return;
        setExpense(true);
        setW8(true);
        setStart(true);
        if (flag === "auto") {
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
            }, 2000);

            setIntervalId(interval);
        } else {
            playSpin();
            setAnimate(true);
            dispatch(postStartGame(reqData));
            setTimeout(() => {
                setAnimate(false);
                setStart(false);
                setW8(false);
            }, 1000);
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
                    id
                }
                dispatch(postSlotLine(reqData));
                playLine();
                setW8(false);
                break;
            case 'decLines':
                if (line === 1) return;
                reqData = {
                    lines: line - 1,
                    id
                }
                dispatch(postSlotLine(reqData));
                playLine();
                setW8(false);
                break;
            case 'incBets':
                if (bet === 20) return;
                reqData = {
                    bet: bets + 1,
                    id
                }
                dispatch(postBetSlot(reqData));
                playBet();
                setW8(false);
                break;
            case 'decBets':
                if (bet === 1) return;
                reqData = {
                    bet: bets - 1,
                    id
                }
                dispatch(postBetSlot(reqData));
                playBet();
                setW8(false);
                break;
            default:
                break;
        }
    }
    const onClickBack = () => {
        setShowModal(false);
        setShowBet(false);
        setW8(false);
    }
    const checkWin = () => {
        if (result > 0) {
            if (!playedWinSound) {
                playWin();
                setPlayedWinSound(true);
            }
            return `(+${result})`;
        }
    };
    return <><Header>
        <Balance>Balance: {balance}{expense ? <Span primary={result === 0 ? true : false}>
            {result > 0 ? checkWin() : `-(${bet * lines})`}</Span> : null}</Balance>
        <LineCount>Lines:{lines}</LineCount>
        <LineCount>Bet:{bet}</LineCount>
        <LineCount>TotalBet:{bet * lines}</LineCount>
    </Header>
        <Container>
            {result > 0 && <NumberComponent number={result} />}
            <Slots start={start} lines={lines} animate={animate} />
            <ButtonsContainer>
                <audio id="audio" src="../../audio/spin.mp3"></audio>
                {!showModal && <SpinButton onClick={() => onClickLines('modalBet')} primary={false}>Bet</SpinButton>}
                {!showModal && <SpinButton primary={!auto ? false : true} onClick={() => startAnimation()}>Spin</SpinButton>}
                {!showModal && <SpinButton primary={false} onClick={() => !auto ? startAnimation("auto") : stopAnimation()}>{!auto ? "Auto" : "Stop"}</SpinButton>}
                {!showModal && <SpinButton onClick={() => onClickLines('modalLine')} primary={false}>Lines</SpinButton>}
                {showModal && <SpinButton onClick={() => onClickLines(!showBet ? 'incLines' : 'incBets')} primary={false}>+</SpinButton>}
                {showModal && <SpinButton onClick={() => onClickLines(!showBet ? 'decLines' : 'decBets')} primary={false}>-</SpinButton>}
                {showModal && <SpinButton onClick={onClickBack} primary={false}>back</SpinButton>}
            </ButtonsContainer>
        </Container></>
}