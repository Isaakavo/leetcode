/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
 

Example:
  Input:
  ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
  [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
  Output:
  [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
  BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
  browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
  browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
  browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
  browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
  browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
  browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
  browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
  browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
  browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
  browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
 
Constraints:
  1 <= homepage.length <= 20
  1 <= url.length <= 20
  1 <= steps <= 100
  homepage and url consist of  '.' or lower case English letters.
  At most 5000 calls will be made to visit, back, and forward.
*/

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
