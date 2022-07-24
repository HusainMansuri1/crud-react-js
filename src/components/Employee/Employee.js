import Button from 'components/Button/Button';
import './Employee.scss';

const Employee = (props) => {
  return ( 
    <tr key={props.emp.id} className="emp-data-row row">
      {Object.keys(props.emp).map(empKey => (
        <td key={empKey} className={`col emp-data-col`}>{props.emp[empKey]}</td>
      ))}
      <td className='col emp-action-col'>
        <Button
          style={{ backgroundColor: '#1890ff' }}
          click={props.edit}
          text="edit"
        />
        <Button
          style={{ backgroundColor: '#ff4d4f' }}
          click={props.delete}
          text="delete"
        />
      </td>
    </tr>
  );
}

export default Employee;