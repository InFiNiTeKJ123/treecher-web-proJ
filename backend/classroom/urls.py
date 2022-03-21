from posixpath import basename
from django.urls import path, include
from rest_framework import routers
from classroom.views import ClassroomViewSets, createclassroom, PostViewSets, QuestionViewSets

app_name = 'classroom'

router = routers.DefaultRouter()
router.register(r'classroom', ClassroomViewSets, basename="Classroom")
router.register(r'posts', PostViewSets, basename="Post")

urlpatterns = [
    path('', include(router.urls)),
    path('create', createclassroom),
    path('quiz', QuestionViewSets.as_view())
]