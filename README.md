# Auto Career Bridge

## Folder Structure and Purpose in Next.js 13

### `assets`
- **Purpose**: Stores static files such as images, fonts, and icons used throughout the application. These files are typically stored in the `public` directory in a Next.js project.

### `components`
- **Purpose**: Contains reusable UI components that are used across different parts of the application.
    - **`Common`**: A subfolder for shared components (e.g., buttons, modals, form fields) that are common throughout the app.

### `context`
- **Purpose**: Contains React Context API providers that manage global state and make it accessible throughout the application. These contexts can be used for managing themes, authentication states, or any other shared state.

### `hooks`
- **Purpose**: Stores custom React hooks. These hooks encapsulate logic that can be reused across components, improving code reusability and readability.

### `pages`
- **Purpose**: The `pages` folder has a special role in Next.js, defining routing for the application. Each file within this folder corresponds to a route in the app. For example, `pages/index.js` corresponds to the `/` route, and `pages/about.js` corresponds to the `/about` route. Dynamic routes can also be defined using bracket notation (e.g., `pages/[id].js`).

### `store`
- **Purpose**: Contains the setup for global state management such as Redux or other state management libraries. This folder holds the logic for managing the application’s state centrally.

### `styles`
- **Purpose**: Contains the CSS (or SCSS) files that define the visual styling of the application. In Next.js, this includes global styles, component-specific styles, and Tailwind CSS configuration.

### `types`
- **Purpose**: Stores TypeScript type definitions. This folder helps manage types for components, API responses, and other TypeScript interfaces used throughout the app.

### `utils`
- **Purpose**: Contains utility or helper functions that can be reused across the app. These may include functions for data formatting, calculations, validations, or any other non-UI related operations that are essential to the application's logic.

---

## List of Dependencies

### Core Dependencies:
- **`next`: 13.2.4**: Full-featured React framework.
- **`react`: 18.2.0** and **`react-dom`: 18.2.0**: Core React libraries.
- **`@reduxjs/toolkit`: ^1.9.5**: Tool for state management with Redux.
- **`formidable`: ^2.1.1**: File upload handling library.
- **`formik`: ^2.2.9**: Library for handling forms.
- **`lodash`: ^4.17.21**: Utility library for JavaScript.
- **`react-hot-toast`: ^2.4.1**: Library for hot toast notifications.
- **`react-redux`: ^8.0.5**: Connecting Redux with React.

### Development Dependencies:
- **`@tailwindcss/typography`: ^0.5.9**: Tailwind plugin for typography.
- **`eslint`: 8.36.0**: Linting tool for code quality.
- **`prettier`: ^2.8.7**: Code formatting tool.
- **`typescript`: 4.9.5**: TypeScript for project development.
- **`tailwindcss`: ^3.2.7**: CSS framework for design.
- **`@types/react`: 18.0.30**: TypeScript type definitions for React.

---