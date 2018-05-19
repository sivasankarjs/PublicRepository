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
    public class UserstoriesController : ApiController
    {
        // GET: api/Userstories
        public IEnumerable<Userstories> Get()
        {
            EmpDBContext db = new EmpDBContext();
            return db.userstories.Select(usr => usr).ToList();

        }

        // GET: api/Userstories/5
        public Userstories Get(int id)
        {
            EmpDBContext db = new EmpDBContext();
            Userstories pr = new Userstories();
            pr.userstoryid = id;
            return UserstoryRepo.SearchUserById(pr, db);
        }

        // POST: api/Userstories
        public void Post(Userstories usr)
        {
            UserstoryRepo.CreateNewUserstories(usr);
        }

        // PUT: api/Userstories/5
        public void Put(int id, Userstories value)
        {
            value.userstoryid = id;
            UserstoryRepo.EditUserstories(value);
        }

        // DELETE: api/Userstories/5
        public void Delete(int id)
        {
            UserstoryRepo.DeleteallUserstories(id);
        }
    }
}
