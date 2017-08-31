module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    // Turn off requiring jsx files for jsx
    "react/jsx-filename-extension": 0,

    // href-no-hash has issues, this is a work around
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],

    // prevent error when loading dev depenencies in webpack files
    "import/no-extraneous-dependencies": [
      "error", { "devDependencies": [ "**/webpack.*.js" ] }
    ],
  },
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack/webpack.base.js",
      },
    },
  },
}
