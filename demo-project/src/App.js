import React, { Component } from "react";
import Navbar from "./component/nav";
import Layer from "./component/layer";
import "./App.css";

class App extends Component {
    state = {
        tags: [
            { id: 1, value: 4 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 8 },
            { id: 5, value: 6 },
        ],
    };

    handleDel = (id) => {
        // let num = e.target.parentNode.dataset.num
        var q = prompt("Are you sure to delete component no." + id, "yes");
        if (q === "yes") {
            const tags = this.state.tags.filter((T) => T.id !== id);
            //this.setState({tags:tags}); //tags一樣所以可以縮寫
            this.setState({ tags });
        }
    };

    goPlus = (t) => {
        const tags = [...this.state.tags];
        const index = tags.indexOf(t);
        // tags[index] = {...t};
        tags[index].value++;
        this.setState({ tags });
    };

    goCut = (t) => {
        const tags = [...this.state.tags];
        const index = tags.indexOf(t);
        tags[index].value--;
        this.setState({ tags });
    };

    reset = () => {
        const tags = [...this.state.tags];
        tags.map((item) => (item.value = 0));
        this.setState({ tags });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar tags={this.state.tags} />
                <main className="container">
                    <Layer
                        tags={this.state.tags}
                        onReset={this.reset}
                        onPlus={this.goPlus}
                        onCut={this.goCut}
                        onDelete={this.handleDel}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
