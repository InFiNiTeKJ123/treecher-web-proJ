from .settings import * 

#! run command with --settings=backend.settings_prod 

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dj_treecher',
        'USER': 'root',
        'PASSWORD': 'myP@assw0rd',
        'HOST': 'dj_mysql',
        'PORT': '3306',
    }
}

ALLOWED_HOSTS = [
    #"wd0301.coe.psu.ac.th"
    # "34.142.248.210"
    '192.168.10.10'
]

CSRF_TRUSTED_ORIGINS = [
    #"https://wd0301.coe.psu.ac.th"
    # "http://34.142.248.210/"
    'http://192.168.10.10/'
]


DEBUG = False