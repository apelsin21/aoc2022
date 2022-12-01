sums = [0]

with open('input') as f:
    lines = f.readlines()
    print(lines)
    i = 0

    for line in lines:
        if line == '\n':
            i += 1;
            sums.append(0);
        else:
            sums[i] += int(line)

sorted = sorted(sums, reverse=True)

print(sorted[0]+sorted[1]+sorted[2])
