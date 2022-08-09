const Modal = (props) => {
    return <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
        <button className="btn" onClick={props.onCancel}>Confirm</button>
    </div>
}

export default Modal;