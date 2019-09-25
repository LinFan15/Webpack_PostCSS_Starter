module.exports = (ctx) => ({
    plugins: [
        require('postcss-import')(),
        require('postcss-preset-env')(),
        require('precss')(),
        require('autoprefixer')(),
        require('lost')(),
        ctx.env.trim() === 'production' ? require('cssnano')() : false, 
    ]
})