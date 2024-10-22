package tasks.linkedlists;

public class PriorityQueue {
    private LinkList list;

    public PriorityQueue() {
        list = new LinkList();

    }

    public void insert(int Id) {
        list.insertOrdered(Id);
    }

    public void delete() {
        list.deleteFirst();
    }

    public void display() {
        list.displayList();
    }
}
