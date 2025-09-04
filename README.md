# 🎬 Movie App

A modern movie browsing web application built using **ReactJS**, **Vite**, and **TailwindCSS**, with real-time data from [The Movie Database (TMDB) API](https://developer.themoviedb.org/).

## ✨ Features
Init Projects with those features:

- 👍🏻 Header with navigation
- 👍🏻 Featured movie on homepage
- 👍🏻 Media list component (popular/trending)
- 👍🏻 Movie detail view
- 👍🏻 Actor list view
- 👍🏻 Related media suggestions
- 👍🏻 Image enhancements
- 👍🏻 TV Show Detail View
- 👍🏻 TV show listing
- 👍🏻 People Page
- 👍🏻 Search functionality

In future features:

- Status: Completed ✅

## 🛠 Tech Stack

- ⚛️ ReactJS (Hooks, functional components)
- ⚡ Vite for build/dev environment
- 🎨 TailwindCSS for styling
- 📡 TMDB API for movie & TV data

## 🔧 Getting Started

### Clone the repository
```git clone https://github.com/m1keydev-tech/react-movie-app.git```

### Navigate to the project folder
```cd react-movie-app ```

### Install dependencies
```npm install```        # or ```yarn install```

### Create .env file and add your TMDB API token
```echo "VITE_TMDB_TOKEN=your_api_key_here" > .env```

### Start development server
```npm run dev```    or ```yarn dev```


## 🌐 API Reference

Base URL: https://api.themoviedb.org/3/

Common endpoints:

```/trending/movie/day```
```/movie/{movie_id}```
```/search/movie?query={query}```

All API requests require an Authorization token in the header:

Authorization: Bearer YOUR_TOKEN

You can get your token from: https://developer.themoviedb.org/


📜 License
This project is licensed under the MIT License.


💻 Author
m1key
github.com/m1keydev-tech
