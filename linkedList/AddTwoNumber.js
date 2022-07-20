/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let curr = result
    let sum = 0
    do {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        curr.next = new ListNode(sum % 10)
        curr =  curr.next

        sum = (sum > 9) ? 1 : 0

        if(!l1 && !l2 && sum){
            curr.next = new ListNode(sum)
        }

    } while (l1 || l2);

    return result.next;
};

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

// addTwoNumbers(l1,l2)

console.log(Math.floor(15/10))