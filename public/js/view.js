$(document).ready(function () {
  var pano2 = new pano2vrPlayer("container2");
  var pano1 = new pano2vrPlayer("container1");
  //var pano3 = new pano2vrPlayer("container3");
  // load the configuration

  window.addEventListener("load", function () {
    pano2.readConfigUrlAsync("pano2.xml");
    pano1.readConfigUrlAsync("pano1.xml");
    //pano3.readConfigUrlAsync("pano3.xml");
  });
});
