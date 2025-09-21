# URL Shortener Frontend

A modern, responsive single-page application for URL shortening built with React, Vite, and Tailwind CSS.

## Features

- 🚀 **Modern UI/UX**: Beautiful, responsive design with gradient backgrounds and smooth animations
- 🔐 **Authentication**: User registration and login with protected routes
- 📊 **Dashboard**: Comprehensive dashboard with URL management and analytics
- 🔗 **URL Shortening**: Create short URLs with optional custom slugs
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern Styling**: Tailwind CSS with custom components and animations

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **TanStack Router** - Type-safe routing
- **Redux Toolkit** - State management
- **TanStack Query** - Server state management
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoginForm.jsx   # User login form
│   ├── RegisterForm.jsx # User registration form
│   ├── Navbar.jsx      # Navigation component
│   ├── UrlForm.jsx     # URL shortening form
│   └── UserUrl.jsx     # User URLs management
├── pages/              # Page components
│   ├── Homepage.jsx    # Landing page
│   ├── AuthPage.jsx    # Authentication page
│   ├── Dashboardpage.jsx # User dashboard
│   └── RedirectPage.jsx # URL redirect handler
├── routing/            # Route definitions
│   ├── homepage.js     # Home route
│   ├── auth.route.js   # Auth routes
│   ├── dashboard.js    # Dashboard route
│   ├── redirect.js     # Redirect route
│   └── routeTree.js    # Route tree configuration
├── apis/               # API service functions
│   ├── user.api.js     # User-related API calls
│   └── shortUrl.api.js # URL shortening API calls
├── store/              # Redux store
│   └── slice/
│       └── authSlice.js # Authentication state
├── utils/              # Utility functions
│   ├── axiosinstance.js # Axios configuration
│   └── helper.js       # Helper functions
└── index.css           # Global styles
```

## Features Overview

### Homepage

- Hero section with call-to-action
- URL shortening form (works without authentication)
- Feature highlights
- Modal-based authentication

### Authentication

- User registration and login
- Form validation
- Error handling
- Automatic redirect after successful auth

### Dashboard

- Statistics cards showing total URLs and clicks
- URL creation form with custom slug support
- URL management table with copy and visit actions
- Responsive design for all screen sizes

### URL Management

- Create short URLs with optional custom slugs
- View all user URLs in a beautiful card layout
- Copy URLs to clipboard
- Visit URLs directly
- Track click counts

## API Integration

The frontend integrates with the backend API endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/create` - Create short URL
- `POST /api/user/urls` - Get user URLs
- `GET /:id` - Redirect to original URL

## Styling

The application uses Tailwind CSS with custom components and utilities:

- Gradient backgrounds and buttons
- Smooth animations and transitions
- Responsive grid layouts
- Custom scrollbar styling
- Hover effects and focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses modern development tools:

- **ESLint** for code linting
- **Vite** for fast development and building
- **Hot Module Replacement** for instant updates
- **TypeScript support** (optional)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
