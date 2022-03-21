// // class ListNode {
// //   val: string;
// //   next: ListNode | null;
// //   prev: ListNode | null;
// //   constructor(val?: string, next?: ListNode | null, prev?: ListNode | null) {
// //     this.val = val === undefined ? null : val;
// //     this.next = next === undefined ? null : next;
// //     this.prev = prev === undefined ? null : prev;
// //   }
// // }
// class DoublyLinkedList {
//   head: ListNode;
//   tail: ListNode;
//   size: number;
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   insert(node: string) {
//     let newNode = new ListNode(node);
//     if (this.head === null) {
//       this.head = newNode;
//     } else if (this.tail !== null) {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//     }
//     this.tail = newNode;
//     this.size++;
//   }
//   insertAtPos(node: string, pos: string) {
//     let newNode = new ListNode(node);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       let pointer = this.head;
//       while (pointer !== null && pointer.val !== pos) {
//         pointer = pointer.next;
//       }
//       pointer.next = newNode;
//       newNode.prev = this.tail.prev;
//       this.tail = newNode;
//     }
//     // this.size++;
//   }
//   find(node: string): ListNode {
//     let position: number = 0;
//     let point = this.head;
//     if (this.head === null) {
//       return;
//     } else {
//       while (point !== null && point.val !== node) {
//         point = point.next;
//         position++;
//       }
//     }
//     return point;
//   }
//   moveForward(steps: number, current: string): string {
//     if (this.head === null) {
//       return;
//     } else {
//       let pointer = this.find(current);
//       let counter = 0;
//       while (pointer !== null && counter !== steps) {
//         pointer = pointer.next;
//         counter++;
//       }
//       return pointer.val;
//     }
//   }
//   moveBackwards(steps: number, current: string): string {
//     if (this.tail === null) {
//       return;
//     } else {
//       let pointer = this.find(current);
//       let counter = 0;
//       while (pointer !== null && counter !== steps) {
//         pointer = pointer.prev;
//         counter++;
//       }
//       return pointer.val;
//     }
//   }
//   removeLast(): string {
//     const value = this.tail.val;
//     this.tail = this.tail.prev;
//     if (this.tail === null) {
//       this.head = null;
//     } else {
//       this.tail.next = null;
//     }
//     this.size--;
//     return value;
//   }
// }
// // class BrowserHistory {
// //   list: DoublyLinkedList;
// //   current: string;
// //   backSteps: number;
// //   forwardSteps: number;
// //   constructor(homepage: string) {
// //     this.list = new DoublyLinkedList();
// //     this.list.insert(homepage);
// //     this.current = this.list.head.val;
// //     this.backSteps = 0;
// //     this.forwardSteps = 0;
// //   }
// //   visit(url: string): void {
// //     if (this.forwardSteps > 0) {
// //       this.list.insertAtPos(url, this.current);
// //     } else {
// //       this.list.insert(url);
// //     }
// //     this.current = this.list.tail.val;
// //     this.backSteps++;
// //     this.forwardSteps = 0;
// //   }
// //   back(steps: number): string {
// //     if (steps > this.backSteps) {
// //       this.backSteps = 0;
// //       this.forwardSteps = this.list.size - 1;
// //       return this.list.head.val;
// //     } else {
// //       this.current = this.list.moveBackwards(steps, this.current);
// //       this.backSteps -= steps;
// //       this.forwardSteps += steps;
// //     }
// //     return this.current;
// //   }
// //   forward(steps: number): string {
// //     if (steps > this.forwardSteps) {
// //       this.forwardSteps = 0;
// //       this.backSteps = this.list.size - 1;
// //       return this.list.tail.val;
// //     } else {
// //       this.current = this.list.moveForward(steps, this.current);
// //     }
// //     this.backSteps += steps;
// //     this.forwardSteps -= steps;
// //     return this.current;
// //   }
// // }
// // const browerser = new BrowserHistory('leetcode.com');
// // browerser.visit('google.com');
// // browerser.visit('facebook.com');
// // browerser.visit('youtube.com');
// // browerser.back(1);
// // browerser.back(1);
// // browerser.forward(1);
// // browerser.visit('linkedin.com');
// // browerser.forward(2);
// // browerser.back(2);
// // browerser.back(7);
// // browerser.forward(4);
// // console.log('finish');
//# sourceMappingURL=browser-history.js.map