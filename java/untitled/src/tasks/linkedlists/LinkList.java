package tasks.linkedlists;

public class LinkList {
    private Link first;

    public LinkList() {
        first = null;
    }

    public boolean isEmpty() {
        return (first == null);
    }

    public void setFirst(Link link) {
        this.first = link;
    }

    public Link getFirst() {
        return first;
    }

    public void insertFirst(int iD, double dD) {
        Link link = new Link(iD, dD);
        link.next = first;
        first = link;
    }

    // order by int
    public void insertOrdered(int iD) {
        Link newLink = new Link(iD, iD);

        if (isEmpty() || (first.iData > iD)) {
            newLink.next = first;
            first = newLink;
        }
        else {
            Link link = first;
            Link previous = null;
            while (link !=null && link.iData < iD) {
                previous = link;
                link = link.next;
            }

            newLink.next = link;
            previous.next = newLink;
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
