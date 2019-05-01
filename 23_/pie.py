import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

@make_HTML_heading
def greet():
    return random.choice(['hi', 'welcome', 'hello', 'hola', 'bonjour'])

# greet_heading = make_HTML_heading(greet)
# print(greet())

def fib_c(f):
    memo = {}
    def help(x):
        
    return help

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

        
