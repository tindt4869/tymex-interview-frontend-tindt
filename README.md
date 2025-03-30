# tymex-interview-frontend-tindt

A modern React marketplace application built with TypeScript, Vite, and Ant Design.

## Features

- 🛍️ Product listing with filtering and search capabilities
- 🎨 Modern UI with Ant Design components
- 🚀 Fast development with Vite
- 📱 Responsive design
- 🧪 Comprehensive test coverage
- 🔄 React Query for efficient data fetching
- 🛣️ Type-safe routing with TanStack Router

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **UI Library:** Ant Design
- **State Management:** React Query
- **Routing:** TanStack Router
- **HTTP Client:** Axios
- **Testing:** Vitest + React Testing Library
- **Code Quality:** ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tindt4869/tymex-interview-frontend-tindt.git
cd tymex-interview-frontend-tindt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run prettier` - Check code formatting
- `npm run prettier:fix` - Fix code formatting

## Project Structure

```
src/
├── api/          # API integration
├── assets/       # Static assets
├── components/   # Reusable components
├── constants/    # Constants and configuration
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── routes/       # Route definitions
├── schema/       # Data schemas
├── test/         # Test utilities
├── theme/        # Theme configuration
└── types/        # TypeScript type definitions
```

## Testing

The project uses Vitest and React Testing Library for testing. Tests are located next to the components they test.

To run tests:
```bash
npm run test          # Watch mode
npm run test:coverage # With coverage report
```

## Code Quality

- ESLint and Prettier are configured for code quality and consistent formatting
- Pre-configured TypeScript for type safety
- Comprehensive test coverage requirements
