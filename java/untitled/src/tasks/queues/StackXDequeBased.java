package tasks.queues;

public class StackXDequeBased {
    private DeQueueX stack;

    private StackXDequeBased() {}


    public StackXDequeBased(int maxSize) {
        this.stack = new DeQueueX(maxSize);
    }

    public void push(long value) {
        stack.insertRear(value);
    }

    public long pop() {
        return stack.removeRear();
    }

    public long peek() {
        return stack.peekRear();
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public boolean isFull() {
        return stack.isFull();
    }
}
