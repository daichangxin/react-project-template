import DotenvWebpackPlugin from 'dotenv-webpack';
import { WebpackPluginInstance } from 'webpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import { resolve } from './utils/resolve';
import { generate } from './webpack.base';

const base = generate(false);
const basePlugins = base.plugins as WebpackPluginInstance[];

const config = {
    ...base,
    devServer: {
        static: {
            directory: resolve('dist'),
        },
        compress: true,
        host: 'local-ipv4',
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [...basePlugins, new DotenvWebpackPlugin({ path: resolve('.env') })],
} as WebpackConfiguration;

export default config;
