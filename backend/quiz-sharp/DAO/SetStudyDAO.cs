using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DAO
{
    class SetStudyDAO
    {
        public List<SetStudy> getListSetStudyByUser(String username, Int64 pageCurrent)
        {
            try
            {
                List<SetStudy> listSetStudy = new List<SetStudy>();
                const int numberSetInPage = 3;
                String query = "WITH Count_Term AS (SELECT COUNT(quiz_id) AS term, set_study_id FROM Set_Study_Quiz GROUP BY set_study_id) SELECT id, username, title, ISNULL(term, 0) as term, createdDate FROM (SELECT ROW_NUMBER() OVER(ORDER BY createdDate DESC) AS Number, [User].username, Set_Study.id, Set_Study.title, Count_Term.term, Set_Study.createdDate FROM Set_Study INNER JOIN [User] ON Set_Study.user_id = [User].id FULL OUTER JOIN Count_Term ON Set_Study.id = Count_Term.set_study_id WHERE username= @param1 ) AS DataTable WHERE Number BETWEEN @param2 AND @param3";
                Int64 from = pageCurrent * numberSetInPage - (numberSetInPage - 1);
                Int64 to = pageCurrent + numberSetInPage - 1;
                DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { username, from, to });
                foreach (DataRow item in data.Rows)
                {
                    SetStudy setStudy = new SetStudy(item);
                    listSetStudy.Add(setStudy);
                }
                return listSetStudy;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<SetStudy> getListSetStudy(Int64 pageCurrent)
        {
            try
            {
                List<SetStudy> listSetStudy = new List<SetStudy>();
                const int numberSetInPage = 3;
                String query = "WITH Count_Term AS (SELECT COUNT(quiz_id) AS term, set_study_id FROM Set_Study_Quiz GROUP BY set_study_id) SELECT id, username, title, ISNULL(term, 0) as term, createdDate FROM (SELECT ROW_NUMBER() OVER(ORDER BY createdDate DESC) AS Number, [User].username, Set_Study.id, Set_Study.title, Count_Term.term, Set_Study.createdDate FROM Set_Study INNER JOIN [User] ON Set_Study.user_id = [User].id FULL OUTER JOIN Count_Term ON Set_Study.id = Count_Term.set_study_id) AS DataTable WHERE Number BETWEEN @param1 AND @param2";
                Int64 from = pageCurrent * numberSetInPage - (numberSetInPage - 1);
                Int64 to = pageCurrent + numberSetInPage - 1;
                DataTable data = DataProvider.Instance.ExecuteQuery(query, new object[] { from, to });
                foreach (DataRow item in data.Rows)
                {
                    SetStudy setStudy = new SetStudy(item);
                    listSetStudy.Add(setStudy);
                }
                return listSetStudy;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int getTotalPageSetStudyByUser(String username)
        {
            try
            {
                const int numberSetInPage = 3;
                String query = "SELECT COUNT(*) AS Total_Quiz FROM Set_Study INNER JOIN [User] ON Set_Study.user_id = [User].id WHERE [User].username = @param";
                int totalQuiz = DataProvider.Instance.ExecuteScalar(query, new object[] { username });
                return (totalQuiz + (totalQuiz % numberSetInPage)) / numberSetInPage;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int getTotalPageSetStudy()
        {
            try
            {
                const int numberSetInPage = 3;
                String query = "SELECT COUNT(*) AS Total_Quiz FROM Set_Study INNER JOIN [User] ON Set_Study.user_id = [User].id";
                int totalQuiz = DataProvider.Instance.ExecuteScalar(query, null);
                return (totalQuiz + (totalQuiz % numberSetInPage)) / numberSetInPage;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void deleteSetStudy(Int64 id)
        {
            // Hoàng
        }

        public void editSetStudy(Int64 id, String title, DateTime updatedDate, List<Quiz> listQuiz)
        {
            // Nhật
        }

        public void addSetStudy(String username, String title, DateTime createdDate, List<Quiz> listQuiz)
        {
            // Nhật
        }
    }
}
