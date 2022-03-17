from dataclasses import field
from xml.dom import UserDataHandler
from rest_framework import serializers
from treecher.models import NewUser, Student, Teacher
from django.contrib.auth import get_user_model

User = get_user_model()

class CreateStudentSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    is_student = serializers.BooleanField(default=True)
    is_teacher = serializers.BooleanField(default=False)

    class Meta:
        model = NewUser
        fields = ('email', 'first_name', 'last_name', 'password', 'is_student', 'is_teacher')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password) 
        instance.save()
        student = Student.objects.create(user=instance)
        student.save()
        return instance

class CreateTeacherSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    is_student = serializers.BooleanField(default=False)
    is_teacher = serializers.BooleanField(default=True)

    class Meta:
        model = NewUser
        fields = ('email', 'first_name', 'last_name', 'password', 'is_student', 'is_teacher')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password) 
        instance.save()
        teacher = Teacher.objects.create(user=instance)
        teacher.save()
        return instance


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_student', 'is_teacher')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_student', 'is_teacher')

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'