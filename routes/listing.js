const express = require("express");
const router = express.Router();
const {listingSchema} = require("../schema.js");// Validation for listing schema
const wrapAsync = require('../utils/wrapAsync.js');// Middleware for async error handling
const Listing = require('../models/listing.js');
const {isLoggedIn, isOwner, validateListing} = require('../middleware.js');// Middleware for authentication


const listingController = require('../controllers/listings.js');
const multer  = require('multer')
const {storage} = require('../cloudConfig.js');// Cloudinary configuration
const upload = multer({ storage });


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing));


//New route
router.get("/new", isLoggedIn,wrapAsync(listingController.renderNewForm));


router.route("/:id")
    .get( wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));




//Edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));


module.exports = router;