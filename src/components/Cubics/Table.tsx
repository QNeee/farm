import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import ResultRenderSchool from './ResultRenderSchool';
import ResultRenderOther from './ResultRenderOther';
import { getLanguage, getRefreshed } from '../../redux/auth/authSelectors';
import {
  getCubicsResultData,
  getCubicsResultRenderPcOther,
  getCubicsResultRenderPcSchool,
  getCubicsResultRenderUserOther,
  getCubicsResultRenderUserSchool,
  getOther,
  getSchool,
  getStartGame,
} from '../../redux/cubics/cubicsSelectors';
import {
  getCubicsResult,
  getCubicsResultRender,
  getCubicsTable,
  postCubicResultCherk,
  postCubicResultOther,
  postCubicResultSchool,
} from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';
import {
  TableHeader,
  Wrapper,
  TableCell,
  TableContainer,
  TableRow,
} from './Table.styled';
import { ICubicsResultTable } from '../../types';

const Table: React.FC = () => {
  const language = useSelector(getLanguage);
  const cubicKey = 'cubicId';
  const [w8, setW8] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const refreshed = useSelector(getRefreshed);
  const cubicsResult = useSelector(getCubicsResultData);
  const cubicResultRenderUserSchool = useSelector(
    getCubicsResultRenderUserSchool
  );
  const cubicResultRenderPcSchool = useSelector(getCubicsResultRenderPcSchool);
  const cubicResultRenderUserOther = useSelector(
    getCubicsResultRenderUserOther
  );
  const cubicResultRenderPcOther = useSelector(getCubicsResultRenderPcOther);
  const ids: string[] = [
    'wl9pa',
    'sum',
    'pair',
    'small',
    'big',
    'triangle',
    'sqr',
    'fx',
    'poker',
  ];
  const { pathname } = useLocation();
  const namePath = pathname.split('/')[1];
  const id = localStorage.getItem(cubicKey);
  useEffect(() => {
    if (refreshed || namePath === 'demoCubics') {
      if (namePath === 'demoCubics') {
        dispatch(getCubicsTable('demo')).then(() => {
          if (id) {
            dispatch(getCubicsResult(id)).then(() => {
              dispatch(getCubicsResultRender(id));
            });
          }
        });
      } else {
        dispatch(getCubicsTable('')).then(() => {
          dispatch(getCubicsResult('')).then(() => {
            dispatch(getCubicsResultRender(''));
          });
        });
      }
    }
  }, [dispatch, refreshed, namePath, id]);
  const school: string[] | null = useSelector(getSchool);
  const others: string[] | null = useSelector(getOther);
  useEffect(() => {
    const updateElements = (cubicResultRender: ICubicsResultTable[] | null, type: string) => {
      if (cubicResultRender) {
        for (const elem of cubicResultRender) {
          const index = type === 'user' || type === 'pc' ? elem.number : elem.combination;
          const el = document.getElementById(`${type === 'user' || type === 'pc' ? parseInt(index) - 1 : index} ${type}`);
          if (el) {
            el.textContent = elem.textContent;
          }
        }
      } else {
        const allElements = document.querySelectorAll(`[id$=" ${type}"]`);
        allElements.forEach((el) => {
          el.textContent = '';
        });
      }
    };
    updateElements(cubicResultRenderUserSchool, 'user');
    updateElements(cubicResultRenderPcSchool, 'pc');
    updateElements(cubicResultRenderUserOther, 'userOther');
    updateElements(cubicResultRenderPcOther, 'pcOther');
  }, [
    cubicResultRenderUserSchool,
    cubicResultRenderPcSchool,
    cubicResultRenderUserOther,
    cubicResultRenderPcOther,
  ]);
  const onClickTableSchool = async () => {
    if (w8) return;
    setW8(true);
    const results: string[] = ['schoolX', 'school'];
    const result = cubicsResult
      ? cubicsResult
        .filter((item) => results.includes(item.result.split(' ')[0]))
        .flatMap((item) => item.result)
        .join('')
      : null;
    const requestData = {
      data: result && result,
    };
    if (requestData.data === '' || requestData.data === null) {
      setW8(false);
      return;
    }
    if (namePath === 'demoCubics') {
      const newArr = [];
      newArr.push(localStorage.getItem(cubicKey) as string);
      newArr.push(requestData);
      await dispatch(postCubicResultSchool(newArr));
    } else {
      await dispatch(postCubicResultSchool(requestData));
    }
    setW8(false);
  };
  const onClickTableOther = async (id: string) => {
    if (w8) return;
    setW8(true);
    const result = cubicsResult
      ? cubicsResult
        .filter((item) => id === item.result.split(' ')[0])
        .flatMap((item) => item.result)
        .join(' ')
      : null;
    const cross = cubicsResult
      ? cubicsResult.filter((item) => item.result === 'cross')
      : null;
    if (cross?.length === 0) {
      if ((result?.length as number) > 0) {
        const requestData = {
          data: result && result,
        };
        if (namePath === 'demoCubics') {
          const newArr = [];
          newArr.push(localStorage.getItem(cubicKey) as string);
          newArr.push(requestData);
          await dispatch(postCubicResultOther(newArr));
        } else {
          await dispatch(postCubicResultOther(requestData));
        }
      } else {
        setW8(false);
        return;
      }
    } else {
      if ((cross?.length as number) > 0) {
        const el = document.getElementById(id + ' userOther');
        if (id === 'wl9pa' || id === 'sum') return setW8(false);
        const requestData = {
          data: el && id + ' ' + el.textContent,
        };
        if (namePath === 'demoCubics') {
          const newArr = [];
          newArr.push(localStorage.getItem(cubicKey) as string);
          newArr.push(requestData);
          await dispatch(postCubicResultCherk(newArr));
        } else {
          await dispatch(postCubicResultCherk(requestData));
        }
      } else {
        setW8(false);
        return;
      }
    }
    setW8(false);
  };
  const translateTable = (name: string, flag: string) => {
    let text = '';
    switch (flag) {
      case 'school':
        switch (name) {
          case 'Одиниці':
            language === 'en'
              ? (text = 'Ones')
              : language === 'ru'
                ? (text = 'Единицы')
                : (text = 'Одиниці');
            break;
          case 'Двійки':
            language === 'en'
              ? (text = 'Twos')
              : language === 'ru'
                ? (text = 'Двойки')
                : (text = 'Двійки');

            break;
          case 'Трійки':
            language === 'en'
              ? (text = 'Threes')
              : language === 'ru'
                ? (text = 'Тройки')
                : (text = 'Трійки');

            break;
          case 'Четвірки':
            language === 'en'
              ? (text = 'Fours')
              : language === 'ru'
                ? (text = 'Четвёрки')
                : (text = 'Четвірки');

            break;
          case 'Пятірки':
            language === 'en'
              ? (text = 'Fives')
              : language === 'ru'
                ? (text = 'Пятёрки')
                : (text = "П'ятірки");

            break;
          case 'Шестірки':
            language === 'en'
              ? (text = 'Sixs')
              : language === 'ru'
                ? (text = 'Шестёрки')
                : (text = 'Шестірки');

            break;
          default:
            break;
        }
        break;
      case 'other':
        switch (name) {
          case 'Шляпа':
            language === 'en'
              ? (text = 'Hat')
              : language === 'ru'
                ? (text = 'Шляпа')
                : (text = 'Шляпа');
            break;
          case 'Сума':
            language === 'en'
              ? (text = 'Sum')
              : language === 'ru'
                ? (text = 'Сумма')
                : (text = 'Сума');

            break;
          case 'Пара':
            language === 'en'
              ? (text = 'Pairs')
              : language === 'ru'
                ? (text = 'Пара')
                : (text = 'Пара');

            break;
          case 'Мала':
            language === 'en'
              ? (text = 'Small')
              : language === 'ru'
                ? (text = 'Малая')
                : (text = 'Мала');

            break;
          case 'Велика':
            language === 'en'
              ? (text = 'Large')
              : language === 'ru'
                ? (text = 'Большая')
                : (text = 'Велика');

            break;
          case 'Трикутник':
            language === 'en'
              ? (text = 'Triangle')
              : language === 'ru'
                ? (text = 'Треугольник')
                : (text = 'Трикутник');

            break;
          case 'Квадрат':
            language === 'en'
              ? (text = 'square')
              : language === 'ru'
                ? (text = 'Квадрат')
                : (text = 'Квадрат');

            break;
          case 'ФХ':
            language === 'en'
              ? (text = 'FH')
              : language === 'ru'
                ? (text = 'ФХ')
                : (text = 'ФХ');

            break;
          case 'Покер':
            language === 'en'
              ? (text = 'Poker')
              : language === 'ru'
                ? (text = 'Покер')
                : (text = 'Покер');

            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    return text;
  };
  return (
    <Wrapper>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader></TableHeader>
            <TableHeader>
              {language === 'en' ? 'You' : language === 'ru' ? 'Вы' : 'Ви'}
            </TableHeader>
            <TableHeader>
              {language === 'en' ? 'PC' : language === 'ru' ? 'ПК' : 'ПК'}
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {school?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{translateTable(item, 'school')}</TableCell>
              <TableCell
                onClick={() => onClickTableSchool()}
                key={index + ' user'}
                id={index + ' user'}
              >
                <ResultRenderSchool cubicsResult={cubicsResult} />
              </TableCell>
              <TableCell key={index + ' pc'} id={index + ' pc'}></TableCell>
            </TableRow>
          ))}

          {others?.map((item, index) => (
            <TableRow key={index}>
              <TableCell key={index}>{translateTable(item, 'other')}</TableCell>
              <TableCell
                onClick={() => onClickTableOther(ids[index])}
                key={index + ' userOther'}
                id={ids[index] + ' userOther'}
              >
                <ResultRenderOther cubicsResult={cubicsResult} />
              </TableCell>
              <TableCell
                key={ids[index] + ' pcOther'}
                id={ids[index] + ' pcOther'}
              ></TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </Wrapper>
  );
};

export default Table;
