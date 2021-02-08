import React from "react"

const onClick = () => {
    const { optimizely } = this.props
    optimizely.track('purchased')
  }

const Button = (props) => {

    // const style = {
    //     display: "inline-block",
    //     width: 100,
    //     height: 60,
    //     padding: "0.3em 1.2em",
    //     margin: "0 0.3em 0.3em 0",
    //     borderRadius: "2em",
    //     boxSizing: "border-box",
    //     textDecoration: "none",
    //     fontFamily: "'Roboto',sans-serif",
    //     fontWeight: "500",
    //     fontSize: "1rem",
    //     color: "#FFFFFF",
    //     backgroundColor: "#00CDCD",
    //     textAlign: "center",
    //     transition: "all 0.2s"
    // }

    // const style = {
    //     display: "inline-block",
    //     padding: "0.2em 1.45em",
    //     margin: "0.1em",
    //     border: "0.15em solid #CCCCCC",
    //     boxSizing: "border-box",
    //     textDecoration: "none",
    //     fontFamily: "'Segoe UI','Roboto',sans-serif",
    //     fontWeight: "400",
    //     color: "#000000",
    //     backgroundColor: "#CCCCCC",
    //     textAlign: "center",
    //     position: "relative",
    //     width: 100,
    //     fontSize: "1rem",
    //     height: 60,
    // }

    // const style = {
    //     "display": "inline-block",
    //     "padding": "0.3em 1.2em",
    //     "margin": "0 0.1em 0.1em 0",
    //     "border": "0.16em solid rgba(255,255,255,0)",
    //     "borderRadius": "2em",
    //     "boxSizing": " border-box",
    //     "textDecoration": "none",
    //     "fontFamily": "'Roboto',sans-serif",
    //     "fontWeight": "300",
    //     "color": "#FFFFFF",
    //     "textShadow": " 0 0.04em 0.04em rgba(0,0,0,0.35)",
    //     "textAlign": "center",
    //     "transition": " all 0.2s",
    //     "backgroundColor": "#f1bb4e",
    //     "width": "100",
    //     "fontSize": "1rem",
    //     "height": "60"
    // }


return (
    <>
        <button
            style={props.bntStyle}
            onClick={onClick}>
            {props.buttonText}
        </button>
    </>
)
}

export default Button