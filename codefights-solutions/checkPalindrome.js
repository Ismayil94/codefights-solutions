/*Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A non-empty string consisting of lowercase characters.

Constraints:
1 = inputString.length = 10.

[output] boolean

true if inputString is a palindrome, false otherwise.*/
function checkPalindrome(inputString) {
       var l=inputString.length;
       var r=(inputString.length)%2;
       var h=Math.floor((inputString.length)/2)
       
       if (r==0){
           var firsthalf=inputString.substring(0, h);
           var second=inputString.substring(h,l);
           
           if(firsthalf==second){
               return true;
           }
           else{
               return false;
           }
       }
       else{
           var firsthalf=inputString.substring(0, h);
           var second=inputString.substring(h+1,l);  
           if(firsthalf==second){
               return true;
           }
           else{
               return false;
           }
       }
}

