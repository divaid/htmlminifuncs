function getRequest(url,param, sucCallback, failCallback)
{
    let xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange=function()
    {
        if (xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            if (sucCallback) {
                sucCallback(xmlHttp.responseText)
            }
        } else {
            if (failCallback) {
                failCallback(xmlHttp.responseText)
            }
        }
    };
    xmlHttp.open("GET",url+"?" +param,true);
    xmlHttp.send();
}

function postRequest(url,param, sucCallback, failCallback)
{
    let xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange=function()
    {
        if (xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            if (sucCallback) {
                sucCallback(xmlHttp.responseText)
            }
        } else {
            if (failCallback) {
                failCallback(xmlHttp.responseText)
            }
        }
    };
    xmlHttp.open("POST",url,true);
    xmlHttp.send(param);
}
