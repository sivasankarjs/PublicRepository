using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Repository
{
    public class ProjectRepo
    {
        public static void CreateNewProject(Project prjct)
        {
            EmpDBContext db = new EmpDBContext();
            db.Project.Add(prjct);
            db.SaveChanges();
        }
        public static void EditProject(Project e)
        {
            EmpDBContext db = new EmpDBContext();
            Project pro = SearchProjectsById(e, db);
            pro.proid = e.proid;
            pro.proname = e.proname;
            pro.startdate = e.startdate;
            pro.enddate = e.enddate;
            pro.clientname = e.clientname;
            // p.skillsets = e.skillsets;
            db.SaveChanges();
        }
        public static Project SearchProjectsById(Project p, EmpDBContext db)

        {

            Project z = (db.Project.Where(e => e.proid == p.proid)).First();
            return z;


        }
        public static void DeleteAllProject(int proid)
        {
            EmpDBContext db = new EmpDBContext();
            var delete = db.Project.FirstOrDefault(s => s.proid == proid);
            if (delete != null)
            {
                db.Project.Remove(delete);
                db.SaveChanges();
            }

        }




    }
}