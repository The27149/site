System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Draw.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Test.ts"],(function(t){var e,i,n,r,o,s,a,c,u,l,p,g,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,a=t.Node,c=t.MeshRenderer,u=t.utils,l=t.gfx,p=t.UIVertexFormat,g=t.Component},function(t){f=t.Test}],execute:function(){var h,d,m,v,M;o._RF.push({},"7a51eQM/spNErQHnpxJsGZx","Draw",void 0);var P=s.ccclass,y=s.property;t("Draw",(h=P("Draw"),d=y(a),h((M=e((v=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,n(e,"targetNode",M,r(e)),e}i(e,t);var o=e.prototype;return o.start=function(){this.targetNode.getComponent(c).mesh=this.createMesh()},o.createMesh=function(){return u.MeshUtils.createMesh({primitiveMode:l.PrimitiveMode.POINT_LIST,positions:this.getPosition(),uvs:[],indices:this.getIndices(),minPos:f.ins.getPointMin(),maxPos:f.ins.getPointMax(),attributes:p.vfmt})},o.getPosition=function(){return f.ins.getPoints()},o.getIndices=function(){return f.ins.getIndices()},e}(g)).prototype,"targetNode",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/DrawByGfx.ts",["cc"],(function(e){var t,r,i,s,a,n,c;return{setters:[function(e){t=e.cclegacy,r=e._decorator,i=e.gfx,s=e.UIVertexFormat,a=e.director,n=e.PipelineStateManager,c=e.pipeline}],execute:function(){var d;t._RF.push({},"d12e11us7ZOY4ISywtC/QdV","DrawByGfx",void 0);var o=r.ccclass,u=e("DrawByGfx",o("DrawByGfx")(d=function(){function e(){this.device=null,this.attribute=[],this.stride=0,this.material=null,this.assembler=null}var t=e.prototype;return t.init=function(e){this.material=e,this.device=i.deviceManager.gfxDevice;var t=this.device.gfxAPI;console.log(t),console.log(i.API,i.API[t]),this.attribute=s.vfmtPosColor,this.stride=s.getAttributeStride(this.attribute),console.log("this.stride:",this.stride)},t.prepare=function(){var e=this.getVertexData(),t=this.device.createBuffer(new i.BufferInfo(i.BufferUsageBit.VERTEX|i.BufferUsageBit.TRANSFER_DST,i.MemoryUsageBit.DEVICE,e.length*Float32Array.BYTES_PER_ELEMENT,this.stride));t.update(e);var r=new i.InputAssemblerInfo(this.attribute,[t]),s=this.device.createInputAssembler(r);this.assembler=s},t.getVertexData=function(){return new Float32Array([0,0,0,1,0,0,1])},t.render=function(){var e=i.deviceManager.swapchain;this.device.acquire([e]);var t=this.device.commandBuffer,r=new i.Rect(0,0,e.width,e.height),s=a.root.mainWindow.framebuffer;t.begin(),t.beginRenderPass(s.renderPass,s,r,[new i.Color(0,0,0,0)],1,0);var d=this.material.passes[0],o=d.getShaderVariant(),u=n.getOrCreatePipelineState(this.device,d,o,s.renderPass,this.assembler);t.bindPipelineState(u),t.bindDescriptorSet(c.SetIndex.MATERIAL,d.descriptorSet),t.bindInputAssembler(this.assembler),t.draw(this.assembler),t.endRenderPass(),t.end(),this.device.queue.submit([t]),this.device.present()},e}())||d);e("drawByGfx",new u);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Main.ts","./Roam.ts","./Test.ts","./Draw.ts","./DrawByGfx.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,n,a,o,c,l;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,n=r.assertThisInitialized},function(r){a=r.cclegacy,o=r._decorator,c=r.Material,l=r.Component}],execute:function(){var u,s,p,f,y;a._RF.push({},"21ae6fARudI9KSPpTzA/GlR","Main",void 0);var h=o.ccclass,d=o.property;r("Main",(u=h("Main"),s=d(c),u((y=e((f=function(r){function e(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return e=r.call.apply(r,[this].concat(a))||this,i(e,"materialSrc",y,n(e)),e}return t(e,r),e.prototype.start=function(){},e}(l)).prototype,"materialSrc",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));a._RF.pop()}}}));

System.register("chunks:///_virtual/Roam.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var e,t,l,s,i,n,a,r,h,u,w,c,f,g;return{setters:[function(o){e=o.applyDecoratedDescriptor,t=o.inheritsLoose,l=o.initializerDefineProperty,s=o.assertThisInitialized},function(o){i=o.cclegacy,n=o._decorator,a=o.Node,r=o.tween,h=o.v3,u=o.input,w=o.Input,c=o.KeyCode,f=o.NodeSpace,g=o.Component}],execute:function(){var d,p,m,v,P;i._RF.push({},"b6060YLkVtNkrLuOVAi10mn","Roam",void 0);var F=n.ccclass,A=n.property;o("ERoamMode",function(o){return o[o.free=0]="free",o[o.follow=1]="follow",o[o.round=2]="round",o}({})),o("EAxis",function(o){return o[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z",o}({})),o("Roam",(d=F("Roam"),p=A(a),d((P=e((v=function(o){function e(){for(var e,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return e=o.call.apply(o,[this].concat(i))||this,l(e,"followTarget",P,s(e)),e.angleScale=.05,e.moveScale=.05,e.angle_temp=h(),e.worldPos_temp=h(),e.deltaMove_temp=h(),e.followPosTarget=null,e.isFollowPos=!1,e.relativeFollowPos=h(),e.followAngleTarget=null,e.isFollowAngle=!1,e.followAngle_temp=h(),e.isRound=!1,e}t(e,o);var i=e.prototype;return i.onLoad=function(){this.addEvents(),this.reset()},i.test=function(){window.node=this.node,console.log("this.node.forward:",this.node.forward),r(this.followTarget).repeatForever(r().to(5,{position:h(20,0,0)}).to(5,{position:h(-20,0,0)})).start()},i.reset=function(){this.followPosTarget=null,this.isFollowPos=!1,this.relativeFollowPos.set(0,0,0),this.followAngleTarget=null,this.isFollowAngle=!1},i.update=function(o){this.isFollowPos&&this.followPosTarget&&this.updateFollowPos(),this.isFollowAngle&&this.followAngleTarget&&this.updateFollowAngle()},i.addEvents=function(){u.on(w.EventType.TOUCH_MOVE,this.touchMove,this),u.on(w.EventType.TOUCH_END,this.touchEnd,this),u.on(w.EventType.MOUSE_WHEEL,this.mouseWheel,this),u.on(w.EventType.KEY_PRESSING,this.keyPressing,this),u.on(w.EventType.KEY_DOWN,this.keyDown,this),u.on(w.EventType.KEY_UP,this.keyUp,this)},i.touchMove=function(o){var e=o.getDeltaX()*this.angleScale,t=o.getDeltaY()*this.angleScale;this.rotate(-t,e)},i.touchEnd=function(o){this.followAngleTarget&&this.resumeFollowAngle()},i.keyPressing=function(o){this.useKeyBoard(o)},i.keyDown=function(o){this.useKeyBoard(o)},i.keyUp=function(o){this.unUseKeyBoard(o),this.followPosTarget&&this.resumeFollowPos()},i.useKeyBoard=function(o){switch(o.keyCode){case c.KEY_W:this.deltaMove_temp.z=5*-this.moveScale;break;case c.KEY_A:this.deltaMove_temp.x=-this.moveScale;break;case c.KEY_S:this.deltaMove_temp.z=5*this.moveScale;break;case c.KEY_D:this.deltaMove_temp.x=this.moveScale;break;case c.KEY_Q:this.deltaMove_temp.y=this.moveScale;break;case c.KEY_Z:this.deltaMove_temp.y=-this.moveScale}this.move(this.deltaMove_temp)},i.unUseKeyBoard=function(o){this.deltaMove_temp.set(0,0,0)},i.mouseWheel=function(o){var e=o.getScrollY();this.deltaMove_temp.z=e>0?30*-this.moveScale:30*this.moveScale,this.move(this.deltaMove_temp)},i.rotate=function(o,e){this.isFollowAngle&&this.pauseFollowAngle();var t=this.node.eulerAngles;this.angle_temp.x=t.x+o,this.angle_temp.y=t.y+e,this.node.setRotationFromEuler(this.angle_temp)},i.move=function(o){this.isFollowPos&&this.pauseFollowPos(),this.node.translate(o,f.LOCAL)},i.followPos=function(o,e){void 0===e&&(e=h(0,0,20)),this.followPosTarget=o,this.isFollowPos=!0,this.relativeFollowPos.set(e.x,e.y,e.z)},i.unFollowPos=function(){this.followPosTarget=null,this.isFollowPos=!1},i.pauseFollowPos=function(){this.isFollowPos&&this.followPosTarget&&(this.isFollowPos=!1)},i.resumeFollowPos=function(){!this.isFollowPos&&this.followPosTarget&&(this.isFollowPos=!0)},i.updateFollowPos=function(){this.followPosTarget.getWorldPosition(this.worldPos_temp),this.worldPos_temp.add(this.relativeFollowPos),this.node.setWorldPosition(this.worldPos_temp)},i.followAngle=function(o){this.followAngleTarget=o,this.isFollowAngle=!0},i.unFollowAngle=function(o){this.followAngleTarget=null,this.isFollowAngle=!1},i.pauseFollowAngle=function(){this.isFollowAngle&&this.followAngleTarget&&(this.isFollowAngle=!1)},i.resumeFollowAngle=function(){!this.isFollowAngle&&this.followAngleTarget&&(this.isFollowAngle=!0)},i.updateFollowAngle=function(){this.followAngleTarget.getWorldPosition(this.followAngle_temp),this.followAngle_temp.subtract(this.node.worldPosition),this.node.lookAt(this.followAngle_temp)},i.roundSelf=function(o){},i.roundOther=function(o,e,t){this.followAngle(o),(this.isFollowPos||this.followPosTarget)&&this.unFollowPos()},e}(g)).prototype,"followTarget",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/Test.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,n,s,o;return{setters:[function(t){i=t.createClass},function(t){n=t.cclegacy,s=t._decorator,o=t.v3}],execute:function(){var e,r;n._RF.push({},"0896bdcrwZPX6cSXn8lOxsw","Test",void 0);var h=s.ccclass,a=(s.property,function(t){return t[t.lenFixed=0]="lenFixed",t[t.numFixed=1]="numFixed",t}(a||{})),d=function(t){return t[t.xyz=0]="xyz",t[t.param=1]="param",t}(d||{});t("Test",h("test")(((r=function(){function t(){this.curFuncMode=d.param,this.tRange=[-20,20],this.dt=.01,this.border=10,this.domainX=[-this.border,this.border],this.domainY=[-this.border,this.border],this.domainZ=[-this.border,this.border],this.resolutionMode=a.lenFixed,this.resolution=100,this.dx=.1,this.testRate=.5,this.df=1,this.v3=null,this.validPoints=[],this.validIndices=[]}var n=t.prototype;return n.ft=function(t){var i=Math.sin,n=o();return n.x=t,n.y=i(100*t),n.z=0,n},n.fxyz=function(t,i,n){return void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=0),Math.pow(t,2)/2+Math.pow(n,2)/2-Math.pow(i,2)/2},n.init=function(){this.updateFn(d.param,"2 * cos(t)","t / 5","2 * sin(t)"),this.calcPoints(this.curFuncMode)},n.updateFn=function(t){if(this.curFuncMode=t,t===d.xyz){var i=this.preFnString(arguments.length<=1?void 0:arguments[1]),n="return "+i;this.fxyz=new Function("x","y","z",n),"number"!=typeof this.fxyz(0,0,0)&&console.log("隐函数表达式错误！！",this.fxyz.toString())}if(t===d.param){var s=this.preFnString(arguments.length<=1?void 0:arguments[1]),e=this.preFnString(arguments.length<=2?void 0:arguments[2]),r=this.preFnString(arguments.length<=3?void 0:arguments[3]);this.v3=o;var h="\n                let p = this.v3();\n                p.x = "+s+" || 0;\n                p.y = "+e+" || 0;\n                p.z = "+r+" || 0;\n                return p;\n                ";this.ft=new Function("t",h);var a=this.ft(0);"number"==typeof a.x&&"number"==typeof a.y&&"number"==typeof a.z||console.log("参数表达式错误！！",this.ft.toString())}},n.preFnString=function(t){return t?(new Map([["sin","Math.sin"],["cos","Math.cos"],["pi","Math.PI"]]).forEach((function(i,n){var s=new RegExp(""+n,"ig");t=t.replace(s,i)})),t):t},n.calcPoints=function(t){switch(void 0===t&&(t=d.xyz),this.validIndices.length=0,this.validPoints.length=0,t){case d.xyz:this.calcPointsByXYZ();break;case d.param:this.calcPointsByT()}},n.calcPointsByXYZ=function(){this.resolutionMode===a.numFixed&&(this.dx=(this.domainX[1]-this.domainX[0])/this.resolution),this.df=this.dx*this.testRate;var t=this.domainX[0],i=this.domainX[1],n=this.domainY[0],s=this.domainY[1],o=this.domainZ[0],e=this.domainZ[1],r=0;console.time("calc:");for(var h=t;h<i;h+=this.dx)for(var d=n;d<s;d+=this.dx)for(var c=o;c<e;c+=this.dx)if(Math.abs(this.fxyz(h,d,c))<this.df){var u=3*r;this.validPoints[u]=h,this.validPoints[u+1]=d,this.validPoints[u+2]=c,this.validIndices[r]=r,r++}console.timeEnd("calc:")},n.calcPointsByT=function(){for(var t=this.tRange[0],i=this.tRange[1],n=this.dt,s=0,o=t;o<i;o+=n){var e=this.ft(o),r=3*s;this.validPoints[r]=e.x,this.validPoints[r+1]=e.y,this.validPoints[r+2]=e.z,this.validIndices[s]=s,s++}},n.getPoints=function(){return this.validPoints},n.getIndices=function(){return console.log("顶点数量：",this.validIndices.length),this.validIndices},n.getPointMax=function(){return o(this.domainX[1],this.domainY[1],this.domainZ[1])},n.getPointMin=function(){return o(this.domainX[0],this.domainY[0],this.domainZ[0])},i(t,null,[{key:"ins",get:function(){return this._ins||(this._ins=new t,this._ins.init()),this._ins}}]),t}())._ins=null,e=r))||e);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});