# #VANLIFE

## Table of Contents

- [Live version](#live-version)
- [Project Overview](#project-overview)

  - [Description](#description)
  - [Features](#features)
  - [Figma design](#figma-design)
  - [Main topics learned](#main-topics-learned)
  - [Technologies used](#technologies-used)
  - [Disclaimers](#disclaimers)
  - [To-Dos](#to-dos)

- [React Router glossary](#react-router-glossary)

## Live version

You can check out the live version of this app deployed on Netlify [here](https://vanslifereactrouter.netlify.app/).

## Project Overview

This project is part of the [Frontend Developer Career `Path`](https://scrimba.com/learn/frontend) on Scrimba.

<img src="/src/Assets/Images/logos/scrimba-logo.png" alt="scrimba logo" width="110"/> is an online platform that offers interactive coding screencasts. Its main advantage is that it allows you to write and run code directly in the browser, which makes it a great tool for learning how to code, spcially for beginners. As i got more experienced through out the course, i started to use my own code editor and run the code locally.
I love scrimba because it offers a good mix of theory and practice, allowing me to learn new concepts and apply them in real projects at the same time.

### Description

**VANLIFE** is a website for people to rent out camper vans for their next road trip adventure.

### Features

- SPA with 10+ routes
- Filter by van type
- Active link styling (a way to easily tell where the user is in the app)
- Protected routes (certain pages are only accessible to authenticated users)
- Nested routes (a way to share a common layout between routes)
- Using mock server to simulate a real server and test the application without having to connect to a real server

### Figma design

The design for this project was created using Figma. You can check it out [here](https://www.figma.com/file/igDA2NiMDhoaIIAqm5EnTq/%23VanLife?type=design&node-id=0-1&mode=design&t=Xjbv1vUBzXWk3mBY-0) (you need to have a Figma account to access it).

### Main topics learned

- **Routing basics:**
  The basics of routing in a single page application, like how to set up routes, how to navigate between routes, and how to pass data between routes.
- **Navigation:**
  How to create links to navigate between routes and how to use the useLocation hook to access the current URL.
- **Layout and index routes:**
  How to use layout and index routes to create nested routes and shared UI components.
- **Nested routes:**
  How to create nested routes and use the Outlet component to render child routes.
- **Route and search parameters:**
  How to use route parameters to access dynamic data and how to use search parameters to filter and sort data.
- **Protected routes:**
  How to create protected routes that require authentication and how to use the useNavigate hook to redirect users to a login page.

### Technologies used

- <img src="/src/Assets/Images/logos/react-logo.svg" alt="react logo" width="20"> **React:** A JavaScript library for building user interfaces.
- <img src="/src/Assets/Images/logos/react-router-mark-color.svg" alt="react router logo" width="20"> **React Router:** A library that provides client side routing for our single page application.
- <img src="https://miragejs.com/favicon.svg?v=4b2671f787216000311c3551544b1101" alt="miragejs logo" width="20"> **Miragejs:** A library that allows us to create a fake server to simulate a real server and test our application without having to connect to a real server.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="20"> **JavaScript:** A programming language that allows us to add interactivity to our website.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML logo" width="20"> **HTML:** A markup language that allows us to create the structure of our website.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS logo" width="20"> **CSS:** A styling language that allows us to style the structure of our website.
- <img src="https://tailwindcss.com/favicons/apple-touch-icon.png?v=3" alt="Tailwind CSS logo" width="20"> **Tailwind CSS:** A utility-first CSS framework that allows us to style our website using utility classes.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma logo" width="20"> **Figma:** A design tool that allows us to create and share designs for our website.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git logo" width="20"> **Git:** A version control system that allows us to track changes in our code and collaborate with other developers.
- <img src="src/Assets/Images/logos/github-logo.png" alt="GitHub logo" width="20"> **GitHub:** A platform that allows us to host our code and collaborate with other developers.
- <img src="/src/Assets/Images/logos/vite-logo.svg" alt="Vite logo" width="20"> **Vite:** A build tool that allows us to build our website and run a development server.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VsCode logo" width="20"> **VsCode:** A code editor that allows us to write and test our code.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify logo" width="20"> **Netlify:** A platform that allows us to deploy our website and make it accessible to the public.

### Disclaimers

- This project is a learning project and is not intended for commercial use.
- The main focus was to learn react router and not to create a fully functional website, therefore there are still many features that can be added to make it a fully functional website.
- The website is not connected to a real database, so the data is hardcoded in a mock server created using miragejs. Miragejs is a library that allows us to create a fake server to simulate a real server and test our application without having to connect to a real server.
- The website is not connected to a real authentication system, so it's only possible to sign in using a hardcoded user.
- To access the host page, you can use the following credentials:
  - **Email:** `b@b.com`
  - **Password:** `p123`

### To-Dos

- Some ideas for future improvements include:
  - **Authentication:**
    Add authentication to the website so that users can create accounts, log in, and log out.
  - **Database:**
    Connect the website to a real database so that users can save their van listings and view other users' listings.

## React Router glossary

- **Nested routes:** Nested routes are used to create routes that are children of other routes. They allow us to create routes that _share a common parent route and a common layout_. This is _useful when we have some shared UI between routes_ in our app. We can use a `layout route` to create a parent route that contains just the portion of the UI that will be shared, and then we can use nested routes to create child routes that contain the unique portion of the UI for each route. This allows us to create a more organized and maintainable routing structure in our app.
  The child routes are rendered inside the parent route using the `<Outlet />` component. This component is used anytime we have a parent route that's wrapping children routes. It renders the matching child route's `element` prop given in its route definition. This means that when the parent route matches, the `<Outlet />` component will render the matching child route's `element` prop. This allows us to create a nested routing structure in our app that is easy to understand and maintain.

- `<BrowserRouter />` is a component that provides the routing context to the rest of the app. It should be placed at the root of the app.

- `<Routes />` is a component that contains all the routes in our app. It should be placed inside a `<BrowserRouter />` component.

- `<Route />` is a component that defines a route in our app. It should be placed inside a `<Routes />` component.

- `path` is a prop that tells the `<Route />` component which `path` to match.

- `element` is a prop that tells the `<Route />` component what to render when the `path` matches.

- `end` is a prop that tells the `<Route />` component to only match the `path` if it's an exact match.

- `index` is a prop that tells the `<Route />` component to render the `element` when the `path` matches the parent route.

- `params` is a prop that tells the `<Route />` component to pass the route parameters to the `element`.

- `useParams` is a hook that gives us access to the route parameters in the current URL.

- `<Outlet />` is a component that renders the matching child route's `element` prop given in its route definition.

- `<Link />` is a component that allows us to navigate to a different route in our app.

- `<NavLink />` is a component that allows us to navigate to a different route in our app and apply a class name when the route is active.

- `useNavigate` is a hook that gives us a function to navigate to a different route in our app. It takes two arguments: the `path` to navigate to and an object with a replace property that tells the router to replace the current entry in the history stack. If set the replace property to true, it will replace the current entry in the history stack with the new entry. This means that when the user clicks the back button, they will be taken to the previous page in the history stack, not the page they were on before they navigated to the new page.

- `state` is a prop that tells the `<Link />` component to pass `state` to the new route.

- `useLocation` is a hook that gives us access to the current URL. It is an object that contains information about the current URL, such as the `path`name, search, and hash. It also contains a `state` object that we can use to pass `state` to the new route.

- `useSearchParams` is a hook that gives us access to the search parameters in the current URL. Using `/:` notation in the `path` of a route allows us to access the route parameters in the current URL.
