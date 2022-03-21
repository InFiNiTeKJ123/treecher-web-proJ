from rest_framework import serializers
from classroom.models import Classroom, Post, Question, Answer, TakenQuiz
from treecher.serializers import NewUserSerializer, StudentsSerializer


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
        fields = ('id', 'classroom', 'published', 'author', 'content', 'status')

class QuestionSerializer(serializers.ModelSerializer):
    classroom = serializers.SlugRelatedField(
        slug_field='name',
        queryset= Classroom.objects.all()
    )
    class Meta:
        model = Question
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.SlugRelatedField(
        slug_field='question',
        queryset= Question.objects.all()
    )
    class Meta:
        model = Answer
        fields = '__all__'