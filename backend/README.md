# Guide

## 1 - Add file **App.config**

You must add this file into quiz-sharp to run and connect with DB.
_Attention_: You must change your name's SQLServer in to the **connectionStrings**

```bash
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
    <startup>
        <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.6.1" />
    </startup>
  <runtime>
    <assemblyBinding xmlns="urn.schemas-microsoft-com:asm.v1">
      <probing pricatePath="x86"/>
    </assemblyBinding>
  </runtime>
  <connectionStrings>
    <add name="QuizSharp" connectionString="Data Source=Your_NAME_SQL_SERVER;Initial Catalog=DBQuizSharp;User ID=sa;Password=123456" providerName="System.Data.SqlClient" />
  </connectionStrings>
</configuration>
```

Image example:

![Config example](https://i.imgur.com/bgZgjTC.png)

## 2 - Install references

You go to **Package Manager Control** of Visual Studio and run the following command:

```bash
Install-Package
```

It have to waste a little time, please wait !
