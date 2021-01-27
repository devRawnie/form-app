import React from "react";
import { Button, Table } from "reactstrap";
import PDFComponent from "./PDFComponent";

function print(){
    
    const html = document.getElementById("printComponent").innerHTML;
    const css = `
    <style type='text/css'>
    body{
        margin: auto;
        width: 100%;
        height: 100vh;
        font-family: Helvetica, Arial;
    }
    table{
        border: 2px solid black;
        border-collapse: collapse;
        margin: 30px;
    }
    tr, th, td{
        border: 1px solid black;
    }
    th{
        font-size: 1.3em;
        font-weight: bold;
        padding: 10px
    }
    td{
        font-size: 1.2em;
        padding: 10px;
    }
    td:nth-child(even){
        text-align: center;
    }
    button{
        display:none;
    }
    </style>`;

    const dateElement = `
        <div style="margin: 10px">
            <ul>
                <li><h4>Response Recorded on: ${new Date().toLocaleString()}</h4></li> 
            </ul>
        </div>
    `;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>PDF</title>');
    printWindow.document.write(`</head>${css}<body >`);
    printWindow.document.write(dateElement);
    printWindow.document.write(html);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

const tableStyle = { 
    marginTop: "20px", 
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: "10px",
    boxShadow: "0 8px 6px -6px black"
};
function Result({autonomy, relatedness, competence, score}){
    
    return(
        <div id="printComponent" className="col-12">
        <Table style={tableStyle}>
            <thead>
                <tr>
                    <th colSpan="3" className="normal">SCORE</th>
                </tr>
                <tr>
                    <th className="normal">AUTONOMY</th>
                    <th className="normal">RELATEDNESS</th>
                    <th className="normal">COMPETENCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="normal">{(autonomy/8).toFixed(1)}</td>
                    <td className="normal">{(relatedness/8).toFixed(1)}</td>
                    <td className="normal">{(competence/8).toFixed(1)}</td>
                </tr>
            </tbody>
        </Table>
        <PDFComponent score={score}/>
        <div className="row">
            <div className="col-6">
                <Button className="btn btn-danger" style={{marginBottom: "10px"}} onClick={()=>{window.location.reload()}}>Reload</Button>
            </div>
            <div className="col-6">
                <Button className="btn btn-primary" style={{marginBottom: "10px"}} onClick={print}>Download Responses</Button>
            </div>
            
        </div>
        </div>
    );
}

export default Result;