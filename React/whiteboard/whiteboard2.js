/* The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
Example:
Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s' 

Assumptions:
String length is always greater than 0
String has no spaces
Size is always positive
EX:
("supercalifragilisticexpialidocious", 3)=>"sup erc ali fra gil ist ice xpi ali doc iou s"
("HelloKata", 1)=> "H e l l o K a t a"
"HelloKata", 9)=> "HelloKata"

*/

function split(str, val) {
    let result = '';
    for (let i = 0; i < str.length; i += val) {
        result += str.substr(i, val) + ' ';
    }
    return result.trim();
}

console.log(split("supercalifragilisticexpialidocious", 3));


function split(str,val){
    let new_str = ""
    let count = 0
    for (let char of str){
        if (count  < val){
            new_str += char
        }
        else{
            new_str += " " + char
            count = 0
        }
        count++
    }
    return new_str
}