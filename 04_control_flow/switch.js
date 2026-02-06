/* 
siwtch (key) {
        case value :

            break;
        default
            break;
}
*/

const month = 3
switch (month) {
    case 1: // do take care of case sensitivity
        console.log("January")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("March")
        break; // if a case matches and break is not there it executes all the code below it except default as that breaks it.
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    default:
        break;
}