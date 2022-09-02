import { FC } from 'react';
import styles from './styles.css';

export const NormalStyleSample: FC = () => {
    return <div className={styles.container}>Just do it!</div>;
};

NormalStyleSample.displayName = 'NormalStyleSample';
