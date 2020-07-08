# Use an official Python runtime as a parent image
FROM python:3.7

# Install curl, node, & yarn
RUN apt-get -y install curl \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash \
  && apt-get install nodejs \
  && curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /app/backend

# Install Python dependencies
COPY ./backend/Pipfile ./backend/Pipfile.lock /app/backend/
RUN pip install pipenv && pipenv install --system

# Install JS dependencies
WORKDIR /app/frontend

# ./frontend/yarn.lock
COPY ./frontend/package.json /app/frontend/
RUN $HOME/.yarn/bin/yarn install

# Add the rest of the code
COPY . /app/

# Build static files
RUN $HOME/.yarn/bin/yarn build

# Have to move all static files other than index.html to root/
# for whitenoise middleware
WORKDIR /app/frontend/build

RUN mv *.ico *.js *.json root

# Collect static files
# RUN mkdir /app/backend/staticfiles

WORKDIR /app/backend

# SECRET_KEY is only included here to avoid raising an error when generating static files
# RUN  python manage.py collectstatic --noinput

EXPOSE $PORT

CMD gunicorn backend.api_project.wsgi -b 0.0.0.0:$PORT
# CMD python3 backend/manage.py runserver 0.0.0.0:$PORT
