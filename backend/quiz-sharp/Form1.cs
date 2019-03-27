using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;
using quiz_sharp.Bridges;

namespace quiz_sharp
{
    public partial class Form : System.Windows.Forms.Form
    {
        ////public ChromiumWebBrowser chromeBroser;
        //[System.Runtime.InteropServices.DllImport("kernel32.dll")]
        //private static extern bool AllocConsole();
        public Form()
        {
            //AllocConsole();
            InitializeComponent();

            Text = "Quiz Sharp Application";

            var availableBridges = new Bridge();

            string url = "file:///index.html";
            bool showDeveloperConsole = false;

#if DEBUG
            url = "http://localhost:3000";

            if (MessageBox.Show("Do you want to open the developer console?", this.Text, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                showDeveloperConsole = true;
            };
#endif

            this.Controls.Add(new ReactHost(url, showDeveloperConsole, availableBridges.GetBridges())
            {
                Dock = DockStyle.Fill,
                AutoScroll = false
            });
        }
    }
}
