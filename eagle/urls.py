from django.conf.urls import patterns, include, url
from eagle import views
#Use login_required later for private pages
from django.contrib.auth.decorators import login_required

urlpatterns = patterns('', 
    url(r'^$', views.HomeView.as_view(), name='index'))

