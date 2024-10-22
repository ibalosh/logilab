package tasks.queues;

public class PriorityQueueX {
    private long[] queueArray;
    private int maxSize;
    private int items;

    public PriorityQueueX(int size) {
        queueArray = new long[size];
        maxSize = size;
        items = 0;
    }

    //5 4 3 2
    public void insert(long item) {
        if (isFull()) {
            return;
        }

        if (items == 0) {
            queueArray[items++] = item;
        }
        else {
            int j;
            for (j=items-1;j>=0;j--) {
                if (queueArray[j] < item) {
                    queueArray[j+1] = queueArray[j];
                }
                else {
                    break;
                }
            }
            queueArray[j+1] = item;
            items++;
        }
    }

    public long remove() {
        if (isEmpty()) {
            return -1;
        }
        else {
            queueArray[items-1] = 0;
            return queueArray[--items];
        }
    }

    public boolean isEmpty() {
        return items == 0;
    }

    public boolean isFull() {
        return items == maxSize;
    }
}
