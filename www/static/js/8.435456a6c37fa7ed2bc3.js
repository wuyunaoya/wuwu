webpackJsonp([8],{"0o6p":function(t,e){},BksY:function(t,e){},FMBJ:function(t,e){},PZur:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),o=n("BGi1"),r=n("D/cR"),s=n("NYxO"),l={props:["info"],data:function(){return{form:{title:"",img:"",status:1},formLabelWidth:"120px",imageUrl:""}},methods:i()({},Object(s.b)({requestBanner:"banner/bannerActions"}),{changeImg:function(t){if(t.size>2097152)Object(o.b)("文件过大");else{var e=t.name.slice(t.name.lastIndexOf("."));[".jpg",".png"].some(function(t){return t==e})?(this.imageUrl=URL.createObjectURL(t.raw),this.form.img=t.raw):Object(o.b)("文件格式不正确")}},cancel:function(){this.info.isShow=!1,this.form={title:"",img:"",status:1},this.imageUrl=""},ok:function(){var t=this;Object(r.e)(this.form).then(function(e){200==e.data.code?(Object(o.a)(e.data.msg),t.cancel(),t.requestBanner()):Object(o.b)(e.data.msg)})},detail:function(t){var e=this;Object(r.F)({id:t}).then(function(n){e.form=n.data.list,e.imageUrl=e.$img+e.form.img,e.form.id=t})},update:function(){var t=this;Object(r.g)(this.form).then(function(e){200==e.data.code&&(Object(o.a)(e.data.msg),t.cancel(),t.requestBanner())})}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"标题","label-width":t.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"图片","label-width":t.formLabelWidth}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"#","on-change":t.changeImg},model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}},[t.imageUrl?n("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),n("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[n("el-switch",{attrs:{"active-color":"#409eff","inactive-color":"grey","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("添 加")]):n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("0o6p")},"data-v-f11b78da",null).exports,f={computed:i()({},Object(s.c)({list:"banner/list"})),methods:i()({},Object(s.b)({requestBanner:"banner/bannerActions"}),{emitMenu:function(t){this.$emit("deta",t)},deltMenu:function(t){var e=this;this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.l)({id:t}).then(function(t){Object(o.a)(t.data.msg),e.requestBanner()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),mounted:function(){this.requestBanner()}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:""}},[n("el-table-column",{attrs:{prop:"id",label:"编号",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"轮播图标题"}}),t._v(" "),n("el-table-column",{attrs:{prop:"img",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("img",{staticClass:"img",attrs:{src:t.$img+e.row.img,alt:""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.emitMenu(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.deltMenu(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var m={data:function(){return{info:{isShow:!1,title:"",isAdd:!0}}},methods:{add:function(){this.info.isShow=!0,this.info.isAdd=!0,this.info.title="添加轮播图"},deta:function(t){this.info.isShow=!0,this.info.isAdd=!1,this.info.title="编辑轮播图",this.$refs.add.detail(t)}},components:{vAdd:u,vList:n("VU/8")(f,d,!1,function(t){n("FMBJ")},"data-v-4cf7f286",null).exports}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),n("v-list",{on:{deta:function(e){return t.deta(e)}}})],1)},staticRenderFns:[]};var v=n("VU/8")(m,b,!1,function(t){n("BksY")},"data-v-1d1a377e",null);e.default=v.exports}});
//# sourceMappingURL=8.435456a6c37fa7ed2bc3.js.map