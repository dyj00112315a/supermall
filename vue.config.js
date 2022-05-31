const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', '@/assets')
            .set('common', '@/common')
            .set('components', '@/components')
            .set('network', '@/network')
            .set('views', '@/views')
    },
    publicPath: './',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~assets/scss/_variable.scss";`
            }
        }
    },
    lintOnSave: false
} 