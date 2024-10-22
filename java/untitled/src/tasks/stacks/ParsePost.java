package tasks.stacks;

public class ParsePost {
    StackX stack;
    String input;

    public ParsePost(String s) {
        this.input = s;
    }


    public long doParse() {
        stack = new StackX(20);
        long res = 0;
        long num1;
        long num2;

        for (int j=0;j<input.length();j++) {
            char ch = input.charAt(j);

            if (ch >= '0' && ch <= '9') {
                stack.push((long) (ch - '0'));
            }
            else {
                num1 = stack.pop();
                num2 = stack.pop();

                switch (ch) {
                    case '+':
                        res = num1 + num2;
                        break;
                    case '-':
                        res = num1 - num2;
                        break;
                    case '*':
                        res = num1 * num2;
                        break;
                    case '/':
                        res = num1 / num2;
                        break;
                    default:
                        res = 0;
                }
                stack.push(res);
            }
        }

        res = stack.pop();
        return res;
    }
}
