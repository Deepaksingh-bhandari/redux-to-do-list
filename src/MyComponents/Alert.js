import React from 'react'

export const Alert = (props) => {
    return (
        //  props.alert &&  ---> this line only returns the react element when the 1st condition is true
          props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`}  role="alert" id="liveAlert">
                <strong>{props.alert.msg}</strong>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    )
}
