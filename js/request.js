function getRequest(url,param, sucCallback, failCallback)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if (sucCallback) {
                sucCallback(xmlhttp.responseText)
            }
        } else {
            if (failCallback) {
                failCallback(xmlhttp.responseText)
            }
        }
    };
    xmlhttp.open("GET",url+"?" +param,true);
    xmlhttp.send();
}

function postRequest(url,param, sucCallback, failCallback)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if (sucCallback) {
                sucCallback(xmlhttp.responseText)
            }
        } else {
            if (failCallback) {
                failCallback(xmlhttp.responseText)
            }
        }
    };
    xmlhttp.open("POST",url,true);
    xmlhttp.send(param);
}
