import EmployeeFields from "components/EmployeeFields/EmployeeFields";
import EmployeeData from "components/EmployeeData/EmployeeData";
import './EmployeeTable.scss';

const EmployeeTable  = (props) => {
  return ( 
    <table className="empt-tbl">
      <EmployeeFields 
        fieldDetails={props.fieldDetails}
      />
      <EmployeeData 
        fieldDetails={props.fieldDetails}
        blankEmpData={props.blankEmpData}
      />
    </table>
  );
}

export default EmployeeTable;
