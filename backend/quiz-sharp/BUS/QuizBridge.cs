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
        public List<Quiz> GetAllQuiz()
        {
            QuizDAO userDao = new QuizDAO();
            List<Quiz> result = userDao.getListQuiz();
            return result;
        }
    }
}
