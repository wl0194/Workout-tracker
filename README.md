# Workout Tracker

This is a fitness application built with MongoDB database with a Mongo database with a Mongoose Schema and routes with Express.
The user will be able to view create and track daily workouts. The user will be able to log multiple exercises in a workout on a given day. The user will also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user should be able to track their distance traveled.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#Links)
* [Features](#Features)
* [License](#License)

## Installation

1. Download or clone repository
2. `npm install` to install the required npm packages to run
3. To have a prepopulated database, run `npm seed`

## Usage

* Application will be invoked by using the following command:

  `node server.js`

* Open your browser and go to
  
  `http://localhost:3000`

  The home page will show the user's last workout details, then the user will have the option to select **Continue Workout** or **New Workout**


* After selecting an option, the user can add their exercise by choosing an **Exercise Type**

  * *Resistance* or
  * *Cardio*


* If *Resistance* is selected, the user input the following required fields:

  * Exercise Name
  * Weight in lbs
  * Sets
  * Reps
  * Duration in minutes

* If *Cardio* is selected, the user input the following required fields:

  * Name
  * Distance in miles
  * Duration in minutes


* After the required the fields are entered, the user can select **Complete** or **Add Exercise** to save the workout

* There is a **Dashboard** that tracks all the workouts that was entered in graphic details


## Links

* [Github](https://github.com/wl0194)
* [Live Heroku App](https://lit-forest-07249.herokuapp.com/)

## Features

* Node
* Express
* JavaScript
* MongoDB
* Mongoose

## License

  Copyright (c) Amy Hwang. All rights reserved.

  ![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
  ![Top Language](https://img.shields.io/github/languages/top/wl0194/Workout-tracker)
