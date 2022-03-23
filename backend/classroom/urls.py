from posixpath import basename
from django.urls import path, include
from rest_framework import routers
from classroom.views import ClassroomViewSets, PostViewSets, QuestionViewSets, JoinClassroom, QuizViewSets

app_name = 'classroom'

router = routers.DefaultRouter()
router.register(r'classroom', ClassroomViewSets, basename="Classroom")
router.register(r'join', JoinClassroom, basename="Post")
router.register(r'posts', PostViewSets, basename="Post")

urlpatterns = [
    path('', include(router.urls)),
    # path('join', JoinClassroom.as_view()),
    path('quiz', QuizViewSets.as_view()),
    path('quiz/question', QuestionViewSets.as_view())
]