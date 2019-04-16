def union(list1, list2):
    # NOT ROBUST maybe fix later
    return list1 + [x for x in list2 if x not in list1]

def intersection(list1, list2):
    return [x for x in list1 if x in list2]

def set_diff(list1, list2):
    return [x for x in list1 if x not in list2]

def sym_diff(list1, list2):
    return set_diff(union(list1, list2), intersection(list1, list2))

def cart_prod(list1, list2):
    return [[a, b] for a in list1 for b in list2]

def own():
    pass

# print(union([1,2,3,4], [4,5,6]))
# print(intersection([1,2,3], [2,3,4]))
# print(set_diff([2,3,4], [1, 2, 3]))
# print(sym_diff([1,2,3,4], [2,3,4,5]))
# print(cart_prod(['1', '2'], ['red', 'white']))
