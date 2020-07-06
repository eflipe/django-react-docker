FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend

COPY Pipfile Pipfile.lock /app/backend/
RUN pip install pipenv && pipenv install --system

COPY . /app/backend/

EXPOSE 8000
