
let cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

var newState = {
    result: {
        output: 0
    }
};

export default function (state, action) {
    switch (action.type) {
        case "Result":
            newState = cloneObject(state);
            newState.result.output = action.output;
            return newState;
        default:
            return state || newState;
    }
}