(function(a,b){if('function'==typeof define&&define.amd)define('HTTP',['exports'],b);else if('undefined'!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.HTTP=c.exports}})(this,function(a){'use strict';function b(e,f){if(!(e instanceof f))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(a,'__esModule',{value:!0}),a.default=function(){return new d};var c=function(){function e(f,g){for(var j,h=0;h<g.length;h++)j=g[h],j.enumerable=j.enumerable||!1,j.configurable=!0,'value'in j&&(j.writable=!0),Object.defineProperty(f,j.key,j)}return function(f,g,h){return g&&e(f.prototype,g),h&&e(f,h),f}}(),d=function(){function e(){b(this,e)}return c(e,[{key:'_request',value:function(g,h,j){var k=new XMLHttpRequest;k.open(g,h),k.onload=function(){j(null,k.response)},k.onerror=function(){j(k.response)},k.send()}},{key:'_parseData',value:function(g){return JSON.parse(g)}},{key:'_handleError',value:function(g){throw g}}]),c(e,[{key:'get',value:function(g){return new Promise(function(h){makeRequest('GET',g,function(k,l){if(k)throw k;h(this._parseData(l))})})}},{key:'post',value:function(){}},{key:'put',value:function(){}},{key:'patch',value:function(){}},{key:'delete',value:function(){}}]),e}()});
