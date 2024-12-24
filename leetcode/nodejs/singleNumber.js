var singleNumber = function(nums) {
    let hash = {};

    if(!nums.length) return 0;

    for(let i = 0; i < nums.length; i++) {
        if(hash.hasOwnProperty(nums[i])) {
           hash[nums[i]] = hash[nums[i]] + 1; 
           continue; 
        }

        hash[nums[i]] = 1;
    }
    
    let selectedKey = "";
    let value = 0;
    for(const [key, val] of Object.entries(hash)) {
        if(!value || value > val) {
            selectedKey = key;
            value = val;
        }
    }
    
    return +selectedKey;
};
