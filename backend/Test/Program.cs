using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;


namespace Test {
  class Program {
    static void Main(string[] args) {
      List<Quiz> lisquiz = new List<Quiz>();
      lisquiz.Add(new Quiz(1, "X", "Yzzxc"));
      lisquiz.Add(new Quiz(2, "Xyz", "Y123"));
      lisquiz.Add(new Quiz(3, "Xxzc", "Yasda2"));
      lisquiz.Add(new Quiz(4, "Xdasd", "Y213s"));
      lisquiz.Add(new Quiz(5, "Xasd", "Yfdas222"));
      lisquiz.Add(new Quiz(6, "X2323", "Yasd5235"));
      String result = string.Join(", ", lisquiz.Select(x => x.ToString()).ToArray());
      Console.WriteLine(result);
      Console.ReadKey();
    }
  }
}
