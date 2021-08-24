onEvent("button_+", "click", function( ) {
  setNumber("label_ANS", getNumber("text_input1") + getNumber("text_input2"));
});
onEvent("button_-", "click", function( ) {
  setNumber("label_ANS", getNumber("text_input1") - getNumber("text_input2"));
});
onEvent("button_*", "click", function( ) {
  setNumber("label_ANS", getNumber("text_input1") * getNumber("text_input2"));
});
onEvent("button_/", "click", function( ) {
setNumber("label_ANS",getNumber("text_input1") / getNumber("text_input2"));
});


