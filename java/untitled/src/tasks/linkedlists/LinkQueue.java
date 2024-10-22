package tasks.linkedlists;

public class LinkQueue {
    private LinkListFirstLast queue;

    public LinkQueue() {
        queue = new LinkListFirstLast();
    }

    public void insert(int value) {
        queue.insertLast(value, value);
    }

    public int remove() {
        return queue.deleteFirst().iData;
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }

    public void displayQueue() {
        System.out.print("queue front->rear: ");
        queue.displayList();
    }
}
