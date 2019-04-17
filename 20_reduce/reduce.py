from functools import reduce

file = open('book.txt', 'r').read().split()
# print(file)
# list = ['the', 'the', 'hi']
def single_word(word):
    return reduce(lambda x, y : x + y, [1 for x in file if x == word])

def group_words(words):
    return reduce(lambda x, y: x + y, [1 for x in file if x in words])

def most_frequent():
    # dict = {}
    pass

# print(single_word('the'))
# print(group_words(['a', 'cristo']))
