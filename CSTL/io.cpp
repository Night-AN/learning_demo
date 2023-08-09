#include <iostream>

int main (){
    using std::cin;
    using std::cout;
    using std::endl;
    char b[10];
    double c;
    int a;
    while(std::cin >> c){
        cout << std::scientific << c << std::flush <<endl;
    }
}