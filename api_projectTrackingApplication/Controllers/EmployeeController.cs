using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using api_projectTrackingApplication.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace api_projectTrackingApplication.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {
            EmpDBContext db = new EmpDBContext();
            return db.Employees.Select(emp => emp).ToList();
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {

            EmpDBContext db = new EmpDBContext();
            Employee obj = new Employee();
            obj.eid = id;
            return EmployeeRepo.SearchEmployeesById(obj,db);
        }

        // POST: api/Employee
        public void Post(Employee Emp)
        {
            EmployeeRepo.CreateNewEmployee(Emp);

        }

        // PUT: api/Employee/5
        public void Put(int id,Employee value)
        {
            value.eid = id;
            EmployeeRepo.EditEmployee(value);
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            EmployeeRepo.DeleteAllEmployee(id);
        }
    }
}
