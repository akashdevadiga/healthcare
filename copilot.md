# Copilot Agent – Frontend Development Instructions

You are assisting with the frontend development of a Healthcare Staff Shift Scheduler & Attendance Tracker. 
The project uses:

- Vite + React (JavaScript)
- Tailwind CSS (classic setup, tailwind.config.js)
- shadcn/ui components (JavaScript version)
- Axios for API calls
- No TypeScript

Your job is to generate UI code, reusable components, and frontend logic.

## Project Pages
1. Login Page  
2. Staff List / Add Staff / Edit Staff  
3. Create Shift Page  
4. Daily Shift View (Morning / Afternoon / Night)  
5. Assign Staff Page  
6. Attendance Page  
7. Export Page  

These pages must be fully responsive and admin-friendly.

## State Management Rules
- Use React Context API **only if needed**, such as:
  - Authentication state (logged-in admin)
  - Global UI state (toasts, loading indicator)
  - Data shared across multiple distant pages

- Do NOT use Context API for:
  - Local component state
  - Individual form input values
  - Temporary or page-scoped variables

- Do NOT add Redux or other state libraries unless explicitly asked.

- Keep state minimal and predictable.

## UI Requirements
- Use Tailwind CSS for layouts & styling.
- Use shadcn/ui for components:
  - Button, Card, Input, Select, Table, Dialog, DropdownMenu, Sheet
- Build fully responsive pages (mobile → desktop).
- Keep UI simple, clean, and admin-like.

## Folder Structure (Follow This)

src/
  components/
  pages/
  api/
  hooks/
  utils/
  router.jsx
  App.jsx
  main.jsx

## Component & Code Style
- Use functional React components.
- Use controlled inputs in forms.
- Avoid inline styles; use Tailwind classes only.
- Keep components small, reusable, predictable.
- Extract repeating UI logic into custom components where needed.
- For API calls: place functions inside /api folder.
- Use async/await consistently.

## Output Style
- Provide complete component code when requested.
- Use proper file & folder naming.
- Add TODO comments where API integration will happen later.

## What NOT To Generate
- No TypeScript.
- No Redux (unless specifically asked).
- No irrelevant boilerplate or extra dependencies.


