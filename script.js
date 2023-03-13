//your code here
const showLetterCount = document.getElementById("letterCount");

let showTheCount = () => {
  const getTextLength = document.getElementById("evaluatedText").value;
  const count = getTextLength.length;
  showLetterCount.innerHTML = count;
};