using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Models
{
    public class Project
    {
        [Key]
        public int proid { get; set; }
        [Required]
        public string proname { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public DateTime startdate { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public DateTime enddate { get; set; }
        [Required]
        public string clientname { get; set; }

    }
}