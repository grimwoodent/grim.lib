const babel = require('rollup-plugin-babel');
const typescript2 = require('rollup-plugin-typescript2');
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package');

pkg.name = pkg.name.replace('js', '');

const name = changeCase.pascalCase(pkg.name);
const banner = createBanner({
    data: {
        name: `${name}.js`,
        year: new Date().getFullYear(),
    },
});

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            banner,
            name,
            file: `dist/${pkg.name}.js`,
            format: 'umd',
        },
        {
            banner,
            file: `dist/${pkg.name}.common.js`,
            format: 'cjs',
        },
        {
            banner,
            file: `dist/${pkg.name}.esm.js`,
            format: 'esm',
        },
    ],
    plugins: [
        typescript2({
            tsconfig: "tsconfig.json",
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: [],
        }),
    ],
};