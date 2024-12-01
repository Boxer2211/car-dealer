# Next.js Vehicle Filter App

This is a simple vehicle filter application built with Next.js. The app allows users to select a vehicle make and model year, and view the available vehicle models for the selected criteria.

## Features

- Fetches vehicle makes and models using the NHTSA API.
- Implements dynamic routing for result pages.
- Utilizes React's Suspense for loading states.
- Fully styled with Tailwind CSS.
- Environment variable configuration for API URLs.
- Pre-rendering for dynamic routes using `generateStaticParams`.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vehicle-filter-app.git
   cd vehicle-filter-app
2. Install dependencies:
   ```bash
    npm install

## Running the Application

1. Start the development server
    ```bash
    npm run dev
Open http://localhost:3000 in your browser.

2. Build the application for production:
    ```bash
    npm run build
   
3. Run the production build:
    ```bash
    npm start

## Technologies Used

Next.js: Framework for React.
React Suspense: For loading states.
Tailwind CSS: For styling.
NHTSA API: For fetching vehicle data.




