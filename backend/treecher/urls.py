from django.urls import path
from .views import StudentUserCreate, TeacherUserCreate,  BlacklistTokenUpdateView

app_name = 'treecher'

urlpatterns = [
    path('create/st', StudentUserCreate.as_view(), name="create_student"),
    path('create/th', TeacherUserCreate.as_view(), name="create_student"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]