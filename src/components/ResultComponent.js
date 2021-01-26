import React from "react";
import { Button, Table } from "reactstrap";
import PDFComponent from "./PDFComponent";
import jsPDF from "jspdf";

function handlePDF() {
    var doc = new jsPDF('p', 'pt', 'letter');
  
    doc.html(document.querySelector('#responsespdf'), {
      callback: function (doc) {
        doc.save('Survey Response.pdf');
      },
      margin: [60, 60, 60, 60],
      x: 5,
      y: 5,
    });
  }

function Result({autonomy, relatedness, competence, score}){
    return(
        <div className="col-12">
        <Table style={{ marginTop: "20px", 
                backgroundColor: "white", borderRadius: "10px",
                boxShadow: "0 8px 6px -6px black"}}>
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
        <div className="row">
            <div className="col-12">
                <Button className="btn btn-danger" style={{marginBottom: "10px"}} onClick={()=>{window.location.reload()}}>Reload</Button>
            </div>
            {/* <div className="col-6">
                <Button className="btn btn-primary" style={{marginBottom: "10px"}} onClick={handlePDF}>Download Responses</Button>
            </div> */}
            
        </div>
        </div>
    );
}

export default Result;