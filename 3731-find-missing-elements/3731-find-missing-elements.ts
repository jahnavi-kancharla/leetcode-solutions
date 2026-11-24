function findMissingElements(nums: number[]): number[] {
    if (nums.length === 0) return

    nums.sort((a, b) => a - b);
    let res = []
    let min = nums[0]
    let max = nums[nums.length - 1]

    const numSet = new Set(nums);

    for (let i = min + 1; i < max; i++) {
        if (!numSet.has(i)) {
            res.push(i);
        }
    }

    return res;
};