(self.webpackChunkseqr=self.webpackChunkseqr||[]).push([[596],{98498:function(F,t,e){var E=e(70350),C=e(15780);F.exports=E,F.exports.murmur3=E,F.exports.murmur2=C},15780:function(F){F.exports=function(F,t){for(var e,E=F.length,C=t^E,r=0;E>=4;)e=1540483477*(65535&(e=255&F.charCodeAt(r)|(255&F.charCodeAt(++r))<<8|(255&F.charCodeAt(++r))<<16|(255&F.charCodeAt(++r))<<24))+((1540483477*(e>>>16)&65535)<<16),C=1540483477*(65535&C)+((1540483477*(C>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),E-=4,++r;switch(E){case 3:C^=(255&F.charCodeAt(r+2))<<16;case 2:C^=(255&F.charCodeAt(r+1))<<8;case 1:C=1540483477*(65535&(C^=255&F.charCodeAt(r)))+((1540483477*(C>>>16)&65535)<<16)}return C=1540483477*(65535&(C^=C>>>13))+((1540483477*(C>>>16)&65535)<<16),(C^=C>>>15)>>>0}},70350:function(F){F.exports=function(F,t){var e,E,C,r,A,B,o,D;for(e=3&F.length,E=F.length-e,C=t,A=3432918353,B=461845907,D=0;D<E;)o=255&F.charCodeAt(D)|(255&F.charCodeAt(++D))<<8|(255&F.charCodeAt(++D))<<16|(255&F.charCodeAt(++D))<<24,++D,C=27492+(65535&(r=5*(65535&(C=(C^=o=(65535&(o=(o=(65535&o)*A+(((o>>>16)*A&65535)<<16)&4294967295)<<15|o>>>17))*B+(((o>>>16)*B&65535)<<16)&4294967295)<<13|C>>>19))+((5*(C>>>16)&65535)<<16)&4294967295))+((58964+(r>>>16)&65535)<<16);switch(o=0,e){case 3:o^=(255&F.charCodeAt(D+2))<<16;case 2:o^=(255&F.charCodeAt(D+1))<<8;case 1:C^=o=(65535&(o=(o=(65535&(o^=255&F.charCodeAt(D)))*A+(((o>>>16)*A&65535)<<16)&4294967295)<<15|o>>>17))*B+(((o>>>16)*B&65535)<<16)&4294967295}return C^=F.length,C=2246822507*(65535&(C^=C>>>16))+((2246822507*(C>>>16)&65535)<<16)&4294967295,C=3266489909*(65535&(C^=C>>>13))+((3266489909*(C>>>16)&65535)<<16)&4294967295,(C^=C>>>16)>>>0}},36081:function(F,t,e){var E,C,r,A,B,o={50:["#FFEBEE","#FCE4EC","#F3E5F5","#EDE7F6","#E8EAF6","#E3F2FD","#E1F5FE","#E0F7FA","#E0F2F1","#E8F5E9","#F1F8E9","#F9FBE7","#FFFDE7","#FFF8E1","#FFF3E0","#FBE9E7","#EFEBE9","#FAFAFA","#ECEFF1"],100:["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9","#DCEDC8","#F0F4C3","#FFF9C4","#FFECB3","#FFE0B2","#FFCCBC","#D7CCC8","#F5F5F5","#CFD8DC"],200:["#EF9A9A","#F48FB1","#CE93D8","#B39DDB","#9FA8DA","#90CAF9","#81D4FA","#80DEEA","#80CBC4","#A5D6A7","#C5E1A5","#E6EE9C","#FFF59D","#FFE082","#FFCC80","#FFAB91","#BCAAA4","#EEEEEE","#B0BEC5"],300:["#E57373","#F06292","#BA68C8","#9575CD","#7986CB","#64B5F6","#4FC3F7","#4DD0E1","#4DB6AC","#81C784","#AED581","#DCE775","#FFF176","#FFD54F","#FFB74D","#FF8A65","#A1887F","#E0E0E0","#90A4AE"],400:["#EF5350","#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043","#8D6E63","#BDBDBD","#78909C"],500:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],600:["#E53935","#D81B60","#8E24AA","#5E35B1","#3949AB","#1E88E5","#039BE5","#00ACC1","#00897B","#43A047","#7CB342","#C0CA33","#FDD835","#FFB300","#FB8C00","#F4511E","#6D4C41","#757575","#546E7A"],700:["#D32F2F","#C2185B","#7B1FA2","#512DA8","#303F9F","#1976D2","#0288D1","#0097A7","#00796B","#388E3C","#689F38","#AFB42B","#FBC02D","#FFA000","#F57C00","#E64A19","#5D4037","#616161","#455A64"],800:["#C62828","#AD1457","#6A1B9A","#4527A0","#283593","#1565C0","#0277BD","#00838F","#00695C","#2E7D32","#558B2F","#9E9D24","#F9A825","#FF8F00","#EF6C00","#D84315","#4E342E","#424242","#37474F"],900:["#B71C1C","#880E4F","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#FF6F00","#E65100","#BF360C","#3E2723","#212121","#263238"],A100:["#FF8A80","#FF80AB","#EA80FC","#B388FF","#8C9EFF","#82B1FF","#80D8FF","#84FFFF","#A7FFEB","#B9F6CA","#CCFF90","#F4FF81","#FFFF8D","#FFE57F","#FFD180","#FF9E80"],A200:["#FF5252","#FF4081","#E040FB","#7C4DFF","#536DFE","#448AFF","#40C4FF","#18FFFF","#64FFDA","#69F0AE","#B2FF59","#EEFF41","#FFFF00","#FFD740","#FFAB40","#FF6E40"],A400:["#FF1744","#F50057","#D500F9","#651FFF","#3D5AFE","#2979FF","#00B0FF","#00E5FF","#1DE9B6","#00E676","#76FF03","#C6FF00","#FFEA00","#FFC400","#FF9100","#FF3D00"],A700:["#D50000","#C51162","#AA00FF","#6200EA","#304FFE","#2962FF","#0091EA","#00B8D4","#00BFA5","#00C853","#64DD17","#AEEA00","#FFD600","#FFAB00","#FF6D00","#DD2C00"]},D=e(98498);F.exports=(E=[],C={shades:["500"],palette:o,text:null,ignoreColors:[]},r=function(F){var t=F.shades[A(F.shades.length)],e="";for(var E in F.palette)F.palette.hasOwnProperty(E)&&E===t&&(e=F.text?F.palette[E][B(F.text,F.palette[E].length)]:F.palette[E][A(F.palette[E].length)]);return e},A=function(F){return Math.floor(Math.random()*F)},B=function(F,t){var e=D.murmur3(F)/1e10;return.1>e&&(e*=10),Math.floor(e*t)},{getColor:function(F){F||(F=C),F.palette||(F.palette=o),F.shades||(F.shades=["500"]);for(var t,e=E.length,A=0;e>A;A++)if(F.text&&E[A].text===F.text)return E[A].color;return t=r(F),F.text&&E.push({text:F.text,color:t}),t}})},65596:function(F,t,e){"use strict";e.r(t);var E=e(92437),C=e(36081),r=e.n(C),A=e(38396),B=e(15161);function o(F,t){if(null==F)return{};var e,E,C=function(F,t){if(null==F)return{};var e,E,C={},r=Object.keys(F);for(E=0;E<r.length;E++)e=r[E],t.indexOf(e)>=0||(C[e]=F[e]);return C}(F,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(F);for(E=0;E<r.length;E++)e=r[E],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(F,e)&&(C[e]=F[e])}return C}var D=(0,A.ZP)((function(F){F.categoryNames;var t=o(F,["categoryNames"]);return E.createElement(B.Z,t)})).withConfig({displayName:"ComputedColoredIcon"})(["color:"," !important;"],(function(F){return 0===(t=F.categoryNames).length?"#ccc":r().getColor({shades:["300","400","500","600","700","800"],text:t.sort().join(",")});var t}));t.default=D}}]);