# pythagorean triples
def triple(n):
    return [[a, b, c] for a in range(1, n) for b in range(a, n) for c in range(b, n) if a**2 + b**2 == c**2]

# print(triple(15))

# quicksort
def quicksort(nums):
    if len(nums) <= 1:
        return nums
    pivot = nums.pop()
    list1 = [x for x in nums if x < pivot]
    list2 = [x for x in nums if x >= pivot]
    return quicksort(list1) + [pivot] + quicksort(list2)

# print(quicksort([10, 80, 32, 94, 4132, 540, -70]))