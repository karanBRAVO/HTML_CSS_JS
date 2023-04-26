// settings and save

// functions
function getTitle() {
  return projectNameTag.innerHTML;
}

function getOwner() {
  return ownerNameTag.innerHTML;
}

function setTitle(title) {
  projectNameTag.innerHTML = title;
  localStorage.setItem("projectName", title);
}

function setOwner(owner) {
  ownerNameTag.innerHTML = owner;
  localStorage.setItem("ownerName", owner);
}

function removeAllDropDown(
  layoutOptionsContainer_style_display,
  thumbTackDropDown_options_style_display,
  htmlCodeDown_showOptions_down_style_display,
  cssCodeDown_showOptions_down_style_display,
  jsCodeDown_showOptions_down_style_display,
  saveOptionsCont_style_display
) {
  layoutOptionsContainer.style.display = layoutOptionsContainer_style_display;
  thumbTackDropDown_options.style.display =
    thumbTackDropDown_options_style_display;
  htmlCodeDown_showOptions_down.style.display =
    htmlCodeDown_showOptions_down_style_display;
  cssCodeDown_showOptions_down.style.display =
    cssCodeDown_showOptions_down_style_display;
  jsCodeDown_showOptions_down.style.display =
    jsCodeDown_showOptions_down_style_display;
  saveOptionsCont.style.display = saveOptionsCont_style_display;
}

function showFixedCont() {
  removeAllDropDown("none", "none", "none", "none", "none", "none");
  fixedCont.style.display = "flex";
  title_inp.value = getTitle();
  owner_inp.value = getOwner();
  chevronDownOptions("none", "none", "none");
}

function setTitle_Owner() {
  if (title_inp.value.length > 0) {
    setTitle(title_inp.value);
  }
  if (owner_inp.value.length > 0) {
    setOwner(owner_inp.value);
  }
  closeFixedContBtn.click();
}

function settingOptionsContainerDisplay(
  fixed_changeNameCont_style_display = "flex",
  fixed_changeFontCont_style_display = "flex"
) {
  fixed_changeNameCont.style.display = fixed_changeNameCont_style_display;
  fixed_changeFontCont.style.display = fixed_changeFontCont_style_display;
}

function addActiveClassToBtns(
  changeName_btn_className = "",
  changeFont_btn_className = "",
  changeHtmlSettings_btn_className = "",
  changeCssSettings_btn_className = "",
  changeJsSettings_btn_className = ""
) {
  changeName_btn.className = changeName_btn_className;
  changeFont_btn.className = changeFont_btn_className;
  changeHtmlSettings_btn.className = changeHtmlSettings_btn_className;
  changeCssSettings_btn.className = changeCssSettings_btn_className;
  changeJsSettings_btn.className = changeJsSettings_btn_className;
}

function setEditorOptionsValues(
  fixed_textColorInp_value = "",
  fixed_fontSizeInp_value = ""
) {
  fixed_textColorInp.value = fixed_textColorInp_value;
  fixed_fontSizeInp.value = fixed_fontSizeInp_value;
}

function changeTextareaPadding(textArea_id, lineCont_id) {
  let lineContainer_width = lineCont_id.clientWidth;
  textArea_id.style.paddingLeft = `${lineContainer_width + 4}px`;
}

function changeTextareaStyle(id, color, size, fontFamily) {
  id.style.color = color;
  id.style.fontSize = size;
  id.style.fontFamily = fontFamily;
}

function saveAllFiles(fileName, content) {
  const element = document.createElement("a");
  const blob = new Blob([content], { type: "plain/text" });
  const url = URL.createObjectURL(blob);
  element.href = url;
  element.download = fileName;
  document.body.appendChild(element);
  element.style.display = "none";
  element.click();
  document.body.removeChild(element);
}

function chevronDownOptions(
  htmlCodeDown_showOptions_down_style_display,
  cssCodeDown_showOptions_down_style_display,
  jsCodeDown_showOptions_down_style_display
) {
  htmlCodeDown_showOptions_down.style.display =
    htmlCodeDown_showOptions_down_style_display;
  cssCodeDown_showOptions_down.style.display =
    cssCodeDown_showOptions_down_style_display;
  jsCodeDown_showOptions_down.style.display =
    jsCodeDown_showOptions_down_style_display;
}

