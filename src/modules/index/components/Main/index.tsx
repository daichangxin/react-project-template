import { FC } from 'react';
import { NormalStyleSample } from '../NormalStyleSample';
import { ReduxSample } from '../ReduxSample';

export const Main: FC = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <NormalStyleSample />
            <ReduxSample />
        </div>
    );
};
Main.displayName = 'Main';
