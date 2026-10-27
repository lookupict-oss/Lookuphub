/* Shows a friendly message if the APK has not been uploaded yet, instead of a "not found" page. */
(function(){
var msg=document.getElementById("apk-msg");
document.querySelectorAll("a[data-apk]").forEach(function(a){
a.addEventListener("click",function(e){e.preventDefault();
fetch(a.href,{method:"HEAD"}).then(function(r){if(r.ok){window.location.href=a.href}else if(msg){msg.hidden=false;msg.scrollIntoView({block:"center"})}}).catch(function(){if(msg)msg.hidden=false})})})})();
