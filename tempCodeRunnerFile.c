#include <stdio.h>

int main() {
    int i, j, n, count;
    scanf("%d", &n);  // Read input for 'n'

    count = 0;  // Initialize count

    // Nested loop to count the iterations
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            count = count + 1;  // Increment count
        }
    }

    // Corrected printf statement
    printf("n = %d, count = %d\n", n, count);  // Print the values of n and count
    return 0;
}
