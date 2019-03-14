using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DAO {
  class UserDAO {
    public UserDAO() {

    }

    public List<User> getListUser() {
      try {
        List<User> listUser = new List<User>();
        String query = "SELECT * FROM [User]";
        DataTable data = DataProvider.Instance.ExecuteQuery(query, null);
        foreach (DataRow item in data.Rows) {
          User user = new User(item);
          listUser.Add(user);
        }
        return listUser;
      } catch (Exception e) {
        throw e;
      }

    }

    public void addUser(String username, String password,
        String avatar_url, String email, DateTime dob) {
      try {
        List<User> listUser = new List<User>();
        String query = "INSERT INTO [User] (username, password, avatar_url, email, dob) VALUES( @username , @password , @avatar_url , @email , @dob ); ";
        DataProvider.Instance.ExecuteNonQuery(query,
            new object[] { username, password, avatar_url, email, dob });
      } catch (Exception e) {
        throw e;
      }
    }

    public User getUserByUsername(String username) {
      try {
        String query = "SELECT * FROM [User] WHERE username = @username";
        DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { username });
        foreach (DataRow item in data.Rows) {
          return new User(item);
        }
        return null;
      } catch (Exception e) {
        throw e;
      }
    }
  }
}
