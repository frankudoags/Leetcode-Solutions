class Node {
    val: string;
    prev: Node | null
    next: Node | null
    
    constructor(val: string){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    curr: Node
    constructor(homepage: string) {
        this.curr = new Node(homepage);
    }

    visit(url: string): void {
        let node = new Node(url)
        let temp = this.curr;
        this.curr.next = node;
        this.curr = this.curr.next;
        this.curr.prev = temp;
    }

    back(steps: number): string {
        while(this.curr.prev && steps-- > 0){
            this.curr = this.curr.prev;    
        }
            return this.curr.val
        }

    forward(steps: number): string {
        while(this.curr.next && steps-- > 0){
            this.curr = this.curr.next;
        }
        return this.curr.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */