from django.shortcuts import render
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "eagle/index.html"

class CatalogView(TemplateView):
    template_name = "eagle/catalog.html"
