# Installing 

On MacOS:
- brew install python
- python3 --version - to check if is installed
- brew install pipx
- pipx --version - to check if is installed
- python3 -m venv api - to create a virtual env 
- source api/bin/activate - to activate the virtual env api
Note: You must activate the virtual environment every time you open the command prompt to work on your project.
- python3 -m pip install Django
- django-admin --version - to check if is installed
- cd api
- django-admin startproject roupa_solidaria
- cd roupa_solidaria
- py manage.py runserver
- access http://127.0.0.1:8000/ and see "The install worked successfully! Congratulations!"