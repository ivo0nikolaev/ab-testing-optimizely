import './App.css';
import React from "react"

import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
  withOptimizely,
} from '@optimizely/react-sdk';

import Title from "./components/Title"
// import Button from "./components/Button"

const optimizely = createInstance({
  sdkKey: 'X5H9seFkRh5DkWNznayzP'
})

class Button extends React.Component {
  onClick = () => {
    const { optimizely } = this.props
    optimizely.track('purchase')
  }

  render() {
    return(
    <button style={this.props.styles} onClick={this.onClick}>
      {this.props.txt}
    </button>)
  }
}

const PurchaseButton = withOptimizely(Button)

function App() {

  // const [buttonStyle, setButtonStyle] = useState({})
  // const [buttonText, setButtonText] = useState("")
  // const [title, setTitle] = useState("")
  // const [slogan, setSlogan] = useState("")
  // const [backgroundColor, setBackgroundColor] = useState("")
 console.log(withOptimizely)
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: "1" + Math.random()
      }}>
       <OptimizelyFeature autoUpdate={true} feature="risika_test">
      {(isEnabled, variables) => {
        // setButtonStyle(variables.buton_style);
        // setButtonText(variables.buttonText)
        // setTitle(variables.title)
        // setSlogan(variables.slogan)
        // setBackgroundColor(variables.backgroundColor)
        // console.log(variables.buton_style)
        return (
          <div className="App">
            <header className="App-header" style={{ backgroundColor: `${variables.backgroundColor}`}}>
              <Title title={variables.title} slogan={variables.slogan} />
              <PurchaseButton styles={variables.buton_style} txt={variables.buttonText}/>
            </header>
          </div>
        )
      }}
      </OptimizelyFeature> 
    </OptimizelyProvider>



  );
}

export default App;
