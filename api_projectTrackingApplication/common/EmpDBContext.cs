using api_projectTrackingApplication.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.common
{
    public class EmpDBContext : DbContext
    {
        
            public EmpDBContext() : base("Data Source=DESKTOP-1FED44S\\SQLEXPRESS;Initial Catalog=Demoproject3;Integrated Security=True")
            {

            }
            public DbSet<Employee> Employees { get; set; }
            public DbSet<Project> Project { get; set; }
            public DbSet<ProjectTask> ProjectTasks { get; set; }
            public DbSet<Userstories> userstories { get; set; }
            public DbSet<ManagerComment> ManagerComments { get; set; }

        }
    }
