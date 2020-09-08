﻿using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp.Models
{
    public class Todo
    {

        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime CreatedTime { get; set; }

    }
}
