import React, { useState } from 'react'
import './Table.css'
import MaterialTable from 'material-table'


const empList=[
    {id:1, name:"Bracket", reg:"UP60482", other:"Others",num:'6',from:"Mar 10,2021", To:"Feb 10,2021"},
    {id:1, name:"Hydraulic Check Vlaue", reg:"RR371000", other:"Others",num:'9',from:"Mar 10,2021", To:"Feb 10,2021"},
    {id:1, name:"Sensor,Temp oil", reg:"RP221-00", other:"Auxitrol",num:'3',from:"Mar 10,2021", To:"Feb 10,2021"},
    {id:1, name:"Sensor Temp oil", reg:"RP221-00", other:"Auxitrol",num:'3',from:"Mar 10,2021", To:"Feb 10,2021"},
    {id:1, name:"sensor Temp Oil", reg:"RP221-00", other:"Auxitrol",num:'3',from:"Mar 10,2021", To:"Feb 10,2021"},
   
]
function Table(){

    const [data, setData] = useState(empList)
    const columns =[
        // {title:"", field:"id"},
        {title:"", field:"name"},
        {title:"", field:"reg"},
        {title:"", field:"other"},
        {title:"", field:"num"},
        {title:"", field:"from"},
        {title:"", field:"To"},
        
    ]
    
    return(
        <div className="MUI">
            <MaterialTable
            title=""
            data={data}
            columns={columns} />
        </div>
    )
}
export default Table;