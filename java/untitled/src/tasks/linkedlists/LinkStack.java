package tasks.linkedlists;

public class LinkStack {
    private LinkList stack;

    public LinkStack() {
        stack = new LinkList();
    }

    public void push(int value) {
        stack.insertFirst(value, value);
    }

    public int pop() {
        return stack.deleteFirst().iData;
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public void displayStack() {
        System.out.print("Stack top->bottom: ");
        stack.displayList();
    }
}
