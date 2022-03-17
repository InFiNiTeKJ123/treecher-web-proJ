from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from classroom.models import Classroom
from classroom.serializers import ClassroomSerializers
from treecher.models import Student

# Create your views here.

class ClassroomViewSets(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializers

    def get_queryset(self):
        classroom = Classroom.objects.all()
        return classroom

    # def create(self, request, *args, **kwargs):
    #     data = request.data

    #     new_classroom = Classroom.objects.create(
    #         name = data["name"],
    #         about = data["about"],
    #         Teacher = request.user,
    #         join_code = random_digit(),
    #     )

    #     new_classroom.save()

    #     for std in data["student"]:
    #         std_obj = Student.objects.get()
    

@api_view(['POST'])
def createclassroom(request):
    name = request.POST.get("name")
    about = request.POST.get("about")
    Teacher = request.user
    Students = get_object_or_404(Student, user_id=4)
    join_code = random_digit()

    Classroom.objects.create(
        name=name, 
        about=about,
        Teacher=Teacher,
        Students=Students,
        join_code=join_code,
    )

    return Response(name, about, Teacher, Student, join_code)