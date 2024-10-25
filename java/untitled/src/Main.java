import tasks.hashMaps.HashMaps;
import tasks.linkedlists.*;
import tasks.queues.*;
import tasks.recursions.Excersises;
import tasks.sorting.SortingExamples;
import tasks.stacks.*;

public class Main {
    public static void main(String[] args) {
        //stacksAndQueuesExamples();
        //queueCheckExamples();
        //deQueueCheckExamples();
        //stackDeQueueBasedCheckExamples();
        //priorityQueueExamples();
        //priorityQueueFastInsertExamples();
        //linkedListExamples();
        //linkedListFirstLastExamples();
        //linkedListStackExamples();
        //linkedListQueueExamples();
        //linkedListOrderedExamples();
        //linkedListDoublyExamples();
        //linkedListIteratorExamples();
        //linkedListExcersises();
        //linkedListCircularExcercise();
        //recursionExcersises();
        //hashMapExcersises();
        queueExcercises();
    }

    public static void queueExcercises() {
        MyStack stack = new MyStack();
        stack.push(1);
        stack.push(2);
        System.out.println(stack.top());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.empty());
    }
    public static void hashMapExcersises() {
        String word1 = "abbzzca";
        String word2 = "babzzcz";
        HashMaps hashMaps = new HashMaps();
        System.out.println(hashMaps.closeStrings(word1, word2));
    }

    public static void recursionExcersises() {
        Excersises ex = new Excersises();
        System.out.println(ex.pythagoriansNumbers(7));
    }

    public static void linkedListCircularExcercise() {
        System.out.println("Circular Queue");
        CircularLinkList list = new CircularLinkList();
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.displayList();

        list.delete();
        list.delete();
        list.delete();
    }

    public static void linkedListExcersises() {
        System.out.println("Priority queue");
        PriorityQueue pq = new PriorityQueue();
        pq.insert(5);
        pq.insert(4);
        pq.insert(3);
        pq.insert(2);
        pq.display();
        pq.delete();
        pq.display();

        System.out.println("Priority queue");
    }

    public static void linkedListIteratorExamples() {
        LinkList linkList = new LinkList();
        ListIterator iterator = new ListIterator(linkList);
        iterator.insertBefore(50);
        iterator.insertBefore(60);
        iterator.insertBefore(70);
        iterator.insertAfter(80);

        linkList.displayList();

        System.out.println(iterator.getCurrent().iData);
        iterator.reset();
        System.out.println(iterator.getCurrent().iData);
        iterator.nextLink();
        iterator.nextLink();
        iterator.nextLink();
        System.out.println(iterator.getCurrent().iData);
    }

    public static void linkedListDoublyExamples() {
        DoublyLinkList list = new DoublyLinkList();
        list.insertAfter(1,99);
        list.insertLast(8);
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertLast(0);
        list.insertLast(-1);
        list.insertAfter(3,33);
        list.insertAfter(-1,-2);
        list.deleteFirst();
        list.deleteFirst();
        list.deleteLast();
        list.deleteKey(2);
        list.displayForward();
        list.displayBackward();

    }

    public static void linkedListOrderedExamples() {
        LinkList list = new LinkList();
        list.insertOrdered(5);
        list.insertOrdered(3);
        list.insertOrdered(1);
        list.insertOrdered(2);
        list.insertOrdered(4);
        list.insertOrdered(6);
        list.insertOrdered(0);
        list.displayList();
    }

    public static void linkedListQueueExamples() {
        LinkQueue queue = new LinkQueue();
        queue.insert(1);
        queue.insert(2);
        queue.insert(3);
        queue.displayQueue();

        queue.remove();
        queue.displayQueue();
    }

    public static void linkedListStackExamples() {
        LinkStack stack = new LinkStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.displayStack();

        stack.pop();
        stack.displayStack();
    }

    public static void linkedListFirstLastExamples() {
        LinkListFirstLast linkedList = new LinkListFirstLast();
        linkedList.insertFirst(22, 22);
        linkedList.insertFirst(44, 44);
        linkedList.insertFirst(66, 66);

        linkedList.insertLast(11,11);
        linkedList.insertLast(33,33);
        linkedList.insertLast(55,55);

        linkedList.displayList();
        linkedList.deleteFirst();
        linkedList.deleteFirst();

        linkedList.displayList();
    }

    public static void linkedListExamples() {
        LinkList linkedList = new LinkList();
        linkedList.insertFirst(22, 2.99);
        linkedList.insertFirst(32, 3.99);
        linkedList.insertFirst(42, 4.99);
        linkedList.insertFirst(52, 5.99);

        linkedList.displayList();

        while (!linkedList.isEmpty()) {
            System.out.print("Deleted:");
            linkedList.deleteFirst().display();
            System.out.println();
        }

        linkedList.displayList();

        linkedList.insertFirst(22, 2.99);
        linkedList.insertFirst(32, 3.99);
        linkedList.insertFirst(42, 4.99);

        linkedList.displayList();
        linkedList.delete(22);
        linkedList.displayList();
        linkedList.find(42).display();
    }

    public static void  infixToPostfix() {
        System.out.println("Calculate infix to postfix");
        InfixToPostfix infixToPostfix = new InfixToPostfix("A*(B+C)-D/(E+F)");
        String output = infixToPostfix.doTrans();
        System.out.println("Postfix is " + output);

        System.out.println("Calculate infix to postfix");
        infixToPostfix = new InfixToPostfix("2+3*4");
        output = infixToPostfix.doTrans();
        System.out.println("Postfix is " + output);

        System.out.println("Calculate infix to postfix");
        // ACB**DAB+CD*+/+
        InfixToPostfixMine infixToPostfixMine = new InfixToPostfixMine("A*(C*B)+D/(A+B+C*D)");
        output = infixToPostfixMine.doTrans();
        System.out.println("Postfix is " + output);

        System.out.println(new ParsePost("567+*").doParse());
    }

    public static void priorityQueueExamples() {
        PriorityQueueX queue = new PriorityQueueX(10);
        queue.insert(1);
        queue.insert(2);
        queue.insert(4);
        queue.insert(-1);
        queue.remove();
        queue.remove();
        queue.insert(2);
        queue.insert(6);
        queue.insert(3);
        queue.insert(0);
        queue.insert(5);
    }

    public static void priorityQueueFastInsertExamples() {
        PriorityQueueFastInsertX queue = new PriorityQueueFastInsertX(10);
        queue.insert(1);
        queue.insert(4);
        queue.insert(0);
        queue.insert(2);
        queue.insert(-1);
        queue.insert(-5);
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
    }

    public static void stackDeQueueBasedCheckExamples() {
        StackXDequeBased stackXDequeBased = new StackXDequeBased(5);
        stackXDequeBased.push(4);
        stackXDequeBased.push(5);
        stackXDequeBased.push(6);
        System.out.println(stackXDequeBased.pop());
        System.out.println(stackXDequeBased.peek());
        System.out.println(stackXDequeBased.pop());
    }

    public static void deQueueCheckExamples() {
        DeQueueX queue = new DeQueueX(5);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertRear(4);
        queue.insertRear(5);
        queue.insertRear(5);
        queue.insertFront(5);

        queue.removeFront();
        queue.removeFront();
        queue.removeRear();
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);
        queue.removeRear();
        queue.removeRear();

        queue.displayQueue();
    }

    public static void queueCheckExamples() {
        QueueX queue = new QueueX(5);
        queue.insert(1);
        queue.insert(2);
        queue.insert(3);
        queue.insert(4);
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        queue.insert(1);
        queue.insert(2);
        queue.insert(3);
        queue.insert(4);
        queue.insert(5);
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        queue.remove();
        queue.insert(5);
        queue.insert(4);
        queue.insert(3);
        queue.insert(2);
        queue.insert(1);

        queue.displayQueue();
    }

    public static void charactersMathCheckExamples() {
        BracketChecker bracketChecker = new BracketChecker();
        System.out.println(bracketChecker.stringCheck("c[d]"));
        System.out.println(bracketChecker.stringCheck("a{b[c]d}e"));
        System.out.println(bracketChecker.stringCheck("a{b(c]d}e"));
        System.out.println(bracketChecker.stringCheck("a[b{c}d]e}"));
        System.out.println(bracketChecker.stringCheck("a{b(c)"));
    }

    public static void stacksAndQueuesExamples() {
        StackX stack = new StackX(10);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(1);

        System.out.println("Peek");
        System.out.println(stack.peek());

        System.out.println("Pop");
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.peek());

        System.out.println("Push");
        stack.push(8);
        System.out.println(stack.peek());

        System.out.println("Stack elements");
        while (stack.isEmpty() == false) {
            System.out.println(stack.pop());
        }

    }

    public static void sortingExamples() {
        SortingExamples ex = new SortingExamples();
        ex.arrayManageMethods();
        ex.searchMethods();
        ex.sorting();
    }
}