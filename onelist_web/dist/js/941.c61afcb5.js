"use strict";(self["webpackChunkonelist_web"]=self["webpackChunkonelist_web"]||[]).push([[941],{4941:function(e,a,l){l.r(a),l.d(a,{default:function(){return H}});var t=l(2206);const s=e=>((0,t.dD)("data-v-94a3c4e2"),e=e(),(0,t.Cn)(),e),i={key:0,class:"load"},o={key:1,class:"content"},u={class:"content-header"},n=s((()=>(0,t._)("div",{class:"content-header-title"}," 错误文件 ",-1))),r={class:"content-header-tool"},d=s((()=>(0,t._)("i",{class:"bx bx-trash"},null,-1))),c=(0,t.Uk)(" 删除所选 "),h=s((()=>(0,t._)("i",{class:"bx bx-analyse"},null,-1))),p=(0,t.Uk)(" 刷新 "),m=s((()=>(0,t._)("i",{class:"bx bx-plus-circle"},null,-1))),w=(0,t.Uk)(" 新增 "),_={class:"data-table"},g={class:"data-footer"},v=s((()=>(0,t._)("i",{class:"bx bx-x"},null,-1))),f=(0,t.Uk)(" 确定 "),M=s((()=>(0,t._)("i",{class:"bx bx-x"},null,-1))),b=s((()=>(0,t._)("i",{class:"bx bx-trash"},null,-1))),k=(0,t.Uk)(" 删除 "),y=s((()=>(0,t._)("i",{class:"bx bx-save"},null,-1))),W=(0,t.Uk)(" 更新 ");function C(e,a,l,s,C,U){const O=(0,t.up)("n-button"),x=(0,t.up)("n-space"),z=(0,t.up)("n-data-table"),N=(0,t.up)("n-pagination"),$=(0,t.up)("n-input"),D=(0,t.up)("n-form-item"),H=(0,t.up)("n-switch"),R=(0,t.up)("n-form"),S=(0,t.up)("n-card"),K=(0,t.up)("n-modal");return e.loading?((0,t.wg)(),(0,t.iD)("div",i)):((0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",u,[n,(0,t._)("div",r,[(0,t.Wm)(x,{justify:"end",size:"medium"},{default:(0,t.w5)((()=>[e.checkedRowKeys.length>0?((0,t.wg)(),(0,t.j4)(O,{key:0,onClick:a[0]||(a[0]=a=>e.DeleteList()),type:"warning"},{icon:(0,t.w5)((()=>[d])),default:(0,t.w5)((()=>[c])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(O,{onClick:a[1]||(a[1]=a=>e.reFData()),type:"info"},{icon:(0,t.w5)((()=>[h])),default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(O,{onClick:a[2]||(a[2]=a=>e.ShowCreate()),type:"info"},{icon:(0,t.w5)((()=>[m])),default:(0,t.w5)((()=>[w])),_:1})])),_:1})])]),(0,t._)("div",_,[(0,t.Wm)(z,{columns:e.columns,data:e.data,pagination:e.pagination,bordered:!0,"row-key":e.rowKey,"onUpdate:checkedRowKeys":e.handleCheck},null,8,["columns","data","pagination","row-key","onUpdate:checkedRowKeys"])]),(0,t._)("div",g,[(0,t.Wm)(x,{justify:"end"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{page:e.page,"onUpdate:page":a[3]||(a[3]=a=>e.page=a),"page-count":e.num,"page-slot":5},null,8,["page","page-count"])])),_:1})]),(0,t.Wm)(K,{"transform-origin":"center",show:e.createModal,"onUpdate:show":a[10]||(a[10]=a=>e.createModal=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{style:{width:"600px"},title:"新增",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,t.w5)((()=>[(0,t.Wm)(O,{onClick:a[4]||(a[4]=a=>e.createModal=!e.createModal),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[v])),_:1})])),footer:(0,t.w5)((()=>[(0,t.Wm)(x,{justify:"end",size:"medium"},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{onClick:a[9]||(a[9]=a=>e.Create()),type:"info"},{default:(0,t.w5)((()=>[f])),_:1})])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(R,{model:e.user},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{label:"用户名"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{size:"large",value:e.user.user_name,"onUpdate:value":a[5]||(a[5]=a=>e.user.user_name=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"邮箱"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{size:"large",value:e.user.user_email,"onUpdate:value":a[6]||(a[6]=a=>e.user.user_email=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"密码"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{type:"password","show-password-on":"mousedown",size:"large",value:e.user.user_password,"onUpdate:value":a[7]||(a[7]=a=>e.user.user_password=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"管理员"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{size:"large",value:e.user.is_admin,"onUpdate:value":a[8]||(a[8]=a=>e.user.is_admin=a),placeholder:"",clearable:""},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["show"]),(0,t.Wm)(K,{"transform-origin":"center",show:e.editModal,"onUpdate:show":a[18]||(a[18]=a=>e.editModal=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{style:{width:"600px"},title:"编辑",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,t.w5)((()=>[(0,t.Wm)(O,{onClick:a[11]||(a[11]=a=>e.editModal=!e.editModal),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[M])),_:1})])),footer:(0,t.w5)((()=>[(0,t.Wm)(x,{justify:"end",size:"medium"},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{onClick:a[16]||(a[16]=a=>e.Delete()),type:"warning"},{icon:(0,t.w5)((()=>[b])),default:(0,t.w5)((()=>[k])),_:1}),(0,t.Wm)(O,{onClick:a[17]||(a[17]=a=>e.Updata()),type:"info"},{icon:(0,t.w5)((()=>[y])),default:(0,t.w5)((()=>[W])),_:1})])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(R,{model:e.user},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{label:"用户名"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{size:"large",value:e.user.user_name,"onUpdate:value":a[12]||(a[12]=a=>e.user.user_name=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"邮箱"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{size:"large",value:e.user.user_email,"onUpdate:value":a[13]||(a[13]=a=>e.user.user_email=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"管理员"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{size:"large",value:e.user.is_admin,"onUpdate:value":a[14]||(a[14]=a=>e.user.is_admin=a),placeholder:"",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)(D,{label:"锁定账号"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{size:"large",value:e.user.is_lock,"onUpdate:value":a[15]||(a[15]=a=>e.user.is_lock=a),placeholder:"",clearable:""},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["show"])]))}var U=l(9629),O=l(9404),x=l(3421);const z=({play:e})=>[{type:"selection",disabled(e){return"Edward King 3"===e.id}},{title:"ID",key:"id",resizable:!0,minWidth:50},{title:"用户名",key:"user_name",resizable:!0},{title:"邮箱",key:"user_email",resizable:!0},{title:"UserId",key:"user_id",resizable:!0},{title:"操作",key:"actions",render(a){return(0,t.h)(U.ZP,{strong:!0,tertiary:!0,size:"small",onClick:()=>e(a)},{default:()=>"编辑"})}}];var N=(0,t.aZ)({name:"UserIndex",setup(){const e=(0,x.iH)(!0),a=(0,x.iH)(!1),l=(0,x.iH)(!1),s=(0,x.iH)(null),i=(0,x.iH)({user_name:null,user_id:null,user_email:null,user_password:null,is_admin:!1,is_lock:!1}),o=(0,x.iH)(null),u=(0,x.iH)(null),{proxy:n}=(0,t.FN)(),r=(0,x.iH)(1),d=(0,x.iH)(0),c=(0,x.iH)(12);u.value=n.$route.query.id;const h=(0,O.R)(),p=(0,x.iH)([]);function m(){n.axios.post(`${n.COMMON.apiUrl}/v1/api/user/list?page=${r.value}&size=${c.value}`,{},{headers:{"content-type":"application/json",Authorization:n.$cookies.get("Authorization")}}).then((a=>{200==a.data.code?(o.value=a.data.data,d.value=Math.round(a.data.num/c.value)+1,e.value=!1):n.COMMON.ShowMsg(a.data.msg)})).catch((e=>{n.COMMON.ShowMsg(e)}))}const w=async()=>{m()};return(0,t.bv)((()=>{m()})),{data:o,dialog:h,user:i,createModal:a,editModal:l,reFData:w,error:s,loading:e,page:r,num:d,columns:z({play(e){i.value=e,l.value=!l.value}}),checkedRowKeys:p,rowKey:e=>e.id,handleCheck(e){p.value=e},pagination:!1}},methods:{Request(e,a){this.axios.post(e,a,{headers:{"content-type":"application/json",Authorization:this.$cookies.get("Authorization")}}).then((e=>{200==e.data.code?(this.reFData(),this.COMMON.ShowMsg(e.data.msg)):this.COMMON.ShowMsg(e.data.msg)})).catch((e=>{this.COMMON.ShowMsg(e)}))},ShowCreate(){this.user={user_name:null,user_id:null,user_email:null,user_password:null,is_admin:!1,is_lock:!1},this.createModal=!this.createModal},Create(){this.Request(`${this.COMMON.apiUrl}/v1/api/user/create`,this.user)},Updata(){this.Request(`${this.COMMON.apiUrl}/v1/api/user/update?id=${this.user.id}`,this.user)},Delete(){this.Request(`${this.COMMON.apiUrl}/v1/api/user/delete?id=${this.user.id}`,{})},DeleteList(){Promise.all(this.checkedRowKeys.map((async e=>{let a=`${this.COMMON.apiUrl}/v1/api/user/delete?id=${e}`;this.axios.post(a,{},{headers:{"content-type":"application/json",Authorization:this.$cookies.get("Authorization")}}).then((e=>{0==e.data.code&&this.COMMON.ShowMsg(e.data.msg)})).catch((e=>{this.COMMON.ShowMsg(e)}))}))).then((()=>{this.checkedRowKeys=[],this.reFData(),this.COMMON.ShowMsg("处理完毕!")}))}},watch:{page:function(e){this.page=e,this.reFData()}}}),$=l(475);const D=(0,$.Z)(N,[["render",C],["__scopeId","data-v-94a3c4e2"]]);var H=D}}]);
//# sourceMappingURL=941.c61afcb5.js.map