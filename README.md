# Gamitars Project

This project is a web application named "Gamitars" built using HTML, CSS, and JavaScript. The application allows users to create, filter, and manage notes using a simple drag-and-drop interface.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Running the Project](#running-the-project)
4. [Build Steps](#build-steps)
5. [Alternative Libraries/Frameworks](#alternative-librariesframeworks)

## Project Overview

Gamitars is a web-based note management application that supports the following features:
- Creating new notes with a title, description, end date, and priority.
- Dragging and dropping notes into different status columns: To Do, Doing, and Done.
- Filtering notes based on priority and end date.
- Deleting notes by dragging them into the trash bin.
- Saving and loading the state of the application using `localStorage`.

## Getting Started

### Prerequisites

To run this project, you need a web browser with JavaScript enabled. No additional software or libraries are required.

### Project Structure

- `index.html`: The main HTML file.
- `src/css/style.css`: The stylesheet for the project.
- `src/js/main.js`: The main JavaScript file containing the application's logic.

## Running the Project

1. **Clone the repository** (if applicable):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Open the HTML file**:
    - Simply open `index.html` in a web browser to view and interact with the application.

## Build Steps

Currently, the project does not require any build steps as it consists of plain HTML, CSS, and JavaScript. However, to improve the development workflow and optimize the application, the following build steps can be added:

1. **Bundling and Minification**:
    - Use a tool like Webpack to bundle JavaScript files and minify them for production.
    - CSS can also be minified using tools like CSSNano.
  
2. **Transpilation**:
    - Use Babel to transpile modern JavaScript (ES6+) to ensure compatibility with older browsers.

3. **Linting**:
    - Integrate ESLint for JavaScript and Stylelint for CSS to enforce code quality and consistency.

### Example Build Tools

- **Webpack**: Module bundler to bundle and minify JavaScript and CSS files.
- **Babel**: JavaScript compiler to transpile modern JavaScript to older versions.
- **ESLint**: Linter for identifying and fixing problems in JavaScript code.
- **Stylelint**: Linter for identifying and fixing problems in CSS code.

## Alternative Libraries/Frameworks

Using plain JavaScript, CSS, and HTML works well for simple projects. However, for larger and more complex projects, using frontend libraries/frameworks can provide additional benefits. Here are a few alternatives:

1. **React**:
    - **Benefits**:
        - Component-based architecture promotes reusability and modularity.
        - Rich ecosystem with many third-party libraries.
        - State management with hooks and context API simplifies complex state logic.
    - **Usage**:
        - The application could be split into functional components, making it easier to manage and develop.

2. **Vue.js**:
    - **Benefits**:
        - Two-way data binding simplifies state management.
        - Vue's component system makes the code more organized and maintainable.
        - Vue directives can simplify DOM manipulations.
    - **Usage**:
        - The application could use Vue components for each note and list, with Vuex for state management.

3. **Angular**:
    - **Benefits**:
        - Comprehensive framework with built-in solutions for routing, state management, and HTTP requests.
        - Dependency injection improves modularity and testing.
    - **Usage**:
        - Angular services could manage the state, and components could be used to render notes and lists.

4. **Svelte**:
    - **Benefits**:
        - Compiles components into highly efficient vanilla JavaScript at build time.
        - Simple reactivity model without the need for complex state management libraries.
    - **Usage**:
        - The application logic could be encapsulated in Svelte components with reactive declarations and stores.

Using these frameworks can help manage state more efficiently, improve code maintainability, and speed up development for larger applications.


# My top 10 learning resources that I follow to enhance my coding skills.

1. **The Odin Project**
   - Website: [theodinproject.com](https://www.theodinproject.com/)
   - An open-source curriculum that covers full-stack web development, from HTML and CSS to JavaScript and backend technologies.

2. **freeCodeCamp**
   - Website: [freecodecamp.org](https://www.freecodecamp.org/)
   - A self-paced curriculum with a comprehensive range of topics in web development, including projects and certifications.

3. **Exercism**
   - Website: [exercism.io](https://exercism.io/)
   - Provides coding exercises in over 50 programming languages, with mentoring and feedback to improve your skills.

4. **JavaScript.info**
   - Website: [javascript.info](https://javascript.info/)
   - A detailed guide to modern JavaScript, featuring interactive examples and covering basic to advanced topics.

5. **Codecademy (Free Tier)**
   - Website: [codecademy.com](https://www.codecademy.com/)
   - Interactive coding lessons with a free tier that includes introductory courses in various programming languages.

6. **MDN Web Docs**
   - Website: [developer.mozilla.org](https://developer.mozilla.org/)
   - Comprehensive documentation and tutorials on web technologies, including HTML, CSS, and JavaScript.

7. **CS50's Introduction to Computer Science**
   - Website: [edx.org](https://www.edx.org/course/cs50s-introduction-to-computer-science)
   - A highly acclaimed online course from Harvard University, covering computer science fundamentals and programming.

8. **Frontend Mentor (Free Challenges)**
   - Website: [frontendmentor.io](https://www.frontendmentor.io/)
   - Provides real-world front-end challenges with access to design projects to practice your coding skills.

9. **Codewars**
   - Website: [codewars.com](https://www.codewars.com/)
   - Offers coding challenges (kata) to improve problem-solving skills and coding proficiency.

10. **Coursera (Audit Option)**
    - Website: [coursera.org](https://www.coursera.org/)
    - Many courses can be audited for free, including web development and programming courses from top universities.

