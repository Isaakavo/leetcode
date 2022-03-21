/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insert = function (elem) {
        var newNode = new ListNode(elem);
        var current;
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    return LinkedList;
}());
function deleteDuplicates(head) {
    if (head === null)
        return null;
    var listResult = new ListNode(head.val);
    var prev = head;
    var next = head.next;
    var curr = listResult;
    while (prev && next) {
        if (prev.val === next.val) {
            prev = next;
            next = next.next;
            curr.next = next;
            continue;
        }
        else {
            curr.next = next;
            prev = next;
            next = next.next;
            curr = curr.next;
        }
    }
    // while (prev && next) {
    //   if (prev.val === next.val) {
    //     prev = next;
    //     next = next.next;
    //     curr.next = next;
    //     continue;
    //   } else {
    //     curr.next = next;
    //   }
    //   prev = next;
    //   next = next.next;
    //   curr = curr.next;
    // }
    return listResult;
}
var head = new LinkedList();
// let value = [1, 1, 2];
// let value = [1,1,2,3,3];
// let value = [1,1,2,3,3,3];
// let value = [1,2,3];
var value = [1, 2];
// head.val = value[0];
// head.next = new ListNode(value[1], new ListNode(value[2]));
for (var i = 0; i < value.length; i++) {
    var element = value[i];
    head.insert(element);
}
deleteDuplicates(head.head);
//# sourceMappingURL=main.js.map