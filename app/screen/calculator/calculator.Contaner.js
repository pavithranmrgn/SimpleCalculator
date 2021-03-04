/*Import packages here */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
/*Import packages here */

/*Import project files here*/
import CalculatorComponent from "./calculator.Component";
import * as actions from '../../actions';
/*Import project files here*/

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNum: "0",
            lastNum: ""
        };
    }

    onClickInput = (inputs) => {
        let { currentNum, lastNum } = this.state;
        try {
            if (inputs === '+' || inputs === '-' || inputs === '*' || inputs === '/') {
                currentNum = currentNum + inputs;
            }
            else if (inputs != 'DEL' && inputs != 'C' && inputs != '=') {
                currentNum = currentNum == "0" ? inputs : currentNum + inputs;
            }
            switch (inputs) {
                case 'DEL':
                    currentNum = 0;
                    break;
                case 'C':
                    currentNum = 0;
                    lastNum = ''
                    break;
                case '=':
                    lastNum = currentNum + inputs;
                    currentNum = eval(currentNum);
                    this.props.saveResult(currentNum);
                    break;
            }
            this.setState({ currentNum, lastNum });
        }
        catch (err) {
            console.warn(err.message);
        }
    }

    render() {
        let { currentNum, lastNum } = this.state;
        return (
            <CalculatorComponent
                {...{
                    calculator: {
                        currentNum, lastNum
                    }
                }}
                onClickInput={this.onClickInput.bind(this)}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.result
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign({}, actions),
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);