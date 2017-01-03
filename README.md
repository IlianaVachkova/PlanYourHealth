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
- /additives -> display list with all food additives
- /additive/:id -> display detailed information about food additive 
- /additives/add -> form for adding a food additive
- /user/favourites -> list of user favourite additives
- /user/login -> login form for registered users
- /user/register -> register form
- /user/profile -> profile page of concreate user
- /home -> home page
- /contacts -> contact page

#Project architecture

The architecture is standard angular 2 architecture consisting of modules, components, templates and data binding with services

##Components
Components are placed in seperate folders with their component html templates. There are 9 folders with component:
-additive folder - here are placed all components connected with food additive functionality: AdditiveDetailComponent, FavouriteListComponent, AdditiveListComponent,AdditiveShortComponent, AdditiveAddComponent
-contact folder - here is placed ContactComponent 
-customer-counter - here is placed CustomCounterComponent, which is used for rating the additives
-footer - here is playced bootstrapped FooterComponent
-home - HomeComponent, representing home page of the app
-login - LoginComponent it is component for loging the user
-navbar -  Here is placed the navigation menu of the app
-user-profile - Here is UserProfileComponent which navigates to adding of component
-app - here it is placed the main  AppComponent

##Module
There is only one module the app.module - here are the routes and declaration of components and providers

##Services
The services are placed in folder core/services. There are three services: 
-AdditiveService - it gets all additive, can get additve by id and add new addite to server 
-AuthenticationService - it takes care of login and logout functionality
-UserService - it can create user, and get it by id and it is used for registering new users


# How to run

## npm start 
`node server/app.js` 

## ng build -w 
Run `npm start` in a separate terminal. Needs running mongodb.

# Development server
Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.