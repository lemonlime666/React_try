import React, { Component } from "react";
import Try from './try';

class Counter extends Component {
    state = {
        count: 0,
        name: [
            { id: 1, name: "Wade" },
            { id: 2, name: "Kobe" },
            { id: 3, name: "James" },
        ],
    };
    fs20 = {
        fontSize: "20px",
    };
    fs30 = {
        fontSize: "30px",
    };
    // constructor(){
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
            >
                <h1>My Counter</h1>
                <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.plus()}>
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
                    onClick={()=>this.cut()}
                >
                    --
                </button>
                <ul>
                    {this.state.name.map((item, key) => (
                        <li key={key}>
                            index {key} - id: {item.id}, name: {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "danger" : "success";
        return classes;
    }

    countNum() {
        const { count } = this.state;
        let span = <span style={{ color: "#efefef" }}>Zero</span>;
        return count === 0 ? span : count;
    }

    plus = ()=>{
        if(this.state.count == this.state.name.length){
            return false;
        }else{
            console.log(this.state.name[this.state.count].name)
            this.setState({count:this.state.count+1});
        }
    } 

    cut = (pd)=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1});
            console.log(this.state.name[this.state.count-1].name)
        }else{
            return;
        }
    }
}

export default Counter; //put it on top
