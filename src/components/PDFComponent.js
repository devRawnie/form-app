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
            score: props.score
        }
    }

    generateTable= ()=>{
        const response = this.state.questions.map(question=>{
            return  <tr key={question.id}>
                        <td align={"left"}>{`${question.id}. ${question.question}`}</td>
                        <td>{this.state.score[`${question.domain}${question.id}`]}</td>
                    </tr>
        });
        return response;
    }

    componentDidMount(){
        console.log(this.state.score['autonomy1']);
    }

    render(){
        const response = this.generateTable();
        return(
                <Table bordered style={{borderColor: "white", marginTop: "20px", color: "white"}}>
                    <thead>
                        <tr>
                            <th>QUESTION</th>
                            <th>RESPONSE</th>
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