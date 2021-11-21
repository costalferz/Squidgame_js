from django.shortcuts import render,redirect,reverse

def game(request):
    return render(request, 'index.html')