import React, { useState } from 'react'
import { withRouter,useParams,useLocation,useHistory} from 'react-router-dom'

export const About = () => {

    // USING 2 STATE
    const [darkMode, toggledarkMode] = useState({
    })

    const [btnText, setbtnText] = useState("Dark Mode")

    const toggleStyle = () => {
        if (darkMode.color === "white") {
            toggledarkMode({
                color: "black",
                backgroundColor: "white"
            })
            setbtnText("Light Mode")
        }
        else {
            toggledarkMode({
                color: "white",
                backgroundColor: "black",
                border:"1px solid white"
            })
            setbtnText("Dark Mode")
        }

    }
    const {fname,lname}=useParams();
    const location= useLocation();
    const history= useHistory();
    console.log(location.path);
    console.log(fname,lname);
    return (
        <div className="container" style={darkMode}>
            <p>About Us</p>
            <div className="accordion" id="accordionExample" style={darkMode}>
                <div className="accordion-item" style={darkMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={darkMode}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkMode} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={darkMode}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkMode}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkMode}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            <button className="btn btn-primary mx-3 my-3" onClick={()=>{history.goBack()}}>Go back</button>
        </div>
    )
}
