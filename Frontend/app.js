const outputResponse = document.getElementById('outputTextArea')
const textarea = document.querySelector('textarea')
let lang = document.getElementById('language')

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


var inputData, codeData
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
  // console.log(inputTextAreaContent.value)
  // console.log(codeTextAreaContent.value)

  // return { code: codeTextAreaContent.value ,language: lang.options[lang.selectedIndex].value ,input: inputTextAreaContent.value}
}


const baseUrl = 'http://localhost:8383/'

function getInputData() {
  return getInputTextAreaValue()

}

async function executeCode() {
  async function postData() {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: codeData,
        language: lang.options[lang.selectedIndex].value,
        input: inputData
      })
    })

  }
  async function getData() {

    const res = await fetch("http://localhost:8383/getOutput", {
      method: 'GET'
    })
    const result = await res.json()
    outputResponse.value = result.getOutput
  }
  postData()

  getData()

}

// async function postData() {
//   const res = await fetch(baseUrl,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
// }


