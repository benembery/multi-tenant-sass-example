const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const CssExtract = require("mini-css-extract-plugin")

const tenants = ['example', 'example-two']

const commonConfig = {
    entry: {
        bundle: ["./sass/main.scss"],
    }
};

const tenantConfig = (tenant) => ({
    name: tenant,
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: `${tenant}/js/[name].js`,
        filename: `${tenant}/js/[name].js`
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    CssExtract.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            extensions: [`.${tenant}.scss`, ".scss", ".sass", ".css"],
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new CssExtract({
            filename: `${tenant}/css/[name].css`,
            allChunks: true,
        })
    ]
})

const mergeConfig = (tenant) => {
    return merge(
        commonConfig,
        tenantConfig(tenant),
    )
}

const configurations = [];

tenants.forEach(t => {
    console.log("Creating tenant configuration.")
    configurations.push(mergeConfig(t))
})

console.log(configurations)

module.exports = configurations;