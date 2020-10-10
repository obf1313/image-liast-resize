/**
 * @description: tsdx 配置文件
 * @author: cnn
 * @createTime: 2020/10/10 14:03
 **/
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default'
          })
        ],
        inject: false,
        extract: 'image-easy-popup.min.css'
      })
    );
    return config;
  }
}
