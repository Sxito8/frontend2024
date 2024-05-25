import List from './list'
import TaskModal from './taskmodal'

const tasklist =[
  {
    id: 1, 
    task: 'estudiar', 
    location: 'casa',
    time: '13:00',
    description:"estudiar javascript",
    done: false
  },
  {
    id: 2, 
    task: 'practicar',
    location:"casa", 
    time: '15:00',
    description:"practicar javascript",
    done: false
  },
  {
    id: 3, 
    task: 'jugar', 
    location: 'casa',
    time: '17:00',
    description:"jugar cod mobile",
    done: false
  }
  
]
function App() {
  return (
    <div className='container'>
      <h1>to do list</h1>
      <hr />
      <List tasklist={tasklist}/>
      <hr />
      <div className='text-end'>
        <TaskModal tasklist= {tasklist} />
        <button className="btn btn-outline-primary"
          data-bs-target="#taskModal"
          data-bs-toggle="modal"
          >
          <i className='bi bi-plus-lg'></i>
          add</button>
         </div>
    </div>
  )
}

export default App
