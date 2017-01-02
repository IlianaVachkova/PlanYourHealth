# PlanYourHealth

# Course Project
_Single-page Applications with Angular2_

This document describes the **course project(and the project architecture)** for the [Single-page Applications with Angular 2](telerikacademy.com/courses/courses/Details/391) at Telerik Academy.

## Project Description

Plan Your Health is a **Single Page application** using using [Angular 2](https://angular.io/). 
The aim of the application is to register food additives, to share you found things (as food additives with concreate descriptions) with other for easy orientation which are the appropriate food additives for their needs.

The application have a:

- **public part** (accessible without authentication)
- **private part** (available for registered users)

### Public Part

The **public part** of the project is **visible without authentication**.

This public part is the application start page, contact page, home page, the user login and user registration forms, as well as the public data of the users, e.g. all regsitered from them food additives.

### Private Part (Registered users area)

**Registered users** is personal area in the single page application accessible after **successful login**.
This area holds registering food additives, marked as favourite food additives, profile details.


# Routes

## App Routes 
- /additives -> all food additives
- /additive/:id -> food additive details
- /additives/add -> form for adding a food additive
- /user/favourites -> list of user favourite additives
- /user/login -> login form for registered users
- /user/register -> register form
- /user/profile -> profile page of concreate user
- /home -> home page
- /contacts -> contact page

# How to run

## npm start 
`node server/app.js` 

## ng build -w 
Run `npm start` in a separate terminal. Needs running mongodb.

# Development server
Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.