// please import standard c lib header
#include <stdio.h>
#include <stdlib.h>

// write main function
int main(int argc, char const *argv[])
{
    long long result = 0;
    for (int i = 1; i < argc; i++)
    {
        result += atoi(argv[i]);
    }

    printf("%lld", result);

    return 0;
}
