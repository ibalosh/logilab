package tasks.queues;

public class QueueX {
    private long[] queueArray;
    private int front;
    private int rear;
    private int maxSize;
    private int items;

    public QueueX(int size) {
        maxSize = size;
        queueArray = new long[maxSize];
        front = 0;
        rear = -1;
        items = 0;
    }

    public void insert(long element) {
        if (!isFull()) {
            rear = ++rear % maxSize;
            queueArray[rear] = element;
            ++items;
        }

    }

    public long remove() {
        if (!isEmpty()) {
            int previousFront = front;
            front = ++front % maxSize;
            --items;
            return queueArray[previousFront];
        }

        return -1;
    }

    public void displayQueue() {
        int i=front;
        for (i=front;i!=rear;i=(i+1)%maxSize) {
            System.out.print(queueArray[i%maxSize]);
            System.out.print(",");
        }
        System.out.print(queueArray[i%maxSize]);
        System.out.println("");
    }


    public long peekFront() {
        return queueArray[front];
    }

    public boolean isEmpty() {
        return items == 0;
    }

    public boolean isFull() {
        return items == maxSize;
    }

    public int size() {
        return items;
    }

}
