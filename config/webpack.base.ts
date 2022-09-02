import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import os from 'os';
import TerserPlugin from 'terser-webpack-plugin';
import { EntryObject } from 'webpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import { getWebpackEntries } from './utils/getWebpackEntries';
import { resolve } from './utils/resolve';

const clientRoot = resolve('src');

export const generate = (isOptimization: boolean): WebpackConfiguration => {
    console.log(`webpack build, isOptimization:${isOptimization}`);
    const entries: EntryObject = {};
    const htmlPlugins: HtmlWebpackPlugin[] = [];

    // vendor entry
    entries['vendor'] = ['react', 'react-dom', '@reduxjs/toolkit', 'react-redux'];

    // html entries
    const rawEntries = getWebpackEntries(clientRoot);
    console.log('entry', rawEntries);
    rawEntries.forEach((entry) => {
        const entryName = entry.entryName;
        entries[entryName] = {
            import: [resolve('src/autoload.ts'), entry.entry],
            dependOn: 'vendor',
        };

        /**
         * @type {import('html-webpack-plugin'.Options)[]}
         */
        const htmlPluginOptions: HtmlWebpackPlugin.Options = {
            inject: true,
            filename: `${entry.entryName}.html`,
            template: entry.html,
            chunks: entryName ? ['vendor', entryName] : [],
            publicPath: '/',
        };
        htmlPlugins.push(new HtmlWebpackPlugin(htmlPluginOptions));
    });

    // html plugins
    return {
        mode: isOptimization ? 'production' : 'development',
        devtool: isOptimization ? false : 'source-map',
        entry: entries,
        output: {
            path: resolve('dist'),
            filename: isOptimization ? '[name].[contenthash:8].js' : '[name].bundle.js',
            chunkFilename: isOptimization ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js',
            assetModuleFilename: '[name].[contenthash:8][ext][query]',
        },
        plugins: [...htmlPlugins, new MiniCssExtractPlugin()],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(svg|png|jpg|jpeg|gif|woff|woff2|eot|ttf|mp3|webp)$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 1024, // 1kb
                        },
                    },
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
                    include: [resolve('src/assets/css/global.css'), resolve('node_modules')],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: false,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]_[local]-[hash:8]',
                                },
                            },
                        },
                        'postcss-loader',
                    ],
                    include: [clientRoot],
                    exclude: [resolve('src/assets/css/global.css')],
                },
            ],
        },
        optimization: {
            minimize: isOptimization,
            minimizer: isOptimization
                ? [
                      new TerserPlugin({
                          parallel: os.cpus().length,
                          extractComments: false,
                          terserOptions: {
                              output: {
                                  comments: false,
                              },
                              mangle: true,
                          },
                      }),
                  ]
                : undefined,
        },
    };
};
