## Wanderlust – Hotel Booking Web App

A full-featured hotel booking application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Wanderlust allows users to explore, book, review, and manage hotel listings with a clean, responsive UI.


🔗 [Wanderlust Live Site](https://major-project-mern.onrender.com/listings)  
📦 [GitHub Repository](https://github.com/Raghavendra-170/Major-Project-MERN)

##📸 Screenshots
 ![Home Page](https://i.postimg.cc/rwpCDjw6/Screenshot-2025-07-17-194306.png)
 ![Booking Page](https://i.postimg.cc/0ytnn3B2/Screenshot-2025-07-17-194337.png)
 

## 🚀 Features

- 🔐 **User Authentication** (Signup, Login, Logout)
- 🧭 **Browse Listings** by title, price, or location
- 📝 **Create, Read, Update, Delete (CRUD)** hotel listings
- ⭐ **Leave Reviews** and ratings for hotels
- 🎯 **Responsive Design** optimized for desktop and mobile
- 📦 **Backend APIs** with Express.js and MongoDB
- 🧹 **Modular Codebase** following SDLC and best practices

 ## 🛠 Tech Stack

- **Frontend:** React.js, HTML5, CSS3, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Sessions with `express-session` and `passport`
- **Tools & Deployment:** Render (Hosting), Git, GitHub

.

## 📁 Folder Structure
---


├── node_modules (.gitignore)
├── public
│   ├── css
|   |    └── rating.css
|   |    └── style.css
|   ├── js
|   |    └── map.js
|   |    └── script.js
├── controllers
|   |    └── listings.js
|   |    └── reviews.js
|   |    └── users.js
├── init
|    └── data.js
|    └── index.js
├── models
|    └── listing.js
|    └── review.js
|    └── user.js
├── routes
|    └── listing.js
|    └── review.js
|    └── user.js
├── utils
│    └── ExpressError.js
│    └── WrapAsync.js
├── views
|    ├── includes
|    |      └── fash.ejs
|    |      └── footer.ejs
|    |      └── navbar.ejs
|    ├── layouts
|    |      └── boilerplate.ejs
|    ├── listings
|    |      └── edit.ejs
|    |      └── index.ejs
|    |      └── new.ejs
|    |      └── show.ejs
|    ├── users
|    |      └── login.ejs
|    |      └── signup.ejs
|    ├── error.ejs
├── .gitignore
├── README.md
└── app.js 
└── cloudConfig.js
└── middleware.js
└── package-lock.json
└── package.json
└── schema.js
---


## 🚀 Getting Started

### Clone the repo
```bash
git clone https://github.com/Raghavendra-170/Major-Project-MERN.git
cd Major-Project-MERN
```
##📦 Backend Setup
```
cd backend
npm install
npm start
```

# MongoDB Atlas connection
```
ATLASDB_URL=your_mongodb_connection_string
```
# JWT secret for auth
```
SECRET=your_jwt_secret
```
# Cloudinary (for image uploads)
```
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```
# Mapbox token (for location search/maps)
```
MAP_TOKEN=your_mapbox_access_token
```

## 🎨 Frontend Setup
```
cd ../frontend
npm install
npm start
```

## 🗺️ Map Integration – Mapbox API

This project uses the **Mapbox API** to provide interactive map features and location-based services within the hotel booking flow.

### 🔧 What Mapbox Enables:
- **📍 Hotel Location Mapping** – Display hotels on a dynamic, interactive map
- **🗺️ Explore Nearby Hotels** – View hotels by region or proximity
- **📌 Custom Markers** – Show hotel pins with icons and tooltips on the map

- ### 🔐 Using the Mapbox Token

To use Mapbox services, sign in at [Mapbox](https://account.mapbox.com/) and generate an access token. Then, create a `.env` file in your backend (or frontend if needed) and include:

```env
MAP_TOKEN=your_mapbox_access_token
```
🧾 License
This project is licensed under the MIT License – feel free to use and modify!



