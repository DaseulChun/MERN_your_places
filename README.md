# Your Fav Places
Your Fav Places is a SNS which you can post your favourite places and share pictures. 

🎉 You can checkout this awesome application at [https://yourfavplaces.web.app](https://yourfavplaces.web.app)!

## Technologies
* Node.js/ Express.js
* React.js
* MongoDB
* Heroku/ Firebase/ AWS S3
* Google API: Maps, Geocoding

## Setup
### Prerequisites
To enjoy this application fully, you need :
* MongoDB user credential
* Create database in your MongoDB and create "places", "users" collections inside the database
* Google API Key for Maps JavaScript & Geocoding
* Create your own JWT_KEY
* AWS credentials (IAM user accessKeyId & secretAccessKey)
* Create a bucket under AWS S3  

### Installation
```sh
git clone git@github.com:DaseulChun/MERN_your_places.git
cd MERN_your_places
cd backend
npm install 
npm start // This will start the backend server
cd ..
cd client
npm install 
npm start // This will open up the browser
```

### Input Your Credentials
After cloning this project to your computer, open up [/backend/nodemon.json.txt](https://github.com/DaseulChun/MERN_your_places/blob/master/backend/nodemon.json.txt) and input all your credentials accordingly. Now you will be able to play around with it. 

## Features
* All users can sign up & login
* All users can view places
* All users can view places on the Google Map
* Authenticated users can create places
* Authenticated and authorized users can update & delete their places
* Geocoding (Convert addresses into geographic coordinates like latitude and longitude)