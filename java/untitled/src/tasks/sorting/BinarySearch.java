package tasks.sorting;

public class BinarySearch {

    public boolean search_no_recursion(int[] array, int number) {
        int left = 0;
        int right = array.length - 1;
        int middle;

        while (true) {
            if (left > right) {
                break;
            }

            middle = (left + right)/2;
            if (array[middle] > number) {
                right = middle - 1;
            }
            else if (array[middle] < number) {
                left = middle + 1;
            }
            else {
                  return true;
            }
        }

        return false;
    }

    public boolean search(int[] array, int number) {
        int left = 0;
        int right = array.length - 1;
        return find(array, number, left, right);
    }

    private boolean find(int[] array, int number, int left, int right) {
        if (right < left) {
            return false;
        }

        int middle = (right + left) / 2;

        if (array[middle] == number) {
            return true;
        } else if (array[middle] > number) {
            return find(array, number, left, middle -1);
        }
        else {
            return find(array, number, middle + 1, right);
        }
    }
}
