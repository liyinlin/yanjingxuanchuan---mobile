/********************************************code start*********************************************************/
(function(window){
	var urlParam = ["cmsp","uidtype","idfa"];
	for(var i = 0;i<urlParam.length;i++){
        if(request(urlParam[i]) && localStorage){
            localStorage.removeItem(urlParam[i]);
            localStorage.setItem(urlParam[i],request(urlParam[i]));
        }
    }
})(window);
var trackPath = "http://ama.adwo.com/tracknew/advTract/tractEventJsonP.action?";
var trackScript;
function track2(cId, eventId, url) {
    var trckCmspData={ cmsp:"",uidtype:"",idfa:""};
    trckCmspData.cmsp=!(localStorage && localStorage.getItem('cmsp'))?"":localStorage.getItem('cmsp');
    trckCmspData.uidtype=!(localStorage && localStorage.getItem('uidtype'))?"":localStorage.getItem('uidtype');
    trckCmspData.idfa=!(localStorage && localStorage.getItem('idfa'))?"":localStorage.getItem('idfa');
    trackScript = null;
    trackScript = document.createElement("script");
    var src = trackPath + "cid=" + cId + "&eventid=" + eventId+"&cmsp="+trckCmspData.cmsp+"-"+trckCmspData.idfa+"____"+trckCmspData.uidtype;
    trackScript.type = "text/javascript";
    trackScript.src = src;
    document.getElementsByTagName("head")[0].appendChild(trackScript);
    if (url != undefined && url != null && url != "") {
        setTimeout(redirection, 500);
        function redirection() {
            window.location = url;
        }
    }
}