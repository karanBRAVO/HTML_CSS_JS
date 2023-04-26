// Show output in iframe

function getHtmlCode() {
  return htmlCode.value;
}

function getCssCode() {
  return cssCode.value;
}

function getJsCode() {
  return jsCode.value;
}

function setIframeBody() {
  let head = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>${getCssCode()}</style>
    `;
  showOutPutFrame.contentDocument.head.innerHTML = head;
  let body = `${getHtmlCode()}` + `<script>${getJsCode()}</script>`;
  showOutPutFrame.contentDocument.body.innerHTML = body;
  showOutPutFrame.contentWindow.eval(getJsCode());
}

htmlCode.addEventListener("keyup", () => {
  setIframeBody();
});

cssCode.addEventListener("keyup", () => {
  setIframeBody();
});

jsCode.addEventListener("keyup", () => {
  setIframeBody();
});
