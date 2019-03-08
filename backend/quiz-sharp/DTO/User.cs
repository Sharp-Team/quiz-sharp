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
        public int id { get; set; }
        public String username { get; set; }
        public String password { get; set; }
        public String avatar_url { get; set; }
        public String gmail { get; set; }
        public DateTime dob { get; set; }

        public User(DataRow dr)
        {
            id = Int32.Parse(dr["id"].ToString());
            username = dr["username"].ToString();
            password = dr["password"].ToString();
            avatar_url = dr["avatar_url"].ToString();
            gmail = dr["gmail"].ToString();
            dob = Convert.ToDateTime(dr["dob"]);
        }
    }
}
