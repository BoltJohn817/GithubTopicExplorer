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

The app is consisting of 4 parts: components, hook, store and apollo client.

The components involves the ui parts of the application. The pages is devided into 2 parts: header and view.
The header contains the search input allowing search for specific topic.
The view contains the current topic's information and the relative topics.

The data management is implemented on hook and store.
Store contains the context involving the search string to synchronous with the search input and the search view.
Hook manages fetching data from github graphql server.

The apollo client is for creating connection to the github graphql server.

---

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

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

  Due to the size of the app, the folder structure lacks a degree of organzation; mainly on the components for result view.

  Because the components are used only once on the project, the components are stricted to local scope and not to global scoped.

- Refactoring:
  The `ResultView` is manages the state of the fetching query and the error handling is involved in the component. It can be implemented with the HOC or Suspense.

  For rapid commit, the unit testing hasn't been implemented here. 
- Additional Features:
  A very obvious improvement would be to add filtering to the order of the related topics; either by name or amount of stargazers on that particular topic.
  
  It only displays current search result and doesn't tracking the search history, It could move forward and backforward while searching the proper result.