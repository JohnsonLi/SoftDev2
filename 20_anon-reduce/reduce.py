from functools import reduce

file = open('book.txt', 'r').read().split()
file = [word.lower().strip('-.,;!?:()/!@$%&"\n') for word in file]
# print(file)
# list = ['the', 'the', 'hi']

#use list comp to have list of frequency of given word and use reduce to sum
def single_word(book, word):
    return reduce(lambda x, y : x + y, [1 for x in file if x == word])

#parse through books and check if sublist of length, words, matches words
#if so add one to frequency
def group_words(book, words):
    words = words.lower().split()
    return reduce(lambda x, y: (x + y) , [1 for i in range(len(book)) if words == book[i:i+len(words)]])

#reigning champion on highest frequency
def most_frequent(book):
    return reduce(lambda x, y: x if single_word(book, x) > single_word(book, y) else y, book)

# print(single_word(file, 'the'))
# print(group_words(file, 'and cheaper'))
# print(most_frequent(file))
