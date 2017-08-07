from django.conf.urls import url
from ng.views import NgTestView

urlpatterns = [
    url(r'^$', NgTestView.as_view(), name='index'),
]
