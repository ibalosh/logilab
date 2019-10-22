package tasks.hashMaps;

import java.util.*;

public class HashMaps {
    public boolean closeStrings(String word1, String word2) {
        if (word1.length() != word2.length()) return false;

        Map<Character, Integer> chars1 = new HashMap();
        Map<Character, Integer> chars2 = new HashMap();

        for (int i=0; i<word1.length();i++) {
            char letter1 = word1.charAt(i);
            char letter2 = word2.charAt(i);
            chars1.put(letter1, chars1.getOrDefault(letter1, 0) + 1);
            chars2.put(letter2, chars2.getOrDefault(letter2, 0) + 1);
        }

        if (!chars1.keySet().equals(chars2.keySet())) {
            return false;
        }


        ArrayList chars1Array = new ArrayList(chars1.values());
        ArrayList chars2Array = new ArrayList(chars2.values());

        Collections.sort(chars1Array);
        Collections.sort(chars2Array);


        return chars1Array.equals(chars2Array);
    }
}
