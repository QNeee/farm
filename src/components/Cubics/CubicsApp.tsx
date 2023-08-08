import { useEffect } from "react";
import GameField from "./GameField";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshed } from "../../redux/auth/authSelectors";
import { getCubicsStart } from "../../redux/cubics/cubicsOperations";
import { useLocation } from "react-router";


const CubicsApp = () => {
    const dispatch: AppDispatch = useDispatch();
    const refreshed = useSelector(getRefreshed);
    const { pathname } = useLocation();
    const namePath = pathname.split('/')[1];
    useEffect(() => {
        if (refreshed || namePath === 'cubicsDemo')
            dispatch(getCubicsStart());
    }, [dispatch, refreshed, namePath])
    return <div><GameField /></div>
}

export default CubicsApp;