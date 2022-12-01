#!/bin/bash

set -e
set -o pipefail
set -o nounset

elf_totals=()
curr_elf="0"
line_num=0

while IFS= read -r line
do
	line_num=$(( $line_num + 1 ))

	echo "$line_num : $line"
	if [[ "$line" == "" ]]; then
		elf_totals+=("$curr_elf")
		curr_elf="0"
	elif [[ -n "$line" ]]; then
		curr_elf=$(( "$curr_elf + $line" ))
	fi
done < $1

# Account for last elf which didn't have an empty line
elf_totals+=("$curr_elf")

echo "elf_totals: ${elf_totals[@]}"

sorted_elf_totals=()

while [[ ${#elf_totals[@]} -gt 0 ]]
do
	echo "elf_totals length: ${#elf_totals[@]}"
	curr_high=-1

	# When unsetting an element of an array, other element indices dont get updated
	for i in "${!elf_totals[@]}"
	do
		elf=${elf_totals[$i]}
		echo "$elf"
		echo "$curr_high"
		if [[ $elf -gt $curr_high ]]; then
			curr_high="$elf"
			curr_high_index="$i"
		fi
	done

	echo "curr_high_index: $curr_high_index"
	unset 'elf_totals['$curr_high_index']'

	echo "adding $curr_high to sorted_elf_totals"
	sorted_elf_totals+=("$curr_high")
done

echo "sorted_elf_totals: ${sorted_elf_totals[@]}"

high_sum=${sorted_elf_totals[0]}
high_sum=$(( "$high_sum" + "${sorted_elf_totals[1]}" ))
high_sum=$(( "$high_sum" + "${sorted_elf_totals[2]}" ))


echo "high_sum: $high_sum"
