import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return (<header>
      <h1>Letz Share</h1>
 
 <table className="header-table">
     <tr>
         <td>
             About Us
         </td>
         <td>
             Contact Us
         </td>
         <td>
          User
         </td>
     </tr>
 </table>
    </header>);
}

export default Header;