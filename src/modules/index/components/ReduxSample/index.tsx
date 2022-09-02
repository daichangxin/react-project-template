import { FC, useCallback, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../store/StoreProvider';
import { decremented, fetchIncrementCount, incremented } from '../../../../store/counterSlice';

export const ReduxSample: FC = () => {
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
        <div className="flex flex-col items-center">
            <p>hello, count:{count}</p>
            <div>
                <button className="text-blue-500 mx-3" onClick={onIncrementedClick}>
                    incremented
                </button>
                <button className="text-blue-500 mx-3" onClick={onDecrementedClick}>
                    decremented
                </button>
            </div>
        </div>
    );
};
ReduxSample.displayName = 'ReduxSample';
