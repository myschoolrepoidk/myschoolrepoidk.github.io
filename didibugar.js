var phonk = 0
var rot = 0
setInterval(() => {document.title = phonk+" seconds"; phonk++;},1000)
setInterval(() => {
document.getElementById("lookdoctortext").style.transform = "rotate("+rot+"deg)";
document.getElementById("lookdoctortext").style.transform = "scale("+(Math.sin(rot)*100)+"px)"
rot++;
}, 1);