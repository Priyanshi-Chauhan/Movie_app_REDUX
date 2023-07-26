class Lecturecard extends React.Component {
    // non-visual logic
     constructor(props){
        super(props);
         this.state = {hovering : false}
     }
     mouseOver = () => {
         this.setState({hovering : true})
     }
      mouseOut =() =>{
        this.setState ({hovering : false})
      }
 render() {
     return (
        <div>
            {this.state.hovering === true ? <Tooltip /> : null}
            <div onMouseOver ={this.mouseOver} onMouseOut = {this.mouseOut}> </div>
 
        </div>
     )
 }
      
}


class ProgressBar extends React.Component{
    constructor(props){
         super(props);
          this.state = {hovering : false}
    }
    mouseOver = () => {
        this.setState({hovering : true})
    }
    mouseOut = () => {
         this.setState ({hovering:false})  
          }
render() {
    return (
        <div>
            {this.state.hovering === true ? <Tooltip /> : null}
            <div onMouseOver={this.mouseOver} onMouseOut = {this.mouseOut}>
                {...}
            </div>
        </div>
    )
}
}

class someothercomponent extends React.Component {
    constructor(props){
         super(props);
          this.state = {hovering: false}
    }
    mouseOver = () =>{
        this.setState({hovering: true})
    }
     mouseOut = () => {
        this.setState({hovering:false})
     }
     render (){
        return (
            <>
            {this.state.hovering ===  true ? <Tooltip /> : null}
            <div  onMouseOver = {this.mouseOver} onMouseOut ={this.mouseOut}>
                {...}
            </div>
            </>
        )
     }
}