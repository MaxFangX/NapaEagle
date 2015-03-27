from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from eagle.models import Wine

class HomeView(TemplateView):
    template_name = "index.html"

class CatalogView(ListView):
    model = Wine
    template_name = "catalog.html"

    def get_context_data(self, **kwargs):
        context = super(CatalogView, self).get_context_data(**kwargs)
        context['wine_list'] = Wine.objects.order_by("-created")[:100]
        return context
