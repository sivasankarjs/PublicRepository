using api_projectTrackingApplication.common;
using api_projectTrackingApplication.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using api_projectTrackingApplication.Models;

namespace api_projectTrackingApplication.Controllers
{
    public class ManagerCommentsController : ApiController
    {
        // GET: api/ManagerComments
        public IEnumerable<ManagerComment> Get()
        {

            return ManagerCommentRepo.ShowAll();

        }

        // GET: api/ManagerComments/5
        public ManagerComment Get(int id)
        {
            EmpDBContext db = new EmpDBContext();
            ManagerComment comment = new ManagerComment();
            comment.managerid = id;
            return ManagerCommentRepo.Search(comment, db);
        }

        // POST: api/ManagerComments
        public void Post(ManagerComment comment)
        {
            ManagerCommentRepo.Create(comment);
        }

        // PUT: api/ManagerComments/5
        public void Put(int id, ManagerComment comment)
        {
            comment.managerid = id;
            ManagerCommentRepo.Edit(comment);
        }

        // DELETE: api/ManagerComments/5
        public void Delete(int id)
        {
            ManagerComment comment = new ManagerComment();
            ManagerCommentRepo.Delete(comment);

        }
    }
}
