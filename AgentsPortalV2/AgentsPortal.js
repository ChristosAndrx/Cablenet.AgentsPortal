html = '\
<nav id="NavigationBar" class="navbar navbar-default navbar-expand-xl navbar-light bg-light">\
    <a class="navbar-brand">\
        <img class="CablenetLogo" src="Resources/CablenetLogo.png">\
    </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarNav">\
            <ul class="navbar-nav d-flex justify-content-between">\
                <li class="nav-item"><a class="nav-link" href="Index.html"> News </a></li>\
                <li class="nav-item"><a class="nav-link" href="Retail.html"> Retail </a></li>\
                <li class="nav-item"><a class="nav-link disabled" href="Business.html"> Business (Coming Soon) </a></li>\
                <li class="nav-item"><a class="nav-link" href="Templates.html"> Templates </a></li>\
                <li class="nav-item"><a class="nav-link" href="AgentTools.html"> Agent Tools </a></li>\
            </ul>\
        </div>\
</nav>\
\
<div class="alert alert-success alert-dismissible fade show" role="alert">\
	Help improve Agents Portal by submitting your findings & suggestions: <a href = "mailto: c.andreou@cablenetcy.net">c.andreou@cablenetcy.net</a>\
	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
</div>\
<div id="NavSpace"></div>\
';

document.getElementById("NavigationBarReference").innerHTML = html;

// Simple Notification for the nodes being down. The user's unable to disable these:
// <div class="alert alert-danger" role="alert">Node P8-1 DOWN</div>\                         

// Simple Notication for any other updates. The user's able to close these.
{/* 
    <div class="alert alert-success alert-dismissible fade show" role="alert">\
	    Help fix Agents Portal by sending your findings to <a href = "mailto: c.andreou@cablenetcy.net">c.andreou@cablenetcy.net</a>\
	    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
    </div>\ 
*/}