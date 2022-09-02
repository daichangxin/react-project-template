import path from 'path';

export const resolve = (name: string) => {
    return path.resolve(__dirname, '../..', name);
};
