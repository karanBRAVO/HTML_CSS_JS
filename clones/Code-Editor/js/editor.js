// syntax highlight and line number logic

function getLineCount(id) {
  let lineCount = 1;
  for (let i = 0; i < id.value.length; i++) {
    if (id.value[i] == "\n") {
      lineCount += 1;
    }
  }
  return lineCount;
}

function createLineNumbers(id, num) {
  let spanEle = document.createElement("span");
  spanEle.innerHTML = `${num}`;
  id.children[0].append(spanEle);
}

function htmlLineIncrementFunc() {
  let html_lineCount = getLineCount(htmlCode);

  htmlLineNumberContainer.children[0].innerHTML = ``;

  for (let lineCount = 1; lineCount <= html_lineCount; lineCount++) {
    createLineNumbers(htmlLineNumberContainer, lineCount);
  }
  changeTextareaPadding(htmlCode, htmlLineNumberContainer);
}

function cssLineIncrementFunc() {
  let css_lineCount = getLineCount(cssCode);

  cssLineNumberContainer.children[0].innerHTML = ``;

  for (let lineCount = 1; lineCount <= css_lineCount; lineCount++) {
    createLineNumbers(cssLineNumberContainer, lineCount);
  }
  changeTextareaPadding(cssCode, cssLineNumberContainer);
}

function jsLineIncrementFunc() {
  let js_lineCount = getLineCount(jsCode);

  jsLineNumberContainer.children[0].innerHTML = ``;

  for (let lineCount = 1; lineCount <= js_lineCount; lineCount++) {
    createLineNumbers(jsLineNumberContainer, lineCount);
  }
  changeTextareaPadding(jsCode, jsLineNumberContainer);
}

htmlCode.addEventListener("keyup", () => {
  htmlLineIncrementFunc();
});

cssCode.addEventListener("keyup", () => {
  cssLineIncrementFunc();
});

jsCode.addEventListener("keyup", () => {
  jsLineIncrementFunc();
});

htmlCode.addEventListener("scroll", () => {
  htmlLineNumberContainer.scrollTop = htmlCode.scrollTop;
});

cssCode.addEventListener("scroll", () => {
  cssLineNumberContainer.scrollTop = cssCode.scrollTop;
});

jsCode.addEventListener("scroll", () => {
  jsLineNumberContainer.scrollTop = jsCode.scrollTop;
});

htmlCode.addEventListener("click", () => {
  setIframeBody();
  htmlLineIncrementFunc();
  removeAllDropDown("none", "none", "none", "none", "none", "none");
});

cssCode.addEventListener("click", () => {
  cssLineIncrementFunc();
  removeAllDropDown("none", "none", "none", "none", "none", "none");
});

jsCode.addEventListener("click", () => {
  jsLineIncrementFunc();
  removeAllDropDown("none", "none", "none", "none", "none", "none");
});
