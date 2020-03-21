// wait until web page loads
$(() => {
  $("form").on("submit", addToDo);
}); // closing document on ready

// get the value and display it on the page
const addToDo = () => {
  // grab the element
  event.preventDefault();
  const $inputBox = $("#input-box");
  // get the value store in a variable - just text not a jQuery element
  const todo = $inputBox.val();
  // change the value to an empty string to make it clear
  $inputBox.val("");
  // make a div
  const $div = $("<div>")
    // add the class of to-do-item
    .addClass("to-do-item")
    // inside the div add an h3 with the text of our todo
    .html("<h3>" + todo + "</h3>");

  // append the div
  $("#to-do-list").append($div);

  // add a button to our div
  const $button = $("<button>")
    // text say 'completed'
    .text("Complete")
    // add an event listner
    .on("click", moveToDo)
    // append to div
    .appendTo($div);
};

// move todo div to completed
const moveToDo = () => {
  // get the parent of the button we clicked on
  const $toDoDiv = $(event.currentTarget).parent();

  $toDoDiv
    // remove the class of to-do-item
    .removeClass("to-do-item")
    // add the class of done-item
    .addClass("done-item")
    // detach from current container and append to completed div (appendTo does both detach and append! Hooray!)
    .appendTo($("#completed"))
    //target the children of this div
    .children()
    // access the button
    .eq(1)
    // change the text from complete to remove
    .text("REMOVE")
    // add event listner to this button
    .on("click", removeToDo);
};

// remove the to do from the page entirely
const removeToDo = () => {
  // target the clicked button's parent and remove it
  $(event.currentTarget)
    .parent()
    .remove();
};
