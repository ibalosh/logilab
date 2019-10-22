package tasks.stacks;

public class StackXC {
    private int maxSize;
    private char[] stack;
    private int top;

    private StackXC() {}


    public StackXC(int maxSize) {
        this.maxSize = maxSize;
        this.stack = new char[maxSize];
        this.top = -1;
    }

    public void push(char value) {
        this.stack[++top] = value;
    }

    public char pop() {
        char temp = stack[top];
        stack[top] = 0;
        top--;
        return temp;
    }

    public char peek() {
        return this.stack[top];
    }

    public int size() {
        return top + 1;
    }

    public char peekN(int n) {
        return this.stack[n];
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public boolean isFull() {
        return (top == maxSize - 1);
    }

    public void displayStack(String s) {
        System.out.print(s);
        System.out.print("Stack bottom-->top:");
        for (int i=0;i<size();i++) {
            System.out.print(peekN(i));
            System.out.print(" ");
        }
        System.out.println("");

    }
}
