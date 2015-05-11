from django import forms

class ContactForm(forms.Form):
    your_name = forms.CharField(label="Your name", max_length=100)
    your_email = forms.CharField(label="Your email", max_length=256)
    message = forms.CharField(label="Message", widget=forms.Textarea, max_length=5000)
