/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (45.58%)
 * Likes:    19390
 * Dislikes: 4747
 * Total Accepted:    4.6M
 * Total Submissions: 10.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let sorted = strs.sort((a, b) => (a < b ? -1 : 1));
    console.log(sorted)
    let result ='';
    for (let i = 0; i < sorted[0].length; i++) {
        if (sorted[0][i] === sorted[sorted.length - 1][i]){
            console.log(sorted[0][i],sorted[sorted.length - 1][i])
            result+=(sorted[0][i])
        } else {
            break;  // 여기서 바로 중단해야 오류 안 남
        }
           
    }
    return result
};
console.log(longestCommonPrefix(["dog","racecar","car"]))
// @lc code=end

