import React, { Component } from "react";
import Try from './try';

class Counter extends Component {
    state = {
        // count: this.props.tag.value,
        name:'No Name'
    };
    fs20 = {
        fontSize: "20px",
    };
    fs30 = {
        fontSize: "30px",
    };
    // constructor(){ //如果不用箭頭韓式，這邊要bind(this)
    //     super();
    //     this.plus = this.plus.bind(this);
    // }
    render() {
        return (
            <div
                style={{
                    backgroundColor: "antiquewhite",
                    textAlign: "center",
                    marginTop: "60px",
                    padding: "3rem 0",
                }}
                data-num={this.props.tag.id}
            >
                <h1>My Counter</h1>
                {this.props.children[1]}
                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => this.props.onPlus(this.props.tag)}
                >
                    ++
                </button>
                <p className="numberSpan m-5" style={this.fs20}>
                    Counter:
                    <span className={this.getBadgeClasses()} style={this.fs30}>
                        {this.countNum()}
                    </span>
                </p>
                <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => this.props.onCut(this.props.tag)}
                >
                    --
                </button>
                {this.props.children[0]}
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.onDelete(this.props.tag.id)}
                >
                    Delete
                </button>
                <Try onLook={this.look} onMount={this.mount} onTurn={this.turn} name={this.state.name}/>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.tag.value === 0 ? "danger" : "success";
        return classes;
    }

    countNum() {
        let count = this.props.tag.value;
        let span = <span style={{ color: "#efefef" }}>Zero</span>;
        return count === 0 ? span : count;
    }

    componentWillUnmount(){
        let a = this.props.tag.id;
        alert(`Component no.${a} is deleted`);
    }

    look = (name)=>{
        console.log(name);
    }

    mount = (txt)=>{
        console.log(txt+''+'TAT');
    }

    turn = (txt)=>{
        this.setState({name:`id no.${txt}`})
    }
}

export default Counter; //put it on top



// This is a stateless function class
// put the props in the arguments
// use props.**** to get the props

// const Counter1 = () => {
//     return (  );
// }

// export default Counter1;


//mounted
//constructor
//render
//componentDidMount //put ajax here, use this.setState({})

//update
//render
//componentDidUpdate
// componentDidUpdate(prevProps, prevState){
//     if(prevProps.tag.value !== this.props.tag.value){
//         //Do Ajex here to get the new Data
//     }
// }

//unmount
//componentWillUnmount
