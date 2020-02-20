// What is the third argument ('false') for in the following statement
$start.addEventListener('click', function() { play(quiz) } , false); 

/* 
    This is for historical reasons. When the browser event system was first designed, there were two different conflicting ways of modeling how it worked.
    There were called event capture and event bubbling.
    For example take this HTML:
         <html>
            <body>
               <a href="#">Content</a>
            </body>
         </html>

   If the click event happens on the a element, should the ancestor elements know?
   It was widely accepted that they should.
   But the question was "in what order?" they should notified.
   The Microsoft and Netscape devs had different opinions.

   One model was event capture (advocated by Netscape devs).
   This notified the html element first and worked its way down the tree:
   -html
   -body
   -a

   The other model was event bubbling (advocated by the Microsoft devs).
   This notified the target element first, and worked its way up the tree:
   -a
   -body
   -html
   
   The eventual compromise is that it sould be BOTH

   -html (capture phase)
   -body (capture phase)
   -a (capture phase)
   -a (bubbling phase)
   -body (bubbling phase)
   -html (bubbling phase)

   So the event works its way down the tree and then back up again.

   This is a long-winded way of getting to the addEventListener  
   addEventListener listens to both capture phase and bubbling phase events.
   The third parameter, called useCapture, allows the programmer to specify which phase they want to use.
   In modern browsers this defaults to 'false'. You will probably never come across a circumstance in were you want to use the capturing phase, especially as IE still doesn't support it.
   BUT old browsers need the 'false' argument to be explicit.

   So, we use the useCapture=false argument to prevent event capturing in OLD browsers

*/
