from django.contrib import admin

from classroom.models import Classroom, Post, Question, Answer, TakenQuiz

# Register your models here.


class QuizAdmin(admin.ModelAdmin):
	list_display = [
        'id', 
        'title',
        ]
        
class AnswerInlineModel(admin.TabularInline):
    model = Answer
    fields = (
        'answer_text', 
        'is_correct'
    )

class QuestionAdmin(admin.ModelAdmin):
    fields = (
        'quiz',
        'question',
    )
    list_display = (
        'classroom', 
        'question',
        'date_created'
    )
    inlines = (
        AnswerInlineModel, 
    )

class AnswerAdmin(admin.ModelAdmin):
    list_display = (
        'answer_text', 
        'is_correct', 
        'question'
    )

admin.site.register(Classroom)
admin.site.register(Post)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)