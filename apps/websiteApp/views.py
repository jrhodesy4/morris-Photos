from django.shortcuts import render, redirect
from .models import Family, Landscape, Wedding, Shower, GoPro, Personal

# Create your views here.
def index(request):
    return render(request, 'websiteApp/index.html')

def family(request):
    pictures = Family.objects.all()
    return render(request, 'websiteApp/family.html', {'pictures': pictures})

def personal(request):
    pictures = Personal.objects.all()
    return render(request, 'websiteApp/personal.html', {'pictures': pictures})

def landscape(request):
    pictures = Landscape.objects.all()
    return render(request, 'websiteApp/landscape.html', {'pictures': pictures})

def wedding(request):
    pictures = Wedding.objects.all()
    return render(request, 'websiteApp/wedding.html', {'pictures': pictures})

def shower(request):
    pictures = Shower.objects.all()
    print pictures
    return render(request, 'websiteApp/shower.html', {'pictures': pictures})

def gopro(request):
    pictures = GoPro.objects.all()
    return render(request, 'websiteApp/gopro.html', {'pictures': pictures})

def about(request):
    return render(request, 'websiteApp/about.html')

def landing(request):
    return render(request, 'websiteApp/landing.html')
