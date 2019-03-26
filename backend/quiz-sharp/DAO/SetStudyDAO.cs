using quiz_sharp.DTO;
using System;
using System.Collections.Generic;
using System.Data;

namespace quiz_sharp.DAO
{
    public class SetStudyDAO
    {

        private const int numberSetInPage = 5;

        public List<SetStudy> getListSetStudyByUser(String username, Int64 pageCurrent)
        {
            try
            {
                List<SetStudy> listSetStudy = new List<SetStudy>();
                String query = "WITH Count_Term AS (SELECT COUNT(quiz_id) AS term, set_study_id FROM Set_Study_Quiz GROUP BY set_study_id) " +
                  "SELECT id, username, avatar_url, title, ISNULL(term, 0) as term, createdDate FROM (SELECT ROW_NUMBER() OVER(ORDER BY createdDate DESC) " +
                  "AS Number, [User].username, [User].avatar_url, Set_Study.id, Set_Study.title, Count_Term.term, Set_Study.createdDate FROM Set_Study INNER JOIN [User] " +
                  "ON Set_Study.user_id = [User].id FULL OUTER JOIN Count_Term ON Set_Study.id = Count_Term.set_study_id WHERE username= @userName ) " +
                  "AS DataTable WHERE Number BETWEEN @from AND @to";
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
                String query = "WITH Count_Term AS (SELECT COUNT(quiz_id) AS term, set_study_id FROM Set_Study_Quiz GROUP BY set_study_id) " +
                  "SELECT id, username, avatar_url, title, ISNULL(term, 0) as term, createdDate FROM (SELECT ROW_NUMBER() OVER(ORDER BY createdDate DESC) " +
                  "AS Number, [User].username, [User].avatar_url, Set_Study.id, Set_Study.title, Count_Term.term, Set_Study.createdDate FROM Set_Study INNER JOIN [User] " +
                  "ON Set_Study.user_id = [User].id FULL OUTER JOIN Count_Term ON Set_Study.id = Count_Term.set_study_id) " +
                  "AS DataTable WHERE Number BETWEEN @from AND @to";
                Int64 from = pageCurrent * numberSetInPage - (numberSetInPage - 1);
                Int64 to = from + numberSetInPage - 1;
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
                String query = "SELECT COUNT(*) AS Total_Quiz FROM Set_Study INNER JOIN [User] ON Set_Study.user_id = [User].id";
                int totalQuiz = DataProvider.Instance.ExecuteScalar(query, null);
                return (totalQuiz + (totalQuiz % numberSetInPage)) / numberSetInPage;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void deleteSetStudy(Int64 studySetID)
        {
            try
            {
                String query = "DELETE FROM dbo.Set_Study WHERE id = @id ";
                DataProvider.Instance.ExecuteNonQuery(query, new object[] { studySetID });
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void updateSetStudy(Int64 studySetID, String title)
        {
            try
            {
                String query = @"UPDATE dbo.Set_Study SET title = @title, createdDate = GETDATE() WHERE id = @id";
                DataProvider.Instance.ExecuteNonQuery(query, new object[] { title, studySetID });
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void addSetStudy(Int64 userID, String title)
        {
            try
            {
                String query = "INSERT INTO dbo.Set_Study VALUES( @userId, @title, GETDATE())";
                DataProvider.Instance.ExecuteNonQuery(query, new object[] { userID, title });
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
