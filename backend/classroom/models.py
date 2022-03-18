from django.db import models
from django.utils import timezone
from django.conf import settings
from treecher.models import NewUser
from treecher.models import Teacher, Student
# Create your models here.

from string import ascii_lowercase
import random


def random_code(digit=7):
    return "".join([random.choice(ascii_lowercase) for _ in range(digit-1)])

class Classroom(models.Model):
    name = models.CharField(max_length=30, default='Classroom', null=False)
    about = models.TextField()
    Teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="Teacher")
    Students = models.ManyToManyField(Student, related_name="Students")
    join_code = models.CharField(max_length=7, default=random_code())

    def __str__(self):
        return self.name 

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    option =(
        ('draft', 'Draft'),
        ('published', 'Published')
    )
        
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=250)
    content = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='classroom_posts')
    status = models.CharField(max_length=10, choices=option, default='published')
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title