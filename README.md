# [Open Bank](http://localhost:4200?ref=bda-readme) 





![Product Gif](https://raw.githubusercontent.com/allysonfield/public-assets/master/gifs/20201124_160303.gif)


Black Dashboard Angular is a beautiful [Bootstrap 4](http://getbootstrap.com/) and [Angular](https://angular.io/) Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.
Black Dashboard Angular comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Black Dashboard Angular features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.

Special thanks go for the owners of these plugins:
- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/home) for the wonderful components.
- [Chartjs](https://www.chartjs.org/) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

**Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

## Table of Contents

<!-- * [Versions](#versions) -->
* [Demo](#demo)
* [Requires API](#requires-api)
* [Languages and Frameworks ​​Used](#languages-and-frameworks-used)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
<!-- * [Resources](#resources) -->
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Languages and Frameworks ​​Used 

<!-- * [Versions](#versions) -->
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Typescript](https://www.typescriptlang.org/docs/)
<!-- * [Documentation](#documentation) -->
<!-- * [NoSql](#file-structure) -->
* [HTML](https://devdocs.io/html/)
<!-- * [Resources](#resources) -->
* [CSS](https://devdocs.io/css/)
* [SASS](https://sass-lang.com/documentation)
* [Angular](https://angular.io/docs)


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


<!-- ## Resources
- Demo: https://demos.creative-tim.com/black-dashboard-angular/#/dashboard?ref=bda-readme
- Download Page: https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-readme
- Documentation: https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-readme
- License Agreement: https://www.creative-tim.com/license?ref=bda-readme
- Support: https://www.creative-tim.com/contact-us?ref=bda-readme
- Issues: [Github Issues Page](https://github.com/creativetimofficial/black-dashboard-angular/issues?ref=bda-readme) -->

<!-- ## Reporting Issues
We use GitHub Issues as the official bug tracker for the black Dashboard Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the black Dashboard Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help. -->

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us?ref=bda-readme) instead of opening an issue.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com?ref=bda-readme)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-angular/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products?ref=bda-readme>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products?ref=bda-readme>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new?ref=bda-readme>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
