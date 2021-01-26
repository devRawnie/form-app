import React from "react";
import { Button, Table } from "reactstrap";
import PDFComponent from "./PDFComponent";

function Result({autonomy, relatedness, competence, score}){
    return(
        <div className="col-12">
        <Table bordered style={{borderColor: "white", marginTop: "20px", color: "white"}}>
            <thead>
                <tr>
                    <th colSpan="3">SCORE</th>
                </tr>
                <tr>
                    <th>AUTONOMY</th>
                    <th>RELATEDNESS</th>
                    <th>COMPETENCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{(autonomy/8).toFixed(1)}</th>
                    <th>{(relatedness/8).toFixed(1)}</th>
                    <th>{(competence/8).toFixed(1)}</th>
                </tr>
            </tbody>
        </Table>
        <PDFComponent score={score}/>
        <Button className="btn btn-danger" style={{marginBottom: "10px"}} onClick={()=>{window.location.reload()}}>Reload</Button>
        </div>
    );
}

export default Result;