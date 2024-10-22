package tasks.linkedlists;

public class ListIterator {
    private Link current;
    private Link previous;
    private LinkList ourList;

    public ListIterator(LinkList list) {
        this.ourList = list;
        reset();
    }

    public void reset() {
        this.current = ourList.getFirst();
        this.previous = null;
    }

    public boolean atEnd() {
        return current == null || current.next == null;
    }

    public void nextLink() {
        previous = current;
        current = current.next;
    }

    public Link getCurrent() {
        return current;
    }

    public void insertAfter(int iD) {
        Link newLink = new Link(iD, iD);

        if (ourList.isEmpty()) {
            current = newLink;
            ourList.setFirst(newLink);
        }else {
            newLink.next = current.next;
            current.next = newLink;
            nextLink();
        }
    }

    public void insertBefore(int iD) {
        Link newLink = new Link(iD, iD);

        if (previous == null) {
            newLink.next = ourList.getFirst();
            ourList.setFirst(newLink);
            reset();
        }
        else {
            newLink.next = previous.next;
            previous.next = newLink;
            current = newLink;
        }
    }

    public int deleteCurrent()
    {
        if (previous == null) {
            ourList.setFirst(current.next);
            reset();
        }
        else {
            previous.next = current.next;
            if (atEnd()) {
                reset();
            }
            else {
                current = current.next;
            }
        }

        return current.iData;
    }
}
