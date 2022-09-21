import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../core/store/filter/actions/filter.actions';
export default function useFilter() {
    const dispatch = useDispatch();
    const { filter } = useSelector((store) => store);
    const setFilterTextValue = (newValue) => {
        dispatch(setFilterValue(newValue));
    };
    return { setFilterTextValue, filter };
}
