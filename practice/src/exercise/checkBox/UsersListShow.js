import React from "react";
import "./checkBox.css"

const UsersListShow = ({users}) => {

    console.log('user list show : ' + users)
    console.log( users)



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Applicant name: </th>
            <th>Citizenship:</th>
            <th>Live in Norway now:</th>
            <th>Skilled worker:</th>
            <th>Intedt to stay LongTime:</th>
          </tr>
        </thead>
        <tbody>
        
          
            {users.map((item)=>{
                return(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.citizenship ? '✓' : '✕'}</td>
                    <td>{item.livingInNorway ? '✓' : '✕'}</td>
                    <td>{item.skillWorkerPermit ? '✓' : '✕'}</td>
                    <td>{item.intendToStayLongTime ? '✓' : '✕'}</td>
                                 </tr>
                                 
                )
            })}


   
     
        </tbody>
      </table>
    </div>
  );
};

export default UsersListShow;
