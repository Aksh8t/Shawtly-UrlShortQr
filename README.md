# 🚀 Shawtly – Modern URL Shortener

<div align="center">
Transform long URLs into powerful, trackable short links

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)


</div>

---

## 🎯 What is Shawtly?

Shawtly is a **full-stack, modern URL shortener** designed for the modern web. Built with cutting-edge technologies and a focus on user experience, it provides a seamless way to create, manage, and track shortened URLs.

### ✨ Key Highlights

- 🎨 **Beautiful Interface** – Sleek, responsive design that works on all devices
- ⚡ **Lightning Fast** – Built with modern React and optimized for performance  
- 🔐 **Secure by Default** – JWT authentication and secure route protection
- 📊 **Real-time Analytics** – Track clicks, views, and user engagement
- 🎯 **Custom Links** – Create memorable, branded short URLs
- 🔗 **One-Click Actions** – Copy, share, and manage links effortlessly

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern UI/UX**
- Responsive, mobile-first design
- Beautiful gradients and animations
- Dark/light mode support
- Intuitive user interface

### 🔐 **Authentication & Security**
- Secure JWT-based authentication
- Protected routes and API endpoints
- Password hashing with bcrypt
- Session management

</td>
<td width="50%">

### 📊 **Analytics Dashboard**
- Real-time click tracking
- Visual analytics charts
- URL performance metrics
- Export data functionality

### ⚡ **URL Management**
- Instant URL shortening
- Custom slug creation
- Bulk URL operations
- QR code generation

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

</div>

<details>
<summary><b>📦 Complete Dependencies</b></summary>

**Frontend**
- [React 19](https://react.dev/) – Modern React with concurrent features
- [Vite](https://vitejs.dev/) – Lightning fast build tool
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management
- [TanStack Router](https://tanstack.com/router/latest) – Type-safe routing
- [TanStack Query](https://tanstack.com/query/latest) – Data fetching & caching
- [Axios](https://axios-http.com/) – HTTP client

**Backend**
- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Express](https://expressjs.com/) – Web framework
- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling
- [JWT](https://jwt.io/) – Authentication tokens
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – Password hashing
- [nanoid](https://github.com/ai/nanoid) – URL ID generation

</details>

---

## 🏗️ Project Architecture

```
📦 shawtly-url-shortener/
├── 🗂️ BACKEND/
│   ├── 📄 app.js                    # Express app configuration
│   └── 📁 src/
│       ├── 📁 config/               # Database & app configuration
│       ├── 📁 controllers/          # Request handlers
│       ├── 📁 DAO/                  # Data Access Objects
│       ├── 📁 middleware/           # Custom middleware
│       ├── 📁 models/               # Mongoose schemas
│       ├── 📁 routes/               # API routes
│       ├── 📁 services/             # Business logic
│       └── 📁 utils/                # Helper functions
│
├── 🗂️ FRONTEND/
│   ├── 📄 index.html               # Entry HTML
│   ├── 📄 vite.config.js           # Vite configuration
│   └── 📁 src/
│       ├── 📁 apis/                # API integration
│       ├── 📁 components/          # Reusable components
│       ├── 📁 pages/               # Page components
│       ├── 📁 routing/             # Route configuration
│       ├── 📁 store/               # Redux store
│       └── 📁 utils/               # Utility functions
│
└── 📄 README.md                    # You are here!
```

---

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:
- **Node.js** v18 or higher
- **MongoDB** (local or cloud instance)
- **Git** for version control

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shawtly-url-shortener.git
   cd shawtly-url-shortener
   ```

2. **Setup Backend**
   ```bash
   cd BACKEND
   npm install
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your configurations
   ```

3. **Setup Frontend**
   ```bash
   cd ../FRONTEND
   npm install
   
   # Optional: Create frontend environment file
   cp .env.example .env
   ```

### ⚙️ Environment Variables

**Backend (.env)**
```env
# Database
MONGO_URI=mongodb://localhost:27017/shawtly
# or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/shawtly

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development

# Optional: Rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Frontend (.env)** *(Optional)*
```env
VITE_API_URL=http://localhost:5000/api
VITE_BASE_URL=http://localhost:3000
```

### 🏃‍♂️ Running the Application

**Development Mode:**
```bash
# Terminal 1: Backend
cd BACKEND
npm run dev

# Terminal 2: Frontend  
cd FRONTEND
npm run dev
```

**Production Build:**
```bash
# Build frontend
cd FRONTEND
npm run build

# Start production server
cd ../BACKEND
npm start
```

---

## 📡 API Reference

<details>
<summary><b>🔐 Authentication Endpoints</b></summary>

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Register new user | `{email, password, name}` |
| `POST` | `/api/auth/login` | User login | `{email, password}` |
| `POST` | `/api/auth/logout` | User logout | - |
| `GET`  | `/api/auth/me` | Get current user | - |
| `PUT`  | `/api/auth/profile` | Update profile | `{name, email}` |

</details>

<details>
<summary><b>🔗 URL Management Endpoints</b></summary>

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/urls/create` | Create short URL | `{originalUrl, customSlug?}` |
| `GET`  | `/api/urls` | Get user's URLs | - |
| `GET`  | `/api/urls/:id` | Get URL details | - |
| `PUT`  | `/api/urls/:id` | Update URL | `{customSlug?, active?}` |
| `DELETE` | `/api/urls/:id` | Delete URL | - |
| `GET`  | `/:shortId` | Redirect to original | - |

</details>

<details>
<summary><b>📊 Analytics Endpoints</b></summary>

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| `GET`  | `/api/analytics/url/:id` | URL analytics | `?period=7d&timezone=UTC` |
| `GET`  | `/api/analytics/dashboard` | Dashboard stats | `?period=30d` |
| `GET`  | `/api/analytics/export/:id` | Export data | `?format=csv` |

</details>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### 📋 Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 🐛 Troubleshooting

<details>
<summary><b>Common Issues & Solutions</b></summary>

**Backend won't start:**
- Check if MongoDB is running
- Verify environment variables
- Ensure correct Node.js version

**Frontend build fails:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for syntax errors
- Verify all dependencies are installed

**Authentication not working:**
- Verify JWT_SECRET is set
- Check cookie settings
- Ensure CORS is properly configured

</details>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

Special thanks to these amazing projects and resources:

- [React](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TanStack](https://tanstack.com/) - High-quality open-source software
- [MongoDB](https://www.mongodb.com/) - The application data platform
- [nanoid](https://github.com/ai/nanoid) - A tiny, secure, URL-friendly ID generator

---

<div align="center">

**Made with ❤️ by Akshat**

⭐ **Star this repo if you find it helpful!** ⭐

[🔝 Back to Top](#-shawtly--modern-url-shortener)

</div>
