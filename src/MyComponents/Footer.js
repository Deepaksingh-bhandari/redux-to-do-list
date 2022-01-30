import React from 'react'
import './footer.css'
export const Footer = () => {
    let footerStyle={
        // position:"fixed",
        // top:"10vh",
        // left:0,
        // bottom:0,
        height: "50px",
        width:"100%"
    }
    return (
        <footer className="bg-dark  text-light mt-3 pt-3" style={footerStyle}>
            <p>
                Copyright &copy; MyTodolist.com
            </p>
        </footer>
    )
}
