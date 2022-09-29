# GitHub Topic Explorer

Browsing Github topic explorer.

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

---

[View demo here](https://www.loom.com/share/22872139b9a7461b8ea09f25dd2d0b49)

---

### Dev approach

#### Project structure

- src
  - apollo (apollo client)
  - components
    - Header (header component with search bar)
    - ResultView (search result view)
  - hook (custom hook)
  - store (context provider to store app state)
  - App.js (main application)
  - index.js (entry point)

#### Components

- Split the page into two parts - header with caption and search bar, result view part that displays the search result.
- Each components has sub-components defined inside, that are used internally within that component.

#### Styling

Used styled-component instead of writing css or scss to get benefit from its scoped styling and no-class policy. Styled components are defined within the `*.components.js` file in each component directory, so the main component doesn't mess with the styling.

#### State management and display

- Using external libraries (like Redux, React-query or Recoil) for global state management is overkill, so used React's context api to make it simple and clean.
- Defined `SearchContext` to provide search query and modifier.
- Defined `useTopicQuery` custom hook to fetch query results from Github GraphQL server and then render them on the result view.

### How to run app & test

1. Clone the repository
2. Setup all dependencies.

```
yarn install
```

3. Copy `.env.template` to `.env` and add your Github API token

```
REACT_APP_GITHUB_API_TOKEN=YOUR_TOKEN_GOES_HERE
```

4. Start the server by running the command

```
yarn start
```

5. Browse on the browser through `https://localhost:3000/`

---

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Due to the time constraint, testing solution is not implemented yet. Can integrate testing frameworks like react-testing-library to implement unit tests and e2e tests.

- We can add filtering ability to the search result view, so users can easily navigate and find out what they need.

- It would be nice to track the search history so that it could move forth and back during the search.

- Better style the components for better user experience, and also add storybook for component documentation & testing.

- Consider using Typescript within the project to ensure strong type checking.
