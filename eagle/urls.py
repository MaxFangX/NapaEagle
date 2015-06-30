from django.conf.urls import patterns, url
from eagle import views

urlpatterns = patterns(
    '',
    url(r'^$', views.homepage, name='homepage'),
    url(r'^catalog/$', views.CatalogView.as_view(), name='catalog')
)
