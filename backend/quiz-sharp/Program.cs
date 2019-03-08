using CefSharp;
using CefSharp.WinForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace quiz_sharp
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            var settings = new CefSettings() { CachePath = "Cache" };

            Cef.EnableHighDPISupport();
            Cef.Initialize(settings);
            CefSharpSettings.LegacyJavascriptBindingEnabled = true;

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form());
        }
    }
}
