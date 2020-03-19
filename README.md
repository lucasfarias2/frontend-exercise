# frontend-exercise

Front-end exercise for bol.com

## Stack information

- Node 12.10.0 (use nvm)
- React
- Redux
- Express
- Typescript
- Webpack
- TSLint
- Prettier
- Yarn
- Jest / React Testing Library

## Scaffolding information

- `/assets` -> Assets you provided
- `/build` -> Server side bundles files
- `/static` -> Client side bundles files
- `/src` -> Main app src folder

  - `/client` -> Client side files

    - `/actions` -> Redux Actions
    - `/entries` -> Webpack entry points / React Hydrates
    - `/reducers` -> Redux Reducers
    - `/services` -> Client side services like LocalStorage handler

  - `/server` -> Server side files

    - `/controllers` -> Server controllers. To handle fetch and render.
    - `/middlewares` -> Middlewares like device detection, render methods, etc.
    - `/services` -> Services to fetch server side.

  - `/shared` -> Client & Server side files. (Isomorphic)
    - `/controls` -> UI controls components
    - `/icons` -> UI Icon
    - `/utils` -> Some tools
    - `/views` -> View Components used by Hydrates and Render To Strings.
    - `/widgets` -> Segments of the UI with some specific business logic and purpose.

## Development guide

1. `git clone` the repository
2. Run `nvm use` to set the default project nodejs version
3. Run `yarn` or `npm i` to download the projects dependencies
4. Run `yarn build` to build the assets or `yarn watch` to build under development
5. Run `yarn start` to start the server on port 8080
6. Access the application at `http://localhost:8080`
7. Access via desktop/mobile simulation to see different pages by device.

## Testing

- Run `yarn test` or `yarn test:watch` to execute unit testing.

## Screenshots

|Mobile|Desktop|
|--|--|
|![mobile](https://i.imgur.com/vQd7uzR.png)|![desktop](https://i.imgur.com/wwQWnnL.png)|
|--|--|

## More Info

- I definitely wouldn't use this complex architecture just to make a Multi-Select component. The whole purpose is to show how I would manage a new scalable front-end stack architecture from the ground.
- SSR is nice to improve performance & first meaningful content (besides SEO).
- With a little bit or more time I would definitely increase coverage and accessibility patterns to the DOM elements.
- Thought using LocalStorage was good enough to handle this solution. Saving filters is probably a front-end issue rather than a back-end issue so didn't want to jump into databases/api to solve this.
