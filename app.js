// Description: This is the main entry point for the application. It sets up the server, connects to the database, and configures middleware and routes.
if(process.env.NODE_ENV != "production") {
    require('dotenv').config(); // Load environment variables from .env file
}
console.log(process.env.SECRET);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');// Path module to handle file paths
const methodOverride = require('method-override');// Middleware for PUT and DELETE requests
const ejsMate = require('ejs-mate');// EJS template engine
const ExpressError = require('./utils/ExpressError.js');// Custom error handling class
const session = require('express-session');// Session management
const MongoStore = require('connect-mongo');// MongoDB session store
const flash = require('connect-flash');// Flash messages for session
const passport = require('passport');// Authentication middleware
const LocalStrategy = require('passport-local');// Passport local strategy
const User = require('./models/user.js');// User model



//Routes require
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const dbUrl = process.env.ATLASDB_URL;
main()
    .then(()=>console.log("database is connected succesfully"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);

}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600 // time in seconds after which the session will be updated
});   

store.on("error", () => {
    console.log("Session store error");
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    },
};

//
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
 

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to add flash messages to res.locals
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

// app.get('/demouser', async(req, res) => {
//     let fakeUser = new User({
//         username: "demoUser",
//         email: "demoUser@yahoo.in",
//     });    
//     let registeredUser= await User.register(fakeUser, "demopassword");
//     res.send(registeredUser);
// });

//Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

//Error handling middleware
app.all("*",(req, res, next) => {
    next(new ExpressError( 404, "Page not found"));
})
app.use((err, req, res, next) => {
    let {statusCode=500, message= "something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
})


// app.get("/testListing",async (req, res) => {s
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the beach",
//         price : 1200,
//         location: "calangute,goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved succesfully");
//     res.send("successful testing");   
        
// });

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});