using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Repository
{
    public class UserstoryRepo
    {
        public static void CreateNewUserstories(Userstories userstory)
        {
            EmpDBContext db = new EmpDBContext();
            db.userstories.Add(userstory);
            db.SaveChanges();
        }
        public static void EditUserstories(Userstories e)
        {
            EmpDBContext db = new EmpDBContext();
            Userstories usr = SearchUserById(e, db);
            usr.story = e.story;
            usr.proid = e.proid;
            
            db.SaveChanges();
        }
        public static Userstories SearchUserById(Userstories p, EmpDBContext db)

        {
            Userstories z = (db.userstories.Where(e => e.userstoryid == p.userstoryid)).First();
            return z;


        }
        public static void DeleteallUserstories(int userstoryid)
        {
            EmpDBContext db = new EmpDBContext();
            var delete = db.userstories.FirstOrDefault(s => s.userstoryid == userstoryid);
            if (delete != null)
            {
                db.userstories.Remove(delete);
                db.SaveChanges();
            }

        }




    }
}