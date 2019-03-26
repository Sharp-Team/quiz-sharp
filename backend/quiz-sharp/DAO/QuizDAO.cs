using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;


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

        private String concatString(List<Quiz> listQuiz)
        {
            String result = null;
            int quizSize = listQuiz.Count;
            for (int i = 0; i < quizSize; i++)
            {
                if (quizSize - 1 != 0)
                {
                    result += String.Join(", ", listQuiz.Select(quiz => quiz.ToString().ToArray()));
                }
            }
            return result;
        }

        public void updateMultipleQuiz(List<Quiz> listQuiz)
        {
            String concate = concatString(listQuiz);
            String query = "UPDATE temp SET id = src.id, term = src.term, definition = src.definition"
              + "FROM dbo.Quiz AS temp INNER JOIN( VALUES "
              + concate
              + ") AS src (id, term, definition) ON src.id = temp.id";
            DataProvider.Instance.ExecuteNonQuery(query, null);
        }

        public void editQuiz(Int64 id, String term, String definition)
        {
            String query = "UPDATE Quiz SET term =  @param1 , definition = @param2 WHERE id = @param3";
            DataProvider.Instance.ExecuteNonQuery(query, new object[] { term, definition, id });
        }

        public void deleteQuiz(Int64 id)
        {
            String query1 = "DELETE FROM Set_Study_Quiz WHERE quiz_id = @param1";
            DataProvider.Instance.ExecuteNonQuery(query1, new object[] { id });
            String query2 = "DELETE FROM Quiz WHERE id = @param1";
            DataProvider.Instance.ExecuteNonQuery(query2, new object[] { id });
        }
    }
}
