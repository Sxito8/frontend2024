import Listitem from "./listitem"

const list = ({tasklist}) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h4>tasks</h4>
        </div>
        <div className="col-3">
          <h4>limit</h4>
        </div>
        <div className="col">
          <h4>location</h4>
        </div> 
      </div>
      {tasklist.map((task) => ( 
        <Listitem 
        key={task.id} 
        task={task}
        />
      ))}
    </>
  )
}

export default list