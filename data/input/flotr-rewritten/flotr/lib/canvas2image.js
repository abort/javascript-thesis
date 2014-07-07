window.parent._wrap_staticMeasuredFunctions['canvas2image.js'] = 14;
window.parent._wrap_staticMeasuredCalls['canvas2image.js'] =90;
var Canvas2Image = (window.parent._wrap_setLastFunctionCall("canvas2image.js",1,19,5781,null,true,false) || window.parent._wrap_popCallStack((function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 1, 20,5778, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bHasCanvas = false;
  var oCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",3,75,107,document.createElement,false,false) || window.parent._wrap_popCallStack(document.createElement("canvas")));
  if ((window.parent._wrap_setLastFunctionCall("canvas2image.js",4,115,139,oCanvas.getContext,false,false) || window.parent._wrap_popCallStack(oCanvas.getContext("2d")))) {
    bHasCanvas = true;
  }
  if (!bHasCanvas) {
    return {saveAsBMP: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 8, 214,228, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, saveAsPNG: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 9, 241,255, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, saveAsJPEG: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 10, 269,283, (typeof arguments === 'object' ? arguments.callee.caller : null));

}};
  }
  var bHasImageData = !!((window.parent._wrap_setLastFunctionCall("canvas2image.js",13,315,339,oCanvas.getContext,false,false) || window.parent._wrap_popCallStack(oCanvas.getContext("2d"))).getImageData);
  var bHasDataURL = !!(oCanvas.toDataURL);
  var bHasBase64 = !!(window.btoa);
  var strDownloadMime = "image/octet-stream";
  var readCanvasData = function(oCanvas) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 17, 503,677, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var iWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",18,538,561,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(oCanvas.width)));
  var iHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",19,579,603,parseInt,false,false) || window.parent._wrap_popCallStack(parseInt(oCanvas.height)));
  return (window.parent._wrap_setLastFunctionCall("canvas2image.js",20,614,674,null,false,false) || window.parent._wrap_popCallStack((window.parent._wrap_setLastFunctionCall("canvas2image.js",20,614,638,oCanvas.getContext,false,false) || window.parent._wrap_popCallStack(oCanvas.getContext("2d"))).getImageData(0, 0, iWidth, iHeight)));
};
  var encodeData = function(data) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 22, 698,949, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var strData = "";
  if (typeof data == "string") {
    strData = data;
  } else {
    var aData = data;
    for (var i = 0; i < aData.length; i++) {
      strData += (window.parent._wrap_setLastFunctionCall("canvas2image.js",29,883,912,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(aData[i])));
    }
  }
  return (window.parent._wrap_setLastFunctionCall("canvas2image.js",32,933,946,btoa,false,false) || window.parent._wrap_popCallStack(btoa(strData)));
};
  var createBMP = function(oData) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 34, 969,3656, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var aHeader = [];
  var iWidth = oData.width;
  var iHeight = oData.height;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",38,1067,1085,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0x42)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",39,1089,1107,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0x4D)));
  var iFileSize = iWidth * iHeight * 3 + 54;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",41,1156,1185,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(iFileSize % 256)));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",42,1201,1228,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iFileSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",43,1232,1261,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(iFileSize % 256)));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",44,1277,1304,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iFileSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",45,1308,1337,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(iFileSize % 256)));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",46,1353,1380,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iFileSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",47,1384,1413,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(iFileSize % 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",48,1417,1432,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",49,1436,1451,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",50,1455,1470,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",51,1474,1489,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",52,1493,1509,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(54)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",53,1513,1528,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",54,1532,1547,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",55,1551,1566,aHeader.push,false,false) || window.parent._wrap_popCallStack(  aHeader.push(0)));
  var aInfoHeader = [];
