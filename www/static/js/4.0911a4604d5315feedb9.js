webpackJsonp([4],{OQEz:function(t,e){},"W/Iu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),r=n.n(s),i=n("wliq"),o=n("vLgD"),a=n("NYxO"),c={props:["info"],data:function(){return{formLabelWidth:"80px",attrArr:[{value:""}],form:{specsname:"",attrs:"",status:1}}},methods:r()({},Object(a.b)({requestSpecsList:"specs/listActions",requestSpecsCount:"specs/countActions"}),{addAttr:function(){this.attrArr.push({value:""})},delAttr:function(t){this.attrArr.splice(t,1)},cancel:function(){this.info.show=!1,this.form={specsname:"",attrs:"",status:1},this.attrArr=[{value:""}]},confirm:function(){var t=this;this.attrArr.some(function(t){return""==t})?Object(i.b)("规格属性不能为空"):(this.form.attrs=this.attrArr.map(function(t){return t.value}).join(","),Object(o.y)(this.form).then(function(e){200==e.data.code?(Object(i.a)(e.data.msg),t.cancel(),t.requestSpecsCount(),t.requestSpecsList()):Object(i.b)(e.data.msg)}))},getDetail:function(t){var e=this;Object(o.B)({id:t}).then(function(n){e.form=n.data.list[0],e.form.id=t;var s=e.form.attrs.split(",");for(var r in e.attrArr=[],s)e.attrArr.push({value:s[r]})})},update:function(){var t=this;this.attrArr.some(function(t){return""==t})?Object(i.b)("规格属性不能为空"):(this.form.attrs=this.attrArr.map(function(t){return t.value}).join(","),Object(o.H)(this.form).then(function(e){200==e.data.code&&(Object(i.a)(e.data.msg),t.cancel(),t.requestSpecsList())}))}})},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"规格名称","label-width":t.formLabelWidth}},[n("el-input",{model:{value:t.form.specsname,callback:function(e){t.$set(t.form,"specsname",e)},expression:"form.specsname"}})],1),t._v(" "),t._l(t.attrArr,function(e,s){return n("el-form-item",{key:s,attrs:{label:"规格属性","label-width":t.formLabelWidth}},[n("el-input",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}}),t._v(" "),0==s?n("el-button",{attrs:{type:"primary"},on:{click:t.addAttr}},[t._v("添加规格属性")]):n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.delAttr(s)}}},[t._v("删除")])],1)}),t._v(" "),n("el-form-item",{attrs:{label:"规格状态","label-width":t.formLabelWidth}},[n("el-switch",{attrs:{"active-color":"blue","inactive-color":"grey","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],2),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")]):n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("YsA/")},null,null).exports,d={computed:r()({},Object(a.c)({list:"specs/list",count:"specs/count",size:"specs/size"})),methods:r()({},Object(a.b)({requestSpecsCount:"specs/countActions",requestSpecsList:"specs/listActions",requestSpecsPage:"specs/pageActions"}),{cPage:function(t){this.requestSpecsPage(t),this.requestSpecsList()},edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.m)({id:t}).then(function(t){200==t.data.code&&(Object(i.a)(t.data.msg),e.requestSpecsCount(),e.requestSpecsList())})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),mounted:function(){this.requestSpecsCount(),this.requestSpecsList()}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children"}}},[n("el-table-column",{attrs:{prop:"id",label:"规格编号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"specsname",label:"规格名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"attrs",label:"规格属性",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attrs,function(e){return n("el-tag",{key:e,attrs:{type:"danger"}},[t._v(t._s(e))])})}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"danger"}},[t._v("禁止")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.size,total:t.count},on:{"current-change":t.cPage}})],1)},staticRenderFns:[]};var p={data:function(){return{info:{show:!1,title:"",isAdd:!0}}},methods:{add:function(){this.info.show=!0,this.info.title="添加规格",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="修改规格",this.info.isAdd=!1,this.$refs.add.getDetail(t)}},components:{vAdd:u,vList:n("VU/8")(d,f,!1,function(t){n("WR7v")},null,null).exports}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),n("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(t){n("OQEz")},null,null);e.default=v.exports},WR7v:function(t,e){},"YsA/":function(t,e){}});
//# sourceMappingURL=4.0911a4604d5315feedb9.js.map