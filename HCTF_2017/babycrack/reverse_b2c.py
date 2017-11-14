#!/usr/bin/python3

from sys import argv
import string
import itertools
import subprocess

def reverse_b2c(b2c_out):
    for str in itertools.product(string.ascii_letters + string.digits, repeat=2):
        str = "".join(str)
        out = subprocess.check_output(["node", "b2c.js", str]).decode("utf-8")
        print(str, out)
        if (out.startswith(b2c_out)):
            print("Input was:", str)
            break

def main():
    if (len(argv) != 2):
        print("USAGE: python3", argv[0], "output_of_b2c")
    else:
        reverse_b2c(argv[1])

if __name__ == "__main__":
    main()
