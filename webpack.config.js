const defaults = require("@wordpress/scripts/config/webpack.config");
const Dotenv = require("dotenv-webpack");

defaults.plugins.push(new Dotenv());

module.exports = {
  ...defaults,
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
