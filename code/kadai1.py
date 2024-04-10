def multiplication_table():
    print(" X ", end="")
    for i in range(1, 13):
        print(f"{i}", end="\t")
    print("\n   ---------------------------------------------------------------------------------------")

    for i in range(1, 13):
        print(f"{i} |", end="")
        for j in range(1, 13):
            result = i * j
            print(f"{result}", end="\t")
        print("\n   ---------------------------------------------------------------------------------------")

multiplication_table()
