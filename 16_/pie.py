upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvwxyz"
number = "0123456789"
special = "!@#$%^&*"

# task 1
def check(password):
    uppers = [x for x in password if x in upper]
    lowers = [x for x in password if x in lower]
    numbers = [x for x in password if x in number]
    return True if uppers and lowers and numbers else False

# task 2
# gauge strength of password
def strength(password):
    score = 0
    uppers = [x for x in password if x in upper]
    lowers = [x for x in password if x in lower]
    numbers = [x for x in password if x in number]
    specials = [x for x in password if x in special]

    if len(password) <= 4:
        return 0
    if len(password) >= 9:
        score += 20
    if uppers:
        score += 5
    if lowers:
        score += 5
    if numbers:
        score += 5
    if specials:
        score += 15
    
    return score / 50.0 * 10

