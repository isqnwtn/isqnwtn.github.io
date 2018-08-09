var x,y;
var scr_amt=0;
function GET_XY()
{
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
}
function b_resize()
{
  GET_XY();
  printXY();
}
function printXY()
{
  var element1 = document.getElementById("id01");
  var element2 = document.getElementById("id02");
  element1.innerHTML = "width "+x;
  element2.innerHTML = "height "+y;
}

function SET_XY()
{
  var w = window,
  d = document,
  e = d.documentElement;
}

var state;
function scroll_amount(x)
{
  state=x;
  var elem = document.getElementById("id03");
  var elemDIV = document.getElementById("center_BLOCK") ;
  var elemDIV_2 = document.getElementById("center_BLOCK_2") ;
  elem.innerHTML = "current state: "+state;

  switch (state)
  {
    case 1:
      elemDIV.setAttribute("style","width: 600px; background-color: #f28832;");
      elemDIV_2.setAttribute("style","width: 650px; background-color: #3ddb4d; opacity:0; top:2000px");
      break;
    case 2:
        elemDIV.setAttribute("style","width: 650px; background-color: #3ddb4d; opacity:0; top:-1000px");
        elemDIV_2.setAttribute("style","width: 650px; background-color: #3ddb4d; opacity:100; top:-100px;");
        break;
    case 3:
        elemDIV.setAttribute("style","width: 700px; background-color: #f23824;");
        elemDIV_2.setAttribute("style","width: 650px; background-color: #3ddb4d; opacity:0; top:2000px");
        break;
    case 4:
        elemDIV.setAttribute("style","width: 750px; background-color: #22a9f7; width:1000px;");
        elemDIV_2.setAttribute("style","width: 650px; background-color: #3ddb4d; opacity:0; top:2000px");
        break;
    default:

  }
  //alert('Hi');
}

function TOPNAV_hover()
{

}
