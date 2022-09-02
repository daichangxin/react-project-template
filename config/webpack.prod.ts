import DotenvWebpackPlugin from 'dotenv-webpack';
import { WebpackPluginInstance } from 'webpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import { resolve } from './utils/resolve';
import { generate } from './webpack.base';

const base = generate(true);
const basePlugins = base.plugins as WebpackPluginInstance[];

const config = {
    ...base,
    plugins: [...basePlugins, new DotenvWebpackPlugin({ path: resolve('.env.prod') })],
} as WebpackConfiguration;

export default config;
