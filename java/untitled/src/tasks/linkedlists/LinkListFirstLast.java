package tasks.linkedlists;

public class LinkListFirstLast {
    private Link first;
    private Link last;

    public LinkListFirstLast() {
        first = null;
        last = null;
    }

    public boolean isEmpty() {
        return (first == null);
    }

    public void insertFirst(int iD, double dD) {
        Link link = new Link(iD, dD);
        link.next = first;
        if (isEmpty()) {
            last = link;
        }

        first = link;


    }

    public void insertLast(int iD, double dD) {
        Link link = new Link(iD, dD);
        if (isEmpty())  {
            first = link;
            last = first;

        } else {
            last.next = link;
            last = last.next;
        }
    }

    public Link deleteFirst() {
        if (isEmpty())
            return null;

        Link temp = first;
        first = first.next;
        return temp;
    }

    public void displayList() {
        System.out.print("List (first-->last): ");

        Link current = first;
        while (current != null) {
            current.display();
            current = current.next;
            System.out.print(" ");
        }

        System.out.println("");
    }

    public Link find(int key) {
        Link current = first;
        while (current!=null) {
            if (current.iData == key) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    public Link delete(int key) {
        if (isEmpty())
            return null;

        if (first.iData == key) {
            Link temp = first;
            first = first.next;
            return temp;
        }

        Link current = first;
        while (current.next != null) {
            if (current.next.iData == key) {
                Link temp = current.next;
                current.next = current.next.next;
                return temp;
            }
            current = current.next;
        }

        return null;
    }


}
