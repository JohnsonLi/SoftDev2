def one_loop():
    l = []
    for i in range(0, 10, 2):
        l.append(2 * str(i))
    return l

def one_comp():
    return [2 * str(x) for x in range(0, 10, 2)]

# print(one_loop())
# print(one_comp())

def two_loop():
    l = []
    for i in range(5):
        l.append(i * 10 + 7)
    return l

def two_comp():
    return [x * 10 + 7 for x in range(5)]

# print(two_loop())
# print(two_comp())

def three_loop():
    l = []
    for i in range(3):
        for j in range(3):
            l.append(i * j)
    return l

def three_comp():
    return [x * y for x in range(3) for y in range(3)]

#print(three_loop())
#print(three_comp())

def isPrime(n):
    if n == 0  or n == 1:
        return False
    for i in range(2,int(n ** 1.0/2)+1):
        if n % i == 0:
            return False
    return True

# print(isPrime(2))

def prime_loop():
    l = []
    for i in range(101):
        if isPrime(i):
            l.append(i)
    return l

def prime_comp():
    return [x for x in range(101) if isPrime(x)]

#print(prime_loop())
#print(prime_comp())

def comp_loop():
    l = []
    for i in range(101):
        if i == 0 or i== 1:
            continue
        if not isPrime(i):
            l.append(i)
    return l

def comp_comp():
    return [x for x in range(101) if not isPrime(x) and not x == 1 and not x == 0]

#print(comp_loop())
#print(comp_comp())

def factors_loop(n):
    l = []
    for i in range(1,n+1):
        if n % i == 0:
            l.append(i)
    return l

def factors_comp(n):
    return[x for x in range(1,n+1) if n % x == 0]

#print(factors_loop(24))
#print(factors_comp(24))

def transpose_loop(m):
    mT = []
    for col in range(len(m[0])):
        r = []
        for row in m:
            r.append(row[col])
        mT.append(r)
    return mT
    
def transpose_comp(m):
    return [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]

# matrix = [[1,2],[3,4],[5,6]] 
# print(transpose_loop(matrix))
# print(transpose_comp(matrix))