# #VANSLIFE

## Table of Contents

- [About the Project](#about-the-project)

  - [Overview](#overview)
  - [Main topics learned](#main-topics-learned)
  - [Disclaimers](#disclaimers)
  - [To-Dos](#to-dos)

- [Nested Routes quiz](#nested-routes-quiz)

## About the Project

### Overview

This is a simple project from the scrimba frontend developer career path.

- **Goal of this project:**
  Learn the react router library to provide client side routing for our single page application.
- **To achieve this goal:**
  I built a van hosting website where users can browse through the catalogue of listed vans and view the details of each listed van and also host their own vans through the host page.
- **About Scrimba:**
  Scrimba is a platform that offers interactive and hands-on learning experiences for frontend development. It offers a variety of courses and career paths to help you learn and master frontend development skills. The frontend developer career path is a comprehensive course that covers the basics of HTML, CSS, and JavaScript, as well as more advanced topics like React and responsive web design. The course is designed to help you build a strong foundation in frontend development and prepare you for a career in the field. The course is taught by industry professionals and includes real-world projects and hands-on exercises to help you apply what you've learned. The course is self-paced and can be completed in as little as 3 months. It's a great option for anyone looking to break into the field of frontend development and build a career in tech. You can learn more about the course and sign up for a free trial at the link below
  <https://scrimba.com/learn/frontend>

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

### Disclaimers

- This project is a learning project and is not intended for commercial use.
- The main focus was to learn react router and not to create a fully functional website, therefore there are still many features that can be added to make it a fully functional website.

### To-Dos

- Some ideas for future improvements include:
  - **Authentication:**
    Add authentication to the website so that users can create accounts, log in, and log out.
  - **Database:**
    Connect the website to a real database so that users can save their van listings and view other users' listings.

### Nested Routes quiz

1. **What is the primary reason to use a nested route?**
   Whenever we have some shared UI between routes in our app.

2. **What is a "Layout Route"?**
   It's the parent route of some nested routes that contains just
   the portion of the UI that will be shared. It will use an Outlet
   component.

3. **What does the `<Outlet />` component do? When do you use it?**
   We use it anytime we have a parent Route that's wrapping
   children routes. It renders the matching child route's
   element prop given in its route definition

4. **What is an "Index Route"?**
   It's the "default route" we want to render when the path
   of the parent route matches. It gives us a chance to render
   an element inside the parent's `<Outlet />` at the same path
   as the parent route.
