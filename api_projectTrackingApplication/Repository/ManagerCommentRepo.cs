using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Repository
{
    public class ManagerCommentRepo
    {
        public static void Create(ManagerComment comment)
        {
            EmpDBContext db = new EmpDBContext();
            db.ManagerComments.Add(comment);
            db.SaveChanges();
        }
        public static void Edit(ManagerComment comment)
        {
            EmpDBContext db = new EmpDBContext();
            ManagerComment c = Search(comment, db);
            c.comments = comment.comments;
            c.taskid = comment.taskid;
            db.SaveChanges();
        }
        public static void Delete(ManagerComment comment)
        {
            EmpDBContext db = new EmpDBContext();
            db.ManagerComments.Remove(comment);
            db.SaveChanges();
        }
        public static List<ManagerComment> ShowAll()
        {
            EmpDBContext db = new EmpDBContext();
            return (db.ManagerComments.Select(comment => comment).ToList());
        }
        public static ManagerComment Search(ManagerComment comment, EmpDBContext db)
        {
            return (db.ManagerComments.Select(s => s).Where(s => s.managerid == comment.managerid)).First();
        }
    }
}