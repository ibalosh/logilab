package tasks.queues;

import tasks.linkedlists.LinkList;
import tasks.linkedlists.LinkQueue;

import java.util.LinkedList;
import java.util.Queue;

public class MyStack {
    private Queue<Integer> queue;
    private Integer top = null;

    public MyStack() {
        this.queue = new LinkedList<>();
    }

    public void push(int x) {
        this.queue.add(x);
        this.top = x;

    }

    public int pop() {
        Integer pop = -1;

        if (this.queue.isEmpty()) {
            return pop;
        }
        Queue<Integer> tempQueue = new LinkedList<>();
        while (this.queue.size() > 1) {
            this.top = this.queue.remove();
            tempQueue.add(top);
        }

        pop = this.queue.remove();
        this.queue = tempQueue;
        return pop;
    }

    public int top() {
        return this.top;
    }

    public boolean empty() {
        return this.queue.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
