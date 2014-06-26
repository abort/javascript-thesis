window.parent._wrap_staticMeasuredFunctions['canvas2image.js'] = 14;
window.parent._wrap_staticMeasuredCalls['canvas2image.js'] =90;
var Canvas2Image = (window.parent._wrap_setLastFunctionCall("canvas2image.js",1,20,7002) || (function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 1, 20,6999, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var bHasCanvas = false;
  var oCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",4,80,112) || document.createElement("canvas"));
  if ((window.parent._wrap_setLastFunctionCall("canvas2image.js",5,122,146) || oCanvas.getContext("2d"))) {
    bHasCanvas = true;
  }
  if (!bHasCanvas) {
    return {saveAsBMP: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 11, 248,260, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, saveAsPNG: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 12, 286,298, (typeof arguments === 'object' ? arguments.callee.caller : null));

}, saveAsJPEG: function() {
window.parent._wrap_addFunctionToMap('canvas2image.js', 13, 325,337, (typeof arguments === 'object' ? arguments.callee.caller : null));

}};
  }
  var bHasImageData = !!((window.parent._wrap_setLastFunctionCall("canvas2image.js",17,382,406) || oCanvas.getContext("2d")).getImageData);
  var bHasDataURL = !!(oCanvas.toDataURL);
  var bHasBase64 = !!(window.btoa);
  var strDownloadMime = "image/octet-stream";
  var readCanvasData = function(oCanvas) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 23, 580,773, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var iWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",24,621,644) || parseInt(oCanvas.width));
  var iHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",25,668,692) || parseInt(oCanvas.height));
  return (window.parent._wrap_setLastFunctionCall("canvas2image.js",26,709,766) || (window.parent._wrap_setLastFunctionCall("canvas2image.js",26,709,733) || oCanvas.getContext("2d")).getImageData(0, 0, iWidth, iHeight));
};
  var encodeData = function(data) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 29, 796,1117, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var strData = "";
  if (typeof data == "string") {
    strData = data;
  } else {
    var aData = data;
    for (var i = 0; i < aData.length; i++) {
      strData += (window.parent._wrap_setLastFunctionCall("canvas2image.js",36,1027,1056) || String.fromCharCode(aData[i]));
    }
  }
  return (window.parent._wrap_setLastFunctionCall("canvas2image.js",39,1097,1110) || btoa(strData));
};
  var createBMP = function(oData) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 42, 1139,4271, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var aHeader = [];
  var iWidth = oData.width;
  var iHeight = oData.height;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",48,1267,1285) ||   aHeader.push(0x42));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",49,1295,1313) ||   aHeader.push(0x4D));
  var iFileSize = iWidth * iHeight * 3 + 54;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",52,1377,1406) ||   aHeader.push(iFileSize % 256));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",52,1420,1447) || Math.floor(iFileSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",53,1457,1486) ||   aHeader.push(iFileSize % 256));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",53,1500,1527) || Math.floor(iFileSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",54,1537,1566) ||   aHeader.push(iFileSize % 256));
  iFileSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",54,1580,1607) || Math.floor(iFileSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",55,1617,1646) ||   aHeader.push(iFileSize % 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",57,1657,1672) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",58,1682,1697) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",59,1707,1722) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",60,1732,1747) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",62,1758,1774) ||   aHeader.push(54));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",63,1784,1799) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",64,1809,1824) ||   aHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",65,1834,1849) ||   aHeader.push(0));
  var aInfoHeader = [];
(window.parent._wrap_setLastFunctionCall("canvas2image.js",68,1890,1910) ||   aInfoHeader.push(40));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",69,1920,1939) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",70,1949,1968) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",71,1978,1997) ||   aInfoHeader.push(0));
  var iImageWidth = iWidth;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",74,2042,2077) ||   aInfoHeader.push(iImageWidth % 256));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",74,2093,2122) || Math.floor(iImageWidth / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",75,2132,2167) ||   aInfoHeader.push(iImageWidth % 256));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",75,2183,2212) || Math.floor(iImageWidth / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",76,2222,2257) ||   aInfoHeader.push(iImageWidth % 256));
  iImageWidth = (window.parent._wrap_setLastFunctionCall("canvas2image.js",76,2273,2302) || Math.floor(iImageWidth / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",77,2312,2347) ||   aInfoHeader.push(iImageWidth % 256));
  var iImageHeight = iHeight;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",80,2398,2434) ||   aInfoHeader.push(iImageHeight % 256));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",80,2451,2481) || Math.floor(iImageHeight / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",81,2491,2527) ||   aInfoHeader.push(iImageHeight % 256));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",81,2544,2574) || Math.floor(iImageHeight / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",82,2584,2620) ||   aInfoHeader.push(iImageHeight % 256));
  iImageHeight = (window.parent._wrap_setLastFunctionCall("canvas2image.js",82,2637,2667) || Math.floor(iImageHeight / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",83,2677,2713) ||   aInfoHeader.push(iImageHeight % 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",85,2728,2747) ||   aInfoHeader.push(1));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",86,2757,2776) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",88,2791,2811) ||   aInfoHeader.push(24));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",89,2821,2840) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",91,2855,2874) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",92,2884,2903) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",93,2913,2932) ||   aInfoHeader.push(0));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",94,2942,2961) ||   aInfoHeader.push(0));
  var iDataSize = iWidth * iHeight * 3;
