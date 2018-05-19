using api_projectTrackingApplication.common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace api_projectTrackingApplication.Models
{
    public class Userstories
    {
        [Key]
        public int userstoryid { get; set; }
        [Required]
        public string story { get; set; }
        [Required]
        public int proid { get; set; }
        [ForeignKey("proid")]
        public Project project { get; set; }

    }

}