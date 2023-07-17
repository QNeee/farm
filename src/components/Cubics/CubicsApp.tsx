import { useEffect } from "react";
import GameField from "./GameField";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshed } from "../../redux/chatSlice";
import { getCubicsStart } from "../../redux/cubicsOperations";


const CubicsApp = () => {
    const dispatch: AppDispatch = useDispatch();
    const refreshed = useSelector(getRefreshed);
    useEffect(() => {
        if (refreshed)
            dispatch(getCubicsStart());
    }, [dispatch, refreshed])
    return <div><GameField /></div>
}

export default CubicsApp;