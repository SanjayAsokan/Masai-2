Rick and Morty Wiki Application

A dynamic web encyclopedia for Rick and Morty characters, powered by the Rick and Morty API. This project presents characters in a responsive grid with pagination, detailed views, and a real-time clock in the footer. Built using HTML, CSS, and JavaScript, the application demonstrates API integration, dynamic DOM manipulation, and interactive navigation.


* Features

** Character Gallery (Main Page)
 -Displays 6 characters per page in a 3×2 responsive grid
 
 -Each card shows:
    Image
    Name
    Species
    Status (Alive / Dead / Unknown)

 -"Next" and "Previous" buttons for smooth pagination


** Character Details Page
 -Fetches individual character data using their unique ID

 -Displays:
    Full-size image
    
    Name, Status, Species, Type, Gender
    
    Origin location and current location
    
    Number of episode appearances
 -Consistent live clock footer on this page too

** Live Footer Clock
 -Time format: HH:MM:SS Day Date
(e.g., 14:45:12 Tuesday June 03, 2025)
 -Updates every second using setInterval()

** Optional Enhancements
 -Toggle between Dark Mode and Light Mode
 -Random Character button to jump to a random character detail

Tech Stack

* Frontend
  -HTML5
  -CSS3 (with Flexbox & Grid)
  -JavaScript (ES6+)

* API
Rick and Morty API

* Deployment
Netlify / GitHub Pages (Choose what you used)

* setup instructions:

1. Clone the repository

git clone https://github.com/your-username/rick-and-morty-wiki.git
cd rick-and-morty-wiki

2. Open index.html in your browser

3. Enjoy browsing characters!

* Challenges Faced

1. API Integration & Fetching
Worked with asynchronous data using fetch()

Handled edge cases like failed requests and missing data gracefully

2. Pagination Handling
Implemented client-side pagination

Managed current page state, preventing out-of-bound navigation

3. Responsive Grid Layout
Used CSS Grid and media queries to adapt to various screen sizes

Ensured accessibility and readability across devices

4. Navigation Between Pages
Passed character ID using URL query parameters

Parsed and used those parameters to fetch specific character details

5. Real-Time Clock
Implemented with setInterval() and JavaScript’s Date object

Reused across pages for consistency