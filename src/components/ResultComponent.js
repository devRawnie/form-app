import React from "react";
import { Table } from "reactstrap";

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
        </div>
    );
}

export default Result;