# Sip Happens Café - Customer Feedback App

A modern React application that collects and displays customer feedback for "Sip Happens Café" using an intuitive rating system.

## 🎯 Features

- **Interactive Feedback Buttons**: Customers can rate their experience as Good, Neutral, or Bad
- **Real-time Statistics**: Displays feedback counts and positive percentage
- **Persistent Storage**: Feedback data is automatically saved to localStorage and restored on page reload
- **Beautiful UI**: Modern gradient design with smooth animations and glass-morphism effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Reset Functionality**: Clear all feedback with a single click

## 🛠️ Tech Stack

- **React 19**: UI library with hooks for state management
- **Vite**: Lightning-fast build tool and dev server
- **CSS Modules**: Component-scoped styling with no conflicts
- **localStorage API**: Client-side persistent storage

## 📁 Project Structure

```
src/
├── App.jsx                    # Main component with state management
├── index.css                  # Global styles
├── main.jsx                   # Application entry point
└── components/
    ├── Options/               # Feedback button container
    │   ├── Options.jsx
    │   └── Options.module.css
    ├── Feedback/              # Feedback statistics display
    │   ├── Feedback.jsx
    │   └── Feedback.module.css
    └── Button/                # Reusable button component
        ├── Button.jsx
        └── Button.module.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 💡 Key Concepts

### State Lifting
State is managed in the `App` component and passed down to child components via props for proper data flow.

### Persistent Storage
- Initial state loads from localStorage using React state initializer functions
- Data is automatically saved whenever feedback changes
- Avoids cascading renders by not calling `setState` inside effects

### Component Composition
- **App**: Manages state and business logic
- **Options**: Renders feedback buttons (presentational)
- **Feedback**: Displays statistics (presentational)
- **Button**: Reusable UI component

## 📊 How It Works

1. User clicks a feedback button (Good, Neutral, or Bad)
2. The click handler updates the state in `App`
3. `useEffect` automatically saves the new state to localStorage
4. The `Feedback` component receives updated props and re-renders
5. On page reload, state is restored from localStorage

## 🎨 Design Features

- Purple/blue gradient theme
- Smooth hover animations on buttons
- Glass-morphism effect on feedback cards
- Full-width total count display
- Responsive grid layout for statistics
