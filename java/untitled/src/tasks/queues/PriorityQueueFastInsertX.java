package tasks.queues;

// Priority queue which has fast o(1) insert, but slow removal
public class PriorityQueueFastInsertX {
    private long[] queueArray;
    private int maxSize;
    private int items;

    public PriorityQueueFastInsertX(int size) {
        queueArray = new long[size];
        maxSize = size;
        items = 0;
    }

    //5 4 3 2
    public void insert(long item) {
        if (isFull()) {
            return;
        }

        queueArray[items++] = item;
    }

    public long remove() {
        if (isEmpty()) {
            return -1;
        }
        else {
            int indexMin = 0;
            for (int i=0;i<items;i++) {
                if (queueArray[i] < queueArray[indexMin]) {
                    indexMin = i;
                }
            }

            long itemToReturn = queueArray[indexMin];

            for (int i=indexMin;i<items;i++) {
                queueArray[i] = queueArray[i+1];
            }
            queueArray[items-1] = 0;
            items--;
            return itemToReturn;
        }
    }

    public boolean isEmpty() {
        return items == 0;
    }

    public boolean isFull() {
        return items == maxSize;
    }
}
