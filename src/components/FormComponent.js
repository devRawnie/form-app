import React from "react";
import { Table } from "reactstrap";


function FormComponent({qid, question, domain}){
    let marks = [1,2,3,4,5];
    if(qid % 2 === 0){
        marks = [5,4,3,2,1];
    }
    return(
        <div className="question">
            <h5 className="text-left qtext">{`${qid}. ${question}`}</h5>
            <Table borderless>
                <tr>
                    <th></th>
                    <th style={{fontSize: "1.2em"}}>1</th>
                    <th style={{fontSize: "1.2em"}}>2</th>
                    <th style={{fontSize: "1.2em"}}>3</th>
                    <th style={{fontSize: "1.2em"}}>4</th>
                    <th style={{fontSize: "1.2em"}}>5</th>
                    <th></th>
                </tr>
                <tr>
                    <td style={{textAlign: "right", fontSize: "1.2em"}}>Not true at all</td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[0]}/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[1]}/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[2]}/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[3]}/></td>
                    <td><input className="form-control" type="radio" name={`${domain}${qid}`} value={marks[4]}/></td>
                    <td style={{textAlign: "left", fontSize: "1.2em"}}>Completely true</td>
                </tr>
            </Table>
            {/* <hr style={{border: "2px solid", margin: "5px"}}/> */}
        </div>
    );
}

export default FormComponent;