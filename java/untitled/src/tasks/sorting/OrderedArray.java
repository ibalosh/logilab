package tasks.sorting;

import java.util.Arrays;

public class OrderedArray {
    private int[] array = new int[10];
    private int size = 0;

    public void insert(int value) {
        int j=0;
        for (;j<size;j++) {
            if (array[j] > value) {
                break;
            }
        }

        for (int i=size+1;i>j;i--) {
            array[i]=array[i-1];
        }
        array[j] = value;
        size++;
    }


    //1 2 3 3 3 3 4 4 5
    public void noDupsAlt() {
        int toDelete = 0;
        for (int i=0,j=1;j<size;j++) {
            if (array[i] == array[j]) {
                toDelete++;
            }
            else {
                i++;
                array[i] = array[j];
            }
        }
        size -= toDelete;
    }
    public void noDups() {
        int toDelete = 0;
       for (int i=0;i<size-1;i++) {
           while (array[i] == array[i+1]) {
                toDelete++;
                i++;
           }
           if (toDelete > 0) {
               array[i+1-toDelete] = array[i+1];
           }
       }
       size = size - toDelete;
    }

    public int median() {
        return array[size/2];
    }

    public void delete(int value) {
        int j=0;
        for (;j<size;j++) {
            if (array[j] == value) {
                break;
            }
        }

        for (int i=j;i<size;i++) {
            array[i]=array[i+1];
        }
        size--;
    }

    public int[]getArray() {
        return this.array;
    }

    public void printArray() {

        for(int i=0;i<size;i++) {
            System.out.println(array[i]);
        }
    }

    private void switchPosition(int[] array, int left, int right) {
        int temp=array[left];
        array[left] = array[right];
        array[right] = temp;
    }
}
