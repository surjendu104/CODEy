let editor = document.getElementById('editor')

// let editor = document.querySelector('editor')

ace.edit(editor, {
    mode: "ace/mode/c_cpp",
    selectionStyle: "text",
    theme: "ace/theme/cobalt",
    fontSize: '15px',
    vScrollBarAlwaysVisible: true
})

window.onload = () => {
    editor = ace.edit("editor")
    editor.session.setMode("ace/mode/c_cpp")
}

function changeLanguage() {
    let lang = document.getElementById('language')

    let language = lang.options[lang.selectedIndex].value
    console.log(language)
    if (language == 'c' || language == 'cpp') editor.session.setMode('ace/mode/c_cpp');
    else if (language == 'java') editor.session.setMode('ace/mode/java');
    else if (language == 'python') editor.session.setMode('ace/mode/python');
    else if (language == 'php') editor.session.setMode('ace/mode/php');
    else if (language == 'javascript') editor.session.setMode('ace/mode/javascript');
}


const textAreaContent = document.getElementById('input')




function getTextAreaValue() {
    textAreaContent.addEventListener('input', function handleChange(event) {
        textAreaContent.value = event.target.value
    })

    return textAreaContent.value
}

var inputData

function getInputData() {
    console.log(getTextAreaValue())
    return inputData = getTextAreaValue()
}



function executeCode(){
    $.ajax({
        url: "/Backend/app.java",

        method: "POST",

        data: {
            language: $("#language").val(),
            code: editor.getSession().getValue(),
            input: inputData
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}