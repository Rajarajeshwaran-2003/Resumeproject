from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .models import Resume

from django.shortcuts import render

def resume_form(request):
    return render(request, 'resumeapp/form.html')

def resume_form(request):
    if request.method == 'POST':
        data = Resume(
            full_name=request.POST['full_name'],
            email=request.POST['email'],
            phone=request.POST['phone'],
            summary=request.POST['summary'],
            skills=request.POST['skills'],
            experience=request.POST['experience'],
            education=request.POST['education'],
        )
        data.save()
        return render(request, 'resumeapp/resume.html', {'resume': data})
    return render(request, 'resumeapp/form.html')

