var disableAd='No';
function occs(bid){
	ccs(bid);
}

function ocso(bid){
	cso(bid);
}

function ocis(bid){
	cis(bid);
}

function ccs(id){
	 var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
				    if(formpostrequest.responseText=="No"){
					  // disableAd="Yes";
					}
				  }
				  else{
				  
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
				if(chk[2]=='Exp'){
				       var parameters="action=exp_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}

function cso(id){
	 var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
				      if(formpostrequest.responseText=="No"){
					    //disableAd="Yes";
					}
				  }
				  else{
				 
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
				if(chk[2]=='Exp'){
				       var parameters="action=exp_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}

function cis(id){
	  var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
					   if(formpostrequest.responseText=="No"){
					    disableAd="Yes";
					}
				  
				  }
				  else{
				  
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
				if(chk[2]=='Exp'){
				       var parameters="action=exp_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}
var cheight=0;
var jaxscript=(function(){
var version=0.10;
var jaxStart=new Date().getTime()/1000;
var scope=self;
function global(p){
if(!!p) return convertProperty(scope,p);
else return scope;
}
function getDocument(){
return scope.document;
}
var jaxType={};
function isType(t){
var f=scope['is'+t];
return isFunction(f)? f(o):false;
}
function defineType(t, desc, fn){
scope['is'+t]=fn;
addEnum(jaxType,t);
}
defineType('Defined','defined value',function(o){
return typeof o!=='undefined';
});
defineType('Null','empty or undefined',function(o){
return isUndefined(o)||o==null||o==='';
});
defineType('True','true',function(o){
return o===true;
});
defineType('False','false',function(o){
return o===false;
});
defineType('Boolean','true or false',function(o){
return isTrue(o)||isFalse(o);
});
defineType('Integer','integer number',function(o){
return parseInt(o)==o;
});
defineType('Float','integer or floating point number',function(o){
return parseFloat(o)==Number(o);
});
defineType('Number','number, float or int',function(o){
return typeof o === 'number';
});
defineType('String','character text',function(o){
return typeof o==='string';
});
defineType('Object','JavaScript object of any type', function(o){
return typeof o==='object';
});
defineType('Array','JavaScript Array object',function(o){
return Object.prototype.toString.apply(o) === '[object Array]';
});
defineType('Function','JavaScript function or class',function(o){
return typeof o==='function';
});
defineType('Literal','JavaScript object containing no functions or objects',function(o){
if(isObject(o)){
var c=0, i, v;
for (i in o.prototype) c++;
if(c==0){
for (i in o){
v=o[i];
if(isObject(v)||isFunction(v)) return false;
}
return true;
}
}
return false;
});
defineType('Enum','JavaScript literal containing only integers',function(o){
if(isLiteral(o)){
for (var i in o){
if(!isInteger(o[i])) return false;
}
return true;
}
return false;
});
defineType('XML','String containing xml tags',function(o){
if(isString(o)){
if(o.indexOf('<')>-1&&o.indexOf('>')>-1) return true;
}
});
defineType('Node','XML-DOM Node',function(n,t){
var b=(isObject(n)&&exists(n,['nodeType','nodeName']));
if(b&&isString(t))
return n.nodeName.toUpperCase()==t.toUpperCase();
return b;
});
defineType('DOMDocument','XML-DOM Document',function(o){
return isNode(o)&&o.nodeType==9;
});
defineType('Window','browser window or frame element',function(o){
return o==window||o.nodeName=='frame'||o.nodeName=='iframe';
});
defineType('Event','DOM Event object',function(e){
if(!!self.event) return e===self.event;
else return (isObject(e)&&!!e.type);
});
defineType('JaxScript','XML-DOM Node whose root node name is jax',function(o){
return isNode(o)&&o.nodeType==9&&dom.lastChild(o).nodeName=='jax:script';
});
function echo(o){
var s=inspect(o);
var c=window.console;
if(c&&c.log) c.log(s);
else {
return;
run(function(){
var jc=dom.id('jax_console');
if(!!jc){
var e=document.createElement('div');
e.innerHTML=s;
dom.append(e,jc);
if(jc.scrollHeight) jc.scrollTop=jc.scrollHeight - jc.offsetHeight+20;
}
});
}
}
function println(s,d){
if(!jaxLoaded()) document.write(s);
else run(function(){
dom.append(dom.createNode(s));
dom.append(document.createElement('br'));
});
}
function convertProperty(o,p){
if(isString(p)){
if(p.indexOf('.')>0){
var s=p.split('.');
for (var i=0;i<s.length;i++){
o=o[s[i]];
if(!o) return null;
}
return o;
}
return o[p];
}
}
function hasProperty(o,p){
return !!convertProperty(o,p);
}
function exists(o,p){
if(!!o&&!!p){
if(arguments.length>2) return existsArray(o,arguments,1);
if(isString(p)) return hasProperty(o,p);
if(isArray(p)) return existsArray(o,p);
}
return false;
}
function existsArray(o,a,start){
if(!a.length) return false;
for (var i=start||0;i<a.length;i++)
if(!exists(o,a[i])) return false;
return true;
}
function cloneTo(s,t,p,deep){
if(!t) return ;
var i,j;
if(!!p){
for (j in p){
i=p[j];
t[i]=s[i];
}
}
else for (i in s){
t[i]=s[i];
}
return t;
}
function cloneFrom(t,s,p,deep){
return cloneTo(s,t,p,deep);
}
function enumerate(s){
var o={};
if(isString(s)) s=s.split(",");
if(isArray(s)){
for (var i in s)
o[s[i]]=parseInt(i)+1;
return o;
}
}
function addEnum(enm,field){
var i, c=0;
for (i in enm){
c=Math.max(c,enm[i]);
}
enm[field]=++c;
return c;
}
function getParam(n,url){
return getParams(url)[n];
}
function getParams(url){
if(!url) url=window.location.search;
if(url.indexOf('?')>-1) url=url.substring(url.indexOf('?')+1);
var o={};
var q=url.length>1?url.split("&"):[];
for (var i=0;i<q.length;i++)
o[q[i].match(/^[^=]+/)]=unescape(q[i].replace(/^[^=]+=?/, ""));
return o;
}
function getKeys(o, onlyOwn){
var k=[];
for (var i in o){
if(!onlyOwn||o.hasOwnProperty(i)){
k.push(i);
}
}
return k;
}
function ucfirst(s){
return s.charAt(0).toUpperCase()+s.substring(1);
}
function parseNumber(t,useNaN){
if(isString(t)){
t=t.replace(/[^0-9|\.|-]/g, '');
t=parseFloat(t);
if(isNaN(t)) return useNaN? NaN:0;
return t;
}
else if(isFloat(t)) return t;
else return useNan? NaN:0;
}
function round(n,d){
var p=!d? 1:Math.pow(10,d);
return Math.round(parseNumber(n)*p)/p;
}
function inspect(o,r){
if(isString(o)) return o;
if(isFloat(o)) return o;
if(isObject(o)){
var s='{\n',t;
var b=(r==false)?'\t\t':'\t';
var v;
for (var i in o){
v=o[i];
if(isString(v)) s += b+i+':"'+v.replace('"','\"')+'"';
else if(isBoolean(v)) s += b+i+':'+(v?'true':'false');
else if(isFloat(v)) s += b+i+':'+o[i];
else if(isFunction(v)) s += b+i+':"[Function]"';
else if(isArray(v))  s += b+i+':"['+t+']"';
else if(isObject(v)) s += b+i+':"[Object]"';
s += ',\n';
}
if(r==false) s+= '\t';
s += '}';
return s;
}
};
function cloneFrom(t,s,p){
return cloneTo(s,t,p);
}
function cloneTo(s,t,p){
if(!t) return alert('copy() target does not exist');
var i,j;
if(!!p){
for (j in p){
i=p[j];
t[i]=s[i];
}
}
else for (i in s){
t[i]=s[i];
}
return t;
}
var classes={};
function getClasses(){
return getKeys(classes);
}
function getClass(c){
return isFunction(classes[c])? classes[c]:null;
}
function createClass(classId,proto,superId){
function Constructor(){
if(isFunction(this[classId])){
this[classId].apply(this,arguments);
}
}
var c=classes[classId]=Constructor;
var s;
if(superId&&isFunction(classes[superId])){
s=classes[superId];
c.prototype=new s;
}
return defineClass(classId, c, proto, superId);
}
function defineClass(classId, c, proto, superId){
var s;
if(superId) s=classes[superId];
if(isFunction(proto)) cloneFrom(c.prototype,proto());
cloneFrom(c.prototype,{
getClass:function(){
return c;
},
getSuper:function(){
return s;
},
callSuper:function(methodName){
var a=new Array(arguments.length-1);
for (var i=1;i<arguments.length;i++){
a[i-1]=arguments[i];
}
this.applySuper(methodName,a);
},
applySuper:function(methodName,a){
this.getSuper().prototype[methodName].apply(this,a);
},
bindEvent:function(element, eventName, methodName){
if(typeof this[methodName]=='function'){
var me=this;
var binding={
element:element,
eventName:eventName,
methodName:methodName,
handler:function(e){
me[methodName](e);
}
}
if(isNull(this.__bindings)) this.__bindings=[];
this.__bindings.push(binding);
dom.addEvent(element, eventName, binding.handler);
return true;
}
else ;
return false;
},
releaseEvent:function(element, eventName, methodName){
if(isArray(this.__bindings)){
for (var i=0;i<this.__bindings.length;i++){
var binding=this.__bindings[i];
if(binding.element==element&&binding.eventName==eventName&&binding.methodName==methodName){
dom.removeEvent(element, eventName, binding.handler);
arrayRemove(this.__bindings,binding);
return true;
}
}
}
return false;
}
});
cloneFrom(c,{
getClassId:function(){
return classId;
},
getSuperId:function(){
if(s) return superId;
},
extend:function(id, cons, p){
cons.prototype=new c;
cons.prototype[classId]=c;
defineClass(id, cons, p, classId);
},
implement:function(p,id){
var omit=['getClass','getSuper','callSuper','applySuper'];
for (var i in c.prototype){
if(typeof p[i]=='undefined'){
p[i]=c.prototype[i];
}
}
return p;
},
isInstance:function(o){
var v=false;
if(!!o&&typeof o.getClass=='function'){
var cls=o.getClass();
if(cls.getClassId()==classId) return true;
else if(cls.getSuperId()){
while (cls=classes[cls.getSuperId()]){
if(cls.getClassId()==classId) return true;
}
}
}
else ;
return v;
}
});
if(jaxLoaded()) ;
return c;
}
var Class=createClass('Class');
var runs=[];
var loaded=false;
var jaxloaded=false;
var jaxrunning=false;
var supported=false;
function main(){
jaxloaded=true;
if(!allCSSLoaded()){
setTimeout(main,10);
return;
}
dom.addEvent(document,'mousedown',bubbleEvent,false);
dom.addEvent(document,'mousedown',captureEvent,true);
dom.addEvent(document,'mouseup',bubbleEvent,false);
dom.addEvent(document,'mouseup',captureEvent,true);
dom.addEvent(document,'click',bubbleEvent,false);
dom.addEvent(document,'click',captureEvent,true);
dom.addEvent(document,'dblclick',bubbleEvent,false);
dom.addEvent(document,'dblclick',captureEvent,true);
processTemplates(document, function(){
processIncludes(document, execRuns);
});
}
function execRuns(){
var r;
while (r=runs.shift()){
r();
}
if(jaxrunning) return ;
if(isArray(classes)){
classes.forEach(function(c){
if(isFunction(c.main)) c.main();
});
}
var j='JaxScript ';
jaxrunning=true;
}
if(typeof getDocument().onreadystatechange=='object'){
supported=true;
getDocument().onreadystatechange=function(){
if(getDocument().readyState=="complete"){
main();
}
};
}
else if(typeof getDocument().addEventListener=='function'){
supported=true;
getDocument().addEventListener("DOMContentLoaded", main, true);
}
function jaxLoaded(){
return jaxloaded;
}
function jaxBusy(){
return loaded;
}
function run(f, first){
if(jaxloaded) f();
else if(first) runs.unshift(f);
else runs.push(f);
};
function allCSSLoaded(){
if(typeof style!='object') return true;
var c=style._css_loading;
if(c.length==0||features('activex')) return true;
var loaded=0;
var s=getDocument().styleSheets;
for (var i=0; i<s.length; i++){
if(features('gecko')){
try {
if(!s[i].cssRules) return false;
}
catch(e){
return false;
}
}
if(s[i].cssRules){
for (var j=0; j<c.length; j++){
if(s[i].href==c[j].href&&!s[i].disabled) loaded++;
}
}
}
return loaded==c.length;
}
function findComponent(e){
var m,n=dom.eventTarget(e);
while (n!=null){
if(n.className!=null){
m=n.className.match(/^jaxcore-([a-z]|_)+ */);
if(!!m) return {node:n,type:ucfirst(convert.underscore2camel(m[0].substring(8).trim()))};
}
n=n.parentNode;
}
}
function handleEvent(e,mode){
var c,h,jxc=findComponent(e);
if(!!jxc){
c=jax[jxc.type];
if(isObject(c)&&isObject(c[mode+'Events'])){
h=c[mode+'Events'][e.type];
if(isFunction(h)){
h(e,jxc.node);
}
}
else {
}
}
}
function captureEvent(e){
handleEvent(e,'capture');
}
function bubbleEvent(e){
handleEvent(e,'bubble');
}
var includes={};
var checkIncludesDone=false;
function checkIncludes(callback){
if(checkIncludesDone) return;
for (var i in includes){
if(!includes[i].loaded){
return false;
}
}
checkIncludesDone=true;
callback();
}
function processXSL(x){
if(!x.childNodes) return ;
for (var i=0;i<x.childNodes.length;i++){
if(x.childNodes[i].nodeName=='xml-stylesheet'){
var p=x.childNodes[i].nodeValue.split(' ');
var type, href;
for (var j=0;j<p.length;j++){
var t=p[j].split('=');
if(t[0]=='type') type=trimQuotes(t[1]);
if(t[0]=='href'){
href=trimQuotes(t[1]);
}
}
if(type=='text/xsl'){
var xsldom=dom.loadDOM(href);
var method='xml';
var o=xsldom.getElementsByTagName('xsl:output');
if(client.features('activex')&&o.length) method=o[0].getAttribute('method');
x=xsl.transform(x,xsldom,{output:method});
}
break;
}
}
return x;
}
var templates={};
var templateURLs={};
function processTemplates(processNode, callback){
var nodes=processNode.getElementsByTagName((client.features('activex'))?'template':'jax:template');
var n;
for (var i=0;i<nodes.length;i++){
n=nodes[i];
var url=n.getAttribute('url');
var name=n.getAttribute('name');
templates[name]=dom.request({
url:url,
async:false
}).responseText;
templateURLs[name]=url;
}
if(callback) callback();
}
function buildTagsXSL(template, tags){
var result=template;
tags.forEach(function(tag){
});
var xsls='<?xml version="1.0" encoding="UTF-8"?>\n'+
'<xsl:stylesheet version="1.0" xmlns:jax="http://www.jaxcore.com/jax/script" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:jaxsl="http://www.jaxcore.com/jaxsl">'+
'<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />'+
'<xsl:template match="@*|node()">'+
'<xsl:copy>'+
'<xsl:apply-templates select="@*|node()"/>'+
'</xsl:copy>'+
'</xsl:template>'+
'<xsl:template match="calculate">'+
'	<xsl:element name="xsl:call-template">'+
'		<xsl:attribute name="name">calculate</xsl:attribute>'+
'		<xsl:element name="xsl:with-param">'+
'			<xsl:attribute name="name">number</xsl:attribute>'+
'			<xsl:attribute name="select">'+
'				<xsl:value-of select="@number" />'+
'			</xsl:attribute>'+
'		</xsl:element>'+
'		<xsl:element name="xsl:with-param">'+
'			<xsl:attribute name="name">operation</xsl:attribute>'+
'			<xsl:attribute name="select">'+
'				<xsl:value-of select="@operation" />'+
'			</xsl:attribute>'+
'		</xsl:element>		'+
'	</xsl:element>'+
'</xsl:template>'+
'</xsl:stylesheet>';
var xsldom=convert.xml2dom(xsls);
return xsldom;
}
function processJaxXSL(program, args){
var tagNames=[];
var tags=isFunction(program.getElementsByTagNameNS)? program.getElementsByTagNameNS('http://www.jaxcore.com/jax/script','tag'):program.getElementsByTagName('jax:tag');
var t,tmp,name,template;
var templates='';
for (var i=0;i<tags.length;i++){
t=tags[i];
name=t.getAttribute('name');
attr=isFunction(t.getElementsByTagNameNS)? t.getElementsByTagNameNS('http://www.jaxcore.com/jax/script','attribute'):t.getElementsByTagName('jax:attribute');
tmp='<xsl:template name="'+name+'">';
var tagName={name:name,attr:[]};
for (var j=0;j<attr.length;j++){
var aname=attr[j].getAttribute('name');
var d =attr[j].getAttribute('default');
var df='';
if(!!d) df='select="'+d+'"';
tmp += '<xsl:param name="'+aname+'" '+df+'/>';
tagName.attr.push(aname);
}
tagNames.push(tagName);
template=isFunction(t.getElementsByTagNameNS)? t.getElementsByTagNameNS('http://www.jaxcore.com/jax/script','template'):t.getElementsByTagName('jax:template');
if(template.length==1){
var x='';
for (var j=0;j<template[0].childNodes.length;j++){
x += convert.dom2xml(template[0].childNodes[j]);
}
if(!!x) tmp += x;
}
tmp += '</xsl:template>';
templates += tmp;
dom.remove(t);
}
tagNames.forEach(function(tag){
var tags=program.getElementsByTagName(tag.name);
var t;
for (var i=0;i<tags.length;i++){
t=tags[i];
var ct=isFunction(program.createElementNS)? program.createElementNS('http://www.w3.org/1999/XSL/Transform','call-template'):program.createElement('xsl:call-template');
ct.setAttribute('name','calculate');
tag.attr.forEach(function(a){
var wp=isFunction(program.createElementNS)? program.createElementNS('http://www.w3.org/1999/XSL/Transform','with-param'):program.createElement('xsl:with-param');
wp.setAttribute('name',a);
wp.setAttribute('select',t.getAttribute(a));
ct.appendChild(wp);
});
dom.after(ct,t);
}
for (var i=0;i<tags.length;i++){
dom.remove(tags[i]);
}
});
var xml='';
var c=program.lastChild.childNodes;
for (var i=0;i<c.length;i++){
xml += convert.dom2xml(c[i]);
}
var output='xml';
var xsls='<?xml version="1.0" encoding="UTF-8"?>\n'+
'<xsl:stylesheet version="1.0"  xmlns:jax="http://www.jaxcore.com/jax/script" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:jaxsl="http://www.w3.org/1999/XSL/Transform">'+
'<xsl:output method="'+output+'" version="1.0" encoding="UTF-8" indent="no" />'+
'<xsl:variable name="nbsp">';
if(!client.features('opera')) xsls += '<xsl:text disable-output-escaping="yes">&#160;</xsl:text>';
xsls += '</xsl:variable>';
var v;
for (var i in args){
v=args[i];
if(isString(v)||isBoolean(v)||isNumber(v)){
xsls += '<xsl:variable name="'+i+'" select="\''+v+'\'" />';
}
}
xsls += templates;
xsls += '<xsl:template match="*">'+
'<jax:script xmlns:jax="http://www.jaxcore.com/jax/script" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:jaxsl="http://www.w3.org/1999/XSL/Transform">'+
xml+
'</jax:script>'+
'</xsl:template>'+
'</xsl:stylesheet>';
return convert.xml2dom(xsls);
}
function getScripts(program, type, args){
var jaxscripts=isFunction(program.getElementsByTagNameNS)? program.getElementsByTagNameNS('http://www.jaxcore.com/jax/script',type):program.getElementsByTagName('jax:'+type);
var fns=[];
var s,f;
var keys=getKeys(args);
for (var i=jaxscripts.length-1;i>=0;i--){
if(client.features('activex')) s=jaxscripts[i].firstChild.nodeType==4? jaxscripts[i].firstChild.nodeValue:convert.dom2xml(jaxscripts[i].firstChild.textValue);
else s=jaxscripts[i].textContent;
f=new Function(keys,s);
fns.unshift(f);
dom.remove(jaxscripts[i]);
}
return fns;
}
function processScripts(jxs, args){
var p=jxs.template;
var runs=getScripts(p,'run', args);
var execs=getScripts(p,'execute', args);
callScripts(execs, jxs, args);
return runs;
}
function getValues(o){
var v=[];
for (var i in o) v.push(o[i]);
return v;
}
function callScripts(scripts, jxs, args){
var vals=getValues(args);
if(isArray(scripts)){
scripts.forEach(function(f){
try {
f.apply(jxs, vals);
}
catch(e){
alert('jax.callScripts() error: '+e+'\n'+f);
}
});
delete scripts;
}
}
function clipPath(p){
return p.indexOf('/')? p.substring(0,p.lastIndexOf('/')):p;
}
var uniqueIndex=0;
function uniqueId(){
return ++uniqueIndex;
}
function processIncludes(processNode, callback, async){
if(async==null) async=true;
var isDoc=processNode==document;
var nodes;
if(processNode==document&&client.features('activex')) nodes=processNode.getElementsByTagName('include');
else {
nodes=processNode.getElementsByTagName('jax:include');
if((!nodes||nodes.length==0)&&isFunction(processNode.getElementsByTagNameNS)) nodes=processNode.getElementsByTagNameNS('http://www.jaxcore.com/jax/script','include');
}
if(!async) ;
if(nodes.length==0){
if(callback) callback();
return;
}
var n,t;
var newnodes={};
for (var i=0;i<nodes.length;i++){
n=nodes[i];
n.setAttribute('id', 'include-'+uniqueId());
t=n.getAttribute('type');
var url=n.getAttribute('url');
var args=/{.*}/.test(n.getAttribute('arguments'))? convert.string2json(n.getAttribute('arguments')):eval(n.getAttribute('arguments'));
includes[n.id]={
loaded:false
};
if(t=='json'||t=='jsonp'){
function jsonhandler(data,params){
var result=processJaxTemplate(null, data, params.node.getAttribute('template'), params.dataURL, params.args);
result.jxs.out=replaceInclude(params.node, result.out);
callScripts(result.runs, result.jxs, params.args);
includes[params.nid].loaded=true;
if(isDoc) checkIncludes(callback);
else if(isFunction(callback)) callback();
}
var params={node:n,dataURL:url,nid:n.id,args:args};
if(url) dom['load'+t.toUpperCase()](url,jsonhandler,params);
else if(n.getAttribute('data')){
var json=convert.string2json(n.getAttribute('data'));
jsonhandler(json, params);
}
}
else if(t=='jaxscript'||t=='xml'||t=='html'||t=='text'||t=='svg'){
var o={
url:replaceArg(url),
async:async,
handler:function(r,params){
includes[params.nid].loaded=true;
if(params.type=='js'){
var script=r.responseText;
var f=new Function(['arg','cwd'],script);
var out=f.call({cwd:cwd}, params.args, cwd);
var r=params.node.getAttribute('onrun');
if(isString(r)){
var sf=new Function(['arg','cwd','out'],r);
sf.call(f, params.args, cwd, out);
}
}
else if(params.type=='text'){
var text=r.responseText;
if(params.node.getAttribute('filter')){
var fn=eval(params.node.getAttribute('filter'));
if(isFunction(fn)){
text=fn(text);
}
}
var dy=params.node.ownerDocument.createTextNode(text.trim());
dom.before(dy,params.node);
dom.remove(params.node);
}
else if(params.type=='html'){
dom.replace(params.node, r.responseText);
}
else if(params.type=='svg'){
if(isFunction(document.adoptNode)) dom.replace(params.node, document.adoptNode(r.responseXML.lastChild));
else ;
}
else if(params.type=='xml'){
var result=processJaxTemplate(r.responseXML, null, params.node.getAttribute('template'), params.url, params.args);
result.jxs.out=replaceInclude(params.node, result.out);
var r=params.node.getAttribute('onrun');
if(isString(r)) result.runs.push(new Function(['argument'],r));
callScripts(result.runs, result.jxs);
}
else ;
if(isDoc) checkIncludes(callback);
else if(isFunction(callback)) callback();
},
errorHandler:function(r){
},
params:{node:n,nid:n.id,url:url,type:t,args:args}
};
dom.request(o);
}
}
}
function replaceInclude(node, out){
var outnodes=[];
if(isJaxScript(out)){
var j,h;
var newnodes=[];
var c=out.lastChild.childNodes;
for (j=0;j<c.length;j++){
h=convert.dom2xml(c[j]);
newnodes.push(h);
}
if(node.ownerDocument==document){
var nn,d;
if(client.features('activex')){
h='';
for (j=0;j<c.length;j++){
h += convert.dom2xml(c[j]);
}
try {
node.outerHTML=h;
return node.childNodes;
}
catch(e){
}
}
while(nn=newnodes.shift()){
d=dom.createNode(nn);
dom.before(d,node);
outnodes.push(d);
}
dom.remove(node);
}
else {
dom.replace(node, c);
outnodes.push(c);
}
}
else {
dom.replace(node, out);
outnodes.push(out);
}
return outnodes;
}
function buildTemplate(tmp, jxs, args){
tmp=tmp.replace(/\${.+?}/g,function(m,i,s){
var r=m.substring(2,m.length-1);
return '<xsl:value-of select="'+r+'" />';
});
tmp=tmp.replace(/&amp;nbsp;/g,'<xsl:value-of select="$nbsp"/>');
var keys=getKeys(args);
var vals=getValues(args);
tmp=tmp.replace(/\\n/g,'\uffff');
tmp=tmp.replace(/<%/g,'\n<%\n');
tmp=tmp.replace(/<jax:print><!\[CDATA\[/g,'\n<%\n');
tmp=tmp.replace(/%>/g,'\n%>\n');
tmp=tmp.replace(/]]><\/jax:print>/g,'\n%>\n');
var lines=tmp.split("\n");
var newlines=[];
var injs=false;
var jsblock='';
var line;
for (var i=0;i<lines.length;i++){
line=lines[i];
if(line.trim()=='') continue;
if(line=='<%'){
injs=true;
continue;
}
if(line=='%>'){
injs=false;
continue;
}
if(injs){
if(line.indexOf('=')==0){
var l=line.substring(1).replace(/\"/g,'\\"').replace(/AA/g,'\\n');
newlines.push('print('+l+');\n');
continue;
}
newlines.push(line.trim()+'\n');
}
else {
var l=line.replace(/\"/g,'\\"');
l=l.replace(/\uffff/g,'\\\\n');
newlines.push('print("'+l+'");\n');
}
};
var output="var _jax='';\n"+
"function print(s){\n"+
"	_jax += s;\n"+
"}\n";
for (var i=0;i<newlines.length;i++){
output += newlines[i];
}
output += '\nreturn _jax;';
var fn=new Function(keys,output);
var r=fn.apply(jxs,vals);
return convert.xml2dom(r);
}
function processJaxTemplate(xdom, json, template, path, args){
var jxs={path:path};
var runs;
var out;
if(!!json){
jxs.json=json;
xdom=convert.json2dom(json,null,true);
}
jxs.dom=processXSL(xdom);
if(isString(template)){
if(!!templates[template]){
jxs.template=buildTemplate(templates[template], jxs, args);
jxs.cwd=clipPath(templateURLs[template]);
}
else {
alert('load xsl template?');
}
if(isJaxScript(jxs.template)){
runs=processScripts(jxs, args);
var jaxxsl=processJaxXSL(jxs.template, args);
out=xsl.transform(jxs.dom, jaxxsl, {output:'xmldoc'});
processIncludes(out, null, false);
}
else if(isNode(jxs.template)){
alert('normal xsl');
out=xsl.transform(jxs.dom, jxs.template);
}
}
else out=jxs.dom;
return {runs:runs, jxs:jxs, out:out};
}
function trimQuotes(s){
if(isString(s)){
if(s[0]=='"'&&s[s.length-1]=='"') return s.substring(1,s.length-1);
if(s[0]=="'"&&s[s.length-1]=="'"){
var a=s.substring(1,s.length-1);
return a;
}
}
return s;
}
function replaceArg(v){
var re=/^\${([a-zA-z0-9]+)\((.*)\)}$/;
var m=v.match(re);
if(m!==null){
if(isFunction(self[m[1]])){
var a=m[2];
var n=parseNumber(a);
if(n==a) a=n;
else if(isString(a)){
a=trimQuotes(a);
}
v=self[m[1]](a);
}
else ;
}
return v;
}
var core={
global:global,
getDocument:getDocument,
isType:isType,
defineType:defineType,
createClass:createClass,
echo:echo,
println:println,
convertProperty:convertProperty,
hasProperty:hasProperty,
exists:exists,
trimQuotes:trimQuotes,
cloneTo:cloneTo,
cloneFrom:cloneFrom,
enumerate:enumerate,
addEnum:addEnum,
getParam:getParam,
getParams:getParams,
getKeys:getKeys,
ucfirst:ucfirst,
parseNumber:parseNumber,
round:round,
inspect:inspect,
Class:Class,
getClasses:getClasses,
getClass:getClass,
main:main,
jaxLoaded:jaxLoaded,
run:run,
uniqueId:uniqueId
}
return function(o){
if(!!o){
scope=o;
cloneTo(core,o);
}
return core;
};
})();
if(!isDefined(Array.prototype.getRandom)){
Array.prototype.getRandom=function Array_getRandom(omitIndex,omitElement){
if(!this.length) return null;
var i;
do {
i=Math.floor(Math.random()*this.length);
} while (i==omitIndex||this[i]==omitElement);
return this[i];
}
}
if(!isDefined(Array.prototype.contains)){
Array.prototype.contains=function Array_contains(o){
return this.indexOf(o)>-1;
};
}
if(!isDefined(Array.prototype.remove)){
Array.prototype.remove=function Array_remove(o){
var i=this.indexOf(o);
if(i>-1) this.splice(i,1);
else ;
return this;
}
}
if(!isDefined(Array.prototype.areType)){
Array.prototype.areType=function Array_areType(t){
var f, i;
if(!!t){
for (i=0;i<this.length;i++){
f=self['is'+t];
if(isFunction(f)){
if(!f(this[i])) return false;
}
}
return true;
}
return false;
};
}
var jax=jaxscript(self);
var client=(function(){
var feats={};
function userAgent(){
return (typeof navigator=='object')? navigator.userAgent:'';
}
function getPlugin(s){
var a=navigator.plugins;
if(a.length>0)
for (i=0;i<a.length;i++)
if(a[i].name.indexOf(s)>-1)
return a[i];
}
function addFeature(id,name,test){
feats[id]={
name:name,
test:test
};
}
function features(id,v){
if(feats[id]) return feats[id].test(v);
return false;
}
addFeature('activex','ActiveX',function(){
return typeof ActiveXObject=='object'||typeof ActiveXObject=='function';
});
addFeature('fixed','CSS-P Fixed Position extension',function(v){
return !features('activex');
});
addFeature('cookies','Browser cookies',function(v){
D.cookie="1";
return D.cookie.indexOf("1")>-1;
});
addFeature('dom','Document Object Model',function(v){
if(!v) v=1;
var cv=0;
if(
( typeof D.addEventListener=='function'&&
(typeof DOMParser=='function'||typeof DOMParser=='object')&&
(typeof XMLSerializer=='function'||typeof XMLSerializer=='object')&&
(typeof XSLTProcessor=='function'||typeof XSLTProcessor=='object') )||
(features('activex')&&typeof self.attachEvent=='object'&&typeof D.getElementById=='object')
) cv=2;
if(typeof D.adoptNode=='function') cv=3;
return cv>=v;
});
addFeature('ecma','ECMAScript',function(v){
if(!v) v=1;
var cv=0;
if(typeof [].pop=='function'&&typeof parseFloat=='function'&&typeof decodeURIComponent=='function')
cv=3;
return cv>=v;
});
addFeature('flash','Adobe Shockwave Flash',function(v){
return !!getPlugin("Shockwave Flash");
});
addFeature('gecko','Gecko HTML Rendering Engine',function(){
return userAgent().toLowerCase().indexOf("gecko")>-1&&!features("webkit");
});
addFeature('webkit','WebKit HTML Rendering Engine',function(){
return userAgent().toLowerCase().indexOf("webkit")>-1;
});
addFeature('safari','Safari version of WebKit',function(){
return features("webkit")&&userAgent().toLowerCase().indexOf("safari")>-1&&!features("chrome");
});
addFeature('chrome','Chrome version of WebKit',function(){
return features("webkit")&&userAgent().indexOf("Chrome")>-1;
});
addFeature('iphone','Apple iPhone/iPod',function(){
return features("webkit")&&userAgent().indexOf("iPhone")>-1||userAgent().indexOf("iPod")>-1;
});
addFeature('opera','Opera browser',function(){
return client.userAgent().indexOf('Opera')==0;
});
addFeature('xmlserializer','DOM2 XMLSerializer',function(){
return typeof XMLSerializer=='function'||typeof XMLSerializer=='object';
});
addFeature('ipad','Apple iPad',function(){
return userAgent().indexOf("iPad")>-1;
});
addFeature('java','Sun Microsystems Java',function(){
return typeof java=='object'&&!!getPlugin("Java");
});
addFeature('js','JavaScript',function(v){
if(!v) v=1;
var cv=1.5;
if(typeof [].indexOf=='function'&&typeof [].forEach=='function')
cv=1.6;
return cv>v;
});
addFeature('xhr','XMLHTTPRequest communication',function(){
return features('activex')||typeof XMLHttpRequest=='function'||typeof XMLHttpRequest=='object';
});
return {
userAgent:userAgent,
getPlugin:getPlugin,
addFeature:addFeature,
features:features
}
}());
if(!isDefined(String.prototype.trim)){
String.prototype.trim=function String_trim(){
return this.replace(/^\s+|\s+$/g,'');
}
}
if(!isDefined(Array.prototype.forEach)){
Array.prototype.forEach=function Array_forEach(fun
){
var len=this.length >>> 0;
if(typeof fun!="function") throw new TypeError();
var thisp=arguments[1];
for (var i=0; i<len; i++){
if(i in this)
fun.call(thisp, this[i], i, this);
}
};
}
if(!isDefined(Array.prototype.indexOf)){
Array.prototype.indexOf=function(elt
){
var len=this.length >>> 0;
var from=Number(arguments[1])||0;
from=(from<0)? Math.ceil(from):Math.floor(from);
if(from<0)  from += len;
for (; from<len; from++){
if(from in this&&this[from] === elt) return from;
}
return -1;
};
}
if(!isDefined(Array.prototype.map)){
Array.prototype.map=function(fun
){
var len=this.length >>> 0;
if(typeof fun!="function") throw new TypeError();
var res=new Array(len);
var thisp=arguments[1];
for (var i=0; i<len; i++){
if(i in this) res[i]=fun.call(thisp, this[i], i, this);
}
return res;
};
}
if(!isDefined(Array.prototype.reduce)){
Array.prototype.reduce=function(fun
){
var len=this.length >>> 0;
if(typeof fun!="function") throw new TypeError();
if(len==0&&arguments.length==1) throw new TypeError();
var i=0;
if(arguments.length>=2){
var rv=arguments[1];
}
else {
do {
if(i in this){
var rv=this[i++];
break;
}
if(++i>=len) throw new TypeError();
}
while (true);
}
for (; i<len; i++){
if(i in this) rv=fun.call(null, rv, this[i], i, this);
}
return rv;
};
}
if(!isDefined(Array.prototype.reduceRight)){
Array.prototype.reduceRight=function(fun
){
var len=this.length >>> 0;
if(typeof fun!="function") throw new TypeError();
if(len==0&&arguments.length==1)  throw new TypeError();
var i=len - 1;
if(arguments.length>=2){
var rv=arguments[1];
}
else {
do {
if(i in this){
var rv=this[i--];
break;
}
if(--i<0) throw new TypeError();
}
while (true);
}
for (; i>=0; i--){
if(i in this) rv=fun.call(null, rv, this[i], i, this);
}
return rv;
};
}
if(!isDefined(Array.prototype.some)){
Array.prototype.some=function(fun
){
var i=0,
len=this.length >>> 0;
if(typeof fun!="function") throw new TypeError();
var thisp=arguments[1];
for (; i<len; i++){
if(i in this&&fun.call(thisp, this[i], i, this)) return true;
}
return false;
};
}
var convert=(function(){
function dash2camel(s){
var i;
while(s.indexOf('-')>-1){
i=s.indexOf('-');
s=s.substring(0,i)+s.charAt(i+1).toUpperCase()+s.substring(i+2);
}
return s;
}
function camel2dash(s){
var i;
while(s.search(/[A-Z]/)>-1){
i=s.search(/[A-Z]/);
s=s.substring(0,i)+'-'+s.charAt(i).toLowerCase()+s.substring(i+1);
}
return s;
}
function underscore2camel(s){
var i;
while(s.indexOf('_')>-1){
i=s.indexOf('_');
s=s.substring(0,i)+s.charAt(i+1).toUpperCase()+s.substring(i+2);
}
return s;
}
function camel2underscore(s){
var i;
while(s.search(/[A-Z]/)>-1){
i=s.search(/[A-Z]/);
s=s.substring(0,i)+'_'+s.charAt(i).toLowerCase()+s.substring(i+1);
}
return s;
}
function style2css(s){
var c='',n;
for (var i in s){
if(isFloat(s[i])||isString(s[i])){
n=dash2camel(i);
if(n=='cssFloat') n='float';
c += n+':'+s[i]+'; ';
}
}
return c;
}
function css2style(c){
var o={};
c.split(/; */g).forEach(function(x){
x=x.trim();
if(!!x){
var i=x.indexOf(':');
var s=convert.dash2camel(x.substring(0,i).trim());
if(s=='float') s='cssFloat';
var v=x.substring(i+1).trim();
o[s]=v;
}
});
return o;
}
function param2object(url){
return getParams(url);
}
function object2param(o){
var i, a=[];
for (i in o){
a[a.length]=i+'='+encodeURIComponent(o[i]);
}
return a.join('&');
}
function attr2json(n,json){
var a;
for (var i=0;i<n.attributes.length;i++){
a=n.attributes[i];
json[a.nodeName]=a.nodeValue;
}
return json;
}
function node2json(n){
n=id(n);
var json;
var l=n.childNodes.length;
var i;
if(l==0){
if(n.attributes&&n.attributes.length>0){
json=attr2json(n,{});
}
}
else {
var childnodes=[];
var child;
var isarray=true;
for (i=0;i<n.childNodes.length;i++){
child=n.childNodes[i];
if(child.nodeName=="#text"){
continue;
}
l=childnodes.length;
childnodes[l]=child;
if(isarray&&l>0){
if(childnodes[l-1].nodeName!=child.nodeName) isarray=false;
}
}
if(childnodes.length==0){
var v=n.childNodes[0].nodeValue;
json=(v=="")?null:v;
}
else if(childnodes.length==1){
json=attr2json(n,{});
json[childnodes[0].nodeName]=node2json(childnodes[0]);
}
else {
if(isarray){
var arrayname=childnodes[0].nodeName;
json={};
json[arrayname]=[];
for (i=0;i<childnodes.length;i++){
json[arrayname][i]=node2json(childnodes[i]);
}
}
else {
json={};
for (i=0;i<childnodes.length;i++){
child=childnodes[i];
json[child.nodeName]=node2json(child);
}
}
}
}
return json;
}
function dom2json(d){
if(d.childNodes.length>=1){
var n=d.childNodes[0];
var j={};
j[n.nodeName]=node2json(n);
return j;
}
return {};
}
function dom2xml(n){
if(!n) return ;
if(client.features('xmlserializer')) return (new XMLSerializer()).serializeToString(n);
else if(!!n.documentElement) return n.documentElement.xml;
else if(!!n.xml) return n.xml;
else ;
}
function json2dom(json,tag, addDefinition){
return xml2dom(json2xml(json,tag, addDefinition));
}
function xmlstr(s){
if(s.indexOf('\n')>-1&&s.indexOf('<![CDATA[')==-1) return '<![CDATA['+s+']]>';
else return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace('\'','&apos;');
}
function json2xml(o,tag,addDefinition){
var xml=(addDefinition)? '<?xml version="1.0" encoding="UTF-8"?>\n':'';
if(isArray(o))
for (var i=0;i<o.length;i++)
xml += json2xml(o[i],tag);
else {
var start=(tag)?'<'+tag+'>':'';
var end=(tag)?'</'+tag+'>':'';
if(isInteger(o)||isFloat(o)) xml += start+o+end;
if(isBoolean(o)) xml += start+o+end;
else if(isString(o)) xml += start+xmlstr(o)+end;
else if(isObject(o)){
xml += start;
for (var i in o)
xml += json2xml(o[i],i);
xml += end;
}
}
return xml;
}
function stripXML(xml){
xml=xml.replace(/\r/g,'');
xml=xml.replace(/\n/g,'\uffff');
xml=xml.replace(/<\!(.*?)>/g,"");
xml=xml.replace(/<\?(.*?)\?>/g,"");
xml=xml.replace(/\uffff/g,'\n');
return xml;
}
function xml2dom(xml,addXML){
if(!xml) return alert('xml2dom no xml');
var d,p;
if(typeof DOMParser=='function'||typeof DOMParser=='object'){
try {
p=new DOMParser();
d=p.parseFromString(xml,"text/xml");
}
catch (e){
}
}
else if(client.features('activex')){
d=new ActiveXObject("MSXML2.DOMDocument.3.0");
d.async=false;
if(xml.indexOf('<?xml')!=0){
xml='<?xml version="1.0" encoding="UTF-8"?>\n'+xml;
}
d.loadXML(xml);
if(d.parseError.errorCode!=0) return alert('convert.xml2dom() error: '+d.parseError.reason);
}
return d;
}
function xml2json(xml){
return dom2json(xml2dom(xml));
}
function obj2json(o, nullStrings, depth){
if(!!o){
var json={};
for (var i in o){
var v=o[i];
if(!!v){
if(isArray(v)){
json[i]=v;
}
else if(isObject(v)){
var o_json=obj2json(v,nullStrings,(depth>1)?--depth:0);
if(o_json) json[i]=o_json;
}
else if(!isFunction(v)) json[i]=v;
}
else if(nullStrings) json[i]='';
}
return json;
}
else if(nullStrings) return {};
}
function quote(s){
var fn=function (a){
var meta={
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'"':'\\"',
'\\': '\\\\'
}
var c=meta[a];
return typeof c === "string" ? c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
};
var c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
return c.test(s)? '"'+s.replace(c, fn)+'"':'"'+s+'"';
}
function json2string(o,k){
var s='';
if(isArray(o)){
var a=[];
for (var i=0; i<o.length; i++){
a.push(json2string(o[i]));
}
s='[' +a.join(',')+']';
}
else if(isObject(o)){
var a=[];
for (var i in o){
if(typeof o[i]!='function'){
a.push(quote(i)+':'+json2string(o[i]));
}
}
s='{'+a.join(',')+'}';
}
else if(isString(o)) s=quote(o);
else if(isInteger(o)||isFloat(o)){
if(isFinite(o)) s=String(o);
else ;
}
else if(isBoolean(o)) s=String(o);
else if(isNull(o)) s='""';
else ;
if(isString(k)) return '{'+quote(k)+':'+s+'}';
else return s;
}
function string2json(s){
var re=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(re.test(s)){
s=s.replace(re, function(a){
return '\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
});
}
return eval('('+s+')');
}
return {
dash2camel:dash2camel,
camel2dash:camel2dash,
underscore2camel:underscore2camel,
camel2underscore:camel2underscore,
style2css:style2css,
css2style:css2style,
param2object:param2object,
object2param:object2param,
attr2json:attr2json,
node2json:node2json,
dom2json:dom2json,
dom2xml:dom2xml,
json2dom:json2dom,
xmlstr:xmlstr,
json2xml:json2xml,
stripXML:stripXML,
xml2dom:xml2dom,
xml2json:xml2json,
obj2json:obj2json,
json2string:json2string,
string2json:string2json
};
})();
var dom=(function(){
function select(n){
var r=[];
var a='';
for (var i=0;i<arguments.length;i++){
a=arguments[i];
if(isFunction(document.querySelector)) r.push(document.querySelector(a));
else if(/^#/.test(a)) r.push(dom.id(a.substring(1)));
}
if(r.length==0) return null;
if(r.length==1) return r[0];
else return r;
}
function id(s,d){
if(isObject(s)) return s;
if(isString(s)){
if(!d) d=document;
var o=d.getElementById(s);
if(!!o) return o;
}
};
function dimensions(o,frame){
var x=y=w=h=0;
var f=!!frame? frame:window;
var d=f.document;
var b=d.body;
var de=d.documentElement;
if(o=='#document'){
if(exists(f,'innerWidth','innerHeight','scrollMaxY','scrollMaxY')){
w=f.innerWidth+f.scrollMaxX;
h=f.innerHeight+f.scrollMaxY;
}
else if(exists(b,'scrollWidth','offsetWidth','scrollHeight','offsetHeight')){
w=(b.scrollWidth>b.offsetWidth)? b.scrollWidth:b.offsetWidth;
h=(b.scrollHeight>b.offsetHeight)? b.scrollHeight:b.offsetHeight;
}
else if(exists(f,'innerHeight','innerHeight')){
w=f.innerWidth,
h=f.innerHeight
}
else if(exists(b,'offsetWidth','offsetHeight')){
w=b.offsetWidth;
h=b.offsetHeight;
}
if(exists(b,'scrollLeft','scrollTop')){
x=b.scrollLeft;
y=b.scrollTop;
}
if(x==0&&y==0&&exists(de,'scrollLeft','scrollTop')){
x=de.scrollLeft;
y=de.scrollTop;
}
}
else if(o=='#window'){
if(exists(f,'innerWidth','innerHeight')){
w=f.innerWidth;
h=f.innerHeight;
}
else if(exists(b,'clientWidth','clientHeight')){
w=b.clientWidth;
h=b.clientHeight;
}
else if(exists(de,'clientWidth','clientHeight')){
w=de.clientWidth;
h=de.clientHeight;
}
if(client.features('activex')){
x=f.screenLeft;
y=f.screenTop;
}
else {
x=f.screenX;
y=f.screenY;
}
}
else if(o=='#screen'){
w=screen.width;
h=screen.height;
}
else {
o=id(o);
if(!!o){
var sx=0;
if(b&&b.scrollLeft) sx=b.scrollLeft;
if(de&&de.scrollLeft) sx=de.scrollLeft;
var sy=0;
if(b&&b.scrollTop) sy=b.scrollTop;
if(de&&de.scrollTop) sy=de.scrollTop;
var r;
if(o.getBoundingClientRect){
r=o.getBoundingClientRect();
x=r.left+sx;
y=r.top+sy;
w=r.right - r.left;
h=r.bottom - r.top;
}
else if(d.getBoxObjectFor){
r=d.getBoxObjectFor(o);
x=r.x;
y=r.y;
w=r.width;
h=r.height;
}
else {
return offsetDimensions(o);
}
}
}
return {x:round(x),y:round(y),w:round(w),h:round(h)};
};
function offsetDimensions(o){
var x=y=0;
var w=o.offsetWidth;
var h=o.offsetHeight;
while (o.offsetParent){
x += o.offsetLeft;
y += o.offsetTop;
o=o.offsetParent;
}
var d=document;
x += (d.body.scrollLeft||d.documentElement.scrollLeft||0);
y += (d.body.scrollTop||d.documentElement.scrollTop||0);
return {x:x,y:y,w:w,h:h};
};
function getScroll(n){
n=id(n);
return {x:n.scrollLeft,y:n.scrollTop};
}
function addClass(n,c){
n=id(n);
if(!n){
return;
}
if(n.nodeType==1){
if(!hasClass(n,c)){
if(isNull(n.className)) n.className=c;
else n.className += " "+c;
}
}
return n;
};
function removeClass(n,c){
n=id(n);
if(hasClass(n,c)) n.className=trim(n.className.replace(c,'').replace('  ',''));
}
function replaceClass(n,className,newClassName){
n=id(n);
if(hasClass(n,className)) n.className=n.className.replace(className,newClassName);
return n;
}
function findClass(tagAndOrClass,parentNode){
var node=!!parentNode? id(parentNode):document.body;
var r=[];
if(!node) return r;
var n;
var dot=tagAndOrClass.indexOf('.');
if(dot>=0){
var tagname=tagAndOrClass.substring(0,dot);
var className=tagAndOrClass.substring(dot+1);
var nodes=node.getElementsByTagName(tagname);
for (var i=0;i<nodes.length;i++){
nd=nodes[i];
if(hasClass(nd,className)) r.push(nd);
}
}
else {
walkDOM(node, function(nd){
if(hasClass(nd,cname)) r.push(nd);
});
}
return r;
};
function hasClass(n,cname){
n=id(n);
return !!n.className&&(n.className==cname||n.className.split(' ').contains(cname));
};
function cssLoaded(link,handler){
var loaded=false;
var s=document.styleSheets;
for (var i=0;i<s.length;i++){
if(s[i].href==link.href){
try {
if(!!s[i].cssRules||!!s[i].rules){
handler();
return;
}
}
catch(e){}
}
}
setTimeout(function(){
cssLoaded(link,handler);
},10);
}
function insertTag(o){
var s=document.createElement(o.tagName);
if(o.attributes.type&&typeof o.handler=='function'){
if(o.attributes.type=='text/javascript'){
var h=function(){
o.handler(s);
}
if(!client.features('activex')) s.onload=function(){
alert('ie handler '+h+' '+s);
h(s);
}
}
if(o.attributes.type=='text/css'){
cssLoaded(s,o.handler);
}
}
for (var i in o.attributes){
s.setAttribute(i,o.attributes[i]);
}
if(o.after) after(s, o.after);
else if(o.before) before(s, o.before);
else if(o.prepend) prepend(s, o.prepend);
else if(o.append){
if(o.append=='#head') append(s, document.getElementsByTagName('head')[0]);
else append(s, o.append);
}
else append(s);
if(isFunction(o.handler)&&o.attributes.type=='text/javascript'&&client.features('activex')){
scriptLoaded(s,o.handler);
}
return s;
};
function scriptLoaded(s,callback){
if(!callback) return alert('no callback '+s);
if(s.readyState=='loading') setTimeout(function(){
scriptLoaded(s,callback);
},20);
else if(s.readyState=='loaded'){
callback();
}
else ;
}
function append(n, p){
if(jaxLoaded()){
n=id(n);
p=id(p);
if(n.nodeType==9
){
n=n.lastChild;
}
if(!p&&exists(document,'body')) p=document.body;
if(!!p&&!!p.appendChild){
p.appendChild(n);
}
return n;
}
else ;
}
function prepend(n, p){
if(jaxLoaded()){
n=id(n);
p=id(p);
if(!p&&exists(document,'body')) p=document.body;
if(n.firstChild) before(n, p.childNodes[0]);
else append(n, p);
return n;
}
else ;
}
function after(n, s){
n=id(n);
return s.parentNode.insertBefore(n, s.nextSibling);
};
function before(n, s){
n=id(n);
s=id(s);
if(!s) log.error('dom.before(): sibling node does not exist');
else if(!n) log.error('dom.before(): source node does not exist');
else return s.parentNode.insertBefore(n, s);
}
function remove(n){
n=id(n);
n.parentNode.removeChild(n);
}
function replace(a,b){
a=id(a);
if(!b) return ;
var nodes=[];
if(isString(b)){
if(client.features('activex')){
a.outerHTML=b;
return a;
}
b=dom.createNode(b);
}
if(b.nodeType==9){
if(!b.lastChild) return alert('dom.replace() error: no last child');
if(isFunction(document.adoptNode)){
b=document.adoptNode(b.lastChild);
}
else b=b.lastChild;
}
else if(b.nodeType==11){
b=b.childNodes;
}
if(b.length){
var r=[];
for (var i=b.length-1;i>=0;i--){
r.unshift(dom.after(b[i],a));
}
dom.remove(a);
return r;
}
else {
if(client.features('activex')){
if(isString(b)){
var h=convert.dom2xml(b);
var d=dom.createNode(h);
a.parentNode.replaceChild(d, a);
return d;
}
else if(isNode(b)){
var xml=convert.dom2xml(b);
var c=dom.createNode(xml);
a.parentNode.replaceChild(c, a);
return c;
}
}
else {
a.parentNode.replaceChild(b, a);
return b;
}
}
}
function children(n){
n=id(n);
if(n&&n.childNodes&&n.childNodes.length>0) return n.childNodes;
else return [];
}
function findParent(n,tag,stopTag){
n=id(n);
while (n.parentNode){
if(stopTag!=null&&n.parentNode.nodeName.toUpperCase()==stopTag) return;
if(n.parentNode.nodeName.toUpperCase()==tag.toUpperCase()){
return n.parentNode;
}
n=n.parentNode;
}
};
function isChild(n,p){
return isParent(p,n);
};
function isParent(p,n){
if(n==p) return false;
if(client.features('activex')&&typeof p.contains=='function'&&n.nodeType==1){
return n==p||p.contains(n);
}
while (n){
if(n==p) return true;
n=n.parentNode;
}
return false;
};
function isSibling(n,s){
s=id(s);
var c=id(n).parentNode.childNodes;
for (var i=0;i<c.length;i++)
if(c[i]==s) return true;
return false;
};
function nextSibling(n){
while (!!n.nextSibling){
if(n.nextSibling.nodeName!='#text') return n.nextSibling;
else n=n.nextSibling;
}
return null;
};
function firstChild(n){
n=id(n);
var c=n.childNodes;
for (var i=0;i<c.length;i++){
if(c[i].nodeType!=3) return c[i];
}
}
function lastChild(n){
n=id(n);
var c=n.childNodes;
for (var i=c.length-1;i>=0;i++){
if(c[i].nodeType!=3) return c[i];
}
}
function getScriptPath(file){
if(!file) file='jaxscript.js';
file=file.replace('.','\.');
var re=new RegExp("(^|\/)"+file+"([?#].*)?$","i");
var s=document.getElementsByTagName('script');
for (var i=0;i<s.length;i++){
if(s[i].src&&re.test(s[i].src)){
return s[i].src.replace(/[^\/]+$/,'').replace(/\/$/, '');
}
}
return '';
}
function loadCSS(css,fn){
if(!jaxLoaded()){
var i=style._css_loading.length;
document.write('<link id="_sheet_'+i+'" rel="stylesheet" type="text/css" href="'+css+'" />');
style._css_loading[i]=id('_sheet_'+i);
if(isFunction(fn)){
run(function(){
fn();
});
}
return dom.id('_sheet_'+i);
}
else return insertTag({
tagName:'link',
handler:fn,
attributes:{
href:css,
type:'text/css',
rel:'stylesheet'
},
append:'#head'
});
};
function loadJS(js,fn){
if(!jaxLoaded()){
document.write('<script type="text/javascript" src="'+js+'"><\/script>');
if(isFunction(fn)){
run(function(){
fn();
});
}
}
else return insertTag({
tagName:'script',
handler:fn,
attributes:{
src:js,
type:'text/javascript'
},
append:'#head'
});
}
function loadDOM(url){
return request({
url:url,
async:false
}).responseXML;
}
function loadText(url){
return request({
url:url,
async:false
}).responseText;
}
function loadJSON(url, fn, params){
run(function(){
request({
url:url,
method:"get",
handler:function(r,p){
fn(convert.string2json(r.responseText),p);
},
async:true,
params:params
});
});
};
function loadJSONP(url, handler, params){
var callback='jsonp'+uniqueId();
window[callback]=function(json){
handler(json,params);
setTimeout(function(){
delete window[callback].json;
window[callback]=null;
},1);
};
setTimeout(function(){
dom.loadJS(url+callback);
},0);
}
function walk(n, fn){
if(n.nodeName&&n.childNodes){
fn(n);
n=n.firstChild;
while (n){
walk(n,f);
n=n.nextSibling;
}
}
else if(isArray(n)){
for (var i in n){
fn(n[i]);
}
}
};
function outerHTML(n,deep){
if(!isNode(n)) return '';
if(n.outerHTML) return n.outerHTML;
else {
var d=document.createElement('div');
var clone=n.cloneNode(deep);
dom.append(clone,d);
return d.innerHTML;
}
}
function createNode(html,xmldoc){
if(!html) return alert('no html');
if(!xmldoc) xmldoc=document;
if(html.indexOf('<')==-1){
return document.createTextNode(html);
}
var h=html.substring(1,html.indexOf('>'));
var i=h.indexOf(' ');
var attr={};
var tag=h;
var at,p,j;
if(i>=1){
tag=h.substring(0,i);
if(tag.charAt(tag.length-1)=='/') tag=tag.substring(0,tag.length-2);
at=h.substring(tag.length+1);
var re=/ *(.*?)\="(.*?)"/g;
at.match(re).forEach(function(m){
var i=m.indexOf('=');
var n=m.substring(0,i);
var v=trimQuotes(m.substring(i+1));
attr[n]=v;
});
}
var ihtml=html.substring(html.indexOf('>')+1,html.lastIndexOf('<'));
var d=xmldoc.createElement(tag);
var v,p;
for (var i in attr){
v=attr[i];
if(i=='class') d['className']=v;
else if(i=='style'){
style.set(d,convert.css2style(v));
}
else {
try {
d[i]=attr[i];
}
catch(e){
alert('dom.createNode() error: attr '+i+'\n'+inspect(e));
}
}
}
d.innerHTML=ihtml;
return d;
}
function addEvent(n,e,h,p){
n=id(n);
if(n){
if(n.addEventListener) n.addEventListener(e,h,(p==null)?false:p);
else if(n.attachEvent) n.attachEvent("on"+e,h);
}
else ;
}
function removeEvent(n,e,h,p){
n=id(n);
if(n){
if(n.removeEventListener) n.removeEventListener(e,h,(p==null)?false:p);
else if(n.detachEvent) n.detachEvent("on"+e,h);
}
else ;
}
function cancelEvent(e){
e.cancelBubble=true;
e.returnValue=false;
if(e.stopPropagation) e.stopPropagation();
if(e.preventDefault) e.preventDefault();
return false;
};
function preventDefault(e){
e.returnValue=false;
if(e.preventDefault) e.preventDefault();
return false;
};
function eventAbsPosition(e){
if(window.event){
e=window.event;
var elm=(document.documentElement)? document.documentElement:document.body;
return {
x:e.clientX+elm.scrollLeft,
y:e.clientY+elm.scrollTop
};
}
else if(exists(e,'pageX','pageY')) return {x:e.pageX,y:e.pageY};
else return null;
};
function eventPosition(e){
var g=client.features('gecko');
return {
x:g? e.layerX:e.offsetX,
y:g? e.layerY:e.offsetY
}
}
function relatedTarget(e){
var r=e.relatedTarget;
if(r){
try {
r.nodeName;
}
catch (e){
if(r.nodeType==3) return r.parentNode;
return null;
}
return r;
}
if(window.event){
if(e.type=="mouseover"&&window.event.fromElement) return window.event.fromElement;
if(e.type=="mouseout"&&window.event.toElement) return window.event.toElement;
}
}
function eventTarget(e){
var t=(e&&e.target)? e.target:window.event.srcElement;
return (t.nodeType==3)? t.parentNode:t;
};
function request(o){
if(!client.features('xhr')) return;
if(!o.method) o.method="get";
if(o.async==null) o.async=true;
if(o.cache===false) url += url.indexOf('?')>0?'&':'?'+'nocache='+Math.random().toString().substring(2);
var r=(typeof XMLHttpRequest=='function'||typeof XMLHttpRequest=='object')? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
r.open(o.method,o.url,o.async);
if(o.async){
r.onreadystatechange=function(){
if(r.readyState==4){
if(r.status==200){
if(isFunction(o.handler)){
return o.handler(r,o.params);
}
else ;
}
else {
if(isFunction(o.errorHandler)) o.errorHandler(r);
}
}
};
}
try {
r.send('');
}
catch(e){
if(isFunction(o.errorHandler)){
o.errorHandler(r);
}
}
if(o.async==false&&isFunction(o.handler)) o.handler(r,o.params);
return r;
};
return {
select:select,
id:id,
dimensions:dimensions,
offsetDimensions:offsetDimensions,
getScroll:getScroll,
addClass:addClass,
removeClass:removeClass,
replaceClass:replaceClass,
findClass:findClass,
hasClass:hasClass,
insertTag:insertTag,
append:append,
prepend:prepend,
after:after,
before:before,
remove:remove,
replace:replace,
children:children,
findParent:findParent,
nextSibling:nextSibling,
isChild:isChild,
isParent:isParent,
isSibling:isSibling,
firstChild:firstChild,
lastChild:lastChild,
getScriptPath:getScriptPath,
loadCSS:loadCSS,
loadJS:loadJS,
loadDOM:loadDOM,
loadText:loadText,
loadJSON:loadJSON,
loadJSONP:loadJSONP,
walk:walk,
outerHTML:outerHTML,
createNode:createNode,
addEvent:addEvent,
removeEvent:removeEvent,
cancelEvent:cancelEvent,
preventDefault:preventDefault,
eventAbsPosition:eventAbsPosition,
eventPosition:eventPosition,
relatedTarget:relatedTarget,
eventTarget:eventTarget,
request:request
};
})();
//var $=dom.select;
var fx=(function(){
function fadeIn(n,fn){
fade(n,1,fn);
}
function fadeOut(n,fn){
fade(n,0,fn);
}
function fadeCancel(n){
if(!!n._fadeTimer) clearTimeout(n._fadeTimer);
}
function fade(n,limit,fn,inc,s){
n=dom.id(n);
style.opacity(n, style.getOpacity(n));
if(inc==null) inc=0.1;
else inc=Math.abs(inc);
if(s==null) s=50;
if(limit==null||limit<0) limit=0;
if(limit>1) limit=1;
if(style.getOpacity(n)>limit) inc=-inc;
fadeCancel(n);
fadeStep(n,limit,fn,inc,s);
};
function fadeStep(n,limit,fn,inc,s){
var x=style.getOpacity(n)+inc;
if(inc>0&&x>limit||inc<0&&x<limit) x=limit;
style.opacity(n,x);
if(x!=limit)
n._fadeTimer=setTimeout(function(){
fadeStep(n,limit,fn,inc,s);
},s);
else {
if(isFunction(fn)) fn();
}
};
return {
fade:fade,
fadeIn:fadeIn,
fadeOut:fadeOut,
fadeCancel:fadeCancel
}
})();
var log=(function(){
var _level=7;
var levelNames='all,debug,info,warn,error,fatal,off'.split(',');
var loggers=[];
var level=enumerate('all,debug,info,warn,error,fatal,off');
function createConsole(){
run(function(){
if(!dom.id('jaxcore_console')){
var c=document.createElement('div');
c.id="jaxcore_console";
style.set(c,{position:'absolute',overflow:'scroll',right:0,bottom:0,width:'350px',height:'200px',background:'#fff',border:'1px solid grey',fontSize:'8pt'});
dom.append(c);
}
});
}
function getLevel(){
return _level;
}
function getLevelName(){
return levelNames[_level-1];
}
function setLevel(l){
if(typeof l=='number'&&l>=1&&l<=7) _level=l;
debug('log level set to '+getLevel()+' ('+getLevelName()+')');
}
function make(lvl){
return function(msg){
if(_level<=lvl)
for (var i in loggers)
loggers[i](lvl,msg);
};
}
var debug=make(2), info=make(3), warn=make(4), error=make(5), fatal=make(6);
setLevel(level.info);
function addLogger(logger){
loggers.push(logger);
};
function JaxLogger(level,msg){
var s=levelNames[level-1].toUpperCase()+':'+msg;
var type;
if(level==2) type='info';
else if(level==3) type='warn';
else if(level==4||level==5) type='error';
var c=window.console;
if(type=='error'&&c.error) c.error(s);
else if((type=='info'||type=='warn')&&c.error) c.error(s);
else ;
}
addLogger(JaxLogger);
return {
level:level,
createConsole:createConsole,
addLogger:addLogger,
getLevel:getLevel,
getLevelName:getLevelName,
print:print,
setLevel:setLevel,
debug:debug,
info:info,
warn:warn,
error:error,
fatal:fatal
};
})();
var style=(function(){
function clip(n,i){
return set(n,{
clip:(i&&i.length==4)? 'rect('+i[0]+'px '+i[1]+'px '+i[2]+'px '+i[3]+'px)':'auto'
});
}
function display(n,b){
var s=b? 'block':'none';
return set(n,{
display:s
});
}
function getBorder(n){
return {
t:parseInt(get(n,'border-top-width')),
r:parseInt(get(n,'border-right-width')),
b:parseInt(get(n,'border-bottom-width')),
l:parseInt(get(n,'border-left-width'))
}
}
function getClip(n){
n=dom.id(n);
var c=n.style.clip;
if(c&&c.indexOf('rect(')==0){
c=c.replace("rect(","");
c=c.replace(")","");
var v=c.split(" ");
for (var i in v) v[i]=parseInt(v[i]);
return v;
}
else return [0, n.offsetWidth, n.offsetHeight, 0];
}
function getOpacity(n){
n=dom.id(n);
return isFloat(n.style.opacity)? parseFloat(n.style.opacity):1;
}
function get(n,s){
n=dom.id(n);
if(isString(s)){
var camel=convert.dash2camel(s);
if(s=="opacity") return isFloat(n.style.opacity)? n.style.opacity:1;
if(!!document.defaultView) return document.defaultView.getComputedStyle(n,"").getPropertyValue(s);
else if(n.currentStyle) return n.currentStyle[camel];
else if(n.style[camel]) return n.style[camel];
else if(isNode(n)) ;
}
}
function getXY(n){
n=dom.id(n);
return {
x:parseInt(get(n,'left')),
y:parseInt(get(n,'top'))
}
};
var _z=5000;
function maxZ(n){
return set(n,{zIndex:++_z});
}
function getSize(n){
return {
w:parseInt(get(n,'width')),
h:parseInt(get(n,'height'))
}
}
function mk(s){
var p=[
{node:'Node'},
{nodeId:'String'}
];
p[0][s]=p[1][s]='Integer';
return function(n,x){
var o={};
o[s]=px(x);
return set(n,o);
}
}
var left=mk('left');
var right=mk('right');
var top=mk('top');
var bottom=mk('bottom');
var width=mk('width');
var height=mk('height');
function move(n,x,y){
return set(n,{
left:px(x),
top:px(y)
});
}
function opacity(n,f){
n=dom.id(n);
f=parseFloat(f);
if(f<0) f=0;
if(f>1) f=1;
n.style.opacity=f;
if(client.features('activex')) n.style.filter='alpha(opacity='+f*100+')';
return n;
}
function px(i){
return round(parseNumber(i))+'px';
}
function size(n,w,h){
return set(n,{
width:px(w),
height:px(h)
});
}
function set(o,s){
var n=dom.id(o);
if(!!n){
if(isArray(n)){
for (var i=0;i<n.length;i++)
cloneFrom(n[i].style,s);
}
else if(!!n.style){
cloneFrom(n.style,s);
return n;
}
}
}
function swap(a,b){
display(a,0);
display(b,1);
}
function show(o){
return visible(o,true);
}
function hide(o){
return visible(o,false);
}
function visible(n,b){
return set(n,{visibility:b?'visible':'hidden'});
}
function getRule(selector, stylesheet, returnIndex){
var sheets=(!!stylesheet)? [stylesheet]:document.styleSheets;
var s,r,i,j;
for (i=0; i<sheets.length; i++){
s=sheets[i];
r=(!!s.cssRules)? s.cssRules:s.rules;
if(!r) return ;
for (j=0; j<r.length; j++){
if(r[j].selectorText==selector){
if(returnIndex) return j;
else return r[j];
}
}
}
if(returnIndex) return -1;
}
function createRule(selector,styles,stylesheet){
if(!stylesheet) stylesheet=document.styleSheets[0];
if(typeof stylesheet.addRule=='object'||typeof stylesheet.addRule=='function'){
var r=stylesheet.addRule(selector, styles, 0);
}
else if(typeof stylesheet.insertRule=='function'){
var r=stylesheet.insertRule(selector+' {'+styles+'}', 0);
}
}
function deleteRule(selector, stylesheet){
var r=getRule(selector, stylesheet);
var i=getRule(selector, r.parentStyleSheet, true);
if(i>-1&&!!r&&!!r.parentStyleSheet){
if(r.parentStyleSheet.deleteRule){
r.parentStyleSheet.deleteRule(i);
}
else if(r.parentStyleSheet.deleteRule){
r.parentStyleSheet.removeRule(i);
}
}
}
return {
_css_loading:[],
clip:clip,
display:display,
getBorder:getBorder,
getClip:getClip,
getOpacity:getOpacity,
getSize:getSize,
get:get,
getXY:getXY,
maxZ:maxZ,
move:move,
opacity:opacity,
size:size,
set:set,
visible:visible,
left:left,
top:top,
right:right,
bottom:bottom,
width:width,
height:height,
show:show,
hide:hide,
getRule:getRule,
createRule:createRule,
deleteRule:deleteRule
}
})();var xsl=(function(){
function setParam(xsldom,paramName,paramValue){
var root=xsldom.childNodes[xsldom.childNodes.length-1];
var nodes=root.childNodes;
for (var i=0;i<nodes.length;i++){
if(nodes[i].nodeName=='xsl:param'){
if(nodes[i].getAttribute('name')==paramName){
var svalue;
if(isString(paramValue)) svalue="'"+paramValue+"'";
else svalue=paramValue;
nodes[i].setAttribute('select',svalue);
return;
}
}
}
var v;
if(isFunction(xsldom.createElementNS)){
v=xsldom.createElementNS('http://www.w3.org/1999/XSL/Transform','xsl:param');
}
else {
v=xsldom.createElement('xsl:param');
}
v.setAttribute('name',paramName);
v.setAttribute('select',paramValue);
root.appendChild(v);
}
function getJaxArgsXSL(args){
var xs='<?xml version="1.0"?>'+
'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:jax="http://www.jaxcore.com/jax/app">'+
'<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />'+
'<xsl:template match="@*|node()">'+
'<xsl:copy>'+
'<xsl:apply-templates select="@*|node()"/>'+
'</xsl:copy>'+
'</xsl:template>';
var v,m,nv;
for (var arg in args){
v=args[arg];
if(isNumber(v)){
xs += '<xsl:variable name="'+arg+'" select="'+v+'" />';
}
else if(isString(v)){
if(m=v.match(/^\$([A-z0-9|.]+)\((.*)\)$/)){
if(exists(global(),m[1])){
var a=m[2].split(',');
nv=global(m[1]).apply(null,a);
v=nv;
}
}
xs += '<xsl:variable name="'+arg+'" select="\''+v+'\'" />';
}
xs += '<xsl:template match="jax:arg[@name=\''+arg+'\']">'+
'	<xsl:value-of select="$'+arg+'"/>'+
'</xsl:template>';
}
xs += '</xsl:stylesheet>';
var xsd=convert.xml2dom(xs);
return xsd;
}
function addJaxArg(xsldom,varName){
if(xsldom.createElementNS){
var t=xsldom.createElementNS('http://www.w3.org/1999/XSL/Transform','xsl:template');
t.setAttribute('match',"arg[@name='"+varName+"']");
var v=xsldom.createElementNS('http://www.w3.org/1999/XSL/Transform','xsl:value-of');
v.setAttribute('select',"$"+varName);
t.appendChild(v);
dom.lastChild(xsldom).appendChild(t);
}
else {
var t=xsldom.createElement('xsl:template');
}
}
function setVariable(xsldom,varName,varValue){
var root=xsldom.childNodes[xsldom.childNodes.length-1];
var nodes=root.childNodes;
for (var i=0;i<nodes.length;i++){
if(nodes[i].nodeName=='xsl:variable'){
if(nodes[i].getAttribute('name')==varName){
if(isNumber(varValue)){
nodes[i].setAttribute('select',varValue);
}
else if(isString(varValue)){
nodes[i].setAttribute('select',"'"+varValue+"'");
}
return;
}
}
}
var v;
if(isFunction(xsldom.createElementNS)){
v=xsldom.createElementNS('http://www.w3.org/1999/XSL/Transform','xsl:variable');
}
else {
v=xsldom.createElement('xsl:variable');
}
v.setAttribute('name',varName);
if(isNumber(varValue)){
v.setAttribute('select',varValue);
}
else if(isString(varValue)){
v.setAttribute('select',"'"+varValue+"'");
}
root.appendChild(v);
}
function transform(xmldom, xsldom, options){
if(!options) options={
params:{},
output:'xml'
};
if(isString(xmldom)){
xmldom=dom.loadDOM(xmldom);
}
if(isString(xsldom)){
xsldom=dom.loadDOM(xsldom);
}
if(!!xsldom&&!!xsldom.childNodes&&!!xmldom&&!!xmldom.childNodes){
if((typeof XSLTProcessor=='function'&&typeof XMLSerializer=='function')||(typeof XSLTProcessor=='object'&&typeof XMLSerializer=='object')){
var p=new XSLTProcessor(),s=new XMLSerializer();
try {
p.importStylesheet(xsldom);
}
catch (e){
return;
}
if(options.output=="xmldoc") return p.transformToDocument(xmldom);
else {
var x=p.transformToFragment(xmldom,document);
if(x&&x.childNodes&&x.childNodes.length>0){
if(options.output=='xml') return x;
else if(options.output=='html') return s.serializeToString(x,"text/html");
}
else ;
return '';
}
}
else if(client.features('activex')){
var html=xmldom.transformNode(xsldom);
if(options.output=='xml'||options.output=='xmldoc'){
var x=convert.xml2dom(html);
return x;
}
else {
return html;
}
}
}
else alert('dom.transform() critical error: xmldom='+xmldom+' xsldom='+xsldom);
return (options.output=="xml")?null:"";
}
return {
setParam:setParam,
setVariable:setVariable,
getJaxArgsXSL:getJaxArgsXSL,
transform:transform
}
})();



/*Push Down Banners*/




var PushdownAd = createClass("PushdownAd",function() {
	
	function PushdownAd(bannerId) {
		this.bannerId = bannerId;
		this.elm = {};
		this.init();
	}
	
	function init() {
	/*	if(!(typeof ClCode === 'undefined')){
		      if(typeof panid === 'undefined' && ClCode!='BRO667AG'){
			        disableAd='Yes';
			  }
		}*/
		if(!(typeof banType === 'undefined')){
		  if (!(typeof panid === 'undefined')){
			    if(panid=='bn_08-11-2000_17:52:09'){
					 if(ClCode!='BRO667AG'){
					  disableAd='Yes';
					 }
				}else{
					  ocis(panid);
				}
		  }else{
			   disableAd='Yes';
			}
	}
		this.elm.banner = dom.id(this.bannerId);
			
		this.expandH = 0;
		var s = '';
		for (var i=0;i<this.elm.banner.childNodes.length;i++) {
			var c = this.elm.banner.childNodes[i];
			s += c.tagName+" "+i+"\n";
			if (c.tagName=='OBJECT') {
				this.expandH = c.height;
				break;
			}
		}
		
		
		this.bannerH = dom.dimensions(this.elm.banner).h;
		
		
		
		if (dom.hasClass(this.elm.banner,'PushdownAd-countdown')) {
			this.bindEvent(this.elm.banner,"mouseover","countdownover",false);
			this.bindEvent(this.elm.banner,"mouseout","countdownout",false);
		}
		else {
			if (dom.hasClass(this.elm.banner,'PushdownAd-rollover')) {
				this.bindEvent(this.elm.banner,"mouseover","open");
				this.bindEvent(this.elm.banner,"mouseout","close");
			}
			
			if (dom.hasClass(this.elm.banner,'PushdownAd-autoopen')) {
				var me = this;
				setTimeout(function() {
					me.open();
				},500);
			}
		}
	}
	
	function countdownout(e) {
		
		var src = dom.eventTarget(e);
		var rel = dom.relatedTarget(e);

		
		var r = (typeof rel!='undefined')?rel.nodeName:""
		echo('mouse out '+src.nodeName+' '+r);
		
		if (rel && (rel.nodeName=='EMBED'||rel.nodeName=='OBJECT') && src.nodeName=='DIV') {
			echo('cancel this one');
			return;
		}
		
		if (rel && rel.nodeName=='DIV' && (src.nodeName=='EMBED'||src.nodeName=='OBJECT')) {
			//echo('cancel this one too');
			//return;
		}
		
		if (this.countingDown) {
			var swf = self.PushdownAd.getFlash(this.bannerId+'_movie');
			if (isFunction(swf.cancelCountdown)) {
				swf.cancelCountdown();
				echo('cancel countdown');
			}
			else alert('no cancelCountdown');
			this.countingDown = false;
		}
		
		if (this.isOpen) this.close();
	}
	
	function countdownover(e) {
		
		var src = dom.eventTarget(e);
		var rel = dom.relatedTarget(e);
		
		var r = (typeof rel!='undefined')?rel.nodeName:""
		
		if (src.nodeName=='EMBED' || src.nodeName=='OBJECT') {		
			echo('countdown begins '+src.nodeName+' '+r);
			if (!this.countingDown) {
				var swf = self.PushdownAd.getFlash(this.bannerId+'_movie');
				if (isFunction(swf.startCountdown)) {
					this.countingDown = true;
					swf.startCountdown();
				}
			}
		}
	}
	
	function open() {
		 if(disableAd=='No'){
			     
					echo('open()');
					if (!(typeof panid === 'undefined') && panid!='bn_08-11-2000_17:52:09') {ocso(panid);}
					if(document.getElementById('mainimg')!=null){
						if(document.getElementById('mainimg').nodeName=='DIV'){
							this.expandH=document.getElementById('mainimg').clientHeight;
						
						}else{
						
						 this.expandH=document.getElementById('mainimg').height;
						}
						
					
					}
					if(document.getElementById('closeimg')!=null){
					  if(document.getElementById('closeimg').nodeName=='DIV'){
							this.expandH+=document.getElementById('closeimg').clientHeight;
						}else{
						
						 this.expandH+=document.getElementById('closeimg').height;
						}
					}
				
					if(document.getElementById('firstimg')!=null){
					  
							if(document.getElementById('firstimg').nodeName=='DIV'){
							this.expandH+=document.getElementById('firstimg').clientHeight;
						}else{
						
						 this.expandH+=document.getElementById('firstimg').height;
						}
						
						if(document.getElementById('firstimg').nodeName=='DIV'){
							this.bannerH=document.getElementById('firstimg').clientHeight;
						}else{
						
						 this.bannerH=document.getElementById('firstimg').height;
						}
			
			}
					cheight=this.expandH;
					var h = dom.dimensions(this.elm.banner).h;
					//	if (!this.resizing || !this.opening) {
					if (!this.resizing && !this.opening) {
						var swf = this.getFlash();
						var p = this;
						this.resizeTo(this.elm.banner, null, this.expandH, function() {
							p.isOpen = true;
							if (isFunction(swf.bannerOpenFrame)) swf.bannerOpenFrame();
							else echo('Pushdown Banners Error:\nSWF file does not have "bannerOpenFrame" function assigned');
							
						});
						
					}
		
				}
	}
	
	function close() {
		echo('close()');
		
		var h = dom.dimensions(this.elm.banner).h;
		if (!this.resizing && !this.closing) {
			var swf = this.getFlash();
			var p = this;
			this.resizeTo(this.elm.banner, null, this.bannerH, function() {
				p.isOpen = false;
				if (isFunction(swf.bannerCloseFrame)) swf.bannerCloseFrame();
				else echo('Pushdown Banners Error:\nSWF file does not have "bannerCloseFrame" function assigned');
			});
		}
		 
	}
	
	function resizeTo(elm,w,h,fn) {
		var dim = dom.dimensions(elm);
		if (h==dim.h) {
			return;
		}
		//else echo('resizeTo h='+h+' dim.h='+dim.h);
		
		clearInterval(this.timer);
		var me = this;
		echo('start '+(new Date().valueOf()));
		var speed = 20;
		var time = 2200;
		var steps = parseInt(time/speed);
		var distanceH = h - dom.dimensions(elm).h;
		var dy = distanceH/steps;
		var opening = h > dom.dimensions(elm).h;
		
		this.opening = opening;
		this.closing = !opening;
		
		this.resizing = true;
		
		me.timer = setInterval(function() {
			var ch = dom.dimensions(elm).h;
			var nh = ch + dy;
			if (h>ch && nh>h || h<ch && nh<h) nh = h;
			if (opening & nh>h) nh = h;
			if (!opening & nh<h) nh = h;
			style.height(elm, nh);
			if (!(typeof _dfpId === 'undefined')) {style.height(parent.document.getElementById(_dfpId),nh);}
			if (nh==h) {
				//echo('end timer='+me.timer);
				clearInterval(me.timer);
				me.resizing = false;
				fn();
			}
			
		},speed);
	}
	
	function getFlash() {
		return self.PushdownAd.getFlash(this.bannerId+'_movie');
	}
		
	return {
		getFlash : getFlash,
		PushdownAd : PushdownAd,
		init : init,
		resizeTo : resizeTo,
		countdownover : countdownover,
		countdownout : countdownout,
		open : open,
		close : close
	}
	
});

PushdownAd.getFileName = function(swf) {
	if (swf.nodeName=='EMBED') return swf.src;
	else {
		for (var i=0;i<swf.childNodes.length;i++) {
			if (swf.childNodes[i].nodeName=='PARAM' && swf.childNodes[i].name=='movie') {
				return swf.childNodes[i].value;
			}
		}
	}
};
PushdownAd.instances = {};
PushdownAd.get = function(id) {
	if (PushdownAd.instances[id]) return PushdownAd.instances[id];
};
PushdownAd.getFlash = function(movieName) {
	return client.features('activex')? window[movieName] : document[movieName];
};

run(function() {
	var div = document.getElementsByTagName('div');
	for (var i=0;i<div.length;i++) {
		if (dom.hasClass(div[i],'PushdownAd')) {
			PushdownAd.instances[div[i].id] = new PushdownAd(div[i].id);
		}
	}
});

function getTextFromFlash(str) {
	document.htmlForm.receivedField.value = "From Flash: " + str;
	return str + " received";
}

function PushdownAd_jsOpen(n) {
	var p = PushdownAd.get(n);
	if (p) {
		p.countingDown = false;
		p.open();
	}
}
function autostart(){
if(typeof _gPDBAutoopen !== 'undefined' || typeof _gPDBAutoclose !== 'undefined'){
  
	    if(typeof _gPDBAutoopen !== 'undefined' && typeof _Toggle !== 'undefined'){
 setTimeout("PushdownAd.get('PushdownAd1').open();toggle(1);",_gPDBAutoopen);
	   }else if(typeof _gPDBAutoopen !== 'undefined' && typeof _Toggle === 'undefined'){
		   setTimeout("PushdownAd.get('PushdownAd1').open();",_gPDBAutoopen);
	   }
	   if(typeof _gPDBAutoclose !== 'undefined'){
  setTimeout("PushdownAd.get('PushdownAd1').close();toggle(0);", _gPDBAutoclose);
	   }
   

}
}

function toggle(state) {
 togg=true;	
var d1=document.getElementById("pushdownopen");
var d2=document.getElementById("pushdownclose");
if(d1!=null){
if(state==1){
	if(document.getElementById('firstimg')!=null){
           if(document.getElementById('firstimg').nodeName=='DIV'){
				cheight-=document.getElementById('firstimg').clientHeight;
			}else{
			
		     cheight-=document.getElementById('firstimg').height;
			}  
	}else{
	cheight-=document.getElementById('pushdownopen').clientHeight
	}
			PushdownAd.get('PushdownAd1').resizeTo(document.getElementById('PushdownAd1'), null, cheight,null);
d1.style.display ="none";
}
else if(state==0){
d1.style.display ="block";

}
}

}
window.onload=function(){
  if(document.getElementById('firstimg')!=null){
	  
	  if(document.getElementById('firstimg').nodeName=='DIV'){
				document.getElementById('PushdownAd1').style.height=document.getElementById('firstimg').clientHeight+'px';
				
				//console.log(document.getElementById('firstimg').clientHeight);
			}else{
			
		     document.getElementById('PushdownAd1').style.height=document.getElementById('firstimg').height+'px';
			
			}

}
if(document.getElementById('mainimg')!=null && document.getElementById('outer')!=null){
	  
	  if(document.getElementById('mainimg').nodeName=='DIV'){
				
			}else{
			
		    
			document.getElementById('outer').style.width=document.getElementById('mainimg').width+'px';
			}

}else if(document.getElementById('mainimg')==null && document.getElementById('outer')!=null){
	      document.getElementById('outer').style.width=document.getElementById('outer').parentNode.parentNode.width+'px';
}
autostart();
}

