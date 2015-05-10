from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from django.http import HttpResponseRedirect

from eagle.models import Wine
from eagle.forms import ContactForm


def homepage(request):
    template_name = "index.html"
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            # Handling for the contact notification
            return HttpResponseRedirect('/thanks/')
    else:
        contact_form = ContactForm()

    return render(request, "index.html", {'contact_form': contact_form})

class CatalogView(ListView):
    model = Wine
    template_name = "catalog.html"

    def get_context_data(self, **kwargs):
        context = super(CatalogView, self).get_context_data(**kwargs)
        context['wine_list'] = Wine.objects.order_by("-created")[:100]
        return context
