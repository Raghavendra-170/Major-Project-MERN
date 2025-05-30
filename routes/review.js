const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync.js');// Middleware for async error handling
const ExpressError = require('../utils/ExpressError.js');// Custom error handling class
const Review = require('../models/review.js');// Validation for review schema
const Listing = require('../models/listing.js');
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js');// Middleware for validating review schema

const reviewController = require('../controllers/reviews.js');

//reviews
//POST route for creating a new review
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete route for deleting a review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));


module.exports= router;