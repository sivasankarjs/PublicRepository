using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Models
{
    public class ProjectTask
    {
        [Key]
        public int task_id { get; set; }
        public int assigned_to { get; set; }
        [ForeignKey("assigned_to")]
        public Employee Employees { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public DateTime completion_date { get; set; }
        public int userstoryid { get; set; }
        [ForeignKey("userstoryid")]
        public Userstories userstories { get; set; }
    }
}