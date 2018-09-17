const updateDescriptionAction = function(description){
    console.log("------",description)
    return{
        type:"DESCRIPTION_UPDATED",
        payload:description
    }
}

export default updateDescriptionAction;