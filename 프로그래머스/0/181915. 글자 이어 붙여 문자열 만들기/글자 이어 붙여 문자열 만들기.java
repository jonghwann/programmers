class Solution {
    public String solution(String my_string, int[] index_list) {
        StringBuffer answer = new StringBuffer();

        for (int idx: index_list) {
            answer.append(my_string.charAt(idx));
        }
        
        return answer.toString();
    }
}