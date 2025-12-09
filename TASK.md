# Sip Happens Café - Feedback App

## Task Description

Build a React application that collects customer feedback for "Sip Happens Café" using a simple rating system.

## Features

### Core Functionality
- **Feedback Buttons**: Users can leave feedback by clicking one of three buttons:
  - Good ☕
  - Neutral ☕
  - Bad ☕
  - Reset (clears all feedback)

- **Feedback Display**: Shows statistics including:
  - Count of "Good" ratings
  - Count of "Neutral" ratings
  - Count of "Bad" ratings
  - Total feedback count
  - Positive feedback percentage

- **Persistent Storage**: Feedback data is saved to browser's localStorage and restored on page reload

- **Conditional Rendering**: Shows "No feedback given" message when there are no ratings yet

## Project Structure

```
src/
├── App.jsx              # Main component with state management
├── index.css            # Global styles (title, description, layout)
├── components/
│   ├── Options/
│   │   ├── Options.jsx           # Button container component
│   │   └── Options.module.css    # Options styling
│   ├── Feedback/
│   │   ├── Feedback.jsx          # Feedback display component
│   │   └── Feedback.module.css   # Feedback styling
│   └── Button/
│       ├── Button.jsx            # Reusable button component
│       └── Button.module.css     # Button styling
```

## State Management

- **Lifting State Up**: State is managed in the `App` component and passed down to child components via props
- **Props Flow**:
  - `App` → `Options`: Passes `onFeedback` and `onReset` handlers
  - `App` → `Feedback`: Passes `good`, `neutral`, `bad` counts

## localStorage Implementation

- **Load on Mount**: Uses React state initializer functions to load saved data when component mounts
- **Save on Change**: Uses `useEffect` with dependency array `[good, neutral, bad]` to save data whenever feedback changes
- **No Cascading Renders**: Avoids performance issues by not calling `setState` inside effects

## Styling

- Modern gradient design with purple/blue theme
- Responsive layout with flexbox
- Smooth hover animations on buttons
- Glass-morphism effect on feedback display cards
- Mobile-friendly design

## Technologies Used

- **React 19**: For UI components and state management
- **Vite**: Build tool and development server
- **CSS Modules**: For component-scoped styling
- **localStorage API**: For persistent data storage

## How to Run

```bash
npm install
npm run dev
```

The app will start on `http://localhost:5173` (or another port if 5173 is taken).
