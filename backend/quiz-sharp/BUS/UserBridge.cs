using quiz_sharp.DAO;
using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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

        public String Register(String username, String password,
            String avatart_url, String email, DateTime dob)
        {
            try
            {
                // check username valid
                if (!Regex.IsMatch(username, "([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*"))
                {
                    return "Username invalid";
                }

                // check password
                if (!Regex.IsMatch(password, "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"))
                {
                    return "Password must be ninimum eight characters, at least one letter and one number";
                }

                // check email valid
                if (!Regex.IsMatch(email, @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?""^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z", RegexOptions.IgnoreCase))
                {
                    return "Email invalid";
                }

                UserDAO userDao = new UserDAO();
                userDao.addUser(username, password, avatart_url, email, dob);
                return "Register successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        public String Signin(String username, String password)
        {
            try
            {
                UserDAO userDao = new UserDAO();
                User user = userDao.getUserByUsername(username);
                if (user == null)
                {
                    return "Username does not exist";
                }
                if (user.password != password)
                {
                    return "Password incorrect";
                }

                return "Login successfull";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
    }
}
