#include <iostream>
#include <vector>
#include <fstream>
#include <algorithm>

using namespace std;
#define FILENAME "input"

int main() {
	ifstream in(FILENAME);
	int curr_sum = 0;
	vector<int> sums;

	while(!in.eof()) {
		string text;
		getline(in, text);
		int num = atol(text.c_str());
		curr_sum += num;

		if(num == 0) {
			sums.push_back(curr_sum);
			curr_sum=0;
		}
	}

	sort(sums.begin(), sums.end(), greater<>()); 

	cout << sums[0] + sums[1] + sums[2] << endl;

	return 0;
}
