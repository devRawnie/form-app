import React, {Component} from "react";
import FormComponent from "./FormComponent";
import { QUESTIONS } from "../assets/questions";

class FormContainer extends Component{
    state = {
        questions: QUESTIONS
    }
   
    handleClick = ()=>{
        let autonomy = 0;
        let relatedness = 0;
        let competence = 0;
        let pos = 1;
        for(let i =0; i < 4; i++){
            
            let inputElements = document.getElementsByName(`autonomy${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    autonomy = autonomy + parseInt(inputElements[j].value);
                }
            }
            
            inputElements = document.getElementsByName(`autonomy${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    autonomy = autonomy + parseInt(inputElements[j].value);
                }
            }
            
            inputElements = document.getElementsByName(`relatedness${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    relatedness = relatedness + parseInt(inputElements[j].value);
                }
            }
            
            inputElements = document.getElementsByName(`relatedness${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    relatedness = relatedness + parseInt(inputElements[j].value);
                }
            }
            
            inputElements = document.getElementsByName(`competence${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    competence = competence + parseInt(inputElements[j].value);
                }
            }
            
            inputElements = document.getElementsByName(`competence${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    competence = competence + parseInt(inputElements[j].value);
                }
            }
        }

        alert(`Autonomy: ${autonomy}, Relatedness: ${relatedness}, Competence: ${competence}`);

    };
    render(){
        const data = this.state.questions.map(question=>{    
            return (
                <div className="col-12">
                    <FormComponent 
                        key={question.id}
                        qid={question.id}
                        question={question.question}
                        domain={question.domain}/>
                </div>
            );
        });
        return(
            <div className="row text-center">
                <div className="col-12 question">
                <h3><strong>Basic Psychological Need Satisfaction and Frustration Scale(BPNSNF)</strong></h3>
                </div>
                {data}
                <div className="col-12">
                    <button className="btn btn-danger" onClick={this.handleClick}>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default FormContainer;