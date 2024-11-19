const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const caret = document.getElementById("caret");

const texts = ["Other Heading", "And another Heading", "EXAMPLE HEADING"];
let i = 0;
let clearTextInterval, addTextInterval, startAddingInterval;

// clearing any leftover intervals
const clearAllIntervals = () => {
  if (clearTextInterval) clearInterval(clearTextInterval);
  if (addTextInterval) clearInterval(addTextInterval);
  if (startAddingInterval) clearInterval(startAddingInterval);
};

const updateBtn = (status) => {
  if (status == "clearing") {
    btn.classList.add("disable");
    btn.textContent = "Changing Text ...";
  } else {
    btn.classList.remove("disable");
    btn.textContent = "Change Text";
  }
};

const updateCaret = (status) => {
  if (status == "clearing") {
    caret.classList.remove("hidden");
  } else {
    caret.classList.add("hidden");
  }
};

const clearText = () => {
  clearAllIntervals();
  updateCaret("clearing");
  updateBtn("clearing");

  clearTextInterval = setInterval(() => {
    const headingLength = heading.textContent.length;
    heading.textContent = heading.textContent.slice(0, headingLength - 1);
    if (headingLength == 0) clearInterval(clearTextInterval);
  }, 100);
};

const addText = () => {
  clearAllIntervals();
  let j = 0;
  addTextInterval = setInterval(() => {
    heading.textContent += texts[i][j];
    j++;
    if (j >= texts[i].length) {
      clearInterval(addTextInterval);
      updateBtn("adding");
      updateCaret("adding");
    }
  }, 100);
};

// main btn click event Listener
btn.addEventListener("click", () => {
  // without this if check if we click more than once on the button it will skip a text from the array
  if (btn.classList.contains("disable")) return;
  clearText();
  startAddingInterval = setInterval(() => {
    // this interval to make sure that the text finished clearing before start adding the new one
    // setTimeout works but it bugs when switching tabs while the animation is running
    if (heading.textContent.length == 0) {
      addText();
      clearInterval(startAddingInterval);
    }
  }, 600);
  i == texts.length - 1 ? (i = 0) : i++;
});
