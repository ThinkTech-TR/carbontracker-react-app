import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function ResultRow({ carbonItem, ind }) {

    const format = () => {
        const diff = carbonItem.userCarbon - carbonItem.averageCarbon;
        const threshold = 50;
        if (diff > threshold)
        {
            return "table-danger";            
        }
        if (diff < threshold && diff > -1*threshold){
            return "table-warning";   
        }
        return "table-success";
    }
   
    return (
        <React.Fragment>
         <tr className={format()}>
            <th scope="row">{ind}</th>
            <td>{carbonItem.carbonType}</td>
            <td>{Math.round(carbonItem.userCarbon)}</td>
            <td>{Math.round(carbonItem.averageCarbon)}</td>
        </tr>
      </React.Fragment>       
    );
}

export default ResultRow;

