from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from .views import StudentUserCreate, TeacherUserCreate,  BlacklistTokenUpdateView, UserViewset, whoami

app_name = 'treecher'

router = routers.DefaultRouter()
router.register(r'', UserViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('whoami', whoami, name="whoami"),
    path('create/st', StudentUserCreate.as_view(), name="create_student"),
    path('create/th', TeacherUserCreate.as_view(), name="create_teacher"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]