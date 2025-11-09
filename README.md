# MovieVerse: A React Movie Watchlist App

MovieVerse is a responsive movie-tracking web application built with modern web technologies. It allows users to browse currently trending movies from The Movie Database (TMDB) API and curate their own persistent "watchlist" with advanced sorting and filtering capabilities.

This project was built using React, Vite, and Tailwind CSS.

---

##  Core Features

* **Browse Trending Movies:** Fetches and displays a paginated list of the most popular movies from the TMDB API.
* **Dynamic Pagination:** Users can easily navigate through pages of movie results.
* **Personal Watchlist:**
    * **Add Movies:** Add any movie from the trending list to a personal watchlist with a single click.
    * **Remove Movies:** Easily remove movies from your list.
    * **Persistence:** The watchlist is saved to `localStorage`, so your list is preserved even after you close the browser.
* **Advanced Watchlist Controls:**
    * **Search:** Instantly search your saved watchlist by movie title.
    * **Filter by Genre:** Filter your list to show only movies of a specific genre (e.g., "Action", "Comedy", "Drama").
    * **Sort by Field:** Sort your entire watchlist by "Popularity" or "Rating" in both ascending and descending order.
* **Responsive Design:** Styled with Tailwind CSS for a clean, mobile-first experience.
* **Routing:** Uses React Router to provide seamless navigation between the "Movies" homepage and the "Watchlist" page.

---

## Technologies Used

* **Framework/Library:** React (v19)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Data Fetching:** Axios
* **Icons:** Font Awesome
* **Linting:** ESLint

---

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd MovieVerse
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    * Create a new file named `.env` in the `MovieVerse` root directory.
    * Add your TMDB API key to this file. (This project is configured to look for this specific variable).
    ```
    VITE_TMDB_API_KEY=your_api_key_goes_here
    ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).