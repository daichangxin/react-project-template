import { FC } from 'react';
import { NormalStyleSample } from '../NormalStyleSample';
import { ReduxSample } from '../ReduxSample';

export const Main: FC = () => {
    return (
        <div>
            <ReduxSample />
            <NormalStyleSample />
        </div>
    );
};
Main.displayName = 'Main';
