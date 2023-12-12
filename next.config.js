/*
* Martfury - Multipurpose Marketplace React Ecommerce Template v2.2.0
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Update at: 2021-07-13T00:11:04+07:00

* */

const nextSettings = {
    optimizeFonts: false,
    // disable eslint
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Change your site title here
    env: {
        title: 'RepuestosGO.com',
        titleDescription: 'Repuestos y herramientas a tu alcance',
    },
};

module.exports = {
    ...nextSettings,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(pem|key)$/,
            use: 'raw-loader',
        });
  
        return config;
    },
};
