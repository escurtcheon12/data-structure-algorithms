var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const subs = target - nums[i];
        if(map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        
        map.set(subs, i);
    }
};

var twoSum = function(nums, target) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(hash.hasOwnProperty(nums[i])) {
          return [hash[nums[i]], i]
        }
        hash[target - nums[i]] = i;
    }
};
