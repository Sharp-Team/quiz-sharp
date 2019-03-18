using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace quiz_sharp.DAO {
  public class DataProvider {
    private static DataProvider instance;

    private string connectionString;

    public static DataProvider Instance {
      get {
        if (instance == null) instance = new DataProvider();
        return instance;
      }

      private set {
        instance = value;
      }
    }

    private DataProvider() {
      connectionString = ConfigurationManager.ConnectionStrings["QuizSharp"].ConnectionString;
    }

    public DataTable ExecuteQuery(string query, object[] parameter = null) {
      DataTable data = new DataTable();
      using (SqlConnection connection = new SqlConnection(connectionString)) {
        connection.Open();
        SqlCommand command = new SqlCommand(query, connection);

        if (parameter != null) {
          string[] listPara = query.Split(' ');
          int i = 0;
          foreach (string item in listPara) {
            if (item.Contains('@')) {
              command.Parameters.AddWithValue(item, parameter[i]);
              i++;
            }
          }
        }

        SqlDataAdapter adapter = new SqlDataAdapter(command);
        adapter.Fill(data);
        connection.Close();
      }
      return data;
    }

    /*
     Executes the query, and returns the first column of the first row 
     in the result set returned by the query. Additional columns or rows are ignored.
     */
    public int ExecuteScalar(string query, object[] parameter = null) {
      int data = 0;
      using (SqlConnection connection = new SqlConnection(connectionString)) {
        connection.Open();
        SqlCommand command = new SqlCommand(query, connection);

        if (parameter != null) {
          string[] listPara = query.Split(' ');
          int i = 0;
          foreach (string item in listPara) {
            if (item.Contains('@')) {
              command.Parameters.AddWithValue(item, parameter[i]);
              i++;
            }
          }
        }
        data = Convert.ToInt32(command.ExecuteScalar());
        connection.Close();
      }
      return data;
    }

    /*
     ExecuteNonQuery used for executing queries that does not return any data. 
     It is used to execute the sql statements like UPDATE, INSERT, or DELETE ..
     ExecuteNonQuery executes the command and returns the number of rows affected.
     */
    public int ExecuteNonQuery(string query, object[] parameter = null) {
      int data = 0;
      using (SqlConnection connection = new SqlConnection(connectionString)) {
        connection.Open();
        SqlCommand command = new SqlCommand(query, connection);

        if (parameter != null) {
          string[] listPara = query.Split(' ');
          int i = 0;
          foreach (string item in listPara) {
            if (item.Contains('@')) {
              command.Parameters.AddWithValue(item, parameter[i]);
              i++;
            }
          }
        }
        data = command.ExecuteNonQuery();
        connection.Close();
      }
      return data;
    }
  }
}
