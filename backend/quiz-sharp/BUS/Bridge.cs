using quiz_sharp.BUS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.Bridges
{
    class Bridge
    {
        public IEnumerable<object> GetBridges()
        {
            return new List<object>()
            {
                new UserBridge(),
                new QuizBridge(),
                new SetStudyBridge()
            };
        }
    }
}
