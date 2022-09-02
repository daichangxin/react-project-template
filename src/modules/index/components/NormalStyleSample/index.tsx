import { FC } from 'react';
import styles from './styles.css';

export const NormalStyleSample: FC = () => {
    return (
        <div className={styles.container}>
            Just do it!
            <div className="flex ">
                <button className="bg-avatar-default w-80 h-80 bg-no-repeat" />
                <button className="bg-[url('/src/assets/images/avatars/default.png')] w-80 h-80 bg-no-repeat" />
            </div>
        </div>
    );
};

NormalStyleSample.displayName = 'NormalStyleSample';
