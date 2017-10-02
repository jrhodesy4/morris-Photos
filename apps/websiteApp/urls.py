from django.conf.urls import url
from . import views           # This line is new!

urlpatterns = [
url(r'^$', views.index),
url(r'^family$', views.family),
url(r'^about$', views.about),
url(r'^personal$', views.personal),
url(r'^gopro$', views.gopro),
url(r'^landscape$', views.landscape),
url(r'^wedding$', views.wedding),
url(r'^shower$', views.shower),
]
