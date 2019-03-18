using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Test {
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

  }
}
