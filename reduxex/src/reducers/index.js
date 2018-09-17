import {combineReducers} from 'redux'
import allFeedbacks from './feedback-reducer'
import allUsers from './users-reducer'
import feedbackClicked from './feedback-clicked-reducer'
import descriptionUpdated from './update-description-reducer'

const allReducer = combineReducers({
    allFB :allFeedbacks,
    allUsers :allUsers,
    oneFB:feedbackClicked,
    oneDesc:descriptionUpdated
})

export default allReducer;