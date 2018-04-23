var template = ( function(){
  var templateobject = {};
  window.addEventListener('load',() => { 
    const tmpl = document.querySelector('#task-template');
    templateobject.template = tmpl;
  });
  
  templateobject.create = function(taskobj){
    //import template
    let template = document.importNode(templateobject.template.content,true);
    let temphtml = template.querySelector('li');
    //fill data 
    temphtml.setAttribute('data-id',taskobj.id);
    temphtml.setAttribute('data-status',taskobj.status);
    temphtml.setAttribute('data-name',taskobj.name);
    
    temphtml.querySelector('.task-text').innerText = taskobj.name;
    temphtml.querySelector('button[data-function="delete"]').setAttribute('data-id',taskobj.id);
    temphtml.querySelector('button[data-function="status"]').setAttribute('data-id',taskobj.id);
    
    return temphtml;
  }
  
  return templateobject;
} ());