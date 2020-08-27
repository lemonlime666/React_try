import React, { Component } from 'react';

const Try = (props) => {
    const data = [];
    Object.defineProperty(data, 'content', {
        get(){
            let txt = this.value ? this.value : 'empty';
            return txt;
        },
        set(txt){
            this.value = txt;

        }
    })

    function set(){
        console.log('Set')
        data.content = Math.floor(Math.random()*10)+1;
        props.onTurn(data.content);
    }
    function call(){
        console.log('Call');
        props.onLook(`Your Number is ${data.content}`);
    }
    var mount = ()=>{
        props.onMount(data.content);
    }
    mount();

    return ( 
    <React.Fragment>  
    <h3 onClick={set}>Set</h3> 
    <h3 onClick={call}>{props.name}</h3> 
    </React.Fragment> 
    );
}

export default Try;

// class Try extends Component {
//     state = {  
//         data:'empty',
//     }
//     render() { 
//         return (  
//             <React.Fragment>  
//             <h3 onClick={this.set}>Set</h3> 
//                 <h3 onClick={()=>this.props.onLook(this.state.data)}>{this.name()}</h3> 
//             </React.Fragment> 
//         );
//     }
//     set = ()=>{
//         let a = Math.floor(Math.random()*20)+1
//         if( a % 2 == 0){
//             this.setState({data:`Woman no.${a}`});
//         }else{
//             this.setState({data:`Man no.${a}`});
//         }
//     }
//     // call = ()=>{
//     //     console.log(this.state.data);
//     // }

//     name = ()=>{
//         return this.state.data;
//     }
// }

// export default Try;
