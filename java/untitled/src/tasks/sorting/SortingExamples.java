package tasks.sorting;

public class SortingExamples {
    public void sorting() {
        Sorting sorting = new Sorting();
        int[] array = new int[]{8,4,3,4,5,1,0};

        System.out.println("Bubble Sort");
        sorting.bubbleSort(array);
        //sorting.printArray(array);

        int[] array2 = new int[]{8,4,3,4,5,1,0};
        System.out.println("Bubble Sort Inverted traverse");
        sorting.bubbleSortInverse(array2);
        //sorting.printArray(array2);

        int[] array3 = new int[]{8,4,3,4,1,5,1,0};
        System.out.println("Selection Sort");
        sorting.selectionSort(array3);
        //sorting.printArray(array3);

        int[] insertionArray = new int[]{2,4,3,4,1,5,1,0};
        System.out.println("Insertion Sort");
        sorting.insertionSort(insertionArray);
        //sorting.printArray(insertionArray);

        int[] bubbleArrayBi = new int[]{2,4,3,4,1,5,1,0,6,20};
        System.out.println("Bubble Sort Bidirectional");
        sorting.bubbleSortBidirectional(bubbleArrayBi);
        //sorting.printArray(bubbleArrayBi);

        //System.out.println(sorting.median(bubbleArrayBi));

        int[] bubbleArrayOdd = new int[]{2,4,3,4,1,5,1,0,6,20};
        System.out.println("Bubble Sort Odd Even");
        sorting.bubbleSortOdEven(bubbleArrayOdd);
        //sorting.printArray(bubbleArrayOdd);

        int[] insertionArrayCost = new int[]{1,2,3,4,5,6,7,0};
        System.out.println("Insertion Sort Cost");
        //sorting.insertionSortCost(insertionArrayCost);
        //sorting.printArray(insertionArrayCost);

        int[] insertionArrayDups = new int[]{2,4,3,4,1,5,6,6,7,4,5,4,3,1,0};
        System.out.println("Insertion Sort Dups");
        int dups=sorting.insertionSortNoDups(insertionArrayDups);
        sorting.printArray(insertionArrayDups, dups);
    }
    public void arrayManageMethods() {
        OrderedArray array = new OrderedArray();
        array.insert(1);
        array.insert(2);
        array.insert(2);
        array.insert(8);
        array.insert(9);
        array.insert(9);
        array.insert(9);
        array.insert(9);
        array.insert(9);
        array.noDupsAlt();
        array.printArray();
    }

    public void searchMethods() {
        BinarySearch ex = new BinarySearch();
        int[] array = {1,2,3,4,5,6};
        boolean result = ex.search(array, 7);
        boolean result_no_recursion = ex.search_no_recursion(array, 7);

        System.out.println(result);
        System.out.println(result_no_recursion);
    }
}
