/* eslint-disable import/no-unused-modules */

import { Action, ThunkAction } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../store';

export const StoreProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
StoreProvider.displayName = 'StoreProvider';

export type ReduxState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
