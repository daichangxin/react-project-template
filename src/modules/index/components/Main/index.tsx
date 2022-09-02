import { FC, useCallback, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../store/StoreProvider';
import { decremented, fetchIncrementCount, incremented } from '../../../../store/counterSlice';

export const Main: FC = () => {
    const count = useTypedSelector((state) => state.counter.value);
    const dispatch = useTypedDispatch();

    const onIncrementedClick = useCallback(() => {
        dispatch(incremented(1));
    }, [dispatch]);

    const onDecrementedClick = useCallback(() => {
        dispatch(decremented());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchIncrementCount(10));
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [dispatch]);

    return (
        <div>
            <p>hello, count:{count}</p>
            <button onClick={onIncrementedClick}>incremented</button>
            <button onClick={onDecrementedClick}>decremented</button>
        </div>
    );
};
Main.displayName = 'Main';
