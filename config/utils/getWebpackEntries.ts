import fs from 'fs';
import path from 'path';

const getHTMLFiles = (root: string) => {
    const result: string[] = [];
    const getFile = (file: string) => {
        if (fs.statSync(file).isDirectory()) {
            const children = fs.readdirSync(file);
            children.forEach((item) => {
                getFile(path.join(file, item));
            });
            return;
        }

        if (path.extname(file) === '.html') {
            result.push(file);
        }
    };
    getFile(root);
    return result;
};

const entryExtensions = ['.js', '.ts', '.jsx', '.tsx'];
const getEntryByHTMLFile = (htmlFile: string) => {
    let result = '';
    entryExtensions.some((ext) => {
        const file = htmlFile.replace('.html', ext);
        if (fs.existsSync(file)) {
            result = file;
            return true;
        }
        return false;
    });
    return result;
};

export const getWebpackEntries = (rootPath: string) => {
    const files = getHTMLFiles(rootPath);
    return files.map((file) => ({
        entryName: path.relative(rootPath, file).replace('.html', ''),
        entry: getEntryByHTMLFile(file),
        html: file,
    }));
};
