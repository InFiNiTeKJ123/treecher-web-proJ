FROM python:3 
ENV PYTHONUNBUFFERED 1
RUN mkdir /code 
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt 
COPY . /code/
RUN python manage.py migrate --settings=backend.settings_prod 
RUN python manage.py collectstatic --settings=backend.settings_prod 