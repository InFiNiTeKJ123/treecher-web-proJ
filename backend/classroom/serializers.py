from tkinter.tix import Tree
from rest_framework import serializers
from classroom.models import Classroom
from classroom.models import Post
from treecher.serializers import NewUserSerializer, StudentsSerializer
from treecher.models import Teacher

class ClassroomSerializers(serializers.ModelSerializer):
    Teacher = NewUserSerializer(read_only=True)
    Students = StudentsSerializer(read_only=True, many=True)
    class Meta:
        model = Classroom
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    classroom = serializers.SlugRelatedField(
        slug_field='name',
        queryset= Classroom.objects.all()
    )
    author = NewUserSerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = ('id', 'classroom', 'published','title', 'author', 'content', 'status')