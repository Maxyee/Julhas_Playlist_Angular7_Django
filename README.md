![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/playlistHome.png)

# Julhas PlayList Solver (Youtube)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. (FrontEnd)
And another was created with Django Rest Framework version 2.2 (BackEnd)

## Theme of This Project
This project is simple crud operation between two-end using 'REST API' both Frontend and backend (frontend is developed with Angular 7 which can make request CRUD to the server end. And the backend service is made with Django rest framework.)
That backend service is all made into this resposity a folder called Backend. 
Simple Idea is This project hold a users favourite play list of his youtube. Suppose a user have shown so many videos in youtube but he want to collect all of those video as a list of favourite on his own software not in the youtube favourite list.

## How to Run this project on your machine (FrontEnd)

1.At first install `nodejs` to your machine go to the folder called Frontend(Angular)

then run this command

`npm install -g @angular/cli`

after installing the angular/cli. run another command

`npm install`

Then

`npm start`

Navigate to `http://localhost:4200/home`. Because I didn't Implement the Login Register Section Right now. Thats why you need to navigate to this URL.

## How to Run this project on your machine (BackEnd)

2.First you have to install `python 3` and `pip` to your machine also install the `virtualenv` for installing Django project 
so after installing this three thing run commad from cmd/bash

intall django commad
  `pip install django`
 
install virtual env command
  `pip install virtualenv`

Now go to the folder called `BackEnd(Django)` into this folder run cmd and make a `virtualenv` you can write this for making env folder

`virtualenv env`

this command will create a env file to that BackEnd(Django) folder. After this activate your env file and then all of this pakages for this project

Command for activate env (windows)

`env\Scripts\activate`

After activating your env, then switch to the project folder named playlistBackend

`cd playlistBackend`

then install all of the pakages form the file called `requirement.txt` you just write this command into the cmd

`pip install -r requirement.txt`

Now we have to migrate our models so that we can make table to the database and can make CRUD operation.

Screen shot of Categories Model:
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/CategoriesModelPython.png)

Screen shot of Videos Model:
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/VideoModelPython.png)

The migrate command is :
`python manage.py migrate`

Then run the backend server using command

`python manage.py runserver`

You will see that a development server will start at the port 8000 `http://localhost:8000/`

## Class Diagram for Backend

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/TableDiagram.png)

## CRUD API Check By PostMan

Now you have to check that all the api is working fine or not . You can install postman software where we can generate request for the serversite
to see the response of that api request
At first you need to make a access token becasue the application in backend is authenticated by the django defualt authentication feature.
So when you want to hit a request to the server site you need to pass a token for every API

So at first hit a API for registartion a User
http://localhost:8000/rest-auth/registration/
take help from this Screen Shot
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManRegister.png)

then hit another API for Login User an this APi will give you the access token
http://localhost:8000/rest-auth/login/
Take help from the Screen Shot
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManLogin.png)

Check For Video GET request:
http://localhost:8000/api/v1/videos/
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManGET.png)

Check For Video POST request:
http://localhost:8000/api/v1/videos/
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManPOST.png)

Check For Video PUT request:
http://localhost:8000/api/v1/videos/19
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManPUT.png.png)

Check For Video DELETE request:
http://localhost:8000/api/v1/videos/18
![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/PostManDelete.png)


So After checking all of this APi is working fine you can move to the frontend section and call those API from the Angular Project


## FrontEnd Calling API Angular Preview 

Already we see that two of our application is running into the localhost two ports. one is running into port number : 4200 and another is 
running into the port number: 8000 .

Now Rest of the work is we need to make request using `HttpClientModule` from angular module to handle our data through this CRUD API which I Already described in PostMan Check Section
Into this section I am describing all of the methods and Service I make in FrontEnd Angular for the project

# For GET Data:

At first you will see the home page where a REST API request GET is called. Which Brings All of the data from the database about Video.
a method is called when page load which is `ngOnInit()` into the `home.component.ts` file

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/homeRefresh.png)

Into that method I called another method `refreshList()` which is define into a service called `video.service.ts` this `refreshList()` hit the server GET request and get's all the data.

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/getRequestCode.png)

# For POST Data:
if you need to post a data to the application you also need to hit Post Api. And Post request is also created form `video.service.ts` file
click on the nav bar Add Videos Button you will get a Form which is model binding form our `video.model.ts` file
After clicking the Upload button we fire a POST request to the server with the Form Data.

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/postVideosMethod.png)

# For PUT Data:
When You want to update your specific data for this application video just click the button called Update Video you will get another page with the binding data and then when you press Upload button it fires another service method `putVideo()` . This method is define into the `video.service.ts` file
note that we need to pass the specific model for update the specific video as a parameter to that `putVideo(Video)` method

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/putVideoMethod.png)


# For DELETE Data:
And deleting the video just click the Delete Video button from home. It will call a method `deleteVideo()` from `video.service.ts` file 
note that we need to pass the specific Id for delete the specific video as a parameter to that `deleteVideo(id)` method

![alt text](https://github.com/Maxyee/Julhas_Playlist_Angular7_Django/blob/master/PlaylistScreenShot/deleteVideoMethod.png)


## Further help
Mail me into this email address : julhas.glostars@gmail.com
