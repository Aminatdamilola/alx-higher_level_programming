#!/usr/bin/python3
def fizzbuzz():
    for i in range(1, 101):
        if (i % 15 == 0):
            print("FizzBUzz", end="")
        elif (i % 3 == 0):
            print("Buzz", end="")
        elif (i % 5 == 0):
            print("Buzz", end="")
        else:
            print("{:d}".format(i), end="")
