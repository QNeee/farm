import { FC, useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getInstructionSlot } from '../../redux/slots/slotsOperations';
import {
  getInstrCombination,
  getInstrLines,
  getInstrValues,
} from '../../redux/slots/slotsSelectors';
import { getLanguage } from '../../redux/auth/authSelectors';
import { getCubicsInstruction } from '../../redux/cubics/cubicsOperations';
import { getCubicInstr } from '../../redux/cubics/cubicsSelectors';
import { ICubicInstr } from '../../types';
import { translateFunc } from '../../translateFunc';
import {
  CloseButton,
  CombImg,
  Content,
  Overlay,
  TextLi,
} from './TextModal.styled';

interface ModalProps {
  // isOpen: boolean;
  onClose: () => void;
}
interface IData {
  img: string;
  lines?: number;
  value?: number;
}
const TextModal: FC<ModalProps> = ({ /* isOpen,  */ onClose }) => {
  // const TextModal = () => {
  // if (!isOpen) return null;
  const itemsPerPageComb = 7;
  const itemsPerPageText = 1;
  const language = useSelector(getLanguage);
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const [lines, setLines] = useState(true);
  const [values, setValues] = useState(false);
  const [combination, setCombination] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pathname === '/demoCubics' || pathname === '/cubics') {
      dispatch(getCubicsInstruction());
    } else {
      dispatch(getInstructionSlot(id));
    }
  }, [dispatch, id, pathname]);
  // if (!isOpen) return null;
  const instrValues: IData[] = useSelector(getInstrValues);
  const instrCombination: IData[] = useSelector(getInstrCombination);
  const instrLines: IData[] = useSelector(getInstrLines);
  const cubicInstr: ICubicInstr[] = useSelector(getCubicInstr);
  const cubicValues = cubicInstr.flatMap((item) => item.values);
  const cubicText = cubicInstr.flatMap((item) => item.text);
  const cubicComb = cubicInstr.flatMap((item) => item.combination);
  function pagination<T>(arr: T[], itemsCount: number, currentPage: number) {
    const startIndex = currentPage * itemsCount;
    const endIndex = startIndex + itemsCount;
    return arr.slice(startIndex, endIndex);
  }
  const onClickLines = () => {
    setPage(0);
    setValues(false);
    setCombination(false);
    setLines(!lines);
  };
  const onClickValues = () => {
    setPage(0);
    setLines(false);
    setCombination(false);
    setValues(!values);
  };
  const onClickCombinations = () => {
    setPage(0);
    setValues(false);
    setLines(false);
    setCombination(!combination);
  };
  return (
    <Overlay>
      <Content>
        <CloseButton>
          <AiOutlineCloseCircle
            onClick={onClose}
            style={{ height: 32, width: 32 }}
          />
        </CloseButton>
        <button type="button" disabled={lines} onClick={onClickLines}>
          {language === 'en'
            ? pathname !== '/demoCubics' && pathname !== '/cubics'
              ? 'Lines'
              : 'Text'
            : language === 'ru'
            ? pathname !== '/demoCubics' && pathname !== '/cubics'
              ? 'Линии'
              : 'Текст'
            : pathname !== '/demoCubics' && pathname !== '/cubics'
            ? 'Лінії'
            : 'Текст'}
        </button>
        <button type="button" disabled={values} onClick={onClickValues}>
          {language === 'en'
            ? 'Values'
            : language === 'ru'
            ? 'Значения'
            : 'Значення'}
        </button>
        <button
          type="button"
          disabled={combination}
          onClick={onClickCombinations}
        >
          {language === 'en'
            ? 'Combination'
            : language === 'ru'
            ? 'Комбинации'
            : 'Комбінації'}
        </button>
        {pathname !== '/demoCubics' && pathname !== '/cubics' ? (
          <>
            {lines ? (
              <div>
                {instrLines.length > 0 &&
                  instrLines.map((item, index) => (
                    <ul key={index}>
                      <li>
                        {language === 'en'
                          ? 'Line'
                          : language === 'ru'
                          ? 'Линия'
                          : 'Лінія'}
                        {item.lines}:
                        <img
                          src={item.img}
                          alt={index.toString()}
                          width="200"
                        />
                      </li>
                    </ul>
                  ))}
              </div>
            ) : null}
            {values ? (
              <div>
                {instrValues.length > 0 &&
                  instrValues.map((item, index) => (
                    <ul key={index}>
                      <li style={{ display: 'flex' }}>
                        <img src={item.img} alt={index.toString()} width="40" />
                        ={item.value}
                      </li>
                    </ul>
                  ))}
              </div>
            ) : null}
            {combination ? (
              <div>
                {instrCombination.length > 0 &&
                  instrCombination.map((item, index) => (
                    <ul key={index}>
                      <li>
                        {language === 'en'
                          ? 'Line'
                          : language === 'ru'
                          ? 'Линия'
                          : 'Лінія'}
                        {item.lines}:
                        <img
                          src={item.img}
                          alt={index.toString()}
                          width="200"
                        />
                      </li>
                    </ul>
                  ))}
              </div>
            ) : null}
          </>
        ) : (
          <>
            {lines ? (
              <div>
                {cubicText.length > 0 &&
                  pagination(cubicText, itemsPerPageText, page).map(
                    (item, index) => (
                      <ul key={index}>
                        <TextLi>
                          <p>{translateFunc(item.text, language)}</p>
                          <img
                            src={item.img}
                            alt={index.toString()}
                            width="200"
                          />
                        </TextLi>
                      </ul>
                    )
                  )}
                <button
                  disabled={page < 7 ? false : true}
                  onClick={() => setPage((prev) => prev + 1)}
                  type="button"
                >
                  {language === 'en'
                    ? 'Next'
                    : language === 'ru'
                    ? 'Следущая'
                    : 'Наступна'}
                </button>
                <button
                  disabled={page !== 0 ? false : true}
                  onClick={() => setPage((prev) => prev - 1)}
                  type="button"
                >
                  {language === 'en'
                    ? 'Prev'
                    : language === 'ru'
                    ? 'Предыдущая'
                    : 'Попередня'}
                </button>
              </div>
            ) : null}
            {values ? (
              <div>
                {cubicValues.length > 0 &&
                  cubicValues.map((item, index) => (
                    <ul key={index}>
                      <li style={{ display: 'flex' }}>
                        <img src={item.img} alt={index.toString()} width="40" />
                        ={item.value}
                      </li>
                    </ul>
                  ))}
              </div>
            ) : null}
            {combination ? (
              <div>
                {cubicComb.length > 0 &&
                  pagination(cubicComb, itemsPerPageComb, page).map(
                    (item, index) => (
                      <ul key={index}>
                        <li>
                          {item.name}:
                          <CombImg
                            src={item.img}
                            alt={index.toString()}
                            width="75"
                          />
                        </li>
                      </ul>
                    )
                  )}
                <button
                  disabled={page === 0 ? false : true}
                  onClick={() => setPage((prev) => prev + 1)}
                  type="button"
                >
                  {language === 'en'
                    ? 'Next'
                    : language === 'ru'
                    ? 'Следущая'
                    : 'Наступна'}
                </button>
                <button
                  disabled={page === 1 ? false : true}
                  onClick={() => setPage((prev) => prev - 1)}
                  type="button"
                >
                  {language === 'en'
                    ? 'Prev'
                    : language === 'ru'
                    ? 'Предыдущая'
                    : 'Попередня'}
                </button>
              </div>
            ) : null}
          </>
        )}
      </Content>
    </Overlay>
  );
};

export { TextModal };
