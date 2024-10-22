package tasks.linkedlists;

public class DoublyLinkList {
    private DoublyLink first;
    private DoublyLink last;

    public DoublyLinkList() {
        last = null;
        first = null;
    }

    public boolean isEmpty() {
        return (first == null);
    }

    public void insertFirst(int iD) {
        DoublyLink link = new DoublyLink(iD);
        if (isEmpty()) {
            first = link;
            last = link;
        } else {
            first.previous = link;
            link.next = first;
            first = link;
        }

    }

    public void insertLast(int iD) {
        DoublyLink link = new DoublyLink(iD);
        if (isEmpty()) {
            first = link;
            last = link;
        } else {
            last.next = link;
            link.previous = last;
            last = link;
        }
    }

    public void insertAfter(int key, int iD) {
        DoublyLink link = new DoublyLink(iD);

        if (isEmpty()) {
            return;
        } else {
            DoublyLink current = first;
            while (current.iData != key) {
                current = current.next;
                if (current == null)
                    return;
            }

            if (current.next == null) {
                current.next = link;
                link.previous = current;
                last = link;
            } else {
                current.next.previous = link;
                link.next = current.next;
                current.next = link;
                link.previous = current;
            }
        }
    }

    public DoublyLink deleteFirst() {
        if (isEmpty())
            return null;

        DoublyLink link = first;
        first = first.next;

        if (first == null)
            last = null;
        else
            first.previous = null;

        return link;
    }

    public DoublyLink deleteLast() {
        if (isEmpty())
            return null;

        last = last.previous;

        DoublyLink link = last;
        if (last == null)
            first = null;
        else
            last.next = null;

        return link;
    }

    public DoublyLink deleteKey(int key) {
        DoublyLink current = first;
        while (current.iData != key) {
            current = current.next;
            if (current == null)
                return null;
        }

        if (current.next == null) {
            current.previous.next = null;
            last = current.previous;
            return  current;
        } else {
            current.next.previous = current.previous;
            current.previous.next = current.next;
            return current;
        }

    }

    public void displayForward() {
        System.out.print("List (first-->last): ");

        DoublyLink current = first;
        while (current != null) {
            current.display();
            current = current.next;
            System.out.print(" ");
        }

        System.out.println("");
    }

    public void displayBackward() {
        System.out.print("List (last-->first): ");

        DoublyLink current = last;
        while (current != null) {
            current.display();
            current = current.previous;
            System.out.print(" ");
        }

        System.out.println("");
    }
}
