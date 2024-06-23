const input = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')



const notes = [ {
  title: 'Заметка №1',
  completed: false
}, {
  title: 'Заметка №2',
  completed: true
}]
function list(note, index){
  
    return  `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span  class=${note.completed ? 'text-decoration-line-through' : ''}>${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle" >&check;</span>
      <span class="btn btn-small btn-danger"  data-index="${index}" data-type="remove" >&times;</span>
    </span>
  </li>`
}

function render(){
  listElement.innerHTML = ''
  if(notes.length === 0){
    listElement.innerHTML = '<p>Нет элементов</p>'
  }
   for(let i = 0; i< notes.length; i++){
    listElement.insertAdjacentHTML('beforeend', list(notes[i], i) )
   }
    
}
render()

createBtn.onclick = function(){
    if(input.value == 0){
    return
    }
    const newNode = {
      title: input.value,
      completed: false
    }
    notes.push(newNode)
    render()
          
   input.value = ''
  
}

listElement.onclick = function(event){
  if(event.target.dataset.index){
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type
    
    if(type === "toggle"){
      notes[index].completed = !notes[index].completed
    }else if(type === "remove"){
      notes.splice(index, 1)
    }
    
    
  }
  render()
  
}


