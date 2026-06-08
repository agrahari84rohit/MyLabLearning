# Password Input Tracker

A React application that demonstrates event handling with a password input field and submit button. The app tracks password input changes and mouse movements, logging events to the browser console.

## Component Tree

```
└── App
    ├── PasswordInput
    └── SubmitButton
```

## Running the Project

### Development

```bash
npm install
npm run dev
```

The app will start at `http://localhost:5173`.

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## Event Handling

### PasswordInput Component

- **Connected to:** App component
- **Events:** `onChange`
- **Handler:** `handleChange`
  - Logs "Entering password…" when user types
  - Logs current password length to the console
- **Tests:** Validates change events, rapid input handling, and empty input edge cases

### SubmitButton Component

- **Connected to:** App component
- **Events:** `onMouseEnter`, `onMouseLeave`
- **Handlers:**
  - `handleEnter`: Logs "Mouse Entering" when cursor enters button
  - `handleLeave`: Logs "Mouse Exiting" when cursor leaves button
- **Tests:** Validates mouse events, sequential interactions, and rapid event handling

### App Component

- **Connected to:** PasswordInput, SubmitButton
- **Purpose:** Renders the password input form and submit button together
- **Features:**
  - Title and description
  - Instructions to check browser console for logs
  - Responsive layout with styled form container

## Testing

The project uses Vitest and React Testing Library with the following test coverage:

- **PasswordInput tests:**
  - Renders password input field with label
  - Calls handleChange on input value changes
  - Handles multiple rapid input changes
  - Handles empty password input edge case

- **SubmitButton tests:**
  - Renders submit button with correct text
  - Calls handleEnter on mouse enter
  - Calls handleLeave on mouse leave
  - Handles mouse enter and leave in sequence
  - Handles rapid mouse enter and leave events

- **App tests:**
  - Renders main title and description
  - Renders PasswordInput and SubmitButton components
  - Displays console instructions

## How to Use

1. **Enter Password:** Type in the password input field to see "Entering password…" in the console
2. **Hover Submit Button:** Move your mouse over the Submit button to see mouse enter/exit logs
3. **Check Console:** Open the browser developer console (F12 or Ctrl+Shift+I) to view event logs

## Code Comments

- `PasswordInput.jsx`: Tracks password input changes and logs password length
- `SubmitButton.jsx`: Tracks mouse enter and leave events on the button
- `App.jsx`: Root component that combines both input and button components
