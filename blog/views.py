from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView

from .forms import CreateUserForm
from django.core.urlresolvers import reverse_lazy
# Create your views here.

class CreateUserView(CreateView):
    template_name='signup.html'
    form_class=CreateUserForm

class RegisteredView(TemplateView):
    template_name = 'signup_done.html'