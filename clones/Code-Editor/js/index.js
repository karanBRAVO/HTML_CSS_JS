// sizing(responsive design) and getting elements from dom

const fixedCont = document.getElementById("fixedCont");
const closeFixedContBtn = document.getElementById("closeFixedContBtn");
const title_inp = document.getElementById("title_inp");
const owner_inp = document.getElementById("owner_inp");
const fixed_okBtn = document.getElementById("fixed_okBtn");
const changeName_btn = document.getElementById("changeName_btn");
const changeFont_btn = document.getElementById("changeFont_btn");
const changeHtmlSettings_btn = document.getElementById(
  "changeHtmlSettings_btn"
);
const changeCssSettings_btn = document.getElementById("changeCssSettings_btn");
const changeJsSettings_btn = document.getElementById("changeJsSettings_btn");
const fixed_rightCont = document.getElementById("fixed_rightCont");
const fixed_changeNameCont = document.getElementById("fixed_changeNameCont");
const fixed_changeFontCont = document.getElementById("fixed_changeFontCont");
const fixed_mainConatainer = document.getElementById("fixed_mainConatainer");
const fixed_textColorChoose = document.getElementById("fixed_textColorChoose");
const fixed_textColorInp = document.getElementById("fixed_textColorInp");
const shortcutCont_settings = document.getElementById("shortcutCont_settings");
const fixed_fontSizeInp = document.getElementById("fixed_fontSizeInp");
const fixed_selectFontFamily = document.getElementById(
  "fixed_selectFontFamily"
);
const fixed_applyBtn = document.getElementById("fixed_applyBtn");

const projectNameTag = document.getElementById("projectNameTag");
const ownerNameTag = document.getElementById("ownerNameTag");
const nav_saveBtn = document.getElementById("nav_saveBtn");
const saveOptionsCont = document.getElementById("saveOptionsCont");
const downloadSepFile_dropDown = document.getElementById(
  "downloadSepFile_dropDown"
);
const saveLocally_dropDown = document.getElementById("saveLocally_dropDown");
const downloadSingleFile_dropDown = document.getElementById(
  "downloadSingleFile_dropDown"
);
const settingsBtn_nav = document.getElementById("settingsBtn_nav");
const thumbTackDropDown_nav = document.getElementById("thumbTackDropDown_nav");
const thumbTackDropDown_options = document.getElementById(
  "thumbTackDropDown_options"
);
const showShortcuts_Btn = document.getElementById("showShortcuts_Btn");

const htmlContainer = document.getElementById("htmlContainer");
const htmlInnerContainer = document.getElementById("htmlInnerContainer");
const htmlNameContainer = document.getElementById("htmlNameContainer");
const htmlImg = document.getElementById("htmlImg");
const htmlLineNumberContainer = document.getElementById(
  "htmlLineNumberContainer"
);
const htmlCode = document.getElementById("htmlCode");
const htmlCode_settingBtn = document.getElementById("htmlCode_settingBtn");
const htmlCode_downBtn = document.getElementById("htmlCode_downBtn");
const htmlName = document.getElementById("htmlName");
const htmlOptionCont = document.getElementById("htmlOptionCont");
const htmlCodeDown_showOptions_down = document.getElementById(
  "htmlCodeDown_showOptions_down"
);
const notepad_htmlCode_Btn = document.getElementById("notepad_htmlCode_Btn");
const highlightHtmlCode_Btn = document.getElementById("highlightHtmlCode_Btn");
const expandHtmlEditorWindow_Btn = document.getElementById(
  "expandHtmlEditorWindow_Btn"
);

const cssContainer = document.getElementById("cssContainer");
const cssInnerContainer = document.getElementById("cssInnerContainer");
const cssNameContainer = document.getElementById("cssNameContainer");
const cssImg = document.getElementById("cssImg");
const cssLineNumberContainer = document.getElementById(
  "cssLineNumberContainer"
);
const cssCode = document.getElementById("cssCode");
const cssCode_settingBtn = document.getElementById("cssCode_settingBtn");
const cssCode_downBtn = document.getElementById("cssCode_downBtn");
const cssName = document.getElementById("cssName");
const cssOptionCont = document.getElementById("cssOptionCont");
const cssCodeDown_showOptions_down = document.getElementById(
  "cssCodeDown_showOptions_down"
);
const notepad_cssCode_Btn = document.getElementById("notepad_cssCode_Btn");
const highlightCssCode_Btn = document.getElementById("highlightCssCode_Btn");
const expandCssEditorWindow_Btn = document.getElementById(
  "expandCssEditorWindow_Btn"
);

