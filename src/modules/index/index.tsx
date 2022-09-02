import { FC } from 'react';
import { StoreProvider } from '../../store/StoreProvider';
import { Main } from './components/Main';

export const Index: FC = () => {
    return (
        <StoreProvider>
            <Main />
        </StoreProvider>
    );
};

Index.displayName = 'Index';
