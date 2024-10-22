package tasks.linkedlists;

public class Deque {
    private DoublyLinkList list;

    public Deque() {
        list = new DoublyLinkList();
    }

    public void insertFront(int id) {
        list.insertFirst(id);

    }

    public void insertRear(int id) {
        list.insertLast(id);
    }

    public DoublyLink removeFront() {
        return list.deleteFirst();
    }

    public DoublyLink removeRear() {
        return list.deleteLast();
    }

    public void display() {
        list.displayForward();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }


}
