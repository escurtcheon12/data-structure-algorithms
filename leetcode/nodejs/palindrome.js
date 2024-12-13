var isPalindrome = function(x) {
    x += "";
    let b = "";

    for(let i = x.length - 1; i >= 0; i--) {
        b += x[i];
    }
    
    return b == x;
};

var isPalindrome = function(x) {
    return x?.toString().split('').reverse().join('') == x;
};
