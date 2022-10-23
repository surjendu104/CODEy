const outputResponse = document.getElementById('outputTextArea')
const textarea = document.querySelector('textarea')
let lang = document.getElementById('language')
let theme = document.getElementById('changeTheme')
let font = document.getElementById('fontSize')

/* textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault()
    textarea.setRangeText(
      '  ',
      textarea.selectionStart,
      textarea.selectionStart,
      'end'
    )
  }
})

const lineNumbers = document.querySelector('.line-numbers')

textarea.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\\n').length

  lineNumbers.innerHTML = Array(numberOfLines)
    .fill('<span></span>')
    .join('')
})


var inputData, codeData,langData
const inputTextAreaContent = document.getElementById('input')
const codeTextAreaContent = document.getElementById('code-write')
function getInputTextAreaValue() {
  inputTextAreaContent.addEventListener('input', function handleChange(event) {
    inputTextAreaContent.value = event.target.value
  })

  codeTextAreaContent.addEventListener('input', function handleChange(event) {
    codeTextAreaContent.value = event.target.value
  })

  inputData = inputTextAreaContent.value
  codeData = codeTextAreaContent.value
  langData = lang.options[lang.selectedIndex].value
  console.log(langData)
} */

var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/c_cpp");
editor.session.setUseWrapMode(true);
document.getElementById('editor').style.fontSize = '15px';



function changeLanguage() {
  langData = lang.options[lang.selectedIndex].value
  if (langData == "c" || langData == "cpp") editor.session.setMode("ace/mode/c_cpp");
  else if (langData == "cs") editor.session.setMode("ace/mode/csharp");
  else if (langData == "java") editor.session.setMode("ace/mode/java");
  else if (langData == "py") editor.session.setMode("ace/mode/python");
  else if (langData == "go") editor.session.setMode("ace/mode/golang");
  else if (langData == "js") editor.session.setMode("ace/mode/javascript");
  
}

function changeTheme() {
  let themeType = theme.options[theme.selectedIndex].value
  if (themeType == "ambiance") editor.setTheme("ace/theme/ambiance");
  else if (themeType == "chaos") editor.setTheme("ace/theme/chaos");
  else if (themeType == "chrome") editor.setTheme("ace/theme/chrome");
  else if (themeType == "cobalt") editor.setTheme("ace/theme/cobalt");
  else if (themeType == "dracula") editor.setTheme("ace/theme/dracula");
  else if (themeType == "eclipse") editor.setTheme("ace/theme/eclipse");
  else if (themeType == "github") editor.setTheme("ace/theme/github");
  else if (themeType == "twilight") editor.setTheme("ace/theme/twilight");
  else if (themeType == "xcode") editor.setTheme("ace/theme/xcode");
  else if (themeType == "sqlserver") editor.setTheme("ace/theme/sqlserver");
}

function changeFontSize() {
  let fontValue = font.options[font.selectedIndex].value
  if(fontValue=="9")document.getElementById('editor').style.fontSize = '9px';
  if(fontValue=="10")document.getElementById('editor').style.fontSize = '10px';
  if(fontValue=="15")document.getElementById('editor').style.fontSize = '15px';
  if(fontValue=="18")document.getElementById('editor').style.fontSize = '18px';
  if(fontValue=="22")document.getElementById('editor').style.fontSize = '22px';
  if(fontValue=="25")document.getElementById('editor').style.fontSize = '25px';
}


var codeData, langData, inputData
const inputTextAreaContent = document.getElementById('input')

function getInputData() {
  inputTextAreaContent.addEventListener('input', function handleChange(event) {
    inputTextAreaContent.value = event.target.value
  })
  inputData = inputTextAreaContent.value
  codeData = editor.getSession().getValue()
  langData = lang.options[lang.selectedIndex].value

}

var result
async function executeCode() {
  async function postData() {
    // getInputData()
    
    const req = await fetch("https://compilation-server.herokuapp.com/", {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: codeData,
        language: langData,
        input: inputData
      })
    })
    
    var dd = JSON.stringify({
      code: codeData,
        language: langData,
        input: inputData
    })
    console.log(dd)
  }
  async function getData() {
    // postData()
    const res = await fetch("https://compilation-server.herokuapp.com/getOutput", {
      method: 'GET',
    })
    result = await res.json()
    console.log(result)
    outputResponse.value = result.getOutput
  }

  let promise = new Promise((resolve,reject) =>{
    resolve(getInputData())
  })
  promise.then(postData()).then(getData())
  // getData()

}

function codey() {
  for(let i=0;i<2;i++) {
    executeCode();
    if(i==1) {
      console.log("ans : ",result)
    }
  }
  // outputResponse.value = result.getOutput
}
