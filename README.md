# Challenge-04

## Table of Contents

- [Challenge-04](#challenge-04)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Clone the repository:](#clone-the-repository)
    - [Install dependencies:](#install-dependencies)
    - [Set up environment:](#set-up-environment)
  - [Usage](#usage)
    - [Start the Development Server](#start-the-development-server)
    - [Dashboard Page](#dashboard-page)
    - [Create Car Page](#create-car-page)
    - [Create Car Notification](#create-car-notification)
    - [Update Car Page](#update-car-page)
    - [Update Car Notification](#update-car-notification)
    - [Delete Car Modal](#delete-car-modal)
    - [Delete Car Notification](#delete-car-notification)
  - [Endpoints](#endpoints)
    - [Test API](#test-api)
    - [Get All Cars](#get-all-cars)
    - [Create car](#create-car)
    - [Update Car](#update-car)
    - [Get One](#get-one)
    - [Delete Car](#delete-car)
  - [ERD](#erd)

## Installation

Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your system. You'll also need MongoDB installed and running.

### Clone the repository:

```shell
git clone https://github.com/aprimanfikri/challenge-04.git
cd challenge-04
```

### Install dependencies:

```shell
npm install
```

### Set up environment:

```shell
MONGO_URI=your-mongodb-uri
PORT=your-port
SESSION_SECRET=your-session-secret
```

## Usage

### Start the Development Server

To start the development server, run:

```shell
npm run dev
```

The server will start, and you can access your application at http://localhost:your-port.

### Dashboard Page

**Endpoint**

```bash
/admin/dashboard
```

![Dashboard Page](/public/assets/Dashboard.jpeg)

### Create Car Page

**Endpoint**

```bash
/admin/create
```

![Create Car Page](/public/assets/Create%20Car.jpeg)

### Create Car Notification

![Create Car Notification](/public/assets/Create%20Success.jpeg)

### Update Car Page

**Endpoint**

```bash
/admin/update/:id
```

![Update Car Page](/public/assets/Update%20Car.jpeg)

### Update Car Notification

![Update Car Notification](/public/assets/Update%20Success.jpeg)

### Delete Car Modal

![Delete Car Modal](/public/assets/Delete%20Modal.jpeg)

### Delete Car Notification

![Delete Car Notification](/public/assets/Delete%20Success.jpeg)

## Endpoints

### Test API

Test the API to make sure it's working.

**Endpoint:**

```bash
GET /api/v1/
```

**Response:**

```bash
{
  "status": "success",
  "message": "API is working fine"
}
```

### Get All Cars

Retrieve a list of all cars in the system.

**Endpoint:**

```bash
GET /api/v1/cars
```

**Response:**

```bash
{
  "status": "success",
  "message": "Get all cars",
  "data": [
    {
      "_id": "65203532bb5bb3160527ef85",
      "name": "Ini Mobil",
      "price": 1000000,
      "category": "small",
      "image": "https://ik.imagekit.io/icaruswalks/IMG-1696609583260_65MGgzbrT.jpg",
      "createdAt": "2023-10-06T16:26:26.136Z",
      "updatedAt": "2023-10-06T16:26:26.136Z",
      "__v": 0
    },
    // other cars entries
  ]
}
```

### Create car

Create a new car in the system.

**Endpoint:**

```bash
POST /api/v1/cars
```

**Request:**

```bash
Content-Type: multipart/form-data

name = Ini Mobil
price = 1000000
category = small
image = [file]
```

**Response:**

```bash
{
  "status": "success",
  "message": "Car has been created successfully",
  "data": {
    "name": "Ini Mobil",
    "price": 1000000,
    "category": "small",
    "image": "https://ik.imagekit.io/icaruswalks/IMG-1696609583260_65MGgzbrT.jpg",
    "_id": "65203532bb5bb3160527ef85",
    "createdAt": "2023-10-06T16:26:26.136Z",
    "updatedAt": "2023-10-06T16:26:26.136Z",
    "__v": 0
  }
}
```

### Update Car

Update a car in the system.

**Endpoint:**

```bash
PUT /api/v1/cars/:id
```

**Request:**

```bash
Content-Type: multipart/form-data

name = Ini Mobil Habis di Update
price = 5000000
category = large
image = [file]
```

**Response:**

```bash
{
  "status": "success",
  "message": "Car has been updated successfully",
  "data": {
    "_id": "65203532bb5bb3160527ef85",
    "name": "Ini Mobil Habis di Update",
    "price": 5000000,
    "category": "large",
    "image": "https://ik.imagekit.io/icaruswalks/IMG-1696609701981_ZWHKTeRDA.png",
    "createdAt": "2023-10-06T16:26:26.136Z",
    "updatedAt": "2023-10-06T16:28:24.642Z",
    "__v": 0
  }
}
```

### Get One

Get a single car in the system.

**Endpoint:**

```bash
GET /api/v1/cars/:id
```

**Response:**

```bash
{
  "status": "success",
  "message": "Get one car",
  "data": {
    "_id": "65203532bb5bb3160527ef85",
    "name": "Ini Mobil Habis di Update",
    "price": 5000000,
    "category": "large",
    "image": "https://ik.imagekit.io/icaruswalks/IMG-1696609701981_ZWHKTeRDA.png",
    "createdAt": "2023-10-06T16:26:26.136Z",
    "updatedAt": "2023-10-06T16:28:24.642Z",
    "__v": 0
  }
}
```

### Delete Car

Delete a car in the system.

**Endpoint:**

```bash
DELETE /api/v1/cars/:id
```

**Response:**

```bash
{
  "status": "success",
  "message": "Car has been deleted successfully",
  "data": {
    "_id": "65203532bb5bb3160527ef85",
    "name": "Ini Mobil Habis di Update",
    "price": 5000000,
    "category": "large",
    "image": "https://ik.imagekit.io/icaruswalks/IMG-1696609701981_ZWHKTeRDA.png",
    "createdAt": "2023-10-06T16:26:26.136Z",
    "updatedAt": "2023-10-06T16:28:24.642Z",
    "__v": 0
  }
}
```

## ERD

![ERD](/public/assets/ERD.png)
