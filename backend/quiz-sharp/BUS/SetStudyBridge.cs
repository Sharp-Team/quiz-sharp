using quiz_sharp.DAO;
using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.BUS
{
    class SetStudyBridge
    {
        public List<SetStudy> GetListSetStudyByUser(String username, Int64 pageCurrent)
        {
            SetStudyDAO setStudyDao = new SetStudyDAO();
            List<SetStudy> result = setStudyDao.getListSetStudyByUser(username, pageCurrent);
            return result;
        }

        public List<SetStudy> GetListSetStudy(Int64 pageCurrent)
        {
            SetStudyDAO setStudyDao = new SetStudyDAO();
            List<SetStudy> result = setStudyDao.getListSetStudy(pageCurrent);
            return result;
        }

        public int GetTotalPageSetStudyByUser(String username)
        {
            SetStudyDAO setStudyDao = new SetStudyDAO();
            return setStudyDao.getTotalPageSetStudyByUser(username);
        }

        public int GetTotalPageSetStudy()
        {
            SetStudyDAO setStudyDao = new SetStudyDAO();
            return setStudyDao.getTotalPageSetStudy();
        }

        public String DeleteSetStudy(Int64 id)
        {
            try
            {
                SetStudyDAO setStudyDao = new SetStudyDAO();
                setStudyDao.deleteSetStudy(id);
                return "Delete successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
        public String EditSetStudy(Int64 id, String title, DateTime updatedDate, List<Quiz> listQuiz)
        {
            try
            {
                SetStudyDAO setStudyDao = new SetStudyDAO();
                //setStudyDao.editSetStudy(id, title, updatedDate, listQuiz);
                return "Edit successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        public String AddSetStudy(String username, String title, DateTime createdDate, List<Quiz> listQuiz)
        {
            try
            {
                SetStudyDAO setStudyDao = new SetStudyDAO();
                //setStudyDao.addSetStudy(username, title, createdDate, listQuiz);
                return "Add successful";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
    }

}
