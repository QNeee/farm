import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as FlagEn } from '../../images/gb.svg';
import { ReactComponent as FlagUa } from '../../images/ua.svg';
import { getLanguage } from '../../redux/auth/authSelectors';
import { setLanguage } from '../../redux/auth/authSlice';
import { AppDispatch } from '../../redux/store';

const SelectLang = () => {
  const dispatch: AppDispatch = useDispatch();
  const language = useSelector(getLanguage);

  const onChange = (e: { target: { value: any } }) =>
    dispatch(setLanguage(e.target.value));

  return (
    <>
      <FormControl /* fullWidth */>
        <Select
          onChange={onChange}
          value={language}
          sx={{ border: 0, height: 40 }}
        >
          <MenuItem value="en">
            <FlagEn style={{ width: 20, marginRight: 10 }} />
            en
          </MenuItem>
          <MenuItem value="ua">
            <FlagUa style={{ width: 20, marginRight: 10 }} />
            ua
          </MenuItem>
          <MenuItem value="ru">
            <FlagUa style={{ width: 20, marginRight: 10 }} />
            ru
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export { SelectLang };
