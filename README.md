# SkateNote
Skaters' notebook to track skate trick progressions.

Frontend: React

Backend: Django

1. Your can find your next skate trick to learn from our skate trick library. 

2. Once you have decided on a trick to practice you can add it to your "Practice" list. You can practice as many tricks as you like at the same time. 

3. After you went out and had an awesome skate session, record your session by completing the info like: duration, summary, note... You can even enter a video link of your skate session!

Have fun with this app, skaters! Go out and shread!



## Setup guide

To use python in a virtual environment pipenv shell, run ```pipenv shell```.

To run Django server, at “/skatenote/“, run ```python manage.py run server```

To run NPM dev server, at root, run ```npm run dev```

To create database migrations, run ```python manage.py makemigrations```

To migrate the database, run ```python manage.py migrate```

Trick library is stored in a JSON file. To load the data from ```./data/tricks.json```, run ```python manage.py loaddata tricks.json```

## Frontend
React application with redux
webpack
babel
dependencies
```
    "axios": "^0.21.1",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-alert": "^7.0.2",
    "react-alert-template-basic": "^1.0.0",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.3",
    "react-router-dom": "^5.2.0",
    "react-transition-group": "^4.4.1",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0"
```

## Backend
Django application, with Django REST framework.
User authentication: knox
Database: SQLite
Python: python_version = "3.8"

```
django = "*"
djangorestframework = "*"
django-rest-knox = "*"
```

## Screenshots

### Home page
![Home1](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Home.png)
Authenticated home page
![Home2](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Home_with_login.png)

### User authentication
![Login](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Login.png)
![Register](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Register.png)


### Trick Library
![Tricks](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Trick_Lib.png)
![Trick Detail](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Trick_detail.png)

### Practice
![Practice1](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Practice.png)
![Practice2](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Practice_Add.png)
![Practice3](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Practice_update.png)

### Session
![Session1](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Session_Add.png)
![Session2](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Session_Edit.png)
![Session3](https://github.com/SeanZheng21/SkateNote/blob/master/Screenshots/Session_detail.png)