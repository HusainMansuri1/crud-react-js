import './EmployeeFields.scss';

const EmployeeFields = (props) => {
  return ( 
    <thead className="emp-field-row row">
      <tr>
        { Object.values(props.fieldDetails).map(field => 
          <th key={field.id} className={`col emp-field-col col-${field.id}`}>{field.label}</th> 
        )}
        <th className='col emp-field-col col-actions'>Actions</th>
      </tr>
    </thead>
  );
}

export default EmployeeFields;
