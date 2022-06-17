# A RESTFUL API TO CALCULATE DISTANCE BETWEEN TWO LOCATIONS AND PERFORM CRUD PROCESSES

* [Overview](#overview)

* [How the app is set up and started](#how-the-app-is-set-up-and-started)

* [Tools used](#tools-used)

* [areas to pay special attention to](#areas-to-pay-special-attention-to)

* [NOTE](#note)

## Overview

The task was aimed at creariing a RESTful API that can perform basic CRUD processes of a user data and also calculate the distance between an active user location and a user location stored in the database.

In this task, I am going to talk about the following:

* How the app is setup and started
* Tools used to build the app
* Areas to pay attention to
* Things to note

## How the app is set up and started

* The app is set up using the [Express](https://expressjs.com/) framework.

* Dependencies and dev Dependencies installed using the [npm](https://www.npmjs.com/) package manager.

* The use of MVC (Model, View, Controller) code structure is used for better code readablility

* The main file used to anchor the external app is the app.js file which can be found at the root folder

* Added information about the whole app can be found at the package.json file.

## Tools used

* [Express](https://expressjs.com/)
* External dependencies: [axios](https://www.npmjs.com/package/axios), [express](https://www.npmjs.com/package/express), [mongoose](https://www.npmjs.com/package/mongoose), [validator](https://www.npmjs.com/package/validator), [nodemon](https://www.npmjs.com/package/nodemon)
* External dev dependencies: [nodemon](https://www.npmjs.com/package/nodemon)
* External APIs:[Find my address or domain location worldwide](https://rapidapi.com/ipfind/api/find-any-ip-address-or-domain-location-world-wide/)

## Areas to pay special attention to

The algorithm used to calculate the distance between two locations

```sh
 const calcDist = (x1, x2, y1, y2) => {
      let y = x2 - x1;
      let x = y2 - y1;
      const total = Math.sqrt(x * x + y * y);
      const R = 6371; //km
      const totalDistance = Math.round(total * R);
      return `The total distance between you and ${dataLog.name} is ${totalDistance}km`;
    };

```

## REQUESTS UTILIZED

* GET
* POST
* PATCH
* DELETE

## ENDPOINTS

### /add-location

* REQUEST: POST

* content-type: application/json

* Details: Enables a user to add a location to the database

#### Request body

```sh
{
    name,
    email,
    location_description,
    website,
    phone,
}

```

#### Response

```sh
{
    successful: true,
    message:{},
    statusCode: 201,
}
```

### /:email/edit-location

* REQUEST: PATCH

* content-type: application/json

* Details: Enables a user to edit data that already exists in the database

#### Request body

```sh
{
    name||email||location_description,||website||phone
}
```

#### Response

```sh
{
     successful: true,
    message:{},
    statusCode: 200,
}
```

### /delete-location

* REQUEST: DELETE

* content-type: application/json

* Details: Enables a user to delete data that already exists in the database

#### Request body

```sh
{
    email
}
```

#### Response

```sh
{
    successful: true,
    message: `[data.name] has been deleted`,
    statusCode: 200,
}
```

### /get-one-location

* REQUEST: GET

* content-type: application/json

* Details: Enables a user to fetch one data that already exists in the database
  
#### Request body

```sh
{
    email
}
```

#### Response

```sh
{
   successful: true,
    message: {},
    statusCode: 200,
}
```

### /get-all-locations

* REQUEST: GET

* content-type: application/json

* Details: Enables a user to fetch all data that already exists in the database
  
#### Request body

```sh
{
    email
}
```

#### Response

```sh
{
   successful: true,
    message: [{}],
    statusCode: 200,
}
```

### /calculate-distance

* REQUEST: POST

* content-type: application/json

* Details: Enables a user to calculate the distance between two locations

#### Request body

```sh
{
    email
}

```

#### Response

```sh
{
    successful: true,
    message:{},
    statusCode: 200,
}
```

## NOTE

You cannot calculates the distance between your location and others if you don't already have an existing data of couple of location stored in the database
