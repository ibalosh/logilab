package tasks.stacks;

public class BracketChecker {

    public boolean stringCheck(String input) {
        StackXC stack = new StackXC(input.length());
        for (int i=0;i<input.length();i++) {
            Character character = input.charAt(i);
            switch (character) {
                case '{' :
                case '[' :
                case '(' :
                    stack.push(character);
                    break;
                case '}' :
                case ']' :
                case ')' :
                    if (stack.isEmpty()) {
                        return false;
                    }
                    else {
                        Character currentChar = stack.pop();
                        if ((character == '}' && currentChar != '{') ||
                                (character == ']' && currentChar != '[') ||
                                (character == ')' && currentChar != '(')) {
                            return false;
                        }
                    }
                    break;
            }
        }

        if (stack.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}
