# caps-express
An express app with a single ```/post``` endpoint that expects to receive an order in the form:
```
{
  "store": "1-206-flowers",
  "orderID": "65c17431-d1f5-432c-890f-d81788e38c1c",
  "customer": "Juston Reichel",
  "address": "Lake Al, OK"
 }
```
And this emits a pickup event to the CAPS system 

## Author: Anne Thorsteinson

**[Tests](https://github.com/AnneThor/caps-express/actions)**

**[Front End - UNDER CONSTRUCTION](https://parcel-delivery-tracker.herokuapp.com/)**

## Setup

```.env``` requirements:

- ```PORT```

## Running the App

Currently working on the backend, so there is no front end display yet

- ```npm start```: this will run the app

### Endpoints:

POST to ```/pickup``` expects an order object and fires a pickup event to the CAPS server
