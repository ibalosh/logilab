package tasks.recursions;

public class Excersises {
    public int pythagoriansNumbers(int position) {
        if (position <= 1) {
            return 1;
        }

        return position + pythagoriansNumbers(position - 1);
    }
}