const jsContainer = document.getElementById("jsContainer");
const jsInnerContainer = document.getElementById("jsInnerContainer");
const jsNameContainer = document.getElementById("jsNameContainer");
const jsImg = document.getElementById("jsImg");
const jsLineNumberContainer = document.getElementById("jsLineNumberContainer");
const jsCode = document.getElementById("jsCode");
const jsCode_settingBtn = document.getElementById("jsCode_settingBtn");
const jsCode_downBtn = document.getElementById("jsCode_downBtn");
const jsName = document.getElementById("jsName");
const jsOptionCont = document.getElementById("jsOptionCont");
const jsCodeDown_showOptions_down = document.getElementById(
  "jsCodeDown_showOptions_down"
);
const notepad_jsCode_Btn = document.getElementById("notepad_jsCode_Btn");
const highlightJsCode_Btn = document.getElementById("highlightJsCode_Btn");
const expandJsEditorWindow_Btn = document.getElementById(
  "expandJsEditorWindow_Btn"
);

const editorDiv = document.getElementById("editorDiv");
const editor = document.getElementById("editor");

const toggleLayoutBtn = document.getElementById("toggleLayoutBtn");
const toggleLayout = document.getElementById("toggleLayout");
const layoutOptionsContainer = document.getElementById(
  "layoutOptionsContainer"
);
const editor_left = document.getElementById("editor_left");
const editor_top = document.getElementById("editor_top");
const editor_right = document.getElementById("editor_right");

const showOutPutFrame = document.getElementById("showOutPutFrame");

function updateSize() {
  let offset = undefined;
  let editorWidth = undefined;
  let editorHeight = undefined;
  let editorwidthOffset = undefined;
  let editorHeightOffset = undefined;
  let codeWidth = undefined;
  let codeHeight = undefined;
  let frameWidth = undefined;
  let frameHeight = undefined;

  if (
    editorDiv.style.flexDirection == "row" ||
    editorDiv.style.flexDirection == "row-reverse"
  ) {
    offset = 27;

    editorWidth = window.innerWidth / 2;
    editorHeight = window.innerHeight / 3.51;
    editorwidthOffset = 3;
    editorHeightOffset = 25;

    codeWidth = editorWidth - editorwidthOffset;
    codeHeight = editorHeight - editorHeightOffset;

    frameWidth = window.innerWidth - editorWidth - 0.5 * offset;
    frameHeight = window.innerHeight - 2.1209 * offset;
  } else {
    offset = 50;

    editorWidth = window.innerWidth / 3.13;
    editorHeight = window.innerHeight / 2 - offset;
    editorwidthOffset = 3;
    editorHeightOffset = 25;

    codeWidth = editorWidth - editorwidthOffset;
    codeHeight = editorHeight - editorHeightOffset;

    frameWidth = window.innerWidth;
    frameHeight = window.innerHeight - editorHeight - 2 * offset;
  }

  htmlContainer.style.width = `${editorWidth}px`;
  cssContainer.style.width = `${editorWidth}px`;
  jsContainer.style.width = `${editorWidth}px`;
  htmlContainer.style.height = `${editorHeight}px`;
  cssContainer.style.height = `${editorHeight}px`;
  jsContainer.style.height = `${editorHeight}px`;

  htmlLineNumberContainer.style.height = `${codeHeight + 0.99}px`;
  cssLineNumberContainer.style.height = `${codeHeight + 0.99}px`;
  jsLineNumberContainer.style.height = `${codeHeight + 0.99}px`;

  htmlCode.style.width = `${codeWidth}px`;
  htmlCode.style.height = `${codeHeight}px`;
  cssCode.style.width = `${codeWidth}px`;
  cssCode.style.height = `${codeHeight}px`;
  jsCode.style.width = `${codeWidth}px`;
  jsCode.style.height = `${codeHeight}px`;

  showOutPutFrame.style.width = `${frameWidth}px`;
  showOutPutFrame.style.height = `${frameHeight}px`;
}
updateSize();
window.addEventListener("resize", updateSize);

