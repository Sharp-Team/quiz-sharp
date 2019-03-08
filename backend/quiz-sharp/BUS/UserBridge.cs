using quiz_sharp.DAO;
using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.Bridges

{
    class UserBridge
    {
        public List<User> GetAllUser()
        {
            UserDAO userDao = new UserDAO();
            List<User> result = userDao.getListUser();
            return result;
        }
    }
}
