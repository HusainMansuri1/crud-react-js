import { useContext } from 'react';
import { EmployeeContext } from "context/employeeContext";
import EmployeeTable from "components/EmployeeTable/EmployeeTable";
import AddEmployee from "components/AddEmployee/AddEmployee";
import './EmployeeMain.scss';

const EmployeeMain = (props) => {
  const context = useContext(EmployeeContext);

  /**
   * To set employ fields which will be then used in input fields to get data from user
   * @returns {object} employ fields (eg name, dob)   
   */
  const empFieldDetails = (() => {
    console.log('run');
    let fields = {};
    context.empFields.data.forEach((field) => 
      fields[field] = ((key = field) => {
        switch (key) {
          case "id":
            return {
              id: key,
              label: "id",
              editable: false
            };
            
          case "firstName":
            return {
              id: key,
              label: "First Name",
              type: "text",
              editable: true
            };

          case "lastName":
            return {
              id: key,
              label: "Last Name",
              type: "text",
              editable: true
            };

          case "email":
            return {
              id: key,
              label: "Email",
              type: "email",
              editable: true
            };

          case "contactNumber":
            return {
              id: key,
              label: "Contact Number",
              type: "tel",
              editable: true
            };

          case "dob":
            return {
              id: key,
              label: "D.O.B.",
              type: "date",
              editable: true
            };

          default:
            return {};
        }
      })());
    return fields;
  })();
  
  /**
   * To set starter employ data object with empty values
   * @returns {object} employ fields (eg name, dob)   
   */
  const initEmptyEmpData = (() => {
    let empObj = {};
    context.empFields.data.forEach(cur => empObj[cur] = '');
    return empObj;
  })();
  
  return ( 
    <main className="emp-main" id="emp-main">
      <div className="container">
        <EmployeeTable 
          fieldDetails={empFieldDetails}
          blankEmpData={initEmptyEmpData}
        />
        <AddEmployee 
          fieldDetails={empFieldDetails}
          blankEmpData={initEmptyEmpData}
        />
      </div>
    </main>
  );
}

export default EmployeeMain;