window.addEventListener("load", () => {
  htmlCode.value = localStorage.getItem("htmlCode");
  cssCode.value = localStorage.getItem("cssCode");
  jsCode.value = localStorage.getItem("jsCode");
  projectNameTag.innerHTML = localStorage.getItem("projectName");
  ownerNameTag.innerHTML = localStorage.getItem("ownerName");
  htmlCode.click();
  cssCode.click();
  jsCode.click();

  if (localStorage.getItem("orientation") == "top") {
    editor_top.click();
  }
  else if (localStorage.getItem("orientation") == "left") {
    editor_left.click();
  }
  else if (localStorage.getItem("orientation") == "right") {
    editor_right.click();
  }
  else {
    editor_top.click();
  }
  toggleLayoutBtn.click();
});

window.addEventListener("offline", () => {
  alert("You are offline | connect to a network");
});

window.addEventListener("online", () => {
  alert("You are online");
});

htmlNameContainer.addEventListener("dblclick", () => {
  revertChanges();

  if (editorDiv.style.flexDirection == "column") {
    let offset = 9;
    let width = window.innerWidth - 5.4 * offset;

    htmlContainer.style.width = `${width}px`;

    cssContainer.style.width = `${0}px`;
    jsContainer.style.width = `${0}px`;
    cssContainer.style.borderRight = `none`;
    jsContainer.style.borderRight = `none`;

    cssInnerContainer.style.borderBottom = `none`;
    jsInnerContainer.style.borderBottom = `none`;

    cssNameContainer.style.transform = `rotateZ(90deg)`;
    jsNameContainer.style.transform = `rotateZ(90deg)`;

    cssImg.style.width = `10px`;
    jsImg.style.width = `10px`;

    cssName.style.fontSize = `0.6em`;
    jsName.style.fontSize = `0.6em`;

    cssOptionCont.style.display = `none`;
    jsOptionCont.style.display = `none`;

    htmlLineNumberContainer.style.display = `${width - offset}px`;
    cssLineNumberContainer.style.display = `none`;
    jsLineNumberContainer.style.display = `none`;

    htmlCode.style.width = `${width - offset}px`;
    cssCode.style.display = `none`;
    jsCode.style.display = `none`;

    htmlNameContainer.title = "click to get previous size";

    expandHtmlEditorWindow_Btn.children[0].innerHTML = "Shrink";
  }
});

cssNameContainer.addEventListener("dblclick", () => {
  revertChanges();

  if (editorDiv.style.flexDirection == "column") {
    let offset = 9;
    let width = window.innerWidth - 5.6 * offset;

    cssContainer.style.width = `${width}px`;

    htmlContainer.style.marginLeft = `14px`;

    htmlContainer.style.width = `${0}px`;
    jsContainer.style.width = `${0}px`;
    htmlContainer.style.borderRight = `none`;
    jsContainer.style.borderRight = `none`;

    htmlInnerContainer.style.borderBottom = `none`;
    jsInnerContainer.style.borderBottom = `none`;

    htmlNameContainer.style.transform = `rotateZ(90deg)`;
    jsNameContainer.style.transform = `rotateZ(90deg)`;

    htmlImg.style.width = `10px`;
    jsImg.style.width = `10px`;

    htmlName.style.fontSize = `0.6em`;
    jsName.style.fontSize = `0.6em`;

    htmlOptionCont.style.display = `none`;
    jsOptionCont.style.display = `none`;

    htmlLineNumberContainer.style.display = `none`;
    cssLineNumberContainer.style.display = `${width - offset}px`;
    jsLineNumberContainer.style.display = `none`;

    htmlCode.style.display = `none`;
    cssCode.style.width = `${width - offset}px`;
    jsCode.style.display = `none`;

    cssNameContainer.title = "click to get previous size";

    expandCssEditorWindow_Btn.children[0].innerHTML = "Shrink";
  }
});

jsNameContainer.addEventListener("dblclick", () => {
  revertChanges();

  if (editorDiv.style.flexDirection == "column") {
    let offset = 9;
    let width = window.innerWidth - 5.6 * offset;

    jsContainer.style.width = `${width}px`;

    htmlContainer.style.marginLeft = `14px`;

    htmlContainer.style.width = `${0}px`;
    cssContainer.style.width = `${0}px`;
    htmlContainer.style.borderRight = `none`;
    cssContainer.style.borderRight = `none`;

    htmlInnerContainer.style.borderBottom = `none`;
    cssInnerContainer.style.borderBottom = `none`;

    htmlNameContainer.style.transform = `rotateZ(90deg)`;
    cssNameContainer.style.transform = `rotateZ(90deg)`;

    htmlImg.style.width = `10px`;
    cssImg.style.width = `10px`;

    htmlName.style.fontSize = `0.6em`;
    cssName.style.fontSize = `0.6em`;

    htmlOptionCont.style.display = `none`;
    cssOptionCont.style.display = `none`;

    htmlLineNumberContainer.style.display = `none`;
    cssLineNumberContainer.style.display = `none`;
    jsLineNumberContainer.style.display = `${width - offset}px`;

    htmlCode.style.display = `none`;
    cssCode.style.display = `none`;
    jsCode.style.width = `${width - offset}px`;

    jsNameContainer.title = "click to get previous size";

    expandJsEditorWindow_Btn.children[0].innerHTML = "Shrink";
  }
});

