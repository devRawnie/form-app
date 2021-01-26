import React from "react";
import { Table } from "reactstrap";


function FormComponent({qid, question, domain}){
    let marks = [1,2,3,4,5];
    if(qid % 2 === 0){
        marks = [5,4,3,2,1];
    }
    return(
        <div className="question">
            <p className="text-left qtext">{`${qid}. ${question}`}</p>
            <Table borderless>
                <tr>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th></th>
                </tr>
                <tr>
                    <td className="big" style={{textAlign: "right"}}>Not true at all</td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[0]} required/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[1]} required/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[2]} required/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[3]} required/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[4]} required/></td>
                    <td className="big" style={{textAlign: "left"}}>Completely True</td>
                </tr>
            </Table>
            {/* <hr style={{border: "2px solid", margin: "5px"}}/> */}
        </div>
    );
}

export default FormComponent;