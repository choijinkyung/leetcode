/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (52.04%)
 * Likes:    8710
 * Dislikes: 271
 * Total Accepted:    1.4M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Given the head of a linked list and an integer val, remove all the nodes of
 * the linked list that has Node.val == val, and return the new head.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [], val = 1
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [0, 10^4].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0,head)
    let current = dummy
    while(current && current.next){
        if(current.next.val === val){
            current.next=current.next.next
        }else{
            current = current.next
        }
     
    }
    return dummy.next
};
// @lc code=end

