# Simple To-Do App

A basic React 18 to-do list app built to practice core React concepts: `useState`, controlled inputs, list rendering with `key`, and conditional rendering.

## Features
- Add a new task
- Mark a task as done (click the text)
- Delete a task
- Live count of remaining tasks

## Tech Stack
- React 18
- Vite (build tool / dev server)
- Plain CSS

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## What This Demonstrates
- `useState` hook for managing list and input state
- Controlled form input
- Array methods (`map`, `filter`) to update state immutably
- Conditional rendering (`{condition && <Component />}`)
- Event handling (`onSubmit`, `onClick`, `onChange`)
