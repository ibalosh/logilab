package tasks.sorting;

public class Sorting {

    public int median(int[] array) {
        return array[array.length/2];
    }
    public void insertionSort(int[] array) {
        for (int i=1;i<array.length;i++) {
            int j=i;
            int temp = array[i];

            while (j >0 && array[j-1] >= temp) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    }
    public int insertionSortNoDups(int[] array) {
        int dups=0;
        for (int i=1;i<array.length;i++) {
            int j=i;
            int temp = array[i];

            while (j >0 && array[j-1] > 0 && array[j-1] >= temp) {
                if (array[j-1] == temp) {
                    temp = -1;
                    dups++;
                }
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }

        // shift elements to left
        for (int i=dups;i<array.length;i++) {
            array[i-dups]=array[i];
        }

        return dups;
    }

    public void insertionSortCost(int[] array) {
        int copies = 0;
        int comparisons = 0;

        for (int i=1;i<array.length;i++) {
            int j=i;
            int temp = array[i];
            copies++;

            while (true) {
                if (j<=0) {
                    comparisons++;
                    break;
                }
                if (array[j-1] < temp) {
                    comparisons++;
                    break;
                }
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }

        System.out.println("Copies");
        System.out.println(copies);

        System.out.println("Comparisons");
        System.out.println(comparisons);
    }
    public void selectionSort(int[] array) {
        for (int i=0;i<array.length-1;i++) {
            int minElemIndex = i;
            for (int j=i+1;j<array.length;j++) {
                if (array[minElemIndex] > array[j]) {
                    minElemIndex = j;
                }
            }

            switchPosition(array, minElemIndex, i);
        }
    }

    public void bubbleSortBidirectional(int[] array) {
        for (int i=0;i<(array.length-1)/2;i++) {
            for(int j=i;j<array.length-i-1;j++) {
                if (array[j] > array[j+1]) {
                    switchPosition(array,j,j+1);
                }
            }

            for(int j=array.length-i-2;j>0;j--) {
                if (array[j] < array[j-1]) {
                    switchPosition(array,j,j-1);
                }
            }
        }
    }

    public void bubbleSort(int[] array) {
        for (int i=0;i<array.length-1;i++) {
            for(int j=0;j<array.length-i-1;j++) {
                if (array[j] > array[j+1]) {
                    switchPosition(array,j,j+1);
                }
            }
        }
    }

    public void bubbleSortOdEven(int[] array) {
        boolean swap = true;
        while (swap == true) {
            swap = false;
            for(int j=0;j<array.length-1;j+=2) {
                if (array[j] > array[j+1]) {
                    switchPosition(array,j,j+1);
                    swap = true;
                }
            }

            for(int j=1;j<array.length-1;j+=2) {
                if (array[j] > array[j+1]) {
                    switchPosition(array,j,j+1);
                    swap = true;
                }
            }
        }
    }

    public void bubbleSortInverse(int[] array) {
        for (int i=array.length-1;i>0;i--) {
            for (int j=0;j<i;j++) {
                if (array[j] > array[j+1]) {
                    switchPosition(array,j,j+1);
                }
            }
        }
    }


    private void switchPosition(int[] array, int left, int right) {
        int temp=array[left];
        array[left] = array[right];
        array[right] = temp;
    }

    public void printArray(int[] array) {
        for(int i=0;i<array.length;i++) {
            System.out.println(array[i]);
        }
    }

    public void printArray(int[] array,int dups) {
        for(int i=0;i<array.length-dups;i++) {
            System.out.println(array[i]);
        }
    }
}
