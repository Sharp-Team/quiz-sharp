using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DTO
{
    public class SetStudy
    {
        public int id { get; set; }
        public String username { get; set; }
        public String avatar_url { get; set; }
        public String title { get; set; }
        public int term { get; set; }
        public DateTime createdDate { get; set; }

        public SetStudy(DataRow dr)
        {
            id = Int32.Parse(dr["id"].ToString());
            username = dr["username"].ToString();
            avatar_url = dr["avatar_url"].ToString();
            title = dr["title"].ToString();
            term = Int32.Parse(dr["term"].ToString());
            createdDate = Convert.ToDateTime(dr["createdDate"]);
        }
    }
}
