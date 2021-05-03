# SkateNote
Skaters' notebook to track skate trick progressions.



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