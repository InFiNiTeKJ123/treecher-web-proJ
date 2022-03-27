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
    "wd0301.coe.psu.ac.th"
]

CSRF_TRUSTED_ORIGINS = [
    "https://wd0301.coe.psu.ac.th"
]


DEBUG = False