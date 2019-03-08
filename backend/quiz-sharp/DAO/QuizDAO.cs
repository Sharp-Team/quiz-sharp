using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DAO
{
    class QuizDAO
    {
        public List<Quiz> getListQuiz()
        {
            List<Quiz> listQuiz = new List<Quiz>();
            string query = "select * from [Quiz]";
            DataTable data = DataProvider.Instance.ExecuteQuery(query, null);
            foreach (DataRow item in data.Rows)
            {
                Quiz quiz = new Quiz(item);
                listQuiz.Add(quiz);
            }

            return listQuiz;
        }
    }
}
