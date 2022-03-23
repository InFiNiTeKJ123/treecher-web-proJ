from .settings import * 

#! run command with --settings=backend.settings_prod 

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dj_treecher',
        'USER': 'root',
        'PASSWORD': 'myP@assw0rd',
        'HOST': 'djtreecher_mysql',
        'PORT': '3306'
    }
}

ALLOWED_HOSTS = [
    "wd0301.coe.psu.ac.th"
]

DEBUG = False