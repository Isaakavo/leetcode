# roman = {
#   'I': 1,
#   'V': 5,
#   'X': 10,
#   'L': 50,
#   'C': 100,
#   'D': 500,
#   'M': 1000,
# };


# class Solutions:
#   def romantToInt(self, s: str) -> int:
#     result = 0
#     i = 0
#     while i < len(s):

#       actual = roman[s[i]]
#       next = roman[s[i + 1]]
#       if actual > next:
#         result += actual
#       else:
#         result += next - actual
#         i += 1
#       i += 1
#     return result


# solution = Solutions()
# solution.romantToInt('III')



a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,12,13, 10, 9]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

c = []

for i in b:
  if i in a:
    c.append(i)

print(c)