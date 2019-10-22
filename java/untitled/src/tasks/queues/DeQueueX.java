package tasks.queues;

public class DeQueueX {
    private long[] queueArray;
    private int front;
    private int rear;
    private int maxSize;
    private int items;

    public DeQueueX(int size) {
        maxSize = size;
        queueArray = new long[maxSize];
        front = 0;
        rear = -1;
        items = 0;
    }

    public void insertFront(long element) {
        if (!isFull()) {
            front = Math.floorMod(--front,maxSize);
            queueArray[front] = element;
            ++items;
            if (rear == -1) {
                rear = front;
            }
        }
    }



    public void insertRear(long element) {
        if (!isFull()) {
            rear = ++rear % maxSize;
            queueArray[rear] = element;
            ++items;
        }
    }

    public long removeFront() {
        if (!isEmpty()) {
            long previousFront = queueArray[front];
            queueArray[front] = 0;
            front = ++front % maxSize;
            --items;
            return previousFront;
        }
        return -1;
    }

    public long removeRear() {
        if (!isEmpty()) {
            long previousRear = queueArray[rear];
            queueArray[rear] = 0;
            rear = Math.floorMod(--rear, maxSize);
            --items;
            return previousRear;
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

    public long peekRear() {
        return queueArray[rear];
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
