"use strict";(self["webpackChunkonelist_web"]=self["webpackChunkonelist_web"]||[]).push([[370],{3370:function(e,a,l){l.r(a),l.d(a,{default:function(){return P}});var t=l(2206),i=l(8912);const s=e=>((0,t.dD)("data-v-184a74d8"),e=e(),(0,t.Cn)(),e),o={key:0,class:"load"},r={key:1,class:"content"},n={class:"seriesTab"},u={class:"seriesTab-list"},d={class:"seriesTab-item"},c={class:"seriesTab-item"},v=s((()=>(0,t._)("i",{class:"bx bx-left-arrow-alt"},null,-1))),w={class:"seriesTab-item"},g=s((()=>(0,t._)("i",{class:"bx bx-right-arrow-alt"},null,-1))),h={class:"seriesTab-item"},p=s((()=>(0,t._)("i",{class:"bx bx-filter"},null,-1))),_={class:"card-show-content view-card-list"},m={class:"view-item-header"},b={class:"view-item-tag-list"},f={class:"view-item-tag rating"},k={key:0,class:"view-item-tag count"},y=s((()=>(0,t._)("i",{class:"bx bx-check"},null,-1))),x=[y],C=["src"],H={key:0,class:"view-item-title"},M={key:1,class:"view-item-title"},z=s((()=>(0,t._)("i",{class:"bx bx-x"},null,-1))),N={class:"sort-list"},O={class:"sort-list"};function S(e,a,l,s,y,S){const D=(0,t.up)("n-button"),W=(0,t.up)("router-link"),T=(0,t.up)("n-radio"),U=(0,t.up)("n-space"),F=(0,t.up)("n-radio-group"),P=(0,t.up)("n-card"),$=(0,t.up)("n-modal");return s.loading?((0,t.wg)(),(0,t.iD)("div",o)):((0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",n,[(0,t._)("div",u,[(0,t._)("div",d,(0,i.zw)(s.pageText),1),(0,t._)("div",c,[(0,t.Wm)(D,{onClick:a[0]||(a[0]=e=>S.BackPage()),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[v])),_:1})]),(0,t._)("div",w,[(0,t.Wm)(D,{onClick:a[1]||(a[1]=e=>S.NextPage()),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[g])),_:1})]),(0,t._)("div",h,[(0,t.Wm)(D,{onClick:a[2]||(a[2]=e=>s.showSort=!s.showSort),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[p])),_:1})])])]),(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.data,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"view-item",key:l},[(0,t.Wm)(W,{to:{path:"/video",query:{id:a.id,gallery_type:s.data_type}}},{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t._)("div",b,[(0,t._)("div",f,(0,i.zw)(isNaN(Math.floor(100*a.vote_average)/100)?"":Math.floor(100*a.vote_average)/100),1),a.played?((0,t.wg)(),(0,t.iD)("div",k,x)):(0,t.kq)("",!0)])]),(0,t._)("img",{loading:"lazy",class:"carousel-img",src:e.COMMON.imgUrl+"/t/p/w220_and_h330_face/"+a.poster_path},null,8,C),null!=a.video?((0,t.wg)(),(0,t.iD)("div",H,(0,i.zw)(a.title),1)):((0,t.wg)(),(0,t.iD)("div",M,(0,i.zw)(a.name),1))])),_:2},1032,["to"])])))),128))]),(0,t.Wm)($,{show:s.showSort,"onUpdate:show":a[5]||(a[5]=e=>s.showSort=e),"transform-origin":"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{style:{width:"600px"},title:"选择分类",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,t.w5)((()=>[(0,t.Wm)(D,{onClick:a[3]||(a[3]=e=>s.showSort=!s.showSort),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[z])),_:1})])),default:(0,t.w5)((()=>[(0,t._)("div",N,[(0,t._)("div",O,[(0,t.Wm)(F,{value:s.mode,"onUpdate:value":a[4]||(a[4]=e=>s.mode=e),name:"radiogroup"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{vertical:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.modes,(e=>((0,t.wg)(),(0,t.j4)(T,{onChange:s.handleChange,class:"sort-item",checked:s.mode===e.value,key:e.value,value:e.value},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["onChange","checked","value"])))),128))])),_:1})])),_:1},8,["value"])])])])),_:1})])),_:1},8,["show"])]))}var D=l(3421),W=l(3579),T={name:"UserStar",setup(){const e=(0,D.iH)(null),a=(0,D.iH)(null),l=(0,D.iH)(null),i=(0,D.iH)(null),s=(0,D.iH)(null),o=(0,D.iH)(!0),{proxy:r}=(0,t.FN)(),n=(0,D.iH)(null),u=(0,D.iH)(!1),d=(0,D.iH)(null),c=(0,D.iH)(""),v=(0,D.iH)("");a.value=48,l.value=1;const w=(0,D.iH)(8);r.COMMON.isMo&&(w.value=3);const g=(0,D.iH)(null);function h(){let e=a.value;n.value<a.value&&(e=n.value),g.value=n.value+" 的 "+(l.value-1)*a.value+"-"+((l.value-1)*a.value+e)}function p(){let t=r.COMMON.apiUrl+`/v1/api/star/data/list?data_type=${e.value}&page=${l.value}&size=${a.value}`;r.axios.post(t,{},{headers:{"content-type":"application/json",Authorization:r.$cookies.get("Authorization")}}).then((e=>{200==e.data.code&&(i.value=e.data.data,n.value=e.data.num,o.value=!1,h())})).catch((e=>{r.COMMON.ShowMsg(e)}))}e.value="tv",d.value=e.value,(0,W.ao)(((e,a)=>{p()}));const _=()=>{p()};return(0,t.bv)((()=>{p()})),{data_type:e,per_card:w,data:i,loading:o,error:s,page:l,size:a,num:n,search:u,pageText:g,genre:c,year:v,reF:_,handleChange(){l.value=1,e.value=d.value,p()},showSort:(0,D.iH)(!1),showFilter:(0,D.iH)(!1),mode:d,modes:[{value:"tv",label:"节目"},{value:"movie",label:"电影"}].map((e=>(e.value=e.value.toLowerCase(),e)))}},methods:{BackPage(){this.page=this.page-1,this.page<=0&&(this.COMMON.ShowMsg("已经是第1页啦!"),this.page=1),this.reF()},NextPage(){this.page=this.page+1,this.reF()}}},U=l(475);const F=(0,U.Z)(T,[["render",S],["__scopeId","data-v-184a74d8"]]);var P=F}}]);
//# sourceMappingURL=370.72c85721.js.map