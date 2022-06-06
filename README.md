# Gatsby Theme Strapi workspace

A workspace for creating a Gatsby Strapi Theme.

```shell
gatsby new theme https://github.com/masonyekta/gatsby-theme-strapi-workspace
cd theme
yarn workspace example develop
```

## Layout

```text
.
├── README.md
├── gatsby-theme-strapi
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### `gatsby-theme-strapi`

This directory is the theme package itself.

### `example`

This is an example usage of the theme.

You can run the example with:

```shell
yarn workspace example develop
```

### Publish Package Locally

This should change in future work with CircleCI

```shell
npm login --scope=@OWNER --registry=https://npm.pkg.github.com
npm publish
```
