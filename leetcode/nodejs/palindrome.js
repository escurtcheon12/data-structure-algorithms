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

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false; 
        left++;
        right--;
    }

    return true;
};
