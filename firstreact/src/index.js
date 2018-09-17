// import React from 'react';
// import ReactDOM from 'react-dom'
// import FirstFriend from './FirstComponent';
// import SecondFriend from './SecondComonet';
// import Name from './Components/Name';

// var position = document.getElementById("rootcomponent"); 
// var position2 = document.getElementById("secondComponent"); 
// ReactDOM.render(<div><FirstFriend location="Chennai">Rajashree</FirstFriend>
// <Name color="red" bcolor="yellow">R</Name>
// <Name color="blue" bcolor="yellow">I</Name>
// <Name color="green" bcolor="yellow">N</Name>
// <Name color="black" bcolor="yellow">K</Name>
// <Name color="yellow" bcolor="red">Y</Name>
// </div>
// ,position);
// ReactDOM.render(<SecondFriend profession="teacher">Subhashree</SecondFriend>,position2);
import React from 'react';
import ReactDOM from 'react-dom'
import CommentComponet from './commentComponent/Comment';
import LifeCycleComponent from './LifeCycleComponent/LifeCycleComponent';
import FormComponent from './FormComponent/FormComponent';
import ControlledForm from './FormComponent/ControlledForm';
import RemoteData from './AxiosApiComponent/RemoteData';
var position = document.getElementById("nameComponent");
ReactDOM.render(<div>
<CommentComponet name="Rajashree">Rajashree's comment</CommentComponet>
<CommentComponet name="Subhashree">Subhashree's Comment</CommentComponet>
<CommentComponet name="Manoj">Manoj's Comment</CommentComponet>
</div>
,position);
var position2 = document.getElementById("lifeCycle");
ReactDOM.render(
<div>
<LifeCycleComponent></LifeCycleComponent>
<FormComponent></FormComponent>
<ControlledForm></ControlledForm>
<RemoteData></RemoteData>
</div>,position2);