![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/playlistHome.png)

# Julhas PlayList Solver Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Theme of This Project
This project is simple crud operation between two-end using 'REST API' both Frontend and backend (frontend is developed with Angular 7 which can make request CRUD to the server end. And the backend service is made with Django python framework. That backend service is all made as a repository into my git account. Link is https://github.com/Maxyee/Julhas_playlist_Solver_Django_Backend). Simple Idea is This project hold a users favourite play list of his youtube. Suppose a user have shown so many videos in youtube but he want to collect all of those video as a list of favourite on his own software not in the youtube favourite list.

## How to Run this project on your machine

1. At first install node js to your machine

then run this commant

`npm install -g @angular/cli`

after installing the angular/cli. run another command

`npm install`

Then

`npm start`

Navigate to `http://localhost:4200/home`. Because I didn't Implement the Login Register Section Right now. Thats why you need to navigate to this URL.

## NOTE
If you want to fetch data to your home at first you need to Run the backend server and then add some data using this Angular App.

## CRUD API

For Video GET request:
http://localhost:8000/api/v1/videos/


For Video POST request:
http://localhost:8000/api/v1/videos/

For Video PUT request:
http://localhost:8000/api/v1/videos/19

For Video DELETE request:
http://localhost:8000/api/v1/videos/18

## Application Preview

Note I have added the authentication to my backend python project that why every service into this project I need to send a Access Token
which I added in every request as a Header.

How you can make a access token is described into my backend repository Docs file check it..

# For GET Data:

At first you will see the home page where a REST API request GET is called. Which Brings All of the data from the database about Video.
a method is called when page load which is ngOnInit() into the home.component.ts file

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/updateButton.png)

Into that method I called another method refreshList() which is define into a service called video.service.ts this refreshList() hit the server GET request and get's all the data.

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/updateButton.png)

# For POST Data:
if you need to post a data to the application you also need to hit Post Api. And Post request is also created form video.service.ts file
click on the nav bar Add Videos Button you will get a Form which is model binding form our video.model.ts file
After clicking the Upload button we fire a POST request to the server with the Form Data.


![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/updateButton.png)

# For PUT Data:
When You want to update your specific data for this application video just click the button called Update Video you will get another page with the binding data and then when you press Upload button it fires another service method putVideo() . This method is define into the video.service.ts file
note that we need to pass the specific model for update the specific video as a parameter to that putVideo(Video) method

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/updateButton.png)


# For DELETE Data:
And deleting the video just click the Delete Video button from home. It will call a method deleteVideo() from video.service.ts file 
note that we need to pass the specific Id for delete the specific video as a parameter to that deleteVideo(id) method

![alt text](https://github.com/Maxyee/Julhas_Playlist_Solver_Angular_frontend/blob/master/PlaylistScreenShot/updateButton.png)


## Further help
Mail me into this email address : julhas.glostars@gmail.com
