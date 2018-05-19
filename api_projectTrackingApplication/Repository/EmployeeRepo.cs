using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Repository
{
    public class EmployeeRepo
    {
        public static void CreateNewEmployee(Employee Emp)
        {
            EmpDBContext db = new EmpDBContext();
            db.Employees.Add(Emp);
            db.SaveChanges();
        }


        public static void EditEmployee(Employee Emp)
        {
            EmpDBContext db = new EmpDBContext();
            Employee em = SearchEmployeesById(Emp, db);
            em.eid = Emp.eid;
            em.name = Emp.name;
            em.designation = Emp.designation;
            em.contactno = Emp.contactno;
            em.emailid = Emp.emailid;
            em.skillsets = Emp.skillsets;
            db.SaveChanges();
        }
        public static Employee SearchEmployeesById(Employee em, EmpDBContext db)

        {


            Employee x = (db.Employees.Where(e => e.eid == em.eid)).First();
            return x;


        }
        public static void DeleteAllEmployee(int eid)
        {
            EmpDBContext db = new EmpDBContext();
            var delete = db.Employees.FirstOrDefault(s => s.eid == eid);
            if (delete != null)
            {
                db.Employees.Remove(delete);
                db.SaveChanges();
            }

        }

    }
}

