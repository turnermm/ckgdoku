var ckgdokuLinkTypeId,ckgdokuAlignInputId;var ckgdokuDwikiSaveDir=oDokuWiki_FCKEditorInstance.save_dir;var ckgdokuImageReselectObj={align:"",link:""};window.onbeforeunload=function(){};(function(){var a=function(e,h){oDokuWiki_FCKEditorInstance.Lang=e.lang;var d=1,l=2,m=4,A=8,p=/^\s*(\d+)((px)|\%)?\s*$/i,z=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,k=/^\d+px$/;var x=function(){var D=this.getValue(),C=this.getDialog(),B=D.match(p);if(B){if(B[2]=="%"){u(C,false)}D=B[1]}if(C.lockRatio){var E=C.originalElement;if(E.getCustomData("isReady")=="true"){if(this.id=="txtHeight"){if(D&&D!="0"){D=Math.round(E.$.width*(D/E.$.height))}if(!isNaN(D)){C.setValueOf("info","txtWidth",D)}}else{if(D&&D!="0"){D=Math.round(E.$.height*(D/E.$.width))}if(!isNaN(D)){C.setValueOf("info","txtHeight",D)}}}}r(C)};var r=function(B){if(!B.originalElement||!B.preview){return 1}B.commitContent(m,B.preview);return 0};function t(){var C=arguments;var B=this.getContentElement("advanced","txtdlgGenStyle");B&&B.commit.apply(B,C);this.foreach(function(D){if(D.commit&&D.id!="txtdlgGenStyle"){D.commit.apply(D,C)}})}var n;function y(C){if(n){return}n=1;var I=this.getDialog(),H=I.imageElement;ckgdokuAlignInputId=I.getContentElement("info","cmbAlign").getInputElement().$.id;ckgdokuLinkTypeId=I.getContentElement("info","cmbLinkType").getInputElement().$.id;if(ckgdokuImageReselectObj.align){var G=0;switch(ckgdokuImageReselectObj.align){case"medialeft":G=1;break;case"mediaright":G=2;break;case"mediacenter":G=3;break;case"baseline":G=4;break}var K=document.getElementById(ckgdokuAlignInputId);K.options[G].selected=true;ckgdokuImageReselectObj.align=""}if(ckgdokuImageReselectObj.link){var B=0;switch(ckgdokuImageReselectObj.link){case"detail":B=0;break;case"direct":B=1;break;case"nolink":B=2;break;case"linkonly":B=3;break}var E=document.getElementById(ckgdokuLinkTypeId);E.options[B].selected=true;ckgdokuImageReselectObj.link=""}oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;ckgdokuImageReselectObj={align:"",link:""};if(H){this.commit(d,H);C=[].concat(C);var D=C.length,J;for(var F=0;F<D;F++){J=I.getContentElement.apply(I,C[F].split(":"));J&&J.setup(d,H)}}n=0}var u=function(G,I){if(!G.getContentElement("info","ratioLock")){return null}var E=G.originalElement;if(!E){return null}if(I=="check"){if(!G.userlockRatio&&E.getCustomData("isReady")=="true"){var C=G.getValueOf("info","txtWidth"),J=G.getValueOf("info","txtHeight"),F=E.$.width*1000/E.$.height,B=C*1000/J;G.lockRatio=false;if(!C&&!J){G.lockRatio=true}else{if(!isNaN(F)&&!isNaN(B)){if(Math.round(F)==Math.round(B)){G.lockRatio=true}}}}}else{if(I!=undefined){G.lockRatio=I}else{G.userlockRatio=1;G.lockRatio=!G.lockRatio}}var D=CKEDITOR.document.getById(j);if(G.lockRatio){D.removeClass("cke_btn_unlocked")}else{D.addClass("cke_btn_unlocked")}D.setAttribute("aria-checked",G.lockRatio);if(CKEDITOR.env.hc){var H=D.getChild(0);H.setHtml(G.lockRatio?CKEDITOR.env.ie?"\u25A0":"\u25A3":CKEDITOR.env.ie?"\u25A1":"\u25A2")}return G.lockRatio};var i=function(B){var E=B.originalElement;if(E.getCustomData("isReady")=="true"){var D=B.getContentElement("info","txtWidth"),C=B.getContentElement("info","txtHeight");D&&D.setValue(E.$.width);C&&C.setValue(E.$.height)}r(B)};var o=function(E,D){if(E!=d){return}function H(K,I){var J=K.match(p);if(J){if(J[2]=="%"){J[1]+="%";u(C,false)}return J[1]}return I}var C=this.getDialog(),F="",G=this.id=="txtWidth"?"width":"height",B=D.getAttribute(G);if(B){F=H(B,F)}F=H(D.getStyle(G),F);this.setValue(F)};var b;var w=function(){var B=this.originalElement;B.setCustomData("isReady","true");B.removeListener("load",w);B.removeListener("error",g);B.removeListener("abort",g);CKEDITOR.document.getById(s).setStyle("display","none");if(!this.dontResetSize){i(this)}if(this.firstLoad){CKEDITOR.tools.setTimeout(function(){u(this,"check")},0,this)}this.firstLoad=false;this.dontResetSize=false};var g=function(){var C=this.originalElement;C.removeListener("load",w);C.removeListener("error",g);C.removeListener("abort",g);var B=CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png");if(this.preview){this.preview.setAttribute("src",B)}CKEDITOR.document.getById(s).setStyle("display","none");u(this,false)};var v=function(B){return CKEDITOR.tools.getNextId()+"_"+B},j=v("btnLockSizes"),q=v("btnResetSize"),s=v("ImagePreviewLoader"),c=v("previewLink"),f=v("previewImage");return{title:e.lang.image[h=="image"?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.imageElement=false;this.linkElement=false;this.imageEditMode=false;this.linkEditMode=false;this.lockRatio=true;this.userlockRatio=0;this.dontResetSize=false;this.firstLoad=true;this.addLink=false;var G=this.getParentEditor(),I=G.getSelection(),E=I&&I.getSelectedElement(),H=E&&G.elementPath(E).contains("a",1);var B;if(E&&E["$"]){var F=E["$"].getAttribute("class");ckgdokuImageReselectObj.align=F;B=E["$"].getAttribute("type")}CKEDITOR.document.getById(s).setStyle("display","none");b=new CKEDITOR.dom.element("img",G.document);this.preview=CKEDITOR.document.getById(f);this.originalElement=G.document.createElement("img");this.originalElement.setAttribute("alt","");this.originalElement.setCustomData("isReady","false");if(H){this.linkElement=H;this.linkEditMode=true;var D=H.getChildren();if(D.count()==1){var C=D.getItem(0).getName();if(C=="img"||C=="input"){this.imageElement=D.getItem(0);if(this.imageElement.getName()=="img"){this.imageEditMode="img"}else{if(this.imageElement.getName()=="input"){this.imageEditMode="input"}}}}if(h=="image"){this.setupContent(l,H)}}else{if(B){ckgdokuImageReselectObj.link=B}else{ckgdokuImageReselectObj.link="nolink"}}if(H){if(H["$"]["outerHTML"].match(/detail/)){ckgdokuImageReselectObj.link="detail"}else{ckgdokuImageReselectObj.link="direct"}}if(E&&E.getName()=="img"&&!E.data("cke-realelement")||E&&E.getName()=="input"&&E.getAttribute("type")=="image"){this.imageEditMode=E.getName();this.imageElement=E}if(this.imageEditMode){this.cleanImageElement=this.imageElement;this.imageElement=this.cleanImageElement.clone(true,true);this.setupContent(d,this.imageElement)}else{this.imageElement=G.document.createElement("img")}u(this,true);if(!CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))){this.preview.removeAttribute("src");this.preview.setStyle("display","none")}},onOk:function(){if(this.imageEditMode){var E=this.imageEditMode;if(h=="image"&&E=="input"&&confirm(e.lang.image.button2Img)){E="img";this.imageElement=e.document.createElement("img");this.imageElement.setAttribute("alt","");e.insertElement(this.imageElement)}else{if(h!="image"&&E=="img"&&confirm(e.lang.image.img2Button)){E="input";this.imageElement=e.document.createElement("input");this.imageElement.setAttributes({type:"image",alt:""});e.insertElement(this.imageElement)}else{this.imageElement=this.cleanImageElement;delete this.cleanImageElement}}}else{if(h=="image"){this.imageElement=e.document.createElement("img")}else{this.imageElement=e.document.createElement("input");this.imageElement.setAttribute("type","image")}this.imageElement.setAttribute("alt","")}var D=document.getElementById(ckgdokuLinkTypeId);var C="detail";if(D.selectedIndex>0){var C=D.options[D.selectedIndex].value}this.imageElement.setAttribute("type",C);if(!this.linkEditMode){this.linkElement=e.document.createElement("a")}this.commitContent(d,this.imageElement);var F=document.getElementById(ckgdokuAlignInputId);if(F.selectedIndex>0){var B=F.options[F.selectedIndex].value;this.imageElement.setAttribute("class",B)}else{this.imageElement.setAttribute("class","media")}if(!this.imageElement.getAttribute("style")){this.imageElement.removeAttribute("style")}if(!this.imageEditMode){if(this.addLink){if(!this.linkEditMode){e.insertElement(this.linkElement);this.linkElement.append(this.imageElement,false)}else{e.insertElement(this.imageElement)}}else{e.insertElement(this.imageElement)}}else{if(!this.linkEditMode&&this.addLink){e.insertElement(this.linkElement);this.imageElement.appendTo(this.linkElement)}else{if(this.linkEditMode&&!this.addLink){e.getSelection().selectElement(this.linkElement);e.insertElement(this.imageElement)}}}},onLoad:function(){if(h!="image"){this.hidePage("Link")}var B=this._.element.getDocument();if(this.getContentElement("info","ratioLock")){this.addFocusable(B.getById(q),5);this.addFocusable(B.getById(j),5)}oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;oDokuWiki_FCKEditorInstance.isDwikiMediaFile=true;oDokuWiki_FCKEditorInstance.isDwikiImage=true;this.commitContent=t},onHide:function(){if(this.preview){this.commitContent(A,this.preview)}if(this.originalElement){this.originalElement.removeListener("load",w);this.originalElement.removeListener("error",g);this.originalElement.removeListener("abort",g);this.originalElement.remove();this.originalElement=false}delete this.imageElement},contents:[{id:"info",label:e.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:e.lang.common.url,required:true,onChange:function(){var D=this.getDialog(),E=this.getValue();if(E.length>0){D=this.getDialog();var C=D.originalElement;D.preview.removeStyle("display");C.setCustomData("isReady","false");var B=CKEDITOR.document.getById(s);if(B){B.setStyle("display","")}C.on("load",w,D);C.on("error",g,D);C.on("abort",g,D);C.setAttribute("src",E);b.setAttribute("src",E);D.preview.setAttribute("src",b.$.src);r(D)}else{if(D.preview){D.preview.removeAttribute("src");D.preview.setStyle("display","none")}}},setup:function(D,C){if(D==d){var B=C.data("cke-saved-src")||C.getAttribute("src");var E=this;this.getDialog().dontResetSize=true;E.setValue(B);E.setInitValue()}},commit:function(C,B){if(C==d&&(this.getValue()||this.isChanged())){B.data("cke-saved-src",this.getValue());B.setAttribute("src",this.getValue())}else{if(C==A){B.setAttribute("src","");B.removeAttribute("src")}}},validate:CKEDITOR.dialog.validate.notEmpty(e.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:e.lang.common.browseServer,hidden:true,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",hidden:true,label:e.lang.image.alt,accessKey:"T","default":"",onChange:function(){r(this.getDialog())},setup:function(C,B){if(C==d){this.setValue(B.getAttribute("alt"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("alt",this.getValue())}}else{if(C==m){B.setAttribute("alt",this.getValue())}else{if(C==A){B.removeAttribute("alt")}}}}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:e.lang.common.width,onKeyUp:x,onChange:function(){y.call(this,"advanced:txtdlgGenStyle")},validate:function(){var B=this.getValue().match(z),C=!!(B&&parseInt(B[1],10)!==0);if(!C){alert(e.lang.common.invalidWidth)}return C},setup:o,commit:function(E,D,C){var F=this.getValue();if(E==d){if(F){D.setStyle("width",CKEDITOR.tools.cssLength(F))}else{D.removeStyle("width")}!C&&D.removeAttribute("width")}else{if(E==m){var B=F.match(p);if(!B){var G=this.getDialog().originalElement;if(G.getCustomData("isReady")=="true"){D.setStyle("width",G.$.width+"px")}}else{D.setStyle("width",CKEDITOR.tools.cssLength(F))}}else{if(E==A){D.removeAttribute("width");D.removeStyle("width")}}}}},{type:"text",id:"txtHeight",width:"40px",label:e.lang.common.height,onKeyUp:x,onChange:function(){y.call(this,"advanced:txtdlgGenStyle")},validate:function(){var B=this.getValue().match(z),C=!!(B&&parseInt(B[1],10)!==0);if(!C){alert(e.lang.common.invalidHeight)}return C},setup:o,commit:function(E,D,C){var F=this.getValue();if(E==d){if(F){D.setStyle("height",CKEDITOR.tools.cssLength(F))}else{D.removeStyle("height")}!C&&D.removeAttribute("height")}else{if(E==m){var B=F.match(p);if(!B){var G=this.getDialog().originalElement;if(G.getCustomData("isReady")=="true"){D.setStyle("height",G.$.height+"px")}}else{D.setStyle("height",CKEDITOR.tools.cssLength(F))}}else{if(E==A){D.removeAttribute("height");D.removeStyle("height")}}}}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var B=CKEDITOR.document.getById(q),C=CKEDITOR.document.getById(j);if(B){B.on("click",function(D){i(this);D.data&&D.data.preventDefault()},this.getDialog());B.on("mouseover",function(){this.addClass("cke_btn_over")},B);B.on("mouseout",function(){this.removeClass("cke_btn_over")},B)}if(C){C.on("click",function(E){var F=u(this),H=this.originalElement,G=this.getValueOf("info","txtWidth");if(H.getCustomData("isReady")=="true"&&G){var D=H.$.height/H.$.width*G;if(!isNaN(D)){this.setValueOf("info","txtHeight",Math.round(D));r(this)}}E.data&&E.data.preventDefault()},this.getDialog());C.on("mouseover",function(){this.addClass("cke_btn_over")},C);C.on("mouseout",function(){this.removeClass("cke_btn_over")},C)}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.lockRatio+'" class="cke_btn_locked" id="'+j+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+e.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.resetSize+'" class="cke_btn_reset" id="'+q+'" role="button"><span class="cke_label">'+e.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{id:"cmbLinkType",type:"select",label:e.lang.common.linkType||"Link Type","default":"detail",items:[[e.lang.common.linkDetail||"Detail","detail"],[e.lang.common.linkDirect||"Direct","direct"],[e.lang.common.linkNoLink||"No Link","nolink"],[e.lang.common.linkOnly||"Link only","linkonly"]]},{type:"html",html:"<p>&nbsp;</p>"},{type:"text",id:"txtBorder",width:"60px",disabled:true,hidden:true,label:e.lang.image.border,"default":"",onKeyUp:function(){r(this.getDialog())},onChange:function(){y.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateBorder),setup:function(D,C){if(D==d){var E,B=C.getStyle("border-width");B=B&&B.match(/^(\d+px)(?: \1 \1 \1)?$/);E=B&&parseInt(B[1],10);isNaN(parseInt(E,10))&&(E=C.getAttribute("border"));this.setValue(E)}},commit:function(D,C,B){var E=parseInt(this.getValue(),10);if(D==d||D==m){if(!isNaN(E)){C.setStyle("border-width",CKEDITOR.tools.cssLength(E));C.setStyle("border-style","solid")}else{if(!E&&this.isChanged()){C.removeStyle("border")}}if(!B&&D==d){C.removeAttribute("border")}}else{if(D==A){C.removeAttribute("border");C.removeStyle("border-width");C.removeStyle("border-style");C.removeStyle("border-color")}}}},{type:"text",id:"txtHSpace",width:"60px",label:e.lang.image.hSpace,disabled:true,hidden:true,"default":"",onKeyUp:function(){r(this.getDialog())},onChange:function(){y.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateHSpace),setup:function(D,C){if(D==d){var F,E,H,B=C.getStyle("margin-left"),G=C.getStyle("margin-right");B=B&&B.match(k);G=G&&G.match(k);E=parseInt(B,10);H=parseInt(G,10);F=(E==H)&&E;isNaN(parseInt(F,10))&&(F=C.getAttribute("hspace"));this.setValue(F)}},commit:function(D,C,B){var E=parseInt(this.getValue(),10);if(D==d||D==m){if(!isNaN(E)){C.setStyle("margin-left",CKEDITOR.tools.cssLength(E));C.setStyle("margin-right",CKEDITOR.tools.cssLength(E))}else{if(!E&&this.isChanged()){C.removeStyle("margin-left");C.removeStyle("margin-right")}}if(!B&&D==d){C.removeAttribute("hspace")}}else{if(D==A){C.removeAttribute("hspace");C.removeStyle("margin-left");C.removeStyle("margin-right")}}}},{type:"text",id:"txtVSpace",width:"60px",hidden:true,label:e.lang.image.vSpace,"default":"",onKeyUp:function(){r(this.getDialog())},onChange:function(){y.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateVSpace),setup:function(G,F){if(G==d){var H,B,D,C=F.getStyle("margin-top"),E=F.getStyle("margin-bottom");C=C&&C.match(k);E=E&&E.match(k);B=parseInt(C,10);D=parseInt(E,10);H=(B==D)&&B;isNaN(parseInt(H,10))&&(H=F.getAttribute("vspace"));this.setValue(H)}},commit:function(D,C,B){var E=parseInt(this.getValue(),10);if(D==d||D==m){if(!isNaN(E)){C.setStyle("margin-top",CKEDITOR.tools.cssLength(E));C.setStyle("margin-bottom",CKEDITOR.tools.cssLength(E))}else{if(!E&&this.isChanged()){C.removeStyle("margin-top");C.removeStyle("margin-bottom")}}if(!B&&D==d){C.removeAttribute("vspace")}}else{if(D==A){C.removeAttribute("vspace");C.removeStyle("margin-top");C.removeStyle("margin-bottom")}}}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:e.lang.common.align,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.alignLeft,"medialeft"],[e.lang.common.alignRight,"mediaright"],[e.lang.common.alignCenter,"mediacenter"],[e.lang.common.alignBaseLine||"Baseline","baseline"]],onChange:function(){r(this.getDialog());y.call(this,"advanced:txtdlgGenStyle")},setup:function(C,B){},commit:function(D,C,B){var E=this.getValue();if(D==d||D==m){if(E){E=E.replace(/media/,"");switch(E){case"center":C.removeStyle("float");C.setAttribute("class","mediacenter");break;case"baseline":E="left";default:C.setStyle("float",E)}}else{C.removeStyle("float")}if(!B&&D==d){E=(C.getAttribute("align")||"").toLowerCase();switch(E){case"left":case"right":C.removeAttribute("align")}}}else{if(D==A){C.removeStyle("float")}}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:'<style type = "text/css">.mediacenter { display: block; margin-left: auto; margin-right: auto;}</style><div>'+CKEDITOR.tools.htmlEncode(e.lang.common.preview)+'<br><div id="'+s+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+c+'"><img id="'+f+'" alt="" /></a>'+(e.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:e.lang.image.linkTab,padding:0,hidden:true,elements:[{id:"txtUrl",type:"text",disabled:true,label:e.lang.common.url,style:"width: 100%","default":"",setup:function(D,C){if(D==l){var B=C.data("cke-saved-href");if(!B){B=C.getAttribute("href")}var E=B.match(/media\s*=(.*)/);if(E){B=ckgdokuDwikiSaveDir+"/"+E[1].replace(":","/");C.setAttribute("href")}this.setValue(B)}},commit:function(D,C){if(D==l){if(this.getValue()||this.isChanged()){var B=decodeURI(this.getValue());C.data("cke-saved-href",B);C.setAttribute("href",B);if(this.getValue()||!e.config.image_removeLinkByEmptyURL){this.getDialog().addLink=true}}}}},{type:"button",id:"browse",disabled:true,filebrowser:{action:"Browse",target:"Link:txtUrl",url:e.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:true,label:e.lang.common.browseServer},{id:"cmbTarget",type:"select",disabled:true,label:e.lang.common.target,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.targetNew,"_blank"],[e.lang.common.targetTop,"_top"],[e.lang.common.targetSelf,"_self"],[e.lang.common.targetParent,"_parent"]],setup:function(C,B){if(C==l){this.setValue(B.getAttribute("target")||"")}},commit:function(C,B){if(C==l){if(this.getValue()||this.isChanged()){B.setAttribute("target",this.getValue())}}}}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:e.lang.image.upload,elements:[{type:"file",id:"upload",label:e.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:e.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",hidden:true,label:e.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",disabled:true,label:e.lang.common.id,setup:function(C,B){if(C==d){this.setValue(B.getAttribute("id"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("id",this.getValue())}}}},{id:"cmbLangDir",type:"select",disabled:true,style:"width : 100px;",label:e.lang.common.langDir,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.langDirLtr,"ltr"],[e.lang.common.langDirRtl,"rtl"]],setup:function(C,B){if(C==d){this.setValue(B.getAttribute("dir"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("dir",this.getValue())}}}},{type:"text",id:"txtLangCode",disabled:true,label:e.lang.common.langCode,"default":"",setup:function(C,B){if(C==d){this.setValue(B.getAttribute("lang"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("lang",this.getValue())}}}}]},{type:"text",id:"txtGenLongDescr",label:e.lang.common.longDescr,disabled:true,setup:function(C,B){if(C==d){this.setValue(B.getAttribute("longDesc"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("longDesc",this.getValue())}}}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",disabled:true,label:e.lang.common.cssClass,"default":"",setup:function(C,B){if(C==d){this.setValue(B.getAttribute("class"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("class",this.getValue())}}}},{type:"text",id:"txtGenTitle",disabled:true,label:e.lang.common.advisoryTitle,"default":"",onChange:function(){r(this.getDialog())},setup:function(C,B){if(C==d){this.setValue(B.getAttribute("title"))}},commit:function(C,B){if(C==d){if(this.getValue()||this.isChanged()){B.setAttribute("title",this.getValue())}}else{if(C==m){B.setAttribute("title",this.getValue())}else{if(C==A){B.removeAttribute("title")}}}}}]},{type:"text",id:"txtdlgGenStyle",disabled:true,label:e.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),"default":"",setup:function(F,D){if(F==d){var G=D.getAttribute("style");if(!G&&D.$.style.cssText){G=D.$.style.cssText}this.setValue(G);var B=D.$.style.height,E=D.$.style.width,H=(B?B:"").match(p),C=(E?E:"").match(p);this.attributesInStyle={height:!!H,width:!!C}}},onChange:function(){y.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]);r(this)},commit:function(C,B){if(C==d&&(this.getValue()||this.isChanged())){B.setAttribute("style",this.getValue())}}}]}]}};CKEDITOR.dialog.add("image",function(b){return a(b,"image")});CKEDITOR.dialog.add("imagebutton",function(b){return a(b,"imagebutton")})})();