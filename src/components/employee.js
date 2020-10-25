import { useEffect } from "react";
import history from '../history';
import { useSelector } from 'react-redux';
import employee from '../dataFile/employeeData.json';

const Employee = () => {
    const isLoggedIn = useSelector(state => state.store.loggedIn)
    console.log("from employee: ", isLoggedIn)
    useEffect(() => {
        if (!isLoggedIn) {
            history.push('/login');
        }
    }, [isLoggedIn])
    const generateEmployeeData = () => {
        return employee.user.map(emp => (
            <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.phoneNo}</td>
            </tr>
        ))
    }
    return (
        <>
            {isLoggedIn ? (
                <div>
                    <table className="table table-striped" style={{textAlign: 'left'}}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">AGE</th>
                                <th scope="col">GENDER</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generateEmployeeData()}
                        </tbody>
                    </table>
                </div>
            ) : (<div />)}
        </>
    )
}

export default Employee;