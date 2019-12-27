# Overview

This repository contains code for the website of **Dobra Praktyka Żeglarska NGO**.
The page is written using [GatsbyJS](https://www.gatsbyjs.org/), a React-based framework for building static websites using SSR.

For styling, [Styled Components](https://www.styled-components.com/) library is used. 

## Requirements

 1. Node v10.16.0
 2. Gatsby CLI v2.8.22

## How to run

 1. Clone this repository to your local machine.
 2. If you are using **Node Version Manager**, run `nvm use`, otherwise make sure you are using Node version which is stored in `.nvmrc` file.
 3. Run `npm install`
 4. **For development**, run `gatsby develop` - this will run a hot-reloaded server from gatsby CLI service
 5. **To build** the project run `gatsby build`. The output will be compiled into `public` directory.
 6. To run the build from `public/` locally, run `gatsby serve`.

This is a project using **Gatsby** and **Gatsby CLI** so for any further configuration and possible tasks/scripts you can search Gatsby's docs.

## Files and folders

The `src/` directory stores:

 - `assets/` where all static assets used by components are stored (images, videos etc.)
 - `components/` where all components used to compose pages are stored
 - `pages/` where all site's page components are stored - this is a special directory for Gatsby to create routes, it should not be renamed
 - `settings` any miscellaneous modules/settings/helpers/constants

Components in the `components/` directory should be grouped into folders if needed, which means if there is a subcomponent used in another one (and only there), they should be moved to a seperate directory which has an `index.js` file which exports the top-most component as default.

## Styling

This project uses [Styled Components](https://www.styled-components.com/) along with a dedicated Styled Components plugin for Gatsby. 

Styled components for a certain component should be stored in one of two ways:

 - inside the file of the component, after `import` statements
 - outside the file of the component, in the same directory in a file called `partials.js`

The decision which solution to choose should be made by the developer based on the amount and complexity of the styled components in order to avoid trashing the main component file with styling. On the other hand if there is one/few styled components (or the component is only a styled component instance) - they should be kept in a single file to keep readability and simplicity.

## Code worth mentioning

#### src/components/PageLayout.js
A wrapper component for all pages. Renders menu and footer, places the content in `<main>` HTML tag. Has an option to render "Under construction" placeholder.

#### src/components/SEO.js
Component responsible for injecting SEO related meta tags into pages. Should be a child of `Page`.

#### src/componetns/WindowCheck.js
A helper component used to check if there is a `window` global variable in the scope. Some libraries rely on this and will fail a server side render. To avoid this, components which require `window` can be wrapped by this component. Only if `window` is defined, children of the component are rendered.

#### src/settings/menu.json
JSON structure of the main menu, used by `Menu` component. May be removed if the menu tree will be obtained from CMS in the future.

## CMS

TBD
Planning to use prismic.io.

## GIT and deployment

Git flow is to be discussed and worked out.
For now:

 - create a feature branch for each feature/click up task
 - feature branches should be Pull requested and reviewed before merging to source branch
 - `dev` branch is the one to start feature branches from and merge to
 - fixes can be made in branches as well as commited directly in `dev` or `master`
 - hotfixes made on `master` should be merged into `dev` after being successfully verified
 - use [ClickUp's task ID](https://docs.clickup.com/en/articles/856285-github) in the name of the branch and PR (but also follow it with a feature name
 - [write commit messages](https://medium.com/@steveamaza/how-to-write-a-proper-git-commit-message-e028865e5791)

TBD:
Two instances of the website will be autodeployed from `dev` and `master`:

 - `dev.depezet.com` from `dev`
 - `depezet.com` from `master`

If there will be a need for that, we'll create another instance (`stage.depezet.com`) for QA which will use `master` code and use `prod` branch as the one for production instance. 

## Tests
No unit testing is done and planned for now. Geez, it's only a website.

## Development notes

Project management is handled in [ClickUp](https://clickup.com).

Design mock ups are prepared in [Adobe XD](https://www.adobe.com/products/xd.html). The mockups can be accessed via links inside ClickUp Project docs.

Happy coding!
