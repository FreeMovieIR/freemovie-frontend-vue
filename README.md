# FreeMovie

A modern movie streaming platform built with Vue.js, featuring a sleek UI design optimized for Persian/Farsi users.

## 🚀 Features

- **Dynamic Movie Showcase**: Responsive slider showcasing featured movies with complete details
- **Responsive Design**: Fully responsive UI that works across all device sizes
- **RTL Support**: Right-to-left text support for Persian language
- **Custom Components**: Reusable Vue components built with best practices

## 🛠️ Tech Stack

- **Vue 3**: Latest Vue framework with Composition API
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Pinia**: State management solution for Vue
- **Vue Router**: Official router for Vue.js
- **Swiper**: Modern mobile touch slider for movie carousels
- **Zod**: Form validation
- **Vue-i18n**: Internationalization support for multiple languages

## 📊 Project Structure

```
src/
├── assets/          # Static assets like fonts and images
├── components/      # Reusable Vue components
│   ├── base/        # Base/core components (like AppSwiper)
│   ├── common/      # Common components used across the application
│   └── home/        # Components specific to the home page
├── composable/      # Vue composition functions
├── routes/          # Application routes
├── store/           # Pinia stores for state management
├── types/           # TypeScript type definitions
├── ui/              # UI utility components
├── utils/           # Utility functions
└── views/           # Page components
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/FreeMovieIR/freemovie-frontend-vue
cd freemovie
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start development server

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
# or
yarn build
```

## 🎨 UI Components

### Key Components

- **ThumbnailBox**: Dynamic movie card component with complete details
- **AppSwiper**: Custom wrapper around Swiper.js for consistent slider UI
- **OverlappingAvatars**: Component for displaying user avatars in an overlapping style
- **MoviesBox**: Container for displaying multiple movie cards in a grid

## 🌐 API Integration

The application is designed to connect with a backend API to fetch movie data. The structure is prepared for easy integration with any RESTful API service.

## 📱 Responsive Design

The UI is built with a mobile-first approach, ensuring a great user experience on:

- Mobile devices
- Tablets
- Desktops
- Large screens

## 🔜 Roadmap

- Movie search functionality
- Watch history
- PWA support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.
