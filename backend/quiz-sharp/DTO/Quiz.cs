using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiz_sharp.DTO {
  public class Quiz {
    public int id { get; set; }
    public String term { get; set; }
    public String definition { get; set; }

    public Quiz(int id, string term, string definition) {
      this.id = id;
      this.term = term;
      this.definition = definition;
    }

    public override string ToString() {
      return "(" + id + ", '" + term + "', '" + definition + "')";
    }

    public Quiz(DataRow dr) {
      id = Int32.Parse(dr["id"].ToString());
      term = dr["term"].ToString();
      definition = dr["definition"].ToString();
    }
  }
}
