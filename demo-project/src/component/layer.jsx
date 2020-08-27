import React, { Component } from "react";
import Counter1 from "./counter1";
// import Helper from './helper';

class Layer extends Component {

    render() {
        const {onReset, onDelete, onPlus, onCut, tags} = this.props; // 可以放在 return 前面集合所有 props 做管理
        return (
            <div>
                <button
                    className="btn btn-primary"
                    style={{ display: "block", margin: "60px auto 0" }}
                    onClick={onReset}
                >
                    RESET
                </button>
                {tags.map((tag) => (
                    // 直接bind整個物件，方便以後調用裡面每個物件
                    <Counter1
                        key={tag.id}
                        tag={tag}
                        onDelete={onDelete}
                        onPlus={onPlus}
                        onCut={onCut}
                    >
                        <h5>Let's Go Computed</h5>
                        <h6>I Am A Counter NO.{tag.id}</h6>
                    </Counter1>
                ))}
            </div>
        );
    }
}

export default Layer;
