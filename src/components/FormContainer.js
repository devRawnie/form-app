import React, {Component} from "react";
import FormComponent from "./FormComponent";
import { QUESTIONS } from "../assets/questions";
import { Form } from "reactstrap";
import Result from "./ResultComponent";

class FormContainer extends Component{
    state = {
        questions: QUESTIONS,
        autonomy: 0,
        relatedness: 0,
        competence: 0,
        score: {},
        isCalculated: false
    }
   
    handleClick = (event)=>{
        let autonomy = 0;
        let relatedness = 0;
        let competence = 0;
        let score = {};
        let pos = 1;
        for(let i =0; i < 4; i++){
            
            let inputElements = document.getElementsByName(`autonomy${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    autonomy = autonomy + temp;
                    score[`autonomy${pos-1}`] = temp; 
                }
            }
            
            inputElements = document.getElementsByName(`autonomy${pos++}`);
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    autonomy = autonomy + temp;
                    score[`autonomy${pos-1}`] = temp; 
                }
            }
            
            inputElements = document.getElementsByName(`relatedness${pos++}`);
            
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    relatedness = relatedness + temp;
                    score[`relatedness${pos-1}`] = temp; 
                }
            }

            inputElements = document.getElementsByName(`relatedness${pos++}`);            
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    relatedness = relatedness + temp;
                    score[`relatedness${pos-1}`] = temp; 
                }
            }

            inputElements = document.getElementsByName(`competence${pos++}`);            
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    competence = competence + temp;
                    score[`competence${pos-1}`] = temp; 
                }
            }

            inputElements = document.getElementsByName(`competence${pos++}`);            
            for(let j =0; j < inputElements.length; j++ ){
                if(inputElements[j].checked){
                    const temp = parseInt(inputElements[j].value);
                    competence = competence + temp;
                    score[`competence${pos-1}`] = temp; 
                }
            }
            
        }
        this.setState(prevState=>{
            return(
                {
                    ...prevState,
                    autonomy: autonomy,
                    relatedness: relatedness,
                    competence: competence,
                    score: score,
                    isCalculated: true
                }
            );

        });
        // alert(`Autonomy: ${autonomy}, Relatedness: ${relatedness}, Competence: ${competence}`);
        event.preventDefault();
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
        let result = <div></div>;
        if(this.state.isCalculated){
            
            result = <Result
                        autonomy={this.state.autonomy}
                        relatedness={this.state.relatedness}
                        competence={this.state.competence}
                        score={this.state.score}
                    />;
        }
        else{
            result = <Form onSubmit={this.handleClick}>
                        {data}
                        <div className="col-12">
                            <button className="btn btn-danger">SUBMIT</button>
                        </div>
                    </Form>;
        }
        return(
            <div className="row text-center">
                <div className="col-12 question" style={{margin: "0px"}}>
                    <h4><strong>Basic Psychological Need Satisfaction and Frustration Scale(BPNSNF)</strong></h4>
                </div>
                {result}
            </div>
        );
    }
}

export default FormContainer;