""" Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
7:34
("coverage") => "covfefe"
("coverage coverage")=> "covfefe covfefe"
("nothing")=> "nothing covfefe" """


string = "nothing  nothing"
def coffee(string):
    cof= ""
    string = string.split()
    print(string)
    for n in string:
        print(n)
        if n == "coverage":
           cof += "covfefe "
        else:
            cof += n + " "
    if "coverage" not in string:
        return cof + "covfefe"
    return cof.rstrip(" ")
print(coffee(string))