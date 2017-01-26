module.exports = app => {
    const env = process.env.NODE_ENV;
    if (env) {
        // console.log(`./config.${env}.js` + ' Selecionado!!');
        return require(`./config.${env}.js`);
    }
    return require ("./config.development.js");
};
