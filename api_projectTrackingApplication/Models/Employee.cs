using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Models
{
    public class Employee
    {
        [Key]
        public int eid { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string designation { get; set; }
        [Required]
        public int mgrid { get; set; }
        [Required]
        public int contactno { get; set; }
        [Required]
        public string emailid { get; set; }

        public string skillsets { get; set; }

    }
}