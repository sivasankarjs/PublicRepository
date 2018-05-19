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
    public class ProjectController : ApiController
    {
        // GET: api/ProjectController
        public IEnumerable<Project> Get()
        {
            EmpDBContext db = new EmpDBContext();
            return db.Project.Select(proj => proj).ToList();
        }

        // GET: api/ProjectController/5
        public Project Get(int id)
        {
            EmpDBContext db = new EmpDBContext();
            Project pr = new Project();
            pr.proid = id;
            return ProjectRepo.SearchProjectsById(pr, db);
        }

        // POST: api/ProjectController
        public void Post(Project prjct)
        {
            ProjectRepo.CreateNewProject(prjct);
        }

        // PUT: api/ProjectController/5
        public void Put(int id, Project value)
        {
            value.proid = id;
            ProjectRepo.EditProject(value);
        }

        // DELETE: api/ProjectController/5
        public void Delete(int id)
        {
            ProjectRepo.DeleteAllProject(id);
        }
    }
}
