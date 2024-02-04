# React SPA project

## Table of Content: 📑
* [About the Project](#about-the-project-)
* [Preview](#preview-)
* [Technologies Used](#technologies-used-%EF%B8%8F)
* [Setup/Installation](#setup--installation-)
* [Approach](#approach-)

## About the Project: 📚
The projest is showcasing a blog post type of website with a fun UI. Please keep in mind, the majority of the application is complete, however the UX is still under construction. I started this project while working a full time job, so I've tried to implement as many techniques as possible and steered away from quantity. 

## Preview: 📷
### Guest view ↓
#### Navigation 

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/aad08ed3-7585-4740-81af-debc339cb370

#### Home page

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/c7768421-5661-4128-81b3-09b916d3ad69

#### Catalog page

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/5e785ed1-1308-4e24-aa8b-9cca2d6832ce

#### Footer

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/5f8287a5-b36e-417a-a871-6daa513e27f0

### Static pages ↓

#### About and Contacts

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/46fda726-4d7e-450f-9886-8ec94a914843

### Authentication ↓

#### Register

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/ac248738-274e-499d-8af6-4f54199426c4

#### Login

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/c27381f7-34b1-4be1-a83e-6de524ba121b

### Authenticated user view ↓

#### Profile

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/e81ee7d0-1390-4269-a73b-e16508ff2258

#### Create post

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/dcaadeb9-c063-4ce9-a41c-8fc2f1cdb71e

#### Edit post

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/9772fe0e-04f4-4770-9285-307711705ea3

#### Delete post

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/e50b1c8c-e03b-4798-98e6-4e4e6574a94d

#### Favorites feature (to be improved)

https://github.com/GerganaKristinova/React-SPA-Project/assets/135979731/c32f035d-6b65-4b40-b178-851b420d043d

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
    * Type "cd server"
    * Then "node ./server.js"
5. On the client terminal
    * Type "cd client"
    * Then "npm install"
    * And lastly "npm run dev"

## Approach: 🚶
1. Application Structure
   * Public Part (Accessible without authentication)
   * Private Part (Available for authenticated users)
2. Mix of static and dynamic pages
   * Static Pages
      * About
      * Contacts
   * Dynamic Pages            
      * Home
      * Dashboard
      * Favorites
      * User Profile
4. Guests, Logged in users and creators
   * Guests can only see the public pages and cannot interact
   * Logged in users can create posts and save them to favorites
   * Creators can edit and delete their posts
5. Client-side routing using React Router
6. Google Maps API
    

