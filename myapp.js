function updateclock(){
    var now = new Date();
    var dname = now.detDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        var months = ["Junuary", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Monday", "Thusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [dname, mo, dnum, yr, hou, min, sec, pe];
        for(var i=0; i < 0 ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateclock();
    window.setInterval("updateClock()", 1);
}