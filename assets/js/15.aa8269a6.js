(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{424:function(t,a,e){"use strict";e.r(a);var l=e(8),n=e.n(l),o={name:"talk",data:function(){return{tableData:[],loading:!0}},mounted(){this.loadingList()},methods:{loadingList:function(){let t=this;n.a.get("https://album.katomegumi.net/api/?url=/nicole/getList").then((function(a){t.tableData=a.data.data,t.loading=!1,console.log(a.data.data)})).catch((function(a){console.log(a),t.loading=!1}))}}},s=e(2),i=Object(s.a)(o,(function(){var t=this,a=t._self._c;return a("div",[a("el-alert",{attrs:{title:"绿色标签代表在线，红色标签代表离线",type:"info"}}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"头像",width:"50"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{src:"https://q.qlogo.cn/g?b=qq&s=100&nk="+t.row.qq}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"AI名称",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.status,size:"medium"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"qq",label:"QQ号",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mod",label:"模式",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.mod))]),t._v("   /     "),a("span",[t._v(t._s(e.row.type))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"master",label:"主人",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cpu",label:"负载",width:"150"}})],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);