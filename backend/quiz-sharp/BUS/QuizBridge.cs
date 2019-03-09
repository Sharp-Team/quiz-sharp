using quiz_sharp.DAO;
using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.Bridges
{
    class QuizBridge
    {
        public List<Quiz> GetListQuizByID(Int64 idSetStudy)
        {
            QuizDAO userDao = new QuizDAO();
            List<Quiz> result = userDao.getListQuizByID(idSetStudy);
            return result;
        }

        public String EditQuiz(Int64 id, String term, String definition)
        {
            try
            {
                QuizDAO userDao = new QuizDAO();
                userDao.editQuiz(id, term, definition);
                return "Edit successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        public String DeleteQuiz(Int64 id)
        {
            try
            {
                QuizDAO userDao = new QuizDAO();
                userDao.deleteQuiz(id);
                return "Delete successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
    }
}
