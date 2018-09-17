const descriptionUpdated = function (state = null, action) {
    switch (action.type) {
        case "DESCRIPTION_UPDATED":
            console.log('desc updated')
            console.log(action.payload)
            return action.payload
            break;
        default:
            break;

    }
    return state
}
export default descriptionUpdated