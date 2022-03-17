from django.db import models
from django.utils import timezone
from django.conf import settings
from treecher.models import NewUser
from treecher.models import Teacher, Student
# Create your models here.

from string import ascii_lowercase
import random


def random_digit(digit=7):
    return "".join([random.choice(ascii_lowercase) for _ in range(digit-1)])

class Classroom(models.Model):
    name = models.CharField(max_length=30, default='Classroom', null=False)
    about = models.TextField()
    Teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name="Teacher")
    Students = models.ManyToManyField(Student, related_name="Students")
    join_code = models.CharField(max_length=7, default=random_digit())

    def __str__(self):
        return self.name 

# class Post(models.Model):

#     class PostObjects(models.Manager):
#         def get_queryset(self):
#             return super().get_queryset().filter(status='published')

#     option =(
#         ('draft', 'Draft'),
#         ('published', 'Published')
#     )
        
#     classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, default=1)
#     title = models.CharField(max_length=250)
#     content = models.TextField()
#     slug = models.SlugField(max_length=250, unique_for_date='published')
#     publish = models.DateTimeField(default=timezone.now)
#     author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='classroom_posts')


#     class Meta:
#         ordering = ('-published', )

#     def __str__(self):
#         return self.title