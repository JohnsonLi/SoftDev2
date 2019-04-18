from functools import reduce

file = open('book.txt', 'r', encoding='utf-8').read().split()
file = [word.lower().strip('-.,;!?:()/!@$%&"\n') for word in file]
# print(file)
# list = ['the', 'the', 'hi']
def single_word(book, word):
    return reduce(lambda x, y : x + y, [1 for x in file if x == word])
    
def group_words(book, words):
    return reduce(lambda x, y: x + y, [1 for x in book if x in words])

def most_frequent(book):
    return reduce((lambda x, y: x if single_word(book, x) > single_word(book, y) else y), book)

# print(single_word(file, 'the'))
# print(group_words(['a', 'cristo']))
# print(most_frequent(file))
