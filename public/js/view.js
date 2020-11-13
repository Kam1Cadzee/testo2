$(document).ready(function () {
  console.log(window.viewIndex)
  //var pano2 = new pano2vrPlayer("container2");
  var pano1 = new pano2vrPlayer("container" + window.viewIndex);
  //var pano3 = new pano2vrPlayer("container3");
  // load the configuration

  window.addEventListener("load", function () {
    //pano2.readConfigUrlAsync("pano2.xml");
    pano1.readConfigUrlAsync(`pano${window.viewIndex}.xml`);
    //pano3.readConfigUrlAsync("pano3.xml");
  });
});