htmlNameContainer.addEventListener("click", () => {
  revertChanges();
});

cssNameContainer.addEventListener("click", () => {
  revertChanges();
});

jsNameContainer.addEventListener("click", () => {
  revertChanges();
});

function revertChanges() {
  updateSize();

  htmlContainer.style.marginLeft = `9px`;

  htmlContainer.style.borderRight = `1px solid #9e9e9e`;
  cssContainer.style.borderRight = `1px solid #9e9e9e`;
  jsContainer.style.borderRight = `1px solid #9e9e9e`;

  htmlInnerContainer.style.borderBottom = `1px solid #9e9e9e`;
  cssInnerContainer.style.borderBottom = `1px solid #9e9e9e`;
  jsInnerContainer.style.borderBottom = `1px solid #9e9e9e`;

  htmlNameContainer.style.transform = `rotateZ(0deg)`;
  cssNameContainer.style.transform = `rotateZ(0deg)`;
  jsNameContainer.style.transform = `rotateZ(0deg)`;

  htmlImg.style.width = `15px`;
  cssImg.style.width = `15px`;
  jsImg.style.width = `15px`;

  htmlName.style.fontSize = `0.7em`;
  cssName.style.fontSize = `0.7em`;
  jsName.style.fontSize = `0.7em`;

  htmlOptionCont.style.display = `flex`;
  cssOptionCont.style.display = `flex`;
  jsOptionCont.style.display = `flex`;

  htmlLineNumberContainer.style.display = `block`;
  cssLineNumberContainer.style.display = `block`;
  jsLineNumberContainer.style.display = `block`;

  htmlCode.style.display = `block`;
  cssCode.style.display = `block`;
  jsCode.style.display = `block`;

  expandHtmlEditorWindow_Btn.children[0].innerHTML = "Expand";
  expandCssEditorWindow_Btn.children[0].innerHTML = "Expand";
  expandJsEditorWindow_Btn.children[0].innerHTML = "Expand";

  chevronDownOptions("none", "none", "none");
}

function setTitles(text) {
  htmlNameContainer.title = `${text}`;
  cssNameContainer.title = `${text}`;
  jsNameContainer.title = `${text}`;
}

toggleLayoutBtn.addEventListener("click", () => {
  if (layoutOptionsContainer.style.display === `none`) {
    removeAllDropDown("flex", "none", "none", "none", "none", "none");
  } else {
    removeAllDropDown("none", "none", "none", "none", "none", "none");
  }
  chevronDownOptions("none", "none", "none");
});

editor_left.addEventListener("click", () => {
  changeLayout("row", "column");
  toggleLayout.className = `fa-solid fa-list hover rotate-0deg`;
  htmlContainer.style.borderBottom = `1px solid #9e9e9e`;
  cssContainer.style.borderBottom = `1px solid #9e9e9e`;
  setTitles("");
  localStorage.setItem("orientation", "left");
});

editor_top.addEventListener("click", () => {
  changeLayout("column", "row");
  toggleLayout.className = `fa-solid fa-list hover rotate-90deg`;
  htmlContainer.style.borderBottom = `none`;
  cssContainer.style.borderBottom = `none`;
  setTitles("double click to expand");
  localStorage.setItem("orientation", "top");
});

editor_right.addEventListener("click", () => {
  changeLayout("row-reverse", "column");
  toggleLayout.className = `fa-solid fa-list hover rotate-180deg`;
  htmlContainer.style.borderBottom = `1px solid #9e9e9e`;
  cssContainer.style.borderBottom = `1px solid #9e9e9e`;
  setTitles("");
  localStorage.setItem("orientation", "right");
});

function changeLayout(editorDiv_flexDirection, editor_flexDirection) {
  editorDiv.style.flexDirection = editorDiv_flexDirection;
  editor.style.flexDirection = editor_flexDirection;
  revertChanges();
}
