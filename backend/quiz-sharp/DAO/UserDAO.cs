using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DAO
{
    class UserDAO
    {
        public UserDAO()
        {

        }

        public List<User> getListStudent()
        {
            List<User> listUser = new List<User>();
            string query = "select * from [User]";
            DataTable data = DataProvider.Instance.ExecuteQuery(query, null);
            foreach (DataRow item in data.Rows)
            {
                User user = new User(item);
                listUser.Add(user);
            }

            return listUser;
        }
    }
}
