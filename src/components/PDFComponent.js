import React, { Component } from "react";
import { Table } from "reactstrap";
import {QUESTIONS} from "../assets/questions";

class PDFComponent extends Component{
    state = {
        questions: QUESTIONS
    } 

    constructor(props){
        super(props);
        this.state = {
            questions: QUESTIONS,
            score: props.score,
        }
    }

    generateTable= ()=>{
        const response = this.state.questions.map(question=>{
            return  <tr key={question.id}>
                        <td className="normal" align={"left"}>{`${question.id}. ${question.question}`}</td>
                        <td className="normal">{this.state.score[`${question.domain}${question.id}`]}</td>
                    </tr>
        });
        return response;
    }

    render(){
        const response = this.generateTable();
        return(
                <Table bordered style={{borderColor: "black", 
                                        marginTop: "20px", 
                                        backgroundColor: "white",     
                                        borderRadius: "10px",
                                        boxShadow: "0 8px 6px -6px "}}>
                    <thead>
                        <tr>
                            <th className="normal">QUESTION</th>
                            <th className="normal">SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response}
                    </tbody>
                </Table>
        );
    }
}

export default PDFComponent;