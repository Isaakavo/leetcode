var BrowserNode = /** @class */ (function () {
    function BrowserNode(val, next, prev) {
        this.val = val === undefined ? null : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : this.prev;
    }
    return BrowserNode;
}());
// class LinkedList <V> {
//   head: ListNode;
//   size: number;
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   insert(node: string) {
//     let newNode = new ListNode(node);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let pointer = this.head;
//       while (pointer !== null && pointer.next !== null) {
//         pointer = pointer.next;
//       }
//       pointer.next = newNode;
//       // this.tail.next = newNode;
//       // newNode.prev = this.tail;
//     }
//     this.size++;
//   }
//   insertAtPos(node: string, pos: string) {}
// }
var BrowserHistory = /** @class */ (function () {
    function BrowserHistory(homepage) {
        this.navigation = new BrowserNode(homepage);
        this.backSteps = 0;
        this.forwardSteps = 0;
    }
    BrowserHistory.prototype.visit = function (url) {
        var site = new BrowserNode(url);
        site.prev = this.navigation;
        this.navigation.next = site;
        this.navigation = site;
    };
    BrowserHistory.prototype.back = function (steps) {
        if (steps === 0 || this.navigation.prev === null) {
            return this.navigation.val;
        }
        this.navigation = this.navigation.prev;
        return this.back(steps - 1);
    };
    BrowserHistory.prototype.forward = function (steps) {
        if (steps === 0 || this.navigation.next === null) {
            return this.navigation.val;
        }
        this.navigation = this.navigation.next;
        return this.forward(steps - 1);
    };
    return BrowserHistory;
}());
var browerser = new BrowserHistory('leetcode.com');
browerser.visit('google.com');
browerser.visit('facebook.com');
browerser.visit('youtube.com');
browerser.back(1);
browerser.back(1);
browerser.forward(1);
browerser.visit('linkedin.com');
browerser.forward(2);
browerser.back(2);
browerser.back(7);
browerser.forward(4);
console.log('finish');
//# sourceMappingURL=browser-history-single.js.map