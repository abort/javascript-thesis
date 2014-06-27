_wrap_staticMeasuredFunctions['transform.js'] = 19;
_wrap_staticMeasuredCalls['transform.js'] =50;
function rotate_x(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 1, 0,288, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[1] - center[1];
  var diff2 = center[2] - point[2];
  point[1] = center[1] + diff1 * sin_cos_angle[1] + diff2 * sin_cos_angle[0];
  point[2] = center[2] - diff2 * sin_cos_angle[1] + diff1 * sin_cos_angle[0];
}
function rotate_x_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 9, 290,506, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[1];
  point[1] = temp * sin_cos_angle[1] - point[2] * sin_cos_angle[0];
  point[2] = point[2] * sin_cos_angle[1] + temp * sin_cos_angle[0];
}
function rotate_y(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 16, 508,796, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[0] - center[0];
  var diff2 = point[2] - center[2];
  point[0] = center[0] + diff1 * sin_cos_angle[1] + diff2 * sin_cos_angle[0];
  point[2] = center[2] + diff2 * sin_cos_angle[1] - diff1 * sin_cos_angle[0];
}
function rotate_y_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 24, 798,1014, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[0];
  point[0] = temp * sin_cos_angle[1] + point[2] * sin_cos_angle[0];
  point[2] = point[2] * sin_cos_angle[1] - temp * sin_cos_angle[0];
}
function rotate_z(center, sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 31, 1016,1304, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var diff1 = point[0] - center[0];
  var diff2 = point[1] - center[1];
  point[0] = center[0] + diff1 * sin_cos_angle[1] - diff2 * sin_cos_angle[0];
  point[1] = center[1] + diff2 * sin_cos_angle[1] + diff1 * sin_cos_angle[0];
}
function rotate_z_normal(sin_cos_angle, point) {
_wrap_addFunctionToMap('transform.js', 39, 1306,1522, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var temp = point[0];
  point[0] = temp * sin_cos_angle[1] - point[1] * sin_cos_angle[0];
  point[1] = point[1] * sin_cos_angle[1] + temp * sin_cos_angle[0];
}
function get_rotation_parameter(center, vector, teta) {
_wrap_addFunctionToMap('transform.js', 47, 1525,2924, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = (_wrap_setLastFunctionCall("transform.js",48,1598,1609,Array,false) || new Array());
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
  result[10] = (_wrap_setLastFunctionCall("transform.js",82,2581,2595,Math.cos,false) || Math.cos(teta));
  result[11] = (_wrap_setLastFunctionCall("transform.js",84,2615,2629,Math.sin,false) || Math.sin(teta)) * (_wrap_setLastFunctionCall("transform.js",84,2632,2646,Math.sqrt,false) || Math.sqrt(den));
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
_wrap_addFunctionToMap('transform.js', 102, 2927,3758, (typeof arguments === 'object' ? arguments.callee.caller : null));

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
_wrap_addFunctionToMap('transform.js', 116, 3760,3908, (typeof arguments === 'object' ? arguments.callee.caller : null));

  point[0] = point[0] + vector[0];
  point[1] = point[1] + vector[1];
  point[2] = point[2] + vector[2];
}
function scale(vector, point) {
_wrap_addFunctionToMap('transform.js', 122, 3910,4054, (typeof arguments === 'object' ? arguments.callee.caller : null));

  point[0] = point[0] * vector[0];
  point[1] = point[1] * vector[1];
  point[2] = point[2] * vector[2];
}
function translate_solid(vector, solid) {
_wrap_addFunctionToMap('transform.js', 129, 4057,4240, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",130,4103,4134,translate,false) ||   translate(vector, solid.center));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",133,4197,4231,translate,false) ||     translate(vector, solid.points[i]));
  }
}
function translate_solid_direction(vector, delta, solid) {
_wrap_addFunctionToMap('transform.js', 137, 4242,4544, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",138,4305,4387,translate,false) ||   translate([vector[0] * delta, vector[1] * delta, vector[2] * delta], solid.center));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",141,4450,4535,translate,false) ||     translate([vector[0] * delta, vector[1] * delta, vector[2] * delta], solid.points[i]));
  }
}
function scale_solid(vector, solid) {
_wrap_addFunctionToMap('transform.js', 145, 4546,4843, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var da = solid.center;
  var a = [-solid.center[0], -solid.center[1], -solid.center[2]];
(_wrap_setLastFunctionCall("transform.js",149,4684,4709,translate_solid,false) ||   translate_solid(a, solid));
  for (var i = 0; i < solid.points_number; i++) {
(_wrap_setLastFunctionCall("transform.js",151,4771,4801,scale,false) ||     scale(vector, solid.points[i]));
  }
(_wrap_setLastFunctionCall("transform.js",154,4814,4840,translate_solid,false) ||   translate_solid(da, solid));
}
function rotate_solid(point, vector, angle, solid) {
_wrap_addFunctionToMap('transform.js', 158, 4846,5388, (typeof arguments === 'object' ? arguments.callee.caller : null));

  parametri = (_wrap_setLastFunctionCall("transform.js",159,4915,4959,get_rotation_parameter,false) || get_rotation_parameter(point, vector, angle));
  parametri2 = (_wrap_setLastFunctionCall("transform.js",160,4978,5026,get_rotation_parameter,false) || get_rotation_parameter([0, 0, 0], vector, angle));
(_wrap_setLastFunctionCall("transform.js",162,5033,5064,rotate,false) ||   rotate(parametri, solid.center));
(_wrap_setLastFunctionCall("transform.js",163,5070,5102,rotate,false) ||   rotate(parametri2, solid.axis_x));
(_wrap_setLastFunctionCall("transform.js",164,5108,5140,rotate,false) ||   rotate(parametri2, solid.axis_y));
(_wrap_setLastFunctionCall("transform.js",165,5146,5178,rotate,false) ||   rotate(parametri2, solid.axis_z));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",168,5240,5276,rotate,false) ||     rotate(parametri2, solid.normals[i]));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",172,5345,5379,rotate,false) ||     rotate(parametri, solid.points[j]));
  }
}
function rotate_solid_fast(parametri1, parametri2, solid) {
_wrap_addFunctionToMap('transform.js', 176, 5390,5811, (typeof arguments === 'object' ? arguments.callee.caller : null));

(_wrap_setLastFunctionCall("transform.js",177,5454,5486,rotate,false) ||   rotate(parametri1, solid.center));
(_wrap_setLastFunctionCall("transform.js",178,5492,5524,rotate,false) ||   rotate(parametri2, solid.axis_x));
(_wrap_setLastFunctionCall("transform.js",179,5530,5562,rotate,false) ||   rotate(parametri2, solid.axis_y));
(_wrap_setLastFunctionCall("transform.js",180,5568,5600,rotate,false) ||   rotate(parametri2, solid.axis_z));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",183,5662,5698,rotate,false) ||     rotate(parametri2, solid.normals[i]));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",187,5767,5802,rotate,false) ||     rotate(parametri1, solid.points[j]));
  }
}
function rotate_solid_x(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 191, 5813,6365, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",193,5888,5903,Math.sin,false) || Math.sin(angle)), (_wrap_setLastFunctionCall("transform.js",193,5905,5920,Math.cos,false) || Math.cos(angle))];
(_wrap_setLastFunctionCall("transform.js",195,5928,5974,rotate_x,false) ||   rotate_x(center, sin_cosin_teta, solid.center));
(_wrap_setLastFunctionCall("transform.js",196,5980,6025,rotate_x_normal,false) ||   rotate_x_normal(sin_cosin_teta, solid.axis_x));
(_wrap_setLastFunctionCall("transform.js",197,6031,6076,rotate_x_normal,false) ||   rotate_x_normal(sin_cosin_teta, solid.axis_y));
(_wrap_setLastFunctionCall("transform.js",198,6082,6127,rotate_x_normal,false) ||   rotate_x_normal(sin_cosin_teta, solid.axis_z));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",201,6189,6238,rotate_x_normal,false) ||     rotate_x_normal(sin_cosin_teta, solid.normals[i]));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",205,6307,6356,rotate_x,false) ||     rotate_x(center, sin_cosin_teta, solid.points[j]));
  }
}
function rotate_solid_y(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 209, 6367,6918, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",210,6441,6456,Math.sin,false) || Math.sin(angle)), (_wrap_setLastFunctionCall("transform.js",210,6458,6473,Math.cos,false) || Math.cos(angle))];
(_wrap_setLastFunctionCall("transform.js",212,6481,6527,rotate_y,false) ||   rotate_y(center, sin_cosin_teta, solid.center));
(_wrap_setLastFunctionCall("transform.js",213,6533,6578,rotate_y_normal,false) ||   rotate_y_normal(sin_cosin_teta, solid.axis_x));
(_wrap_setLastFunctionCall("transform.js",214,6584,6629,rotate_y_normal,false) ||   rotate_y_normal(sin_cosin_teta, solid.axis_y));
(_wrap_setLastFunctionCall("transform.js",215,6635,6680,rotate_y_normal,false) ||   rotate_y_normal(sin_cosin_teta, solid.axis_z));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",218,6742,6791,rotate_y_normal,false) ||     rotate_y_normal(sin_cosin_teta, solid.normals[i]));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",222,6860,6909,rotate_y,false) ||     rotate_y(center, sin_cosin_teta, solid.points[j]));
  }
}
function rotate_solid_z(center, angle, solid) {
_wrap_addFunctionToMap('transform.js', 226, 6920,7471, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var sin_cosin_teta = [(_wrap_setLastFunctionCall("transform.js",227,6994,7009,Math.sin,false) || Math.sin(angle)), (_wrap_setLastFunctionCall("transform.js",227,7011,7026,Math.cos,false) || Math.cos(angle))];
(_wrap_setLastFunctionCall("transform.js",229,7034,7080,rotate_z,false) ||   rotate_z(center, sin_cosin_teta, solid.center));
(_wrap_setLastFunctionCall("transform.js",230,7086,7131,rotate_z_normal,false) ||   rotate_z_normal(sin_cosin_teta, solid.axis_x));
(_wrap_setLastFunctionCall("transform.js",231,7137,7182,rotate_z_normal,false) ||   rotate_z_normal(sin_cosin_teta, solid.axis_y));
(_wrap_setLastFunctionCall("transform.js",232,7188,7233,rotate_z_normal,false) ||   rotate_z_normal(sin_cosin_teta, solid.axis_z));
  for (var i = 0; i < solid.faces_number; i++) {
(_wrap_setLastFunctionCall("transform.js",235,7295,7344,rotate_z_normal,false) ||     rotate_z_normal(sin_cosin_teta, solid.normals[i]));
  }
  for (var j = 0; j < solid.points_number; j++) {
(_wrap_setLastFunctionCall("transform.js",239,7413,7462,rotate_z,false) ||     rotate_z(center, sin_cosin_teta, solid.points[j]));
  }
}
function project(distance, point) {
_wrap_addFunctionToMap('transform.js', 243, 7473,7695, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var result = (_wrap_setLastFunctionCall("transform.js",244,7526,7537,Array,false) || new Array());
  result[0] = point[0] * distance / point[2] + 500;
  result[1] = 275 - point[1] * distance / point[2];
  result[2] = distance;
  return result;
}
