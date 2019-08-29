function GetTime() {
    var now = new Date();
    document.getElementById("time").innerHTML = 
        now.toLocaleTimeString();
    
    var day= now.getDay();
    if(day == 1)
        document.getElementById("dae").innerHTML = "monday" ;
    else if(day == 2)
        document.getElementById("dae").innerHTML = "tuesday";
    else if(day == 3)
        document.getElementById("dae").innerHTML = "wednesday";
    else if(day == 4)
        document.getElementById("dae").innerHTML = "thursday";
    else if(day == 5)
        document.getElementById("dae").innerHTML = "friday";
    else if(day == 6)
        document.getElementById("dae").innerHTML = "saturday";
    else if(day == 7)
        document.getElementById("dae").innerHTML = "sunday";
     
}
function GetSelectedText(){
    var e = document.getElementById("cities");
    var result = e.options[e.selectedIndex].text;
    document.getElementById("result").innerHTML = result;
    let arr= [26, 36, 44, 55];
    let array= [78.8, 96.8, 111.2, 131];

    if(result == "Hyderabad, Telangana")
        document.getElementById("weather").innerHTML = arr[0] + "&#8451;" + "/" + array[0] + "&#8457;";
    if(result == "Tirupathi, A.P")
        document.getElementById("weather").innerHTML = arr[1] + "&#8451;" + "/" + array[1]  + "&#8457;";
    if(result == "Bangalore, Karnataka")
        document.getElementById("weather").innerHTML = arr[2] + "&#8451;" +"/" + array[2]  + "&#8457;";
    if(result == "chennai, TamilNadu")
        document.getElementById("weather").innerHTML = arr[3] + "&#8451;" + "/"+ array[3]  + "&#8457;";
}