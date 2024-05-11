# Change Log

All notable changes to the "basic-webdev-environment" extension will be documented in this file.

## [1.1.1]

### Update

* Updating Nuxt (*v3.7.4* **--->** v3.11.1)
* Updating Strapi (*v4.19.1* **--->** v4.20.5)

### Added features

#### Strapi-installation audit (`npm run build`)

Because of an error, which occured during `npm run build`, a strapi-installation audit is testing, if strapi is correctly installed, before running the command. If this test is successful, `npm run build` will be runned, otherwise it'll be blocked.

## [1.1.0]

### Update

* Incorrect terminal-colour compatibility fixed
* --> Adding script files (`/scripts/`)

## [1.0.0]

### Main information

* `cfnx-webdev-setup-pro` is finished! It contains Nuxt (v3.7.4) and Strapi (v4.19.1).
* This is an extremely advanced server setup to build any web application you can imagine!
* Perfect collaboration of client (Nuxt) and server (Strapi)

### Framework specialization

* Nuxt is a full-stack JavaScript framework based on Vue.js that provides server-side rendering, data fetching and many other features! [More information](https://nuxt.com/)
* Strapi is a headless CMS-system and perfect for administing content, including user management. Its very easy and clean interface makes it to a really cool backend system! [More information](https://strapi.io/)