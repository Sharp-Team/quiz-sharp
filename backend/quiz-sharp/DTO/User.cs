using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DTO
{
    class User
    {
        public String username { get; set; }
        public String password { get; set; }

        public User(DataRow dr)
        {
            username = dr["username"].ToString();
            password = dr["password"].ToString();
        }
    }
}
