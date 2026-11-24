function findMissingElements(nums: number[]): number[] {
    if (nums.length === 0) return

    let res = []
    const min=Math.min(...nums);
    const max=Math.max(...nums);
    const numSet = new Set(nums);

    for (let i = min + 1; i < max; i++) {
        if (!numSet.has(i)) {
            res.push(i);
        }
    }

    return res;
};