from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from eagle.models import Wine

class HomeView(TemplateView):
    template_name = "eagle/index.html"

class CatalogView(ListView):
    model = Wine
    template_name = "eagle/catalog.html"

    def get_context_data(self, **kwargs):
        context = super(CatalogView, self).get_context_data(**kwargs)
        context['wine_list'] = Wine.objects.all
        return context
