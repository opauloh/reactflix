# reactflix
This project is for study purposes, it realized during our KCD - Typescript and React's Club Classes, provided by  [Kent C Dodds](https://kentcdodds.com/clubs/).

## club-react-ts
I want to say thanks to [@fmoliveira](https://github.com/fmoliveira), for accepting to mentor this React+TS Club, thanks for his time, and for sharing his valuable knowledge with industry experience in React and Typescript.

[Club Roadmap and Documentation](https://www.notion.so/React-with-TypeScript-647fb4607a0f417daca4a82a6a857769)

### things we covered so far
- React + TS Patterns : Some standards like declaring interface with Props name:
```tsx
interface Props {
  title: string;
  poster: string;
}
```
and using it: 
```tsx
const MovieCard: FC<Props> = ({title, poster}) => (
  <div className={styles.card}>
    <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`Poster for movie ${title}`} />
    <p>{title}</p>
  </div>
)
```

- Storybook : How to connect storybook in our app, and take benefits from it for development purposes while creating a living documentation.
- 

### useful extensions
- error lens: This extension can provide more visible errors as we type, pretty useful when using typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the typescript template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Starts storybook webpack server

### `yarn build-storybook`

Build storybook for production
