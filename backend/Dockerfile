FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend

WORKDIR /backend

COPY Pipfile Pipfile.lock /backend/


RUN pip install pipenv && pipenv install --system

COPY . /backend/

EXPOSE 8000

RUN python manage.py makemigrations
RUN python manage.py migrate
