"use strict";(globalThis["webpackChunkrok_rd_app"]=globalThis["webpackChunkrok_rd_app"]||[]).push([[522],{4522:(l,a,e)=>{e.r(a),e.d(a,{default:()=>P});var s=e(9835),u=e(6970),t=e(499);const m={class:"column mkb"},o={class:"row input-div q-pa-sm mkb"},d={class:"q-ma-md cal-input mkb"},i={class:"q-ma-md cal-submit col-3 mkb"},n={class:"q-ma-md q-pa-md result-div text-left text-body1 mkb"},v={class:"row input-div q-pa-sm mkb"},c={class:"q-ma-md cal-input mkb"},p={class:"q-ma-md cal-submit col-3 mkb"},r={class:"q-ma-md q-pa-md result-div text-left text-body1 mkb"},_=(0,s._)("br",null,null,-1),b={class:"input-div q-pa-sm mkb"},q=(0,s._)("div",{class:"row text-bold rainbow_text_animated",style:{width:"400px"}},[(0,s._)("small",{class:"moving"},"Made by 이프")],-1),w={class:"q-ma-md cal-input2 row"},k={class:"q-ma-md cal-input2 row"},h={class:"q-ma-md q-pa-md result-div text-left text-body1"},g={class:"row"},x=(0,s._)("div",{class:"col-2"},"총 영혼 데미지",-1),V={class:"q-ml-sm col"},y={class:"row"},H=(0,s._)("div",{class:"col-2"},"크리티컬 포함",-1),U={class:"q-ml-sm col"},W={class:"row"},f=(0,s._)("div",{class:"col-2"},"달 추가 데미지",-1),C={class:"q-ml-sm col"},z={class:"row"},M=(0,s._)("div",{class:"col-2"},"달,크리티컬 포함",-1),S={class:"q-ml-sm col"},Z=(0,s.aZ)({__name:"HomeComponent",setup(l){const a=(0,t.iH)(10),e=(0,t.iH)(10),Z=(0,t.iH)(""),$=(0,t.iH)(""),L=(0,t.iH)(""),Q=(0,t.iH)(0),T=(0,t.iH)(7),j=(0,t.iH)(0),B=(0,t.iH)(113),I=(0,t.iH)(0),P=(0,t.iH)(""),A=(0,t.iH)(""),D=l=>l<10?(Z.value="뽑sp는 10 이상이어야 합니다.",!1):!(l>1e5)||(Z.value="최대 웨이브는 10만 입니다. (어차피 핵 아니면 못함)",!1),E=l=>l<0?($.value="웨이브는 자연수이어야 합니다.",!1):!(l>1e6)||($.value="웨이브는 100만 이하여야 합니다. (어차피 못하잖아)",!1),F=l=>{let e=l-10;a.value=0;while(e>0)a.value+=+e,e-=10;L.value=`뽑sp ${l}의 총 sp 량은 ${a.value}`},G=l=>{let a=0;if(l<=45){while(l>=5)l-=5,a+=8;a+=l,l>=3&&a++}else l-=45,a+=72,l%2==1&&(l--,a+=2),a+=l/2*8;P.value=`${Q.value} 웨이브 총 카드 획득량은 ${a}장`,A.value=`\t도전모드 총 카드 획득량은 ${Math.round(1.5*a)}장`},J=()=>{I.value=(140+20*(T.value-7))*j.value+30};return(l,a)=>{const t=(0,s.up)("q-input"),K=(0,s.up)("q-btn"),N=(0,s.up)("q-separator"),O=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(O,{class:"row q-mt-lg"},{default:(0,s.w5)((()=>[(0,s._)("div",m,[(0,s._)("div",o,[(0,s._)("div",d,[(0,s.Wm)(t,{outlined:"",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),class:"q-pa-none",type:"number",label:"뽑 sp",min:"10",max:"1000000",step:"10",rules:[l=>D(l)||Z.value],style:{height:"100%"}},null,8,["modelValue","rules"])]),(0,s._)("div",i,[(0,s.Wm)(K,{onClick:a[1]||(a[1]=l=>F(e.value))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 계산하기 ")])),_:1})])]),(0,s._)("div",n,(0,u.zw)(L.value),1),(0,s.Wm)(N),(0,s._)("div",v,[(0,s._)("div",c,[(0,s.Wm)(t,{outlined:"",modelValue:Q.value,"onUpdate:modelValue":a[2]||(a[2]=l=>Q.value=l),class:"q-pa-none",type:"number",label:"웨이브",min:"1",max:"100000",step:"1",rules:[l=>E(l)||$.value],style:{height:"100%"}},null,8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(K,{onClick:a[3]||(a[3]=l=>G(Q.value))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 계산하기 ")])),_:1})])]),(0,s._)("div",r,[(0,s.Uk)((0,u.zw)(P.value)+" ",1),_,(0,s.Uk)(" "+(0,u.zw)(A.value),1)]),(0,s.Wm)(N),(0,s._)("div",b,[q,(0,s._)("div",w,[(0,s.Wm)(t,{outlined:"",modelValue:T.value,"onUpdate:modelValue":a[4]||(a[4]=l=>T.value=l),class:"col-4 q-mr-sm",type:"number",label:"영혼 클래스",min:"7",max:"15",step:"1",onChange:J},null,8,["modelValue"]),(0,s.Wm)(t,{outlined:"",modelValue:B.value,"onUpdate:modelValue":a[5]||(a[5]=l=>B.value=l),class:"col",type:"number",label:"크리티컬 데미지",min:"113",max:"4000",step:"1",onChange:J},null,8,["modelValue"])]),(0,s._)("div",k,[(0,s.Wm)(t,{outlined:"",style:{width:"350px"},modelValue:j.value,"onUpdate:modelValue":a[6]||(a[6]=l=>j.value=l),class:"q-pa-none",type:"number",label:"영혼 스택",min:"1",max:"1000000",step:"1",onChange:J},null,8,["modelValue"])])]),(0,s._)("div",h,[(0,s._)("div",g,[x,(0,s.Uk)(" : "),(0,s._)("div",V,(0,u.zw)(Math.round(I.value).toLocaleString()),1)]),(0,s._)("div",y,[H,(0,s.Uk)(" : "),(0,s._)("div",U,(0,u.zw)(Math.round(I.value*B.value/100).toLocaleString()),1)]),(0,s._)("div",W,[f,(0,s.Uk)(" : "),(0,s._)("div",C,(0,u.zw)(Math.round(1.7*I.value).toLocaleString()),1)]),(0,s._)("div",z,[M,(0,s.Uk)(" : "),(0,s._)("div",S,(0,u.zw)(Math.round(I.value*B.value*1.7/100).toLocaleString()),1)])])])])),_:1})}}});var $=e(9885),L=e(2543),Q=e(8879),T=e(926),j=e(9984),B=e.n(j);const I=Z,P=I;B()(Z,"components",{QPage:$.Z,QInput:L.Z,QBtn:Q.Z,QSeparator:T.Z})}}]);