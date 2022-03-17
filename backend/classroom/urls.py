from posixpath import basename
from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from classroom.views import ClassroomViewSets, createclassroom

app_name = 'classroom'

router = routers.DefaultRouter()
router.register(r'', ClassroomViewSets, basename="Classroom")

urlpatterns = [
    path('', include(router.urls)),
    path('create', createclassroom),
]