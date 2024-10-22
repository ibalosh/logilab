package tasks.linkedlists;

public class CircularLinkList {
    private Link current;
    private Link first;

    public CircularLinkList() {
        current = null;
    }

    public boolean isEmpty() {
        return (current == null);
    }

    public void setCurrent(Link link) {
        this.current = link;
    }

    public Link getCurrent() {
        return current;
    }

    private Link findPrevious() {
        Link temp = current;
        Link previous = null;

        while (temp.iData != current.next.iData) {
            previous = current;
            current = current.next;
        }

        current = current.next;
        return previous;
    }

    public void insert(int iD) {
        Link newLink = new Link(iD, iD);

        if (current == null ) {
            newLink.next = newLink;
            current = newLink;
        } else  {
            newLink.next = current.next;
            current.next = newLink;
            current = newLink;
        }

    }

    public void delete() {
        if (current.next == current) {
            current = null;
        }
        else {
            Link search = current;
            do {
                search = search.next;
            } while (search.next != current);

            search.next = current.next;
            current = search;
        }
    }

    public void displayList() {
        System.out.print("List (current-->last): ");

        Link temp = this.current;
        do {
            temp.display();
            temp = temp.next;
            System.out.print(" ");
        } while (temp != current);

        System.out.println("");
    }

    public Link find(int key) {
        Link temp = this.current;
        do {
            if (temp.iData == key) {
                return temp;
            }
            temp = temp.next;
        } while (temp != current);

        return null;
    }

    public Link delete(int key) {
        if (isEmpty())
            return null;

        if (current.iData == key) {
            Link temp = current;
            current = current.next;
            return temp;
        }

        Link current = this.current;
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
