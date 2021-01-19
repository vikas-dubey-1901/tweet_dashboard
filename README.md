## tweet_dashboard

## Introduction

#This is a Tweet dashborad project which developed using Twitter API V2 endpoints.

#Steps to setup this project
- Apply for twitter developer account https://developer.twitter.com/en/apply/user.html
- Create a project inside your account.
- Create a new App inside your project in developer account.
- Once your App is created you can gather essentials like Consumer API key , Consumer API secret , and Bearer token (these all are required to setup this project).
- Now deploy your App and get App URL.
- Replace localost with your App URL everywhere in the project.
- now got to your twitter developer account portal and activate 3-legged OAuth.
- Fill all the neccesary details like website URL( your hosted URL) , Callback URL(Your call back URL in my case it is https://tweet-handler.herokuapp.com/oauth/callback
- Run npm install noth for frontend and backend folder  to start the React and Express server.
- Now you good to go :+1: :+1:

# This project use CRC login of Twitter to Authenticate User i.e you have to provide your twitter user credentials for CRC authentication.
# User authentication has been done with Passport ( a NPM package ) 


# This app will allow useers to connect their twitter accounts, fetch their tweets and reply to them within the application.
# Currently it is development phase so all the features are not available.

# run npm install noth for frontend and backend


![alt text](https://github.com/vikas-dubey-1901/tweet_dashboard/blob/master/Screenshot%20(16).png)
![alt text](https://github.com/vikas-dubey-1901/tweet_dashboard/blob/master/Screenshot%20(15).png)
