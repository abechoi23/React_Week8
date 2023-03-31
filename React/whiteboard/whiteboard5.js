/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should
this, nums1 has a length of m + n, where the first melements denote the elements that should be merged, and the last n elements are set to 0and should be ignored. nums2 has a length of n.
7:35
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1. */

function mergedArray (nums1, nums2, m, n) {
    newNums = []
    for (num of nums1) {
        if (num != 0) {
            newNums.push(num)
            console.log(newNums)
        }
    }for (num2 of nums2) {
        if (num2 != 0) {
            newNums.push(num2)
            console.log(newNums)
        }
    }return newNums.sort()
}


// Linear approach constant space:
const jsMerge = (nums1, m, nums2, n) => {
    let [iOne, iTwo, iFinal] = [m - 1, n - 1, nums1.length - 1]
    while (iTwo >= 0) {
        nums1[iFinal] = nums1[iOne] >= nums2[iTwo] ? nums1[iOne] : nums2[iTwo]
        nums1[iOne] >= nums2[iTwo] ? iOne-- : iTwo--
        iFinal--
    } return nums1
}

console.log((+[![]]+[+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+(+!+[])+(+[])+(+[])+(+[]))])[+!+[]+[+[]]] + (!![]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[+!![]+[+[]]] + ' ' + ([]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[!![]+!![]+!![]] + (!![]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[+!![]+[+[]]] + (!![]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[+!![]+[+[]]] + (![]+[])[!+[]+!+[]] + ' ' + ([]+[][(![]+[])[+!![]]+(!![]+[])[+[]]])[!![]+!![]+!![]] + (![]+[])[+!+[]] + (!+[]+[])[+[]] + (![]+[])[!+[]+!+[]+!+[]])