# Personal Project Showcase App

## Project Overview

Personal Project Showcase App is a responsive single-page React application built for a creative agency to display their portfolio of past projects. Visitors can browse projects, search/filter them live by title, and the agency can dynamically add new projects through a built-in form. The application uses React state management to handle all data — no backend is required.

---

## Features

- Display a list of projects in a responsive card grid
- Add new projects dynamically using a form
- Search and filter projects live by title
- Responsive design that adapts to mobile and desktop screens
- Clean, modern UI with hover effects and smooth transitions
- Form validation to prevent adding empty projects

---

## Technologies Used

- React (functional components + hooks)
- Vite
- JavaScript (ES6)
- CSS3
- Jest
- React Testing Library

---

## Installation

1. Clone the repository.
2. Open the project folder.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

No additional software besides Node.js and npm is required.

---

## How to Use

1. View the list of existing projects on the landing page.
2. Type into the **Search Projects** box to filter projects by title.
3. Enter a **Title** and **Description** in the Add Project form.
4. Click **Add** to add the new project to the list.
5. The new project appears immediately in the grid below.

---

## Project Structure
spa-for-react/
│
├── src/
│   ├── components/
│   │   ├── AddProjectForm.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   └── SearchBar.jsx
│   ├── styles/
│   │   └── App.css
│   ├── tests/
│   │   ├── AddProjectForm.test.jsx
│   │   └── ProjectList.test.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md

---

## Error Handling

The application handles:

- Empty title or description input (form will not submit)
- Empty search results (displays "No projects found")

---

## Future Improvements

- Persist projects using Local Storage or a backend database
- Support image uploads for each project
- Add edit and delete functionality for existing projects
- Add routing for individual project detail pages

---

## Author

Name: Leon Baraka

Course: Software Engineering (Moringa School)

Year: 2026