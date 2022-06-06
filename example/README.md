# Gatsby Theme Example

## Description

A usage of gatsby theme strapi

### Adding `.npmrc` file

Make sure to add a `.npmrc` file with the following content:

```shell
@masonyekta:registry=https://npm.pkg.github.com
// @OWNER:registry=https://npm.pkg.github.com
```

This can be changed in future if launching the project in an organization account.
Changing `@OWNER` with the name of the user or organization account that owns the repository

### Login to GitHub

Then login to GitHub (since we are hosting this in a private repo):

```shell
npm login --scope=@OWNER --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

Token is the token you created to access repos and packages with read and wrie permission.
This can be changed in future for other repos or organizations.
Read this article: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

### Install the package

```shell
npm install @masonyekta/gatsby-theme-strapi@1.0.0
```

### Run dev server

Run `gatsby devevelop` to start the dev server. You can no start shadowing the theme.

```shell
gatsby develop
```
