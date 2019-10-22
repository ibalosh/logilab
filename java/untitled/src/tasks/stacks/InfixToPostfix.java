package tasks.stacks;

public class InfixToPostfix {
    private StackXC stack;
    private String input;
    private String output = "";

    public InfixToPostfix(String in) {
        input = in;
        stack = new StackXC(in.length());
    }

    public String doTrans()  {
        for (int j=0;j<input.length();j++) {
            char ch = input.charAt(j);
            stack.displayStack("For " + ch + " ");

            switch (ch) {
                case '+':
                case '-':
                    gotOper(ch, 1);
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
            stack.displayStack("While ");
            output = output + stack.pop();
        }
        stack.displayStack("End ");
        return output;

    }

    public void gotOper(char opThis, int prec1) {
        while (!stack.isEmpty()) {
            char opTop = stack.pop();

            if (opTop == '(') {
                stack.push(opTop);
                break;
            }
            else {
                int prec2;

                if (opTop == '+' || opTop == '-') {
                    prec2 = 1;
                } else {
                    prec2 = 2;
                }

                if (prec2 < prec1) {
                    stack.push(opTop);
                    break;
                }
                else {
                    output = output + opTop;
                }
            }
        }

        stack.push(opThis);

    }

    public void gotParent(char c) {
        while (!stack.isEmpty()) {
            char chx = this.stack.pop();
            if (chx == '(') {
                break;
            }
            else {
                output = output + chx;
            }
        }
    }
}
