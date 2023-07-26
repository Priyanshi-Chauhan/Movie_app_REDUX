function withHover(component){
     class withHover extends React.Component{
        constructor(props){
             super(props);
              this.state = {hovering: false}
        }
        mouseOver =() => this.setState({hovering: true})
        mouseOut = () => this.setState({hovering :false})
       
        render() {
             return(
                <div onMouseOver ={this.mouseOver} onMouseOut = {this.mouseOut}>
                    <Component hovering = {this.state.hovering} />
                </div>
             )
        }

     }
return withHover;
    }
 

class LectureCard extends React.Component {
     render() {
        return(
            <>
            {this.props.hovering === true  ? <Tooltip/> : null}
            <div>
                {...}
                </div> 
            </>
        )
     }
}  

class ProgressBar extends React.Component {
    render() {
       return(
           <>
           {this.props.hovering === true  ? <Tooltip/> : null}
           <div>
               {...}
               </div> 
           </>
       )
    }
}    

class someothercomponent extends React.Component {
    render() {
       return(
           <>
           {this.props.hovering === true  ? <Tooltip/> : null}
           <div>
               {...}
               </div> 
           </>
       )
    }
}    

const lecturecardwithhover = withHover(LectureCard);
const progressbarwithhover = withHover(ProgressBar);
const someothercomponentwithhover = withHover(someothercomponent);

<lecturecardwithhover a ={1}/>
<progressbarwithhover />
someothercomponentwithhover 