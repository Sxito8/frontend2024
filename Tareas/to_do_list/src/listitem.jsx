import ShowitemModal from "./ShowitemModal"

const Listitem = ({task}) => {
    return(   <>
    <div className="row">  
    <div className="col-6">
        <ShowitemModal task={task} />
        <input type="checkbox" className="form-check-input" />
<h4><button 
        className="btn btn-link"
        data-bs-target={"#showItemModal"+task.id}
        data-bs-toggle="modal"
        >
    {task.task}
        </button>
        </h4>
</div>
    <div className="col-3">
    {task.limit}
    </div>
    <div className="col">
        {task.location}
    </div>
    

</div>
</>
)
}

export default Listitem