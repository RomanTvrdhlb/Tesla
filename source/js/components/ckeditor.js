

 const editorInit = (editors) => {
  editors && editors.forEach(function(editor){
     ClassicEditor.create(editor,{
  }).catch((error) => {
    console.error(error);
  });
  })
}

editorInit(document.querySelectorAll('[data-editor]'))






