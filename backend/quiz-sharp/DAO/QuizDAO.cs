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
        public List<Quiz> getListQuizByID(Int64 setStudyId)
        {
            try
            {
        
                List<Quiz> listQuiz = new List<Quiz>();
                String query = "SELECT Quiz.id, Quiz.term, Quiz.definition FROM Set_Study_Quiz INNER JOIN Quiz ON Set_Study_Quiz.quiz_id = Quiz.id WHERE Set_Study_Quiz.set_study_id = @param1";
                DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { setStudyId });
                foreach (DataRow item in data.Rows)
                {
                    Quiz quiz = new Quiz(item);
                    listQuiz.Add(quiz);
                }
                return listQuiz;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void editQuiz(Int64 id, String term, String definition)
        {
            // Hoàng
        }

        public void deleteQuiz(Int64 id)
        {
            // Trang
        }
    }
}
