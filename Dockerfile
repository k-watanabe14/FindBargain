FROM python:3.8.2
ENV PYTHONBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app

CMD python manage.py runserver localhost:8000
