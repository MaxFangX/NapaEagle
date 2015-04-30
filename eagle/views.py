from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from django.http import HttpResponseRedirect

from eagle.models import Wine
from eagle.forms import ContactForm


class HomeView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        # context['contact_form'] =
        return context


class CatalogView(ListView):
    model = Wine
    template_name = "catalog.html"

    def get_context_data(self, **kwargs):
        context = super(CatalogView, self).get_context_data(**kwargs)
        context['wine_list'] = Wine.objects.order_by("-created")[:100]
        return context


def get_contact_form(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('/catalog/')
    return render(request, 'index.html', {'contact_form': form})
