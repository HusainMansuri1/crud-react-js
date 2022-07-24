import Button from "components/Button/Button";
import EmployeeFieldGroup from "components/EmployeeFieldGroup/EmployeeFieldGroup";
import './EditEmployee.scss';

const Edit = (props) => {
  return(
    <div className='edit-emp'>
      <div className="edit-emp-modal">
        <h2 className="cmn-heading">Edit Employee</h2>
        <form className='edit-emp-form cmn-form' onSubmit={props.submit}>
          { Object.values(props.fieldDetails).map((field) => 
            field.editable && 
              <EmployeeFieldGroup
                key={field.id} 
                id={field.id} 
                value={props.data[field.id]} 
                label={field.label} 
                type={field.type} 
                change={props.change} 
              />
          )}
          <Button 
            type="submit"
            classes="form-btn"
            text="Edit"
            style={{ width: '80px' }}
          />
          <Button 
            type="submit"
            classes="form-btn"
            text="Cancel"
            style={{ backgroundColor: '#a7a7a7', width: '80px',}}
          />
         
        </form>
      </div>
    </div>
  );
};

export default Edit;