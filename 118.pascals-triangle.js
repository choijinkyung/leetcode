/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (75.56%)
 * Likes:    13135
 * Dislikes: 472
 * Total Accepted:    1.9M
 * Total Submissions: 2.5M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 * 
 * 
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= numRows <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle=[];
    for(let i=0;i<numRows;i++){
       const row = Array(i + 1).fill(1); // 각 행의 처음과 끝은 1로 초기화
        
        for(j=1;j<i;j++){
            //2번째 요소부터 이전의 값과 현재의 값을 계산해서 넣기
            row[j]=triangle[i-1][j-1]+triangle[i-1][j];
        }
        triangle.push(row)
    }
    return triangle
};
// @lc code=end

