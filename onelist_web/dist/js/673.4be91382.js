"use strict";(self["webpackChunkonelist_web"]=self["webpackChunkonelist_web"]||[]).push([[673],{673:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var i=t(2206);const l=e=>((0,i.dD)("data-v-6656629e"),e=e(),(0,i.Cn)(),e),o={key:0,class:"load"},n={key:1,class:"content"},s={class:"content-header"},r=l((()=>(0,i._)("div",{class:"content-header-title"}," 错误文件 ",-1))),d={class:"content-header-tool"},u=l((()=>(0,i._)("i",{class:"bx bx-trash"},null,-1))),c=(0,i.Uk)(" 删除所选 "),h=l((()=>(0,i._)("i",{class:"bx bx-analyse"},null,-1))),p=(0,i.Uk)(" 刷新 "),w=l((()=>(0,i._)("i",{class:"bx bxs-error-circle"},null,-1))),f=(0,i.Uk)(" 修复 "),m={class:"data-table"},g={class:"data-footer"},M=l((()=>(0,i._)("i",{class:"bx bx-x"},null,-1))),y=l((()=>(0,i._)("h3",null,"确定创建错误文件修复任务吗？",-1))),k=l((()=>(0,i._)("i",{class:"bx bx-check"},null,-1))),_=(0,i.Uk)(" 确定 "),v=l((()=>(0,i._)("i",{class:"bx bx-x"},null,-1))),b=l((()=>(0,i._)("i",{class:"bx bx-trash"},null,-1))),x=(0,i.Uk)(" 删除 "),C=l((()=>(0,i._)("i",{class:"bx bx-save"},null,-1))),O=(0,i.Uk)(" 更新 ");function W(e,a,t,l,W,z){const U=(0,i.up)("n-button"),$=(0,i.up)("n-space"),N=(0,i.up)("n-data-table"),D=(0,i.up)("n-pagination"),H=(0,i.up)("n-card"),R=(0,i.up)("n-modal"),j=(0,i.up)("n-input"),F=(0,i.up)("n-form-item"),K=(0,i.up)("n-form");return e.loading?((0,i.wg)(),(0,i.iD)("div",o)):((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",s,[r,(0,i._)("div",d,[(0,i.Wm)($,{justify:"end",size:"medium"},{default:(0,i.w5)((()=>[e.checkedRowKeys.length>0?((0,i.wg)(),(0,i.j4)(U,{key:0,onClick:a[0]||(a[0]=a=>e.DeleteList()),type:"warning"},{icon:(0,i.w5)((()=>[u])),default:(0,i.w5)((()=>[c])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(U,{onClick:a[1]||(a[1]=a=>e.reFData()),type:"info"},{icon:(0,i.w5)((()=>[h])),default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(U,{onClick:a[2]||(a[2]=a=>e.errModal=!e.errModal),type:"info"},{icon:(0,i.w5)((()=>[w])),default:(0,i.w5)((()=>[f])),_:1})])),_:1})])]),(0,i._)("div",m,[(0,i.Wm)(N,{columns:e.columns,data:e.data,pagination:e.pagination,bordered:!0,"row-key":e.rowKey,"onUpdate:checkedRowKeys":e.handleCheck},null,8,["columns","data","pagination","row-key","onUpdate:checkedRowKeys"])]),(0,i._)("div",g,[(0,i.Wm)($,{justify:"end"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{page:e.page,"onUpdate:page":a[3]||(a[3]=a=>e.page=a),"page-count":e.num,"page-slot":5},null,8,["page","page-count"])])),_:1})]),(0,i.Wm)(R,{"transform-origin":"center",show:e.errModal,"onUpdate:show":a[6]||(a[6]=a=>e.errModal=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{style:{width:"600px"},title:"确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,i.w5)((()=>[(0,i.Wm)(U,{onClick:a[4]||(a[4]=a=>e.errModal=!e.errModal),strong:"",secondary:"",circle:""},{default:(0,i.w5)((()=>[M])),_:1})])),footer:(0,i.w5)((()=>[(0,i.Wm)($,{justify:"end",size:"medium"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{onClick:a[5]||(a[5]=a=>e.reF()),type:"info"},{icon:(0,i.w5)((()=>[k])),default:(0,i.w5)((()=>[_])),_:1})])),_:1})])),default:(0,i.w5)((()=>[y])),_:1})])),_:1},8,["show"]),(0,i.Wm)(R,{"transform-origin":"center",show:e.editModal,"onUpdate:show":a[12]||(a[12]=a=>e.editModal=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{style:{width:"600px"},title:"处理",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,i.w5)((()=>[(0,i.Wm)(U,{onClick:a[7]||(a[7]=a=>e.editModal=!e.editModal),strong:"",secondary:"",circle:""},{default:(0,i.w5)((()=>[v])),_:1})])),footer:(0,i.w5)((()=>[(0,i.Wm)($,{justify:"end",size:"medium"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{onClick:a[10]||(a[10]=a=>e.Delete()),type:"warning"},{icon:(0,i.w5)((()=>[b])),default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(U,{onClick:a[11]||(a[11]=a=>e.Updata()),type:"info"},{icon:(0,i.w5)((()=>[C])),default:(0,i.w5)((()=>[O])),_:1})])),_:1})])),default:(0,i.w5)((()=>[(0,i.Wm)(K,{model:e.errfile},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{label:"文件"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{size:"large",value:e.errfile.file,"onUpdate:value":a[8]||(a[8]=a=>e.errfile.file=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,i.Wm)(F,{label:"错误信息"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{size:"large",value:e.errfile.err_msg,"onUpdate:value":a[9]||(a[9]=a=>e.errfile.err_msg=a),placeholder:"",clearable:""},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["show"])]))}var z=t(9629),U=t(9404),$=t(3421);const N=({play:e})=>[{type:"selection",disabled(e){return"Edward King 3"===e.id}},{title:"ID",key:"id",resizable:!0,minWidth:50},{title:"文件",key:"file",resizable:!0,minWidth:300},{title:"错误信息",key:"err_msg",resizable:!0,minWidth:400,maxWidth:600},{title:"操作",key:"actions",render(a){return(0,i.h)(z.ZP,{strong:!0,tertiary:!0,size:"small",onClick:()=>e(a)},{default:()=>"处理"})}}];var D=(0,i.aZ)({name:"ErrFileIndex",setup(){const e=(0,$.iH)(!0),a=(0,$.iH)(!1),t=(0,$.iH)(!1),l=(0,$.iH)(null),o=(0,$.iH)(null),n=(0,$.iH)(null),s=(0,$.iH)(null),{proxy:r}=(0,i.FN)(),d=(0,$.iH)(1),u=(0,$.iH)(0),c=(0,$.iH)(12);s.value=r.$route.query.id;const h=(0,U.R)(),p=(0,$.iH)([]);function w(){r.axios.post(`${r.COMMON.apiUrl}/v1/api/errfile/work/list?id=${s.value}&page=${d.value}&size=${c.value}`,{},{headers:{"content-type":"application/json",Authorization:r.$cookies.get("Authorization")}}).then((a=>{200==a.data.code?(n.value=a.data.data,u.value=Math.round(a.data.num/c.value)+1,e.value=!1):r.COMMON.ShowMsg(a.data.msg)})).catch((e=>{r.COMMON.ShowMsg(e)}))}function f(){r.axios.post(`${r.COMMON.apiUrl}/v1/api/errfile/ref/work/list?id=${s.value}`,{},{headers:{"content-type":"application/json",Authorization:r.$cookies.get("Authorization")}}).then((e=>{r.COMMON.ShowMsg(e.data.msg)})).catch((e=>{r.COMMON.ShowMsg(e)}))}const m=async()=>{f()},g=async()=>{w()};return(0,i.bv)((()=>{w()})),{data:n,dialog:h,errfile:o,errModal:a,editModal:t,reF:m,reFData:g,error:l,loading:e,page:d,num:u,columns:N({play(e){o.value=e,t.value=!t.value}}),checkedRowKeys:p,rowKey:e=>e.id,handleCheck(e){p.value=e},pagination:!1}},methods:{Request(e,a){this.axios.post(e,a,{headers:{"content-type":"application/json",Authorization:this.$cookies.get("Authorization")}}).then((e=>{200==e.data.code?(this.reFData(),this.COMMON.ShowMsg(e.data.msg),this.editModal=!1):this.COMMON.ShowMsg(e.data.msg)})).catch((e=>{this.COMMON.ShowMsg(e)}))},Updata(){this.Request(`${this.COMMON.apiUrl}/v1/api/errfile/update?id=${this.errfile.id}`,this.errfile)},Delete(){this.Request(`${this.COMMON.apiUrl}/v1/api/errfile/delete?id=${this.errfile.id}`,{})},DeleteList(){Promise.all(this.checkedRowKeys.map((async e=>{let a=`${this.COMMON.apiUrl}/v1/api/errfile/delete?id=${e}`;this.axios.post(a,{},{headers:{"content-type":"application/json",Authorization:this.$cookies.get("Authorization")}}).then((e=>{0==e.data.code?this.COMMON.ShowMsg(e.data.msg):this.reFData()})).catch((e=>{this.COMMON.ShowMsg(e)}))}))).then((()=>{this.checkedRowKeys=[]}))}},watch:{page:function(e){this.page=e,this.reFData()}}}),H=t(475);const R=(0,H.Z)(D,[["render",W],["__scopeId","data-v-6656629e"]]);var j=R}}]);
//# sourceMappingURL=673.4be91382.js.map