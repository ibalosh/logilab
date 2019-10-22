package tasks.linkedlists;

public class DoublyLink {
    public int iData;
    public DoublyLink next;
    public DoublyLink previous;

    public DoublyLink(int iData) {
        this.iData = iData;
    }

    public void display() {
        System.out.print("{" + iData + "}");
    }
}
