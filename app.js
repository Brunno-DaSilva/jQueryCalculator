$(() => {
  //Set the initial variables state;
  let firstNum = [];
  let secondNum = [];
  let operation = "";
  let result;

  $("main > div").on("click", function(e) {
    let num = parseInt($(this).text());

    console.log(num);
    // if its another operation, caculate the result of the first tow arrays and clear them
    // check if it is a number
    if (!parseInt($(".numbers").text())) {
      $(".numbers").text("");
    }
    if (num || $(this).text() === ".") {
      // if it is a number push it to the first number array
      if (operation === "") {
        firstNum.push($(this).text());
      } else {
        secondNum.push($(this).text());
      }
      $(".numbers").text($(".numbers").text() + $(this).text());
    } else {
      if ($(this).text() === "CLEAR") {
        $(".numbers").text("0");
        result = null;
        operation = "";
        firstNum = [];
        secondNum = [];
        return;
      }
      // if its an operation set operation to the operation
      if (secondNum.length > 0 && $(this).text() === "=") {
        sendResult();
        return;
      } else {
        operation = $(this).text();
        $(".numbers")
          .text("")
          .text(operation);
      }
    }
  });

  sendResult = () => {
    let first = firstNum.join("");
    let second = secondNum.join("");
    // this could be if else, just showing another way
    switch (operation) {
      case "x":
        result = first * second;
        break;
      case "-":
        result = first - second;
        break;
      case "+":
        result = first + second;
        break;
      case "/":
        result = first / second;
        break;
      default:
      // code block
    }

    // set the first num to the result and clear in case we want to do another op
    firstNum = result.toString().split("");
    secondNum = [];
    operation = "";

    $(".numbers").text(result);
  };
});
