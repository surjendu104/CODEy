let editor = document.getElementById('editor')

ace.edit(editor, {
    mode:"ace/mode/c_cpp",
    selectionStyle: "text",
    theme: "ace/theme/cobalt",
    fontSize:'15px',
    vScrollBarAlwaysVisible: true
})

window.onload = ()=> {
    editor = ace.edit("editor")
    editor.session.setMode("ace/mode/c_cpp")
}

function changeLanguage() {
    let lang = document.getElementById('language')

    let language = lang.options[lang.selectedIndex].value
    console.log(language)
    if(language=='c' || language=='cpp')editor.session.setMode('ace/mode/c_cpp');
    else if(language=='java')editor.session.setMode('ace/mode/java');
    else if(language=='python')editor.session.setMode('ace/mode/python');
    else if(language=='php')editor.session.setMode('ace/mode/php');
    else if(language=='javascript')editor.session.setMode('ace/mode/javascript');
}


const textAreaContent = document.getElementById('input')


textAreaContent.addEventListener('input',function handleChange(event){
    // temp+=(event.target.value)
    textAreaContent.value = event.target.value
})

console.log(textAreaContent.value)

console.log(editor.vlaue)