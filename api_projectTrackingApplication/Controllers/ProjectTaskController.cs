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
    public class ProjectTaskController : ApiController
    {
        // GET: api/ProjectTask
        public IEnumerable<ProjectTask> Get()
        {
            EmpDBContext db = new EmpDBContext();
            return db.ProjectTasks.Select(task => task).ToList();
        }

        // GET: api/ProjectTask/5
        public ProjectTask Get(int id)
        {
            EmpDBContext db = new EmpDBContext();
            ProjectTask obj = new ProjectTask();
            obj.task_id = id;
            return ProTaskRepo.SearchById(obj, db);

        }

        // POST: api/ProjectTask
        public  void Post(ProjectTask task)
        {
            ProTaskRepo.CreateTask(task);
        }

        // PUT: api/ProjectTask/5
        public void Put(int id, ProjectTask value)
        {
            value.task_id = id;
            ProTaskRepo.Edit(value);
        }

        // DELETE: api/ProjectTask/5
        public void Delete(int id)
        {
            ProjectTask ts = new ProjectTask();
            ts.task_id = id;
            ProTaskRepo.Delete(ts);
        }
    }
}
