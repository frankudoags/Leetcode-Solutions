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

function swapPairs(head: ListNode | null): ListNode | null {

    let dummy = head;

    if(!dummy || !dummy.next) return dummy;

    let a_b = head?.next;

    helper(dummy, dummy?.next, null);

    if (a_b != null) {
        a_b.next = head;
        
    }

    return a_b ? a_b : null;
};


function helper(
    a: ListNode | null,
    b: ListNode | null,
    oldprev: ListNode | null,
) {
    if (a == null || b == null) return;
    if (oldprev != null) oldprev.next = b;
    let c = b.next;
    b.next = a, a.next = c;
    if (c == null) return;
    helper(c, c.next, a);
}

/**
the logic is quite simple, swap two side by side nodes in place, and move on
however, there are a lot of quirks.
You need to always hold a ref to the second swapped node, so that you can attach it to the two new nodes to be swapped.

the swap function takes in two nodes to be swapped, and a reference to the 2nd swapped node, so that you can attach it to the other two nodes to be swapped

helper( a, b, oldprev)

eg 1 -> 2 -> 3 -> 4 
we pass in 1, 2 and null to the recursive function i.e helper( 1, 2 , null)
after swapping 1 -> 2 to 2 -> 1, you need to hold a reference to "1"(i.e oldprev = 1) and pass it down to the next recursion stack, so that as we pass in 3, and 4, into the recursion function, we also pass in oldprev("1")

i.e helper (3, 4, 1)
list looks like this now 1 -> 3 -> 4 -> null
helper is : helper(3, 4, 1)

after swapping 3 and 4, we have: 4 -> 3 -> null

so we can see we need to attach the older half of the linked list
that is where old_prev comes in, attach this 4 -> 3 -> null as oldprev.next


1 - > 4 -> 3 -> null,

notice that 2 is missing, yes, we accounted for that after swapping all the nodes, I stored 2 initially before the recursion as "a_b" and then attached the swapped list as 
a_b.next i.e 2 -> 1 -> 4 -> 3 -> null

Finally

*/