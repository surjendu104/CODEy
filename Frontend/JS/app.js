// let editor = document.getElementById('editor')

// // let editor = document.querySelector('editor')

// ace.edit(editor, {
//     mode: "ace/mode/c_cpp",
//     selectionStyle: "text",
//     theme: "ace/theme/cobalt",
//     fontSize: '15px',
//     vScrollBarAlwaysVisible: true
// })

// window.onload = () => {
//     editor = ace.edit("editor")
//     editor.session.setMode("ace/mode/c_cpp")
// }

// function changeLanguage() {
//     let lang = document.getElementById('language')

//     let language = lang.options[lang.selectedIndex].value
//     console.log(language)
//     if (language == 'c' || language == 'cpp') editor.session.setMode('ace/mode/c_cpp');
//     else if (language == 'java') editor.session.setMode('ace/mode/java');
//     else if (language == 'python') editor.session.setMode('ace/mode/python');
//     else if (language == 'php') editor.session.setMode('ace/mode/php');
//     else if (language == 'javascript') editor.session.setMode('ace/mode/javascript');
// }




const textAreaContent = document.getElementById('input')


const textarea = document.querySelector('textarea')

textarea.addEventListener('keydown', (e) => {
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


function getInputTextAreaValue() {
    textAreaContent.addEventListener('input', function handleChange(event) {
        textAreaContent.value = event.target.value
    })

    return textAreaContent.value
}

var inputData

function getInputData() {
    console.log(getInputTextAreaValue())
    return inputData = getInputTextAreaValue()
}
