const feedbackClicked = function (state = null, action) {
    switch (action.type) {
        case "FEEDBACK_CLICKED":
            return action.payload
            break;
        default:
            break;

    }
    return state
}
export default feedbackClicked