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

![Dashboard Page](/public/assets/Dashboard.jpeg)

### Create Car Page

![Create Car Page](/public/assets/Create%20Car.jpeg)

### Create Car Notification

![Create Car Notification](/public/assets/Create%20Success.jpeg)

### Update Car Page

![Update Car Page](/public/assets/Update%20Car.jpeg)

### Update Car Notification

![Update Car Notification](/public/assets/Update%20Success.jpeg)

### Delete Car Modal

![Delete Car Modal](/public/assets/Delete%20Modal.jpeg)

### Delete Car Notification

![Delete Car Notification](/public/assets/Delete%20Success.jpeg)

## Endpoints

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
  "result": [
    {
      "_id": "651b210546d655d751c21a71",
      "name": "Toyota Corolla",
      "price": 25000,
      "category": "medium",
      "image": "car-1696276741798.jpg",
      "createdAt": "2023-10-02T19:59:01.856Z",
      "updatedAt": "2023-10-02T19:59:01.856Z",
      "__v": 0
    },
    {
      "_id": "651b211f46d655d751c21a74",
      "name": "Honda Civic",
      "price": 23000,
      "category": "medium",
      "image": "car-1696276767467.jpeg",
      "createdAt": "2023-10-02T19:59:27.493Z",
      "updatedAt": "2023-10-02T19:59:27.493Z",
      "__v": 0
    },
    // Other car entries...
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

name = Mitsubishi L300
price = 22000
category = medium
image = [file]
```

**Response:**

```bash
{
    "status": "success",
    "message": "Car has been created successfully",
    "result": {
        "name": "Mitsubishi L300",
        "price": 22000,
        "category": "large",
        "image": "car-1696278757821.jpg",
        "_id": "651b28e54e5df748547a0de3",
        "createdAt": "2023-10-02T20:32:37.911Z",
        "updatedAt": "2023-10-02T20:32:37.911Z",
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

name = Mitsubishi Colt L300
price = 200000
category = large
image = [file]
```

**Response:**

```bash
{
    "status": "success",
    "message": "Car has been updated successfully",
    "result": {
        "_id": "651b28e54e5df748547a0de3",
        "name": "Mitsubishi Colt L300",
        "price": 200000,
        "category": "large",
        "image": "car-1696278892382.jpg",
        "createdAt": "2023-10-02T20:32:37.911Z",
        "updatedAt": "2023-10-02T20:34:52.429Z",
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
    "result": {
        "_id": "651b28e54e5df748547a0de3",
        "name": "Mitsubishi Colt L300",
        "price": 200000,
        "category": "large",
        "image": "car-1696278892382.jpg",
        "createdAt": "2023-10-02T20:32:37.911Z",
        "updatedAt": "2023-10-02T20:34:52.429Z",
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
    "result": {
        "_id": "651b2b14483b482930361b10",
        "name": "Mitsubishi Colt L300",
        "price": 200000,
        "category": "large",
        "image": "car-1696279327553.jpg",
        "createdAt": "2023-10-02T20:41:56.081Z",
        "updatedAt": "2023-10-02T20:42:07.570Z",
        "__v": 0
    }
}
```

## ERD

![ERD](/public/assets/ERD.png)
