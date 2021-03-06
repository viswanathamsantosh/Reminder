/* global MozActivity, alert, console, Notification */
"use strict";
(function () {
    // Notifications
    var addNotification = document.querySelector("#add-notification");
    if (addNotification) {
        addNotification.onclick = function () {
            if ("Notification" in window) {
                // Firefox OS 1.1 and higher
                if (Notification.permission !== "denied") {
                    Notification.requestPermission(function (permission) {
                        if(!("permission" in Notification)) {
                            Notification.permission = permission;
                        }
                    });
                }

                if (Notification.permission === "granted") {
                    new Notification("See this", {
                        body : "This is a notification"
                    });
                }
            }
            else {
                // Firefox OS 1.0
                var notify = navigator.mozNotification.createNotification(
                    "See this",
                    "This is a notification"
                );
                notify.show();
            }
        };
    }

    var time=document.querySelector("#gettime");
    if(time){
        time.onclick=function(){
            var currentdate = new Date();
var hour =  currentdate.getHours();
(hour<10)?(hour="0"+hour):hour; 
var minu =  currentdate.getMinutes();
(minu<10)?(minu="0"+minu):minu; 
var sec =  currentdate.getSeconds();
(sec<10)?(sec="0"+sec):sec; 
var datetime=hour+":"+minu+":"+sec;
document.getElementById("bv").innerHTML=datetime;
        };
    }



  
})();
