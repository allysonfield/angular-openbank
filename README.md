# [Open Bank](http://localhost:4200?ref=bda-readme) 





![Product Gif](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/20201124_160303.gif)



The project was based on the [Black Dashboard Angular](https://www.creative-tim.com/product/black-dashboard-angular#) template. I would like to be evaluated using good practices from ESLint, Prettier and Clean Code, Swagger and README documentation, API construction and usability




## Table of Contents

<!-- * [Versions](#versions) -->
* [Demo](#demo)
* [Requires API](#requires-api)
* [Languages and Frameworks ​​Used](#languages-and-frameworks-used)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)
* [Good Habits](#good-habits)

## Languages and Frameworks ​​Used 

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Typescript](https://www.typescriptlang.org/docs/)
* [HTML](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [SASS](https://sass-lang.com/documentation)
* [Angular](https://angular.io/docs)

## Good Habits

* [ESLint](https://eslint.org/docs/user-guide/configuring)
* [Prettier](https://prettier.io/docs/en/options.html)
* [Clean Code](https://medium.com/mindorks/how-to-write-clean-code-lessons-learnt-from-the-clean-code-robert-c-martin-9ffc7aef870c)


<!-- ## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard?ref=bda-readme)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-readme)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-react?ref=bda-readme)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-black-dashboard?ref=bda-readme) -->



## Demo

| Dashboard | Signin | Bank Statement | Deposit | Register |
| --- | --- | --- | --- | --- |
| [![Start page](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/dashboard.gif?raw=true)](http://localhost:4200/#/dashboard) | [![Signin page](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/login.gif?raw=true)](http://localhost:4200/#/login) | [![Bank Statement page ](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/statement.gif?raw=true)](http://localhost:4200/#/tables) | [![Deposit Page](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/deposit.gif?raw=true)](http://localhost:4200/#/deposit) | [![Register page](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/register.gif?raw=true)](http://localhost:4200/#/register)



## Requires API

Server project:

- [API repository](https://github.com/allysonfield/openbank-server?ref=bda-readme).

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve``` or ```npx ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-angular
├── CHANGELOG.md
├── documentation
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.css
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin-layout
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.scss
│   │   │   │   ├── admin-layout.component.spec.ts
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   ├── admin-layout.module.ts
│   │   │   │   └── admin-layout.routing.ts
│   │   │   └── auth-layout
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.spec.ts
│   │   │       ├── auth-layout.component.ts
│   │   │       ├── auth-layout.module.ts
│   │   │       └── auth-layout.routing.ts
│   │   └── pages
│   │       ├── dashboard
│   │       │   ├── dashboard.component.html
│   │       │   └── dashboard.component.ts
│   │       ├── icons
│   │       │   ├── icons.component.html
│   │       │   └── icons.component.ts
│   │       ├── deposit
│   │       │   ├── deposit.component.html
│   │       │   └── deposit.component.ts
│   │       ├── login
│   │       │   ├── login.component.html
│   │       │   └── login.component.ts
│   │       ├── register
│   │       │   ├── register.component.html
│   │       │   └── register.component.ts
│   │       ├── rtl
│   │       │   ├── rtl.component.html
│   │       │   └── rtl.component.ts
│   │       ├── providers
│   │       │   ├── api.service.ts
│   │       │   ├── authenticate.service.ts
│   │       │   └── routes.service.ts
│   │       ├── tables
│   │       │   ├── tables.component.html
│   │       │   └── tables.component.ts
│   │       ├── transference
│   │       │   ├── transference.component.html
│   │       │   └── transference.component.ts
│   │       └── safebox
│   │           ├── safebox.component.html
│   │           └── safebox.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── demo
│   │   ├── fonts
│   │   ├── img
│   │   └── scss
│   │       ├── black-dashboard
│   │
│   │── services
│   │   └── token.service.ts
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── tsconfig.json
├── yarn.lock
└── tslint.json
```
`
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">



## Useful Links

Social Media:

Linkedin: <https://www.linkedin.com/in/allyson-monteiro-99051b119/>

Facebook: <https://www.facebook.com/allyson.carlos.5/>

Instagram: <https://www.instagram.com/allysonfield2/>
