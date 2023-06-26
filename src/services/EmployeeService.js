import axios from 'axios';

const EMP_BASE_API_URL="http://localhost:9001/api/v1/employees"
class Employeeservice{
     getEmployees(){
       return axios.get(EMP_BASE_API_URL);
     }
}

export default new Employeeservice()