(window.parent._wrap_setLastFunctionCall("canvas2image.js",97,3019,3052) ||   aInfoHeader.push(iDataSize % 256));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",97,3066,3093) || Math.floor(iDataSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",98,3103,3136) ||   aInfoHeader.push(iDataSize % 256));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",98,3150,3177) || Math.floor(iDataSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",99,3187,3220) ||   aInfoHeader.push(iDataSize % 256));
  iDataSize = (window.parent._wrap_setLastFunctionCall("canvas2image.js",99,3234,3261) || Math.floor(iDataSize / 256));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",100,3271,3304) ||   aInfoHeader.push(iDataSize % 256));
  for (var i = 0; i < 16; i++) {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",103,3357,3376) ||     aInfoHeader.push(0));
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
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",118,3738,3788) || String.fromCharCode(aImgData[iOffsetY + iOffsetX + 2]));
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",119,3821,3871) || String.fromCharCode(aImgData[iOffsetY + iOffsetX + 1]));
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",120,3904,3952) || String.fromCharCode(aImgData[iOffsetY + iOffsetX]));
    }
    for (var c = 0; c < iPadding; c++) {
      strPixelRow += (window.parent._wrap_setLastFunctionCall("canvas2image.js",123,4042,4064) || String.fromCharCode(0));
    }
    strPixelData += strPixelRow;
  } while (--y);
  var strEncoded = (window.parent._wrap_setLastFunctionCall("canvas2image.js",128,4170,4209) || encodeData((window.parent._wrap_setLastFunctionCall("canvas2image.js",128,4181,4208) || aHeader.concat(aInfoHeader)))) + (window.parent._wrap_setLastFunctionCall("canvas2image.js",128,4212,4236) || encodeData(strPixelData));
  return strEncoded;
};
  var saveFile = function(strData) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 134, 4293,4360, (typeof arguments === 'object' ? arguments.callee.caller : null));

  document.location.href = strData;
};
  var makeDataURI = function(strData, strMime) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 138, 4384,4475, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return "data:" + strMime + ";base64," + strData;
};
  var makeImageObject = function(strSource) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 142, 4503,4652, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var oImgElement = (window.parent._wrap_setLastFunctionCall("canvas2image.js",143,4551,4580) || document.createElement("img"));
  oImgElement.src = strSource;
  return oImgElement;
};
  var scaleCanvas = function(oCanvas, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 148, 4676,5227, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (iWidth && iHeight) {
    var oSaveCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",150,4776,4808) || document.createElement("canvas"));
    oSaveCanvas.width = iWidth;
    oSaveCanvas.height = iHeight;
    oSaveCanvas.style.width = iWidth + "px";
    oSaveCanvas.style.height = iHeight + "px";
    var oSaveCtx = (window.parent._wrap_setLastFunctionCall("canvas2image.js",156,5024,5052) || oSaveCanvas.getContext("2d"));
(window.parent._wrap_setLastFunctionCall("canvas2image.js",158,5067,5154) ||     oSaveCtx.drawImage(oCanvas, 0, 0, oCanvas.width, oCanvas.height, 0, 0, iWidth, iHeight));
    return oSaveCanvas;
  }
  return oCanvas;
};
  var retval = {saveAsPNG: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 166, 5268,5749, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!bHasDataURL) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",170,5425,5462) || scaleCanvas(oCanvas, iWidth, iHeight));
  var strData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",171,5490,5526) || oScaledCanvas.toDataURL("image/png"));
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",173,5581,5605) || makeImageObject(strData));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",175,5644,5699) ||     saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",175,5653,5698) || strData.replace("image/png", strDownloadMime))));
  }
  return true;
}, saveAsJPEG: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 180, 5772,6385, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!bHasDataURL) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",185,5930,5967) || scaleCanvas(oCanvas, iWidth, iHeight));
  var strMime = "image/jpeg";
  var strData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",187,6035,6067) || oScaledCanvas.toDataURL(strMime));
  if ((window.parent._wrap_setLastFunctionCall("canvas2image.js",189,6090,6114) || strData.indexOf(strMime)) != 5) {
    return false;
  }
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",194,6221,6245) || makeImageObject(strData));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",196,6284,6335) ||     saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",196,6293,6334) || strData.replace(strMime, strDownloadMime))));
  }
  return true;
}, saveAsBMP: function(oCanvas, bReturnImg, iWidth, iHeight) {
window.parent._wrap_addFunctionToMap('canvas2image.js', 201, 6407,6970, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!(bHasImageData && bHasBase64)) {
    return false;
  }
  var oScaledCanvas = (window.parent._wrap_setLastFunctionCall("canvas2image.js",206,6583,6620) || scaleCanvas(oCanvas, iWidth, iHeight));
  var oData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",208,6647,6676) || readCanvasData(oScaledCanvas));
  var strImgData = (window.parent._wrap_setLastFunctionCall("canvas2image.js",209,6707,6723) || createBMP(oData));
  if (bReturnImg) {
    return (window.parent._wrap_setLastFunctionCall("canvas2image.js",211,6778,6831) || makeImageObject((window.parent._wrap_setLastFunctionCall("canvas2image.js",211,6794,6830) || makeDataURI(strImgData, "image/bmp"))));
  } else {
(window.parent._wrap_setLastFunctionCall("canvas2image.js",213,6870,6920) ||     saveFile((window.parent._wrap_setLastFunctionCall("canvas2image.js",213,6879,6919) || makeDataURI(strImgData, strDownloadMime))));
  }
  return true;
}};
  return retval;
})());
