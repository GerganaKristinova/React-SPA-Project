# React SPA project

## Table of Content: 📑
* [About the Project](#about-the-project-)
* [Screenshots](#screenshots-)
* [Technologies Used](#technologies-used-%EF%B8%8F)
* [Setup/Installation](#setup--installation-)
* [Approach](#approach-)

## About the Project: 📚
This was my React Project Defense at the university. Showcasing a blog post type of website with fun UI.

## Screenshots: 📷
### Here are some of the available pages...
#### Home page

![Capture 12](https://github.com/TabhitaBlackmore/React-SPA-Project/assets/135979731/28b42b79-923b-45ac-9d0c-72fa6580622f)
#### Dashboard page

![Capture 13](https://github.com/TabhitaBlackmore/React-SPA-Project/assets/135979731/2d8f96e7-793d-400b-b343-86b1d25f8630)
#### Details page

![Capture 14](https://github.com/TabhitaBlackmore/React-SPA-Project/assets/135979731/55bcd6b7-8f85-4316-90d6-f4b95a921d31)

## Technologies Used: ⚛️
* JavaScript
* React
* HTML
* CSS
* Bootstrap

## Setup / Installation: 💻
1. Download or clone the repository
2. Open with VSC 
3. Open 2 terminals one for the client and one for the server
4. On the server terminal
  4.1 Type "cd server"
  4.2 Then "node ./server.js"
5. On the client terminal
  5.1 Type "cd client"
  5.2 Then "npm install"
  5.3 And lastly "npm run dev"

## Approach: 🚶
1. Application Structure
  1.1 Public Part (Accessible without authentication)
  1.2 Private Part (Available for authenticated users)
2. Mix of static and dynamic pages
  2.1 Static Pages
    2.1.1 About
    2.1.2 Contacts
  2.2 Dynamic Pages
    2.2.1 Home
    2.2.2 Dashboard
    2.2.3 Favorites
    2.2.4 User Profile
3. Guests, Logged in users and creators
  3.1 Guests can only see the public pages and cannot interact
  3.2 Logged in users can create posts and save them to favorites
  3.3 Creators can edit and delete their posts
4. Client-side routing using React Router
5. Google Maps API
    

