using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp.Models
{
    public enum Status{
        incomplete, completed, inprogress, delaying
    }
    public class Todo
    {

        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime DeadlineTime { get; set; }
        [EnumDataType(typeof(Status))]
        public Status Status { get; set; }
        

    }
}
