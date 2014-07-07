_wrap_staticMeasuredFunctions['transform.js'] = 19;
_wrap_staticMeasuredCalls['transform.js'] =50;
function rotate_x(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 1, 0,279, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[1] - center[1];
  var diff2 = center[2] - point[2];
  point[1] = center[1] + diff1 * sin_cos_angle[1] + diff2 * sin_cos_angle[0];
  point[2] = center[2] - diff2 * sin_cos_angle[1] + diff1 * sin_cos_angle[0];
}
function rotate_x_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 7, 280,489, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[1];
  point[1] = temp * sin_cos_angle[1] - point[2] * sin_cos_angle[0];
  point[2] = point[2] * sin_cos_angle[1] + temp * sin_cos_angle[0];
}
function rotate_y(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 12, 490,769, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[0] - center[0];
  var diff2 = point[2] - center[2];
  point[0] = center[0] + diff1 * sin_cos_angle[1] + diff2 * sin_cos_angle[0];
  point[2] = center[2] + diff2 * sin_cos_angle[1] - diff1 * sin_cos_angle[0];
}
function rotate_y_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 18, 770,979, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[0];
  point[0] = temp * sin_cos_angle[1] + point[2] * sin_cos_angle[0];
  point[2] = point[2] * sin_cos_angle[1] - temp * sin_cos_angle[0];
}
function rotate_z(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 23, 980,1259, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[0] - center[0];
  var diff2 = point[1] - center[1];
  point[0] = center[0] + diff1 * sin_cos_angle[1] - diff2 * sin_cos_angle[0];
  point[1] = center[1] + diff2 * sin_cos_angle[1] + diff1 * sin_cos_angle[0];
}
function rotate_z_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 29, 1260,1469, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[0];
  point[0] = temp * sin_cos_angle[1] - point[1] * sin_cos_angle[0];
  point[1] = point[1] * sin_cos_angle[1] + temp * sin_cos_angle[0];
}
function get_rotation_parameter(center, vector, teta) {
_wrap_addFunctionToMap('transform.js', 34, 1470,2782, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = (_wrap_setLastFunctionCall("transform.js",35,1541,1552,Array,false,false) || _wrap_popCallStack(new Array()));
  var u_u = vector[0] * vector[0];
  var v_v = vector[1] * vector[1];
  var w_w = vector[2] * vector[2];
  var v_v_p_w_w = (v_v + w_w);
  var u_u_p_w_w = (u_u + w_w);
  var u_u_p_v_v = (u_u + v_v);
  var b_v_p_c_w = center[1] * vector[1] + center[2] * vector[2];
  var a_u_p_c_w = center[0] * vector[0] + center[2] * vector[2];
  var a_u_p_b_v = center[0] * vector[0] + center[1] * vector[1];
  var b_w_m_c_v = center[1] * vector[2] - center[2] * vector[1];
  var c_u_m_a_w = center[2] * vector[0] - center[0] * vector[2];
  var a_v_m_b_u = center[0] * vector[1] - center[1] * vector[0];
  var den = v_v + u_u + w_w;
  result[0] = den;
  result[1] = v_v_p_w_w;
  result[2] = u_u_p_w_w;
  result[3] = u_u_p_v_v;
  result[4] = center[0] * v_v_p_w_w;
  result[5] = center[1] * u_u_p_w_w;
  result[6] = center[2] * u_u_p_v_v;
  result[7] = b_v_p_c_w;
  result[8] = a_u_p_c_w;
  result[9] = a_u_p_b_v;
  result[10] = (_wrap_setLastFunctionCall("transform.js",59,2466,2480,Math.cos,false,false) || _wrap_popCallStack(Math.cos(teta)));
  result[11] = (_wrap_setLastFunctionCall("transform.js",60,2497,2511,Math.sin,false,false) || _wrap_popCallStack(Math.sin(teta))) * (_wrap_setLastFunctionCall("transform.js",60,2514,2528,Math.sqrt,false,false) || _wrap_popCallStack(Math.sqrt(den)));
  result[12] = b_w_m_c_v;
  result[13] = c_u_m_a_w;
  result[14] = a_v_m_b_u;
  result[15] = center[0];
  result[16] = center[1];
  result[17] = center[2];
  result[18] = vector[0];
  result[19] = vector[1];
  result[20] = vector[2];
  return result;
}
function rotate(p, point) {
_wrap_addFunctionToMap('transform.js', 72, 2783,3594, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var p_20_p_2 = p[20] * point[2];
  var p_19_p_1 = p[19] * point[1];
  var p_18_p_0 = p[18] * point[0];
  var u_x_p_v_y_p_w_z = p_18_p_0 + p_19_p_1 + p_20_p_2;
  var temp0 = point[0];
  var temp1 = point[1];
  point[0] = (p[4] + p[18] * (-p[7] + u_x_p_v_y_p_w_z) + ((temp0 - p[15]) * p[1] + p[18] * (p[7] - p_19_p_1 - p_20_p_2)) * p[10] + p[11] * (p[12] - p[20] * temp1 + p[19] * point[2])) / p[0];
  point[1] = (p[5] + p[19] * (-p[8] + u_x_p_v_y_p_w_z) + ((temp1 - p[16]) * p[2] + p[19] * (p[8] - p_18_p_0 - p_20_p_2)) * p[10] + p[11] * (p[13] + p[20] * temp0 - p[18] * point[2])) / p[0];
  point[2] = (p[6] + p[20] * (-p[9] + u_x_p_v_y_p_w_z) + ((point[2] - p[17]) * p[3] + p[20] * (p[9] - p_18_p_0 - p_19_p_1)) * p[10] + p[11] * (p[14] - p[19] * temp0 + p[18] * temp1)) / p[0];
}
function translate(vector, point) {
_wrap_addFunctionToMap('transform.js', 83, 3595,3737, (typeof arguments === 'object' ? arguments.callee.caller : null));

  point[0] = point[0] + vector[0];
  point[1] = point[1] + vector[1];
  point[2] = point[2] + vector[2];
}
function scale(vector, point) {
_wrap_addFunctionToMap('transform.js', 88, 3738,3876, (typeof arguments === 'object' ? arguments.callee.caller : null));

  point[0] = point[0] * vector[0];
  point[1] = point[1] * vector[1];
  point[2] = point[2] * vector[2];
}
function translate_solid(vector, solid) {
_wrap_addFunctionToMap('transform.js', 93, 3877,4049, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",94,3921,3952,translate,false,false) || _wrap_popCallStack(  translate(vector, solid.center)));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",96,4008,4042,translate,false,false) || _wrap_popCallStack(    translate(vector, solid.points[i])));
  }
}
function translate_solid_direction(vector, delta, solid) {
_wrap_addFunctionToMap('transform.js', 99, 4050,4341, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",100,4111,4193,translate,false,false) || _wrap_popCallStack(  translate([vector[0] * delta, vector[1] * delta, vector[2] * delta], solid.center)));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",102,4249,4334,translate,false,false) || _wrap_popCallStack(    translate([vector[0] * delta, vector[1] * delta, vector[2] * delta], solid.points[i])));
  }
}
function scale_solid(vector, solid) {
_wrap_addFunctionToMap('transform.js', 105, 4342,4621, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var da = solid.center;
  var a = [-solid.center[0], -solid.center[1], -solid.center[2]];
(_wrap_setLastFunctionCall("transform.js",108,4473,4498,translate_solid,false,false) || _wrap_popCallStack(  translate_solid(a, solid)));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",110,4554,4584,scale,false,false) || _wrap_popCallStack(    scale(vector, solid.points[i])));
  }
(_wrap_setLastFunctionCall("transform.js",112,4592,4618,translate_solid,false,false) || _wrap_popCallStack(  translate_solid(da, solid)));
}
function rotate_solid(point, vector, angle, solid) {
_wrap_addFunctionToMap('transform.js', 114, 4622,5133, (typeof arguments === 'object' ? arguments.callee.caller : null));

  parametri = (_wrap_setLastFunctionCall("transform.js",115,4689,4733,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter(point, vector, angle)));
  parametri2 = (_wrap_setLastFunctionCall("transform.js",116,4750,4798,get_rotation_parameter,false,false) || _wrap_popCallStack(get_rotation_parameter([0, 0, 0], vector, angle)));
(_wrap_setLastFunctionCall("transform.js",117,4802,4833,rotate,false,false) || _wrap_popCallStack(  rotate(parametri, solid.center)));
(_wrap_setLastFunctionCall("transform.js",118,4837,4869,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_x)));
(_wrap_setLastFunctionCall("transform.js",119,4873,4905,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_y)));
(_wrap_setLastFunctionCall("transform.js",120,4909,4941,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_z)));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",122,4996,5032,rotate,false,false) || _wrap_popCallStack(    rotate(parametri2, solid.normals[i])));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",125,5092,5126,rotate,false,false) || _wrap_popCallStack(    rotate(parametri, solid.points[j])));
  }
}
function rotate_solid_fast(parametri1, parametri2, solid) {
_wrap_addFunctionToMap('transform.js', 128, 5134,5529, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",129,5196,5228,rotate,false,false) || _wrap_popCallStack(  rotate(parametri1, solid.center)));
(_wrap_setLastFunctionCall("transform.js",130,5232,5264,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_x)));
(_wrap_setLastFunctionCall("transform.js",131,5268,5300,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_y)));
(_wrap_setLastFunctionCall("transform.js",132,5304,5336,rotate,false,false) || _wrap_popCallStack(  rotate(parametri2, solid.axis_z)));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",134,5391,5427,rotate,false,false) || _wrap_popCallStack(    rotate(parametri2, solid.normals[i])));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",137,5487,5522,rotate,false,false) || _wrap_popCallStack(    rotate(parametri1, solid.points[j])));
  }
}
function rotate_solid_x(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 140, 5530,6052, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",141,5602,5617,Math.sin,false,false) || _wrap_popCallStack(Math.sin(angle))), (_wrap_setLastFunctionCall("transform.js",141,5619,5634,Math.cos,false,false) || _wrap_popCallStack(Math.cos(angle)))];
(_wrap_setLastFunctionCall("transform.js",142,5639,5685,rotate_x,false,false) || _wrap_popCallStack(  rotate_x(center, sin_cosin_teta, solid.center)));
(_wrap_setLastFunctionCall("transform.js",143,5689,5734,rotate_x_normal,false,false) || _wrap_popCallStack(  rotate_x_normal(sin_cosin_teta, solid.axis_x)));
(_wrap_setLastFunctionCall("transform.js",144,5738,5783,rotate_x_normal,false,false) || _wrap_popCallStack(  rotate_x_normal(sin_cosin_teta, solid.axis_y)));
(_wrap_setLastFunctionCall("transform.js",145,5787,5832,rotate_x_normal,false,false) || _wrap_popCallStack(  rotate_x_normal(sin_cosin_teta, solid.axis_z)));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",147,5887,5936,rotate_x_normal,false,false) || _wrap_popCallStack(    rotate_x_normal(sin_cosin_teta, solid.normals[i])));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",150,5996,6045,rotate_x,false,false) || _wrap_popCallStack(    rotate_x(center, sin_cosin_teta, solid.points[j])));
  }
}
function rotate_solid_y(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 153, 6053,6575, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",154,6125,6140,Math.sin,false,false) || _wrap_popCallStack(Math.sin(angle))), (_wrap_setLastFunctionCall("transform.js",154,6142,6157,Math.cos,false,false) || _wrap_popCallStack(Math.cos(angle)))];
(_wrap_setLastFunctionCall("transform.js",155,6162,6208,rotate_y,false,false) || _wrap_popCallStack(  rotate_y(center, sin_cosin_teta, solid.center)));
(_wrap_setLastFunctionCall("transform.js",156,6212,6257,rotate_y_normal,false,false) || _wrap_popCallStack(  rotate_y_normal(sin_cosin_teta, solid.axis_x)));
(_wrap_setLastFunctionCall("transform.js",157,6261,6306,rotate_y_normal,false,false) || _wrap_popCallStack(  rotate_y_normal(sin_cosin_teta, solid.axis_y)));
(_wrap_setLastFunctionCall("transform.js",158,6310,6355,rotate_y_normal,false,false) || _wrap_popCallStack(  rotate_y_normal(sin_cosin_teta, solid.axis_z)));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",160,6410,6459,rotate_y_normal,false,false) || _wrap_popCallStack(    rotate_y_normal(sin_cosin_teta, solid.normals[i])));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",163,6519,6568,rotate_y,false,false) || _wrap_popCallStack(    rotate_y(center, sin_cosin_teta, solid.points[j])));
  }
}
function rotate_solid_z(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 166, 6576,7098, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",167,6648,6663,Math.sin,false,false) || _wrap_popCallStack(Math.sin(angle))), (_wrap_setLastFunctionCall("transform.js",167,6665,6680,Math.cos,false,false) || _wrap_popCallStack(Math.cos(angle)))];
(_wrap_setLastFunctionCall("transform.js",168,6685,6731,rotate_z,false,false) || _wrap_popCallStack(  rotate_z(center, sin_cosin_teta, solid.center)));
(_wrap_setLastFunctionCall("transform.js",169,6735,6780,rotate_z_normal,false,false) || _wrap_popCallStack(  rotate_z_normal(sin_cosin_teta, solid.axis_x)));
(_wrap_setLastFunctionCall("transform.js",170,6784,6829,rotate_z_normal,false,false) || _wrap_popCallStack(  rotate_z_normal(sin_cosin_teta, solid.axis_y)));
(_wrap_setLastFunctionCall("transform.js",171,6833,6878,rotate_z_normal,false,false) || _wrap_popCallStack(  rotate_z_normal(sin_cosin_teta, solid.axis_z)));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",173,6933,6982,rotate_z_normal,false,false) || _wrap_popCallStack(    rotate_z_normal(sin_cosin_teta, solid.normals[i])));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",176,7042,7091,rotate_z,false,false) || _wrap_popCallStack(    rotate_z(center, sin_cosin_teta, solid.points[j])));
  }
}
function project(distance, point) {
_wrap_addFunctionToMap('transform.js', 179, 7099,7309, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = (_wrap_setLastFunctionCall("transform.js",180,7150,7161,Array,false,false) || _wrap_popCallStack(new Array()));
  result[0] = point[0] * distance / point[2] + 500;
  result[1] = 275 - point[1] * distance / point[2];
  result[2] = distance;
  return result;
}
