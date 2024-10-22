package tasks.stacks;

public class StackX {
    private int maxSize;
    private long[] stack;
    private int top;

    private StackX() {}


    public StackX(int maxSize) {
        this.maxSize = maxSize;
        this.stack = new long[maxSize];
        this.top = -1;
    }

    public void push(long value) {
        this.stack[++top] = value;
    }

    public long pop() {
        return this.stack[top--];
    }

    public long peek() {
        return this.stack[top];
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public boolean isFull() {
        return (top == maxSize - 1);
    }
}
