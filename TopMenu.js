/****************************************************************************
   TopMenu.js - Top level navigation code for website
   ver 1.0
   This javascript file is a single source of navigation code on all
   top-level pages for www.lcs3.syr.edu/faculty/fawctt

   Jim Fawcett, Syracuse University, 08 Aug 2013
 ****************************************************************************/

$(document).ready(function () {
  $("#nav1").html(
<ul>

<li><a href="C:\Sem 2\IP\Lab1\Home.html">Home</a></li>
	<li>
		<a href="C:\Sem 2\IP\Lab1\SiteMap.html">SiteMap</a>
		<ul>
				<li><a href="C:\Sem 2\IP\Lab1\SiteMap.html">Lab #1</a></li>
				<li><a href="C:\Sem 2\IP\Lab1\Resources.html">Lab #2</a></li>
		</ul>
	</li>	
	<li>
		<a href="#">Resources</a>
		<ul>
			 <li><a href="http://www.jmarshall.com/easy/http">HTTP</a></li>
			 <li><a href="http://www.htmldog.com/guides/htmlbeginner/">HTML</a></li>
			 <li><a href="http://www.htmfiles.com/xml/xml_syntax.asp">XML</a></li>
		</ul>
	</li>

</ul>
  );
});