(window.parent._wrap_setLastFunctionCall("canvas2image.js",57,1594,1614,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(40)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",58,1618,1637,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",59,1641,1660,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",60,1664,1683,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
  var iImageWidth = iWidth;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",62,1715,1750,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageWidth % 256)));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",63,1768,1797,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageWidth / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",64,1801,1836,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageWidth % 256)));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",65,1854,1883,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageWidth / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",66,1887,1922,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageWidth % 256)));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",67,1940,1969,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageWidth / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",68,1973,2008,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageWidth % 256)));
  var iImageHeight = iHeight;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",70,2042,2078,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageHeight % 256)));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",71,2097,2127,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageHeight / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",72,2131,2167,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageHeight % 256)));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",73,2186,2216,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageHeight / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",74,2220,2256,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageHeight % 256)));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",75,2275,2305,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iImageHeight / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",76,2309,2345,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iImageHeight % 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",77,2349,2368,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(1)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",78,2372,2391,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",79,2395,2415,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(24)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",80,2419,2438,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",81,2442,2461,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",82,2465,2484,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",83,2488,2507,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",84,2511,2530,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(0)));
  var iDataSize = iWidth * iHeight * 3;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",86,2574,2607,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iDataSize % 256)));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",87,2623,2650,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iDataSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",88,2654,2687,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iDataSize % 256)));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",89,2703,2730,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iDataSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",90,2734,2767,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iDataSize % 256)));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",91,2783,2810,Math.floor,false,false) || window.parent._wrap_popCallStack(Math.floor(iDataSize / 256)));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",92,2814,2847,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(  aInfoHeader.push(iDataSize % 256)));
  for (var i = 0; i < 16; i++) {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",94,2886,2905,aInfoHeader.push,false,false) || window.parent._wrap_popCallStack(    aInfoHeader.push(0)));
  }
  var iPadding = (4 - ((iWidth * 3) % 4)) % 4;
  var aImgData = oData.data;
  var strPixelData = "";
  var y = iHeight;
  do {
    var iOffsetY = iWidth * (y - 1) * 4;
    var strPixelRow = "";
    for (var x = 0; x < iWidth; x++) {
      var iOffsetX = 4 * x;
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",105,3193,3247,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(aImgData[iOffsetY + iOffsetX + 2])));
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",106,3270,3324,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(aImgData[iOffsetY + iOffsetX + 1])));
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",107,3347,3397,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(aImgData[iOffsetY + iOffsetX])));
    }
    for (var c = 0; c < iPadding; c++) {
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",110,3467,3489,String.fromCharCode,false,false) || window.parent._wrap_popCallStack(String.fromCharCode(0)));
    }
    strPixelData += strPixelRow;
  } while (--y);
  var strEncoded = (window.parent._wrap_setLastFunctionCall("canvas2image.js",114,3566,3605,encodeData,false,false) || window.parent._wrap_popCallStack(encodeData((window.parent._wrap_setLastFunctionCall("canvas2image.js",114,3577,3604,aHeader.concat,false,false) || window.parent._wrap_popCallStack(aHeader.concat(aInfoHeader)))))) + (window.parent._wrap_setLastFunctionCall("canvas2image.js",114,3608,3632,encodeData,false,false) || window.parent._wrap_popCallStack(encodeData(strPixelData)));
  return strEncoded;
};
  var saveFile = function(strData) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 117, 3675,3732, (typeof arguments === 'object' ? arguments.callee.caller : null));

  document.location.href = strData;
};
  var makeDataURI = function(strData, strMime) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 120, 3754,3835, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return "data:" + strMime + ";base64," + strData;
};
  var makeImageObject = function(strSource) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 123, 3861,3988, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var oImgElement = (window.parent._wrap_setLastFunctionCall("canvas2image.js",124,3903,3932,document.createElement,false,false) || window.parent._wrap_popCallStack(document.createElement("img")));
  oImgElement.src = strSource;
  return oImgElement;
};
  var scaleCanvas = function(oCanvas, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 128, 4010,4477, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (iWidth && iHeight) {
    var oSaveCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",130,4096,4128,document.createElement,false,false) || window.parent._wrap_popCallStack(document.createElement("canvas")));
    oSaveCanvas.width = iWidth;
    oSaveCanvas.height = iHeight;
    oSaveCanvas.style.width = iWidth + "px";
    oSaveCanvas.style.height = iHeight + "px";
    var oSaveCtx = (window.parent._wrap_setLastFunctionCall("canvas2image.js",135,4307,4335,oSaveCanvas.getContext,false,false) || window.parent._wrap_popCallStack(oSaveCanvas.getContext("2d")));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",136,4341,4428,oSaveCtx.drawImage,false,false) || window.parent._wrap_popCallStack(    oSaveCtx.drawImage(oCanvas, 0, 0, oCanvas.width, oCanvas.height, 0, 0, iWidth, iHeight)));
    return oSaveCanvas;
  }
  return oCanvas;
};
  var retval = {saveAsPNG: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 141, 4506,4863, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!bHasDataURL) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",145,4621,4658,scaleCanvas,false,false) || window.parent._wrap_popCallStack(scaleCanvas(oCanvas, iWidth, iHeight)));
  var strData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",146,4676,4712,oScaledCanvas.toDataURL,false,false) || window.parent._wrap_popCallStack(oScaledCanvas.toDataURL("image/png")));
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",148,4745,4769,makeImageObject,false,false) || window.parent._wrap_popCallStack(makeImageObject(strData)));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",150,4786,4841,saveFile,false,false) || window.parent._wrap_popCallStack(    saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",150,4795,4840,strData.replace,false,false) || window.parent._wrap_popCallStack(strData.replace("image/png", strDownloadMime))))));
  }
  return true;
}, saveAsJPEG: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 153, 4877,5317, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!bHasDataURL) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",157,4992,5029,scaleCanvas,false,false) || window.parent._wrap_popCallStack(scaleCanvas(oCanvas, iWidth, iHeight)));
  var strMime = "image/jpeg";
  var strData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",159,5077,5109,oScaledCanvas.toDataURL,false,false) || window.parent._wrap_popCallStack(oScaledCanvas.toDataURL(strMime)));
  if ((window.parent._wrap_setLastFunctionCall("canvas2image.js",160,5117,5141,strData.indexOf,false,false) || window.parent._wrap_popCallStack(strData.indexOf(strMime))) != 5) {
    return false;
  }
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",164,5203,5227,makeImageObject,false,false) || window.parent._wrap_popCallStack(makeImageObject(strData)));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",166,5244,5295,saveFile,false,false) || window.parent._wrap_popCallStack(    saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",166,5253,5294,strData.replace,false,false) || window.parent._wrap_popCallStack(strData.replace(strMime, strDownloadMime))))));
  }
  return true;
}, saveAsBMP: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 169, 5330,5757, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(bHasImageData && bHasBase64)) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",173,5463,5500,scaleCanvas,false,false) || window.parent._wrap_popCallStack(scaleCanvas(oCanvas, iWidth, iHeight)));
  var oData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",174,5516,5545,readCanvasData,false,false) || window.parent._wrap_popCallStack(readCanvasData(oScaledCanvas)));
  var strImgData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",175,5566,5582,createBMP,false,false) || window.parent._wrap_popCallStack(createBMP(oData)));
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",177,5615,5668,makeImageObject,false,false) || window.parent._wrap_popCallStack(makeImageObject((window.parent._wrap_setLastFunctionCall("canvas2image.js",177,5631,5667,makeDataURI,false,false) || window.parent._wrap_popCallStack(makeDataURI(strImgData, "image/bmp"))))));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",179,5685,5735,saveFile,false,false) || window.parent._wrap_popCallStack(    saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",179,5694,5734,makeDataURI,false,false) || window.parent._wrap_popCallStack(makeDataURI(strImgData, strDownloadMime))))));
  }
  return true;
}};
  return retval;
})()));
