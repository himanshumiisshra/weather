(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1261:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"tutorials"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"versionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tutorials"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"ObjectField",name:{kind:"Name",value:"apiVersion"},value:{kind:"Variable",name:{kind:"Name",value:"versionId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"published"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailURL"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publishedDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"readTime"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:255}};t.loc.source={body:"query tutorials($id: ID!, $versionId: ID!) {\n  tutorials(where: { apiId: $id, apiVersion: $versionId }) {\n    nodes {\n      id\n      slugifiedName\n      published\n      title\n      content\n      thumbnailURL\n      publishedDate\n      readTime\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.tutorials=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,o=new Set,c=new Set;for(d.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var d=l(e,n);d&&t.definitions.push(d)})),t}(t,"tutorials")},1562:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteTutorial"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"versionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteTutorial"},arguments:[{kind:"Argument",name:{kind:"Name",value:"tutorial"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"ObjectField",name:{kind:"Name",value:"apiVersion"},value:{kind:"Variable",name:{kind:"Name",value:"versionId"}}},{kind:"ObjectField",name:{kind:"Name",value:"slugifiedName"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[]}]}}],loc:{start:0,end:168}};t.loc.source={body:"mutation DeleteTutorial($id: ID!, $versionId: ID!, $slug: String!) {\n  deleteTutorial(\n    tutorial: { apiId: $id, apiVersion: $versionId, slugifiedName: $slug }\n  )\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.DeleteTutorial=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,o=new Set,c=new Set;for(d.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var d=l(e,n);d&&t.definitions.push(d)})),t}(t,"DeleteTutorial")},1563:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateTutorial"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"versionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"content"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"published"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"thumbnailURL"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateTutorial"},arguments:[{kind:"Argument",name:{kind:"Name",value:"tutorial"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"apiId"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"ObjectField",name:{kind:"Name",value:"apiVersion"},value:{kind:"Variable",name:{kind:"Name",value:"versionId"}}},{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"content"},value:{kind:"Variable",name:{kind:"Name",value:"content"}}},{kind:"ObjectField",name:{kind:"Name",value:"published"},value:{kind:"Variable",name:{kind:"Name",value:"published"}}},{kind:"ObjectField",name:{kind:"Name",value:"thumbnailURL"},value:{kind:"Variable",name:{kind:"Name",value:"thumbnailURL"}}},{kind:"ObjectField",name:{kind:"Name",value:"slugifiedName"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slugifiedName"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:413}};t.loc.source={body:"mutation UpdateTutorial(\n  $id: ID!\n  $versionId: ID!\n  $title: String\n  $content: String\n  $published: Boolean\n  $thumbnailURL: String\n  $slug: String!\n) {\n  updateTutorial(\n    tutorial: {\n      apiId: $id\n      apiVersion: $versionId\n      title: $title\n      content: $content\n      published: $published\n      thumbnailURL: $thumbnailURL\n      slugifiedName: $slug\n    }\n  ) {\n    id\n    slugifiedName\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.UpdateTutorial=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,o=new Set,c=new Set;for(d.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var d=l(e,n);d&&t.definitions.push(d)})),t}(t,"UpdateTutorial")},1629:function(e,n,t){"use strict";t.r(n);t(20),t(19),t(16),t(13),t(21),t(18),t(22);var d=t(4),r=t(34),l=(t(86),t(59),t(1261)),o=t.n(l),c=t(1562),m=t.n(c),v=t(1563),k=t.n(v);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(d.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var h={middleware:"verifyPageEnabled",meta:{config:{key:"isTutorialEnabled"}},props:{product:Object,canEdit:Boolean},pageTitleTemplate:"apiPage.pageTitle.tutorials",data:function(){return{tutorials:[]}},apollo:{tutorials:{query:o.a,variables:function(){return this.productAndVersionIds},skip:function(){return!this.product||!this.product.id},result:function(e){var n,data=e.data;e.loading||(this.tutorials=null==data||null===(n=data.tutorials)||void 0===n?void 0:n.nodes)}}},computed:{productAndVersionIds:function(){var e,n,t;return{id:null==this||null===(e=this.product)||void 0===e?void 0:e.id,versionId:null==this||null===(n=this.product)||void 0===n||null===(t=n.version)||void 0===t?void 0:t.id}}},getBreadcrumbs:function(e,path,n){var t=e.slug,d=path.substr(0,path.lastIndexOf(t)+t.length);return[{url:"".concat(d,"/tutorials"),title:n.$t("apiPage.tabs.tutorials")}]},methods:{deleteTutorial:function(e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var d,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$apollo.mutate({mutation:m.a,variables:N(N({},n.productAndVersionIds),{},{slug:e}),refetchQueries:[{query:o.a,variables:n.productAndVersionIds}]});case 2:n.$analytics.track("DeleteTutorial",{api_name:null==n||null===(d=n.product)||void 0===d?void 0:d.name,provider_name:null===(r=n.product)||void 0===r||null===(l=r.owner)||void 0===l?void 0:l.name});case 3:case"end":return t.stop()}}),t)})))()},updateTutorial:function(e,n,title,content,t){var d=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var l,c,m,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.$apollo.mutate({mutation:k.a,variables:N(N({},d.productAndVersionIds),{},{slug:e,published:n,title:title,content:content,thumbnailURL:t}),refetchQueries:[{query:o.a,variables:d.productAndVersionIds}]});case 2:return v=r.sent,d.$analytics.track("UpdateTutorial",{public:n,api_name:null==d||null===(l=d.product)||void 0===l?void 0:l.name,provider_name:null===(c=d.product)||void 0===c||null===(m=c.owner)||void 0===m?void 0:m.name}),r.abrupt("return",v.data.updateTutorial);case 5:case"end":return r.stop()}}),r)})))()}}},y=t(58),component=Object(y.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"TutorialsPage center-content"},[t("nuxt-child",{attrs:{tutorials:e.tutorials,product:e.product,canEdit:e.canEdit,deleteTutorial:e.deleteTutorial,updateTutorial:e.updateTutorial}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);