console.log("hey Utkarsh")
// single threaded asynchronus language.
// JS Code → Interpreter → JIT Compiler → Machine Code → Run
//JS uses something called Asynchronous Programming + Event Loop.
//So even though it is single-threaded, it can appear multi-threaded.
/* 
The Event Loop checks:

“Is Call Stack empty?
If yes → Move task from Queue to Stack”

Then JS runs it.

JS Code → Call Stack
Async Task → Web API
Finished → Callback Queue
Event Loop → Call Stack
Execute
JavaScript is single-threaded because it has only one call stack and executes one task at a time.
It handles multiple operations using asynchronous APIs and the event loop,
which allows non-blocking behavior without multi-threading.
*/

//const addTwo = (num1,num2) => /* return */ num1+num2 //assumimg braces not needed
// we can write it like (num1+num2) as well, if we use {} we need RETURN keyword