// event listenters
// navbar
downloadSepFile_dropDown.addEventListener("click", () => {
  const updatedHtmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Title -->
        <title>${getTitle()}-CodeEditor</title>
        <!-- Css -->
        <link rel="stylesheet" href="style.css">
        <!-- Js -->
        <script defer src="script.js"></script>
    </head>
    
    <body>
        ${htmlCode.value}
    </body>

    </html>`;

  let File_Content = {
    "index.html": updatedHtmlCode,
    "style.css": cssCode.value,
    "script.js": jsCode.value,
  };

  for (let key in File_Content) {
    saveAllFiles(key, File_Content[key]);
  }
});

saveLocally_dropDown.addEventListener("click", () => {
  let userHtmlCode = htmlCode.value;
  let userCssCode = cssCode.value;
  let userJsCode = jsCode.value;

  localStorage.setItem("htmlCode", userHtmlCode);
  localStorage.setItem("cssCode", userCssCode);
  localStorage.setItem("jsCode", userJsCode);
});

downloadSingleFile_dropDown.addEventListener("click", () => {
  const updateCode = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Title -->
        <title>${getTitle()}-CodeEditor</title>
        <!-- Css -->
        <style>
            ${cssCode.value}
        </style>
    </head>
    
    <body>
        ${htmlCode.value}
        <!-- Javascript -->
        <script>
            ${jsCode.value}
        </script>
    </body>

    </html>
    `;

  saveAllFiles("index.html", updateCode);
});

nav_saveBtn.addEventListener("click", () => {
  if (saveOptionsCont.style.display == "none") {
    removeAllDropDown("none", "none", "none", "none", "none", "block");
  } else {
    removeAllDropDown("none", "none", "none", "none", "none", "none");
  }
});

settingsBtn_nav.addEventListener("click", () => {
  showFixedCont();
  changeName_btn.click();
});

thumbTackDropDown_nav.addEventListener("click", () => {
  if (thumbTackDropDown_options.style.display == "flex") {
    removeAllDropDown("none", "none", "none", "none", "none", "none");
  } else {
    removeAllDropDown("none", "flex", "none", "none", "none", "none");
  }
});

showShortcuts_Btn.addEventListener("click", () => {
  fixedCont.style.display = "flex";
  fixed_mainConatainer.style.display = "none";
  shortcutCont_settings.style.display = "grid";
});

//left container
changeName_btn.addEventListener("click", () => {
  settingOptionsContainerDisplay("flex", "none");
  addActiveClassToBtns("active", "", "", "", "");
});

changeFont_btn.addEventListener("click", () => {
  settingOptionsContainerDisplay("none", "flex");
  addActiveClassToBtns("", "active", "", "", "");
  setEditorOptionsValues();
});

changeHtmlSettings_btn.addEventListener("click", () => {
  settingOptionsContainerDisplay("none", "flex");
  addActiveClassToBtns("", "", "active", "", "");
  setEditorOptionsValues(htmlCode.style.color, htmlCode.style.fontSize);
});

changeCssSettings_btn.addEventListener("click", () => {
  settingOptionsContainerDisplay("none", "flex");
  addActiveClassToBtns("", "", "", "active", "");
  setEditorOptionsValues(cssCode.style.color, cssCode.style.fontSize);
});

changeJsSettings_btn.addEventListener("click", () => {
  settingOptionsContainerDisplay("none", "flex");
  addActiveClassToBtns("", "", "", "", "active");
  setEditorOptionsValues(jsCode.style.color, jsCode.style.fontSize);
});

// right contianer
projectNameTag.addEventListener("click", () => {
  showFixedCont();
});

fixed_textColorChoose.addEventListener("blur", () => {
  fixed_textColorInp.value = fixed_textColorChoose.value;
});

fixed_selectFontFamily.addEventListener("blur", () => {
  fixed_selectFontFamily.style.fontFamily =
    fixed_selectFontFamily.options[fixed_selectFontFamily.selectedIndex].value;
});

fixed_okBtn.addEventListener("click", () => {
  setTitle_Owner();
});

fixed_applyBtn.addEventListener("click", () => {
  let fontFamily =
    fixed_selectFontFamily.options[fixed_selectFontFamily.selectedIndex].value;
  let color = fixed_textColorInp.value;
  let size = fixed_fontSizeInp.value;
  if (changeFont_btn.className === "active") {
    changeTextareaStyle(htmlCode, color, size, fontFamily);
    changeTextareaStyle(cssCode, color, size, fontFamily);
    changeTextareaStyle(jsCode, color, size, fontFamily);
    changeTextareaStyle(
      htmlLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );
    changeTextareaStyle(
      cssLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );
    changeTextareaStyle(
      jsLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );

    changeTextareaPadding(htmlCode, htmlLineNumberContainer);
    changeTextareaPadding(cssCode, cssLineNumberContainer);
    changeTextareaPadding(jsCode, jsLineNumberContainer);
  } else if (changeHtmlSettings_btn.className === "active") {
    changeTextareaStyle(htmlCode, color, size, fontFamily);
    changeTextareaStyle(
      htmlLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );

    changeTextareaPadding(htmlCode, htmlLineNumberContainer);
  } else if (changeCssSettings_btn.className === "active") {
    changeTextareaStyle(cssCode, color, size, fontFamily);
    changeTextareaStyle(
      cssLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );

    changeTextareaPadding(cssCode, cssLineNumberContainer);
  } else if (changeJsSettings_btn.className === "active") {
    changeTextareaStyle(jsCode, color, size, fontFamily);
    changeTextareaStyle(
      jsLineNumberContainer.children[0],
      color,
      size,
      fontFamily
    );

    changeTextareaPadding(cssCode, cssLineNumberContainer);
  }

  closeFixedContBtn.click();
});

