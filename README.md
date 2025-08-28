1) Ans:
    getElementById: It is used to select an element with unique id from HTML.
    
    getElementsByClassName: It is used to select all elements with a specific class name from HTML,it returns 
                            a HTML Collection.
    
    querySelector: It is used to select the first element that matches with the selector

    querySelectorAll: It is used to select all elements that match with the selector,it returns a NodeList

2) Ans:
    To create a new element,
        const newElement=document.createElement("element-type"); //it can be p,div,span etc
    
    To insert into the DOM,
        const parent=document.body;
        parent.appendChild(newElement);

3) Ans:
    It is an event on a nested element that propagates upward through its ancestors in the DOM until it reachers the root.

4) Ans:
    It is used to add a single event listener to a parent element to handle events on its current or future child elements. It is beneficial because it saves memory and simplifies code.

5) Ans:
    preventDefault(): Stops the browser's default action for an event.
    stopPropagation(): Stops the event from bubbling.