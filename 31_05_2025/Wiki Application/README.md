Star Wars Wiki Application

A dynamic web encyclopedia for Star Wars characters, powered by the Star Wars API. This project presents characters in a responsive grid with pagination, detailed views, and a real-time clock in the footer. Built using HTML, CSS, and JavaScript, the application demonstrates API integration, dynamic DOM manipulation, and interactive navigation.

** DEMO Link https://your-deployment-link.netlify.app/

Features

** Character Gallery (Main Page)  
- Displays 6 characters per page in a 3×2 responsive grid  
- Each card shows:  
  Image  
  Name  
  Species  
  Gender  
- "Next" and "Previous" buttons for smooth pagination  
- Each card opens detailed character view in a new tab  
- Live-updating footer clock on this page  

** Character Details Page  
- Fetches individual character data using their unique ID  
- Displays:  
  Full-size image  
  Name, Gender, Species  
  Homeworld  
  Affiliation(s)  
  Height, Mass  
  Eye color, Hair color, Skin color  
- Consistent live clock footer on this page too  

** Live Footer Clock  
- Time format: HH:MM:SS Day Date (e.g., 14:45:12 Tuesday June 03, 2025)  
- Updates every second using setInterval()  

** Optional Enhancements  
- Toggle between Dark Mode and Light Mode  
- Random Character button to jump to a random character detail  

Tech Stack

Frontend  
- HTML5  
- CSS3 (with Flexbox & Grid)  
- JavaScript (ES6+)  

API  
- Star Wars API (https://akabab.github.io/starwars-api/api/)  

Deployment  
- Netlify / GitHub Pages  

setup instructions:

Clone the repository  
git clone https://github.com/SanjayAsokan/Masai-2/tree/master/31_05_2025/Wiki%20Application 
cd star-wars-wiki  

Open index.html in your browser  

Enjoy browsing characters!

Challenges Faced

API Integration & Fetching  
- Worked with asynchronous data using fetch()  
- Handled edge cases like failed requests and missing data gracefully  

Pagination Handling  
- Implemented client-side pagination  
- Managed current page state, preventing out-of-bound navigation  

Responsive Grid Layout  
- Used CSS Grid and media queries to adapt to various screen sizes  
- Ensured accessibility and readability across devices  

Navigation Between Pages  
- Passed character ID using URL query parameters  
- Parsed and used those parameters to fetch specific character details  

Real-Time Clock  
- Implemented with setInterval() and JavaScript’s Date object  
- Reused across pages for consistency  
