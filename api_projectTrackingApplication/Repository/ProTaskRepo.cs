using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Repository
{
    public class ProTaskRepo
    {
        public static void CreateTask(ProjectTask task)
        {
            EmpDBContext db = new EmpDBContext();
            db.ProjectTasks.Add(task);
            db.SaveChanges();
        }


        public List<ProjectTask> ShowAllTasks()
        {
            EmpDBContext db = new EmpDBContext();
            return db.ProjectTasks.Select(task => task).ToList();
        }

        public  static void Edit(ProjectTask t)
        {
            EmpDBContext db = new EmpDBContext();
            ProjectTask ta = SearchById(t, db);
            ta.assigned_to = t.assigned_to;
            ta.end_date = t.end_date;
            ta.start_date = t.start_date;
            ta.completion_date = t.completion_date;
            ta.userstoryid = t.userstoryid;
            db.SaveChanges();
        }

        public static ProjectTask SearchById(ProjectTask ta,EmpDBContext  db)
        {
            return (db.ProjectTasks.Select(t => t).Where(t => t.task_id == ta.task_id)).First();
        }

        public static void Delete(ProjectTask ts)
        {
            EmpDBContext db = new EmpDBContext();
            ProjectTask tk = SearchById(ts, db);
            db.ProjectTasks.Remove(tk);
            db.SaveChanges();
        }




    }
}