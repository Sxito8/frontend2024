import { useForm } from "./Hooks/useForm"

const taskInfo = {
  task: "",
  location: "",
  description: "",
  limit: ""
}

const TaskModal = ({tasklist}) => {
  const [values, handleInputChange, reset] = useForm(taskInfo)
  return (
    <div className="modal fade" id="taskModal"> 
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="showItemModalLabel">
              add new task
            </h5>
            <button type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                      <div className="col text-start">
                        <label htmlFor="task" 
                        className="form-label"
                        >Task
                        </label>
                        <input 
                        id="task"
                        name="task"
                        type="text" 
                        className="form-control"
                        onChange={handleInputChange}
                        value={values.task} 
                        />
                        {/*=========================================*/}
                        <label htmlFor="location"
                        className="form-label">
                          Location</label>
                          <textarea
                          id="location"
                          name="location"
                          type="text"
                          onChange={handleInputChange}
                          value={values.location}
                          className="form-control"/>
                          {/*=========================================*/}
                          <label htmlFor="description"
                        className="form-label">
                          description</label>
                          <textarea
                          id="description"
                          name="description"
                          type="text"
                          onChange={handleInputChange}
                          value={values.description}
                          className="form-control"/>
                          {/*==========================================*/}
                          <label htmlFor="limit"
                          className="form-label">
                          Limit</label>
                          <textarea
                          id="limit"
                          name="limit"
                          type="time"
                          onChange={handleInputChange}
                          value={values.limit}
                          className="form-control"/>
                      </div>
                </div>
                </div>
                <div className="modal-footer">
                <button 
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  console.log(values)}}
                >
                    <i className="bi bi-pencil-square"></i>
                    save
                    </button>
                    <button type="button" 
                            className="btn btn-sm btn-outline-secondary" 
                            data-bs-dismiss="modal">
                             <i className="bi bi-x"></i> 
                            Close
                    </button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default TaskModal