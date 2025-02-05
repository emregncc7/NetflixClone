# 🎬 MitatFlix - Netflix Clone

A modern Netflix clone built with Angular, featuring a responsive design and real-time movie data from OMDB API.

## ✨ Features

- 🎯 Real-time movie data from OMDB API
- 🎨 Netflix-like UI/UX design
- 📱 Fully responsive layout
- 🔍 Advanced search functionality
- 🎭 Movie categories and genres
- 📺 Movie details with ratings and cast info
- 🌓 Dynamic banner with auto-changing movies
- 🚀 Lazy loading for better performance

## 🛠️ Technologies Used

- Angular 14+
- TypeScript
- Bootstrap 5.3
- Font Awesome Icons
- OMDB API
- RxJS
- Angular Router

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Angular CLI

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mitatflix.git
```

2. Navigate to project directory:
```bash
cd mitatflix
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and visit:
```
http://localhost:4200
```

## 🔑 API Configuration

To run this project, you'll need an OMDB API key:

1. Get your API key from [OMDB API](http://www.omdbapi.com/)
2. Create a `environment.ts` file in `src/environments/`
3. Add your API key:
```typescript
export const environment = {
  production: false,
  apiKey: 'YOUR_API_KEY'
};
```

## 📱 Features Overview

### Home Page
- Dynamic banner with popular movies
- Categorized movie sections
- Smooth scrolling navigation
- Movie hover effects

### Search
- Real-time search functionality
- Advanced filtering options
- Responsive grid layout
- Loading states

### Movie Details
- Comprehensive movie information
- Cast and crew details
- Ratings and reviews
- Similar movie recommendations

## 🎨 Styling

The project uses a combination of:
- Custom CSS with Netflix-inspired design
- Bootstrap 5 for responsive grid
- Font Awesome for icons
- Custom animations and transitions

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── shared/
├── assets/
│   ├── images/
│   └── styles/
└── environments/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- OMDB API for providing movie data
- Netflix for design inspiration
- Angular team for the amazing framework
- Bootstrap team for responsive design tools

 ## 👥 Developer  

- 👨‍💻 **Emre Genç**  
  - 🔗 LinkedIn: [emregenc7](https://www.linkedin.com/in/emregenc7/)  
