Browser("Logon").Page("Logon").Sync
Browser("Logon").Navigate "https://sap-hana-vpn.mfdemoportal.com:44300/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html" @@ hightlight id_;_919094_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Logon").Page("Logon").WebEdit("sap-user").Set "S4H_TM_DEM" @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Logon").Page("Logon").WebEdit("sap-password").SetSecure "61b3267610d47ef984fa45fc990c1b7cf87fa2f9daad" @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Logon").Page("Logon").WebButton("Log On").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Logon").Page("Create Delivery").WebList("Group Navigation").Select "Outbound Delivery Creation" @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Logon").Page("Create Delivery").SAPUITile("SAPUITile").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Logon").Page("Create Delivery").SAPUIButton("Expand Header").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Logon").Page("Create Delivery").SAPUITextEdit("Sales Document").Set DataTable("OrderNr", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Logon").Page("Create Delivery").SAPUIButton("GoGo").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(5)
Browser("Logon").Page("Create Delivery").SAPUITable("Sales Orders Due for Delivery").SelectRow 1
Browser("Logon").Page("Create Delivery").SAPUIButton("Create Deliveries (1)").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Logon").Page("Create Delivery").SAPUIButton("Display Log").WaitProperty "disabled", false, 10000 @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Logon").Page("Create Delivery").SAPUIButton("Display Log").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Logon").Page("Create Delivery").WebElement("__status3-__clone3-text").Check CheckPoint("__status3-__clone3-text") @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Logon").Page("Sign Out").SAPUIButton("Taylor Transportation").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Logon").Page("Sign Out").SAPUIList("Taylor Transportation").Select "Sign Out" @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Logon").Page("Sign Out").SAPUIButton("OK").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf17.xml_;_
