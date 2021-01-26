import React from "react";
import { Button, Table } from "reactstrap";

function Result({autonomy, relatedness, competence}){
    return(
        <div className="col-12">
        <Table bordered style={{borderColor: "white", marginTop: "20px", color: "white"}}>
            <tr>
                <th colspan="3">SCORE</th>
            </tr>
            <tr>
                <th>AUTONOMY</th>
                <th>RELATEDNESS</th>
                <th>COMPETENCE</th>
            </tr>
            <tr>
                <th>{autonomy}</th>
                <th>{relatedness}</th>
                <th>{competence}</th>
            </tr>
        </Table>
        <Button className="btn btn-danger" onClick={()=>{window.location.reload()}}>Reload</Button>
        </div>
    );
}

export default Result;