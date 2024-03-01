from django.shortcuts import render

# Create your views here.
def tour(request):
    return render(request, 'tournaments/index1.html',) 