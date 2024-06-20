class StringManipulator {
    cleanString(str_pail){
        return str_pail.replace(/[^a-zA-Z0-9 -]/).toLowerCase();
    }
}
class PalindromeChecker  extends StringManipulator {
    isPalindrome(str_pail){
        let cleanrString = this.cleanString(str_pail);

        let revString = cleanrString.split('').reverse().join('');

        return cleanrString === revString;
    }
}

let n = new PalindromeChecker();

let main_val = "121";

let y = n.isPalindrome(main_val);

if(y){
    console.log(" is Palindrome ");
}
else{
    console.log("is not a Palindrome ");
}