closeFixedContBtn.addEventListener("click", () => {
  fixedCont.style.display = "none";
});

// editor window
htmlCode_settingBtn.addEventListener("click", () => {
  showFixedCont();
  changeHtmlSettings_btn.click();
});

cssCode_settingBtn.addEventListener("click", () => {
  showFixedCont();
  changeCssSettings_btn.click();
});

jsCode_settingBtn.addEventListener("click", () => {
  showFixedCont();
  changeJsSettings_btn.click();
});

htmlCode_downBtn.addEventListener("click", () => {
  if (htmlCodeDown_showOptions_down.style.display === "block") {
    chevronDownOptions("none", "none", "none");
  } else {
    chevronDownOptions("block", "none", "none");
  }
});

cssCode_downBtn.addEventListener("click", () => {
  if (cssCodeDown_showOptions_down.style.display === "block") {
    chevronDownOptions("none", "none", "none");
  } else {
    chevronDownOptions("none", "block", "none");
  }
});

jsCode_downBtn.addEventListener("click", () => {
  if (jsCodeDown_showOptions_down.style.display === "block") {
    chevronDownOptions("none", "none", "none");
  } else {
    chevronDownOptions("none", "none", "block");
  }
});

expandHtmlEditorWindow_Btn.addEventListener("click", () => {
  if (expandHtmlEditorWindow_Btn.children[0].innerHTML == "Expand") {
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent("dblclick", true, true);
    htmlNameContainer.dispatchEvent(clickEvent);
  } else if (expandHtmlEditorWindow_Btn.children[0].innerHTML == "Shrink") {
    htmlNameContainer.click();
  }
  chevronDownOptions("none", "none", "none");
});

expandCssEditorWindow_Btn.addEventListener("click", () => {
  if (expandCssEditorWindow_Btn.children[0].innerHTML == "Expand") {
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent("dblclick", true, true);
    cssNameContainer.dispatchEvent(clickEvent);
  } else if (expandCssEditorWindow_Btn.children[0].innerHTML == "Shrink") {
    cssNameContainer.click();
  }
});

expandJsEditorWindow_Btn.addEventListener("click", () => {
  if (expandJsEditorWindow_Btn.children[0].innerHTML == "Shrink") {
    jsNameContainer.click();
  } else if ((expandJsEditorWindow_Btn.children[0].innerHTML = "Expand")) {
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent("dblclick", true, true);
    jsNameContainer.dispatchEvent(clickEvent);
  }
  chevronDownOptions("none", "none", "none");
});

notepad_htmlCode_Btn.addEventListener("click", () => {
  notepad_htmlCode_Btn.className = "htmlCodeOptionsDown checkBox";
  highlightHtmlCode_Btn.className = "htmlCodeOptionsDown";
});

highlightHtmlCode_Btn.addEventListener("click", () => {
  notepad_htmlCode_Btn.className = "htmlCodeOptionsDown";
  highlightHtmlCode_Btn.className = "htmlCodeOptionsDown checkBox";
});

notepad_cssCode_Btn.addEventListener("click", () => {
  notepad_cssCode_Btn.className = "cssCodeOptionsDown checkBox";
  highlightCssCode_Btn.className = "cssCodeOptionsDown";
});

highlightCssCode_Btn.addEventListener("click", () => {
  notepad_cssCode_Btn.className = "cssCodeOptionsDown";
  highlightCssCode_Btn.className = "cssCodeOptionsDown checkBox";
});

notepad_jsCode_Btn.addEventListener("click", () => {
  notepad_jsCode_Btn.className = "jsCodeOptionsDown checkBox";
  highlightJsCode_Btn.className = "jsCodeOptionsDown";
});

highlightJsCode_Btn.addEventListener("click", () => {
  notepad_jsCode_Btn.className = "jsCodeOptionsDown";
  highlightJsCode_Btn.className = "jsCodeOptionsDown checkBox";
});
