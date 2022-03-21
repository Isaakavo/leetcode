class BrowserNode {
  val: string;
  next: BrowserNode | null;
  prev: BrowserNode | null;

  constructor(val?: string, next?: BrowserNode | null, prev?: BrowserNode | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : this.prev;
  }
}

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

class BrowserHistory {
  navigation: BrowserNode;
  current: string;
  backSteps: number;
  forwardSteps: number;

  constructor(homepage: string) {
    this.navigation = new BrowserNode(homepage);
    this.backSteps = 0;
    this.forwardSteps = 0;
  }

  visit(url: string): void {
    const site = new BrowserNode(url);
    site.prev = this.navigation;
    this.navigation.next = site;
    this.navigation = site;
  }

  back(steps: number): string {
    if (steps === 0 || this.navigation.prev === null) {
      return this.navigation.val;
    }

    this.navigation = this.navigation.prev;
    return this.back(steps - 1);
  }

  forward(steps: number): string {
    if (steps === 0 || this.navigation.next === null) {
      return this.navigation.val;
    }

    this.navigation = this.navigation.next;
    return this.forward(steps - 1);
  }
}

const browerser = new BrowserHistory('leetcode.com');
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
