package tasks.stacks;

public class InfixToPostfixMine {
    private StackXC stack;
    private String input;
    private String output = "";

    public InfixToPostfixMine(String in) {
        input = in;
        stack = new StackXC(in.length());
    }

    public String doTrans() {
        for (int i=0;i<input.length();i++) {
            char ch = input.charAt(i);
            switch (ch) {
                case '+':
                case '-':
                    gotOper(ch,1);
                    break;
                case '*':
                case '/':
                    gotOper(ch,2);
                    break;
                case '(':
                    stack.push(ch);
                    break;
                case ')':
                    gotParent(ch);
                    break;
                default:
                    output = output + ch;
                    break;
            }
        }

        while (!stack.isEmpty()) {
            output = output + stack.pop();
        }
        return output;
    }

    //a+b*c
    //ab+c*
    public void gotOper(char opToAdd, int priority) {
        while (!stack.isEmpty()) {
            char opOnStack = stack.pop();

            if (opOnStack == '(') {
                stack.push(opOnStack);
                break;
            }
            else {
                int pr;
                if (opOnStack == '+' || opOnStack == '-') {
                    pr = 1;
                } else {
                    pr = 2;
                }
                if (pr < priority) {
                    stack.push(opOnStack);
                    break;
                }
                else {
                    output = output + opOnStack;
                }

            }

        }

        stack.push(opToAdd);
    }

    public void gotParent(char ch) {
        while (!stack.isEmpty()) {
            char opOnStack = stack.pop();
            if (opOnStack == '(') {
                break;
            } else {
                output = output + opOnStack;
            }
        }

    }
}
