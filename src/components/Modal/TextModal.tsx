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
  Btn,
  CombImg,
  Content,
  Overlay,
  Text,
  Container,
  Item,
  List,
  CloseButtonIcon,
  Wrapper,
  ButtonWrap,
  Wrap,
} from './TextModal.styled';
import { Button, ButtonGroup } from '@mui/material';

interface ModalProps {
  // isOpen: boolean;
  onClose: () => void;
}
interface IData {
  img: string;
  lines?: number;
  value?: number;
}
const TextModal: FC<ModalProps> = ({ onClose }) => {
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
        <CloseButtonIcon onClick={onClose} />

        <Wrap>
          <Btn disabled={lines} onClick={onClickLines}>
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
          </Btn>
          <Btn disabled={values} onClick={onClickValues}>
            {language === 'en'
              ? 'Values'
              : language === 'ru'
              ? 'Значения'
              : 'Значення'}
          </Btn>
          <Btn
            type="button"
            disabled={combination}
            onClick={onClickCombinations}
          >
            {language === 'en'
              ? 'Combination'
              : language === 'ru'
              ? 'Комбинации'
              : 'Комбінації'}
          </Btn>
        </Wrap>
        {pathname !== '/demoCubics' && pathname !== '/cubics' ? (
          <>
            {lines ? (
              <Container>
                {instrLines.length > 0 &&
                  instrLines.map((item, index) => (
                    <List key={index}>
                      <Item>
                        <Wrapper>
                          {language === 'en'
                            ? 'Line'
                            : language === 'ru'
                            ? 'Линия'
                            : 'Лінія'}

                          <Text>{item.lines}:</Text>
                        </Wrapper>
                        <img
                          src={item.img}
                          alt={index.toString()}
                          width="300"
                        />
                      </Item>
                    </List>
                  ))}
              </Container>
            ) : null}
            {values ? (
              <Container>
                {instrValues.length > 0 &&
                  instrValues.map((item, index) => (
                    <List key={index}>
                      <Item>
                        <Wrapper>
                          <img
                            src={item.img}
                            alt={index.toString()}
                            width="50"
                          />
                          <Text>={item.value}</Text>
                        </Wrapper>
                      </Item>
                    </List>
                  ))}
              </Container>
            ) : null}
            {combination ? (
              <Container>
                {instrCombination.length > 0 &&
                  instrCombination.map((item, index) => (
                    <List key={index}>
                      <Item>
                        <Wrapper>
                          {' '}
                          {language === 'en'
                            ? 'Line'
                            : language === 'ru'
                            ? 'Линия'
                            : 'Лінія'}
                          <Text>{item.lines}:</Text>
                        </Wrapper>
                        <img
                          src={item.img}
                          alt={index.toString()}
                          width="300"
                        />
                      </Item>
                    </List>
                  ))}
              </Container>
            ) : null}
          </>
        ) : (
          <>
            {lines ? (
              <Container>
                {cubicText.length > 0 &&
                  pagination(cubicText, itemsPerPageText, page).map(
                    (item, index) => (
                      <List key={index}>
                        <Item>
                          <Text>{translateFunc(item.text, language)}</Text>
                          <img
                            src={item.img}
                            alt={index.toString()}
                            width="200"
                          />
                        </Item>
                      </List>
                    )
                  )}
                <ButtonWrap>
                  <Button
                    disabled={page !== 0 ? false : true}
                    onClick={() => setPage((prev) => prev - 1)}
                    type="button"
                  >
                    {language === 'en'
                      ? 'Prev'
                      : language === 'ru'
                      ? 'Предыдущая'
                      : 'Попередня'}
                  </Button>
                  <Button
                    disabled={page < 7 ? false : true}
                    onClick={() => setPage((prev) => prev + 1)}
                    type="button"
                  >
                    {language === 'en'
                      ? 'Next'
                      : language === 'ru'
                      ? 'Следущая'
                      : 'Наступна'}
                  </Button>
                </ButtonWrap>
              </Container>
            ) : null}
            {values ? (
              <Container>
                {cubicValues.length > 0 &&
                  cubicValues.map((item, index) => (
                    <List key={index}>
                      <Item>
                        <Wrapper>
                          <img
                            src={item.img}
                            alt={index.toString()}
                            width="40"
                          />
                          <Text>={item.value}</Text>
                        </Wrapper>
                      </Item>
                    </List>
                  ))}
              </Container>
            ) : null}
            {combination ? (
              <Container>
                {cubicComb.length > 0 &&
                  pagination(cubicComb, itemsPerPageComb, page).map(
                    (item, index) => (
                      <List key={index}>
                        <Item>
                          <Text>{item.name}:</Text>
                          <CombImg
                            src={item.img}
                            alt={index.toString()}
                            width="100"
                          />
                        </Item>
                      </List>
                    )
                  )}
                <ButtonWrap>
                  <Button
                    disabled={page === 1 ? false : true}
                    onClick={() => setPage((prev) => prev - 1)}
                    type="button"
                  >
                    {language === 'en'
                      ? 'Prev'
                      : language === 'ru'
                      ? 'Предыдущая'
                      : 'Попередня'}
                  </Button>
                  <Button
                    disabled={page === 0 ? false : true}
                    onClick={() => setPage((prev) => prev + 1)}
                    type="button"
                  >
                    {language === 'en'
                      ? 'Next'
                      : language === 'ru'
                      ? 'Следущая'
                      : 'Наступна'}
                  </Button>
                </ButtonWrap>
              </Container>
            ) : null}
          </>
        )}
      </Content>
    </Overlay>
  );
};

export { TextModal };
