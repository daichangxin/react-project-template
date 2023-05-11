import { FC } from 'react';
import { NormalStyleSample } from '../NormalStyleSample';

export const Main: FC = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <NormalStyleSample />
        </div>
    );
};
