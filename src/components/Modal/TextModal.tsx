import { FC, useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Overlay, Content, CloseButton } from './NumberModal.styled';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getInstructionSlot } from '../../redux/slots/slotsOperations';
import { getInstrCombination, getInstrLines, getInstrValues } from '../../redux/slots/slotsSelectors';
import { getLanguage } from '../../redux/auth/authSelectors';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
interface IData {
  img: string,
  lines?: number,
  value?: number
}
const TextModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const language = useSelector(getLanguage);
  const dispatch: AppDispatch = useDispatch();
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const [lines, setLines] = useState(true);
  const [values, setValues] = useState(false);
  const [combination, setCombination] = useState(false);
  useEffect(() => {
    dispatch(getInstructionSlot(id));
  }, [dispatch, id])
  if (!isOpen) return null;
  const instrValues: IData[] = useSelector(getInstrValues);
  const instrCombination: IData[] = useSelector(getInstrCombination);
  const instrLines: IData[] = useSelector(getInstrLines);
  const onClickLines = () => {
    setValues(false);
    setCombination(false);
    setLines(!lines);
  }
  const onClickValues = () => {
    setLines(false);
    setCombination(false);
    setValues(!values);
  }
  const onClickCombinations = () => {
    setValues(false);
    setLines(false);
    setCombination(!combination);
  }
  return (
    <Overlay>
      <Content>
        <CloseButton>
          <AiOutlineCloseCircle
            onClick={onClose}
            style={{ height: 32, width: 32 }}
          />
        </CloseButton>
        <button type='button' disabled={lines} onClick={onClickLines}>{language === 'en' ? 'Lines' : language === 'ru' ? 'Линии' : 'Лінії'}
        </button>
        <button type='button' disabled={values} onClick={onClickValues}>{language === 'en' ? 'Values' : language === 'ru' ? 'Значения' : 'Знаяення'}
        </button>
        <button type='button' disabled={combination} onClick={onClickCombinations}>{language === 'en' ? 'Combination' : language === 'ru' ? 'Комбинации' : 'Комбінації'}
        </button>
        {lines ? <div>
          {instrLines.length > 0 && instrLines.map((item, index) => <ul key={index}>
            <li>{language === 'en' ? 'Line' : language === 'ru' ? 'Линия' : 'Лінія'}
              {item.lines}:<img src={item.img} alt={index.toString()} width='200' /></li>
          </ul>)}
        </div> : null}
        {values ? <div>
          {instrValues.length > 0 && instrValues.map((item, index) => <ul key={index}>
            <li style={{ display: 'flex' }}><img src={item.img} alt={index.toString()} width='40' />={item.value}</li>
          </ul>)}
        </div> : null}
        {combination ? <div>
          {instrCombination.length > 0 && instrCombination.map((item, index) => <ul key={index}>
            <li>{language === 'en' ? 'Line' : language === 'ru' ? 'Линия' : 'Лінія'}
              {item.lines}:<img src={item.img} alt={index.toString()} width='200' /></li>
          </ul>)}
        </div> : null}
      </Content>
    </Overlay>
  );
};

export { TextModal };
