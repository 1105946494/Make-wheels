(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{393:function(t,e,n){},394:function(t,e,n){},395:function(t,e,n){},406:function(t,e,n){"use strict";var i=n(393);n.n(i).a},407:function(t,e,n){"use strict";var i=n(394);n.n(i).a},408:function(t,e,n){"use strict";var i=n(395);n.n(i).a},409:function(t,e,n){"use strict";var i={name:"Sider",data:function(){return{visible:!0}}},s=(n(407),n(56)),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"c9cd1564",null);e.a=a.exports},410:function(t,e,n){"use strict";var i={},s=n(56),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"72f37f9e",null);e.a=a.exports},411:function(t,e,n){"use strict";var i={},s=n(56),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"1ae4b771",null);e.a=a.exports},412:function(t,e,n){"use strict";n(119),n(82),n(120);var i={name:"Layout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"Sider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(406),n(56)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"c4771d4a",null);e.a=a.exports},413:function(t,e,n){"use strict";n(408);var i=n(56),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"b850dbde",null);e.a=s.exports},490:function(t,e,n){"use strict";n.r(e);var i=n(412),s=n(410),a=n(409),c=n(413),r=n(411),l={components:{"j-layout":i.a,"j-header":s.a,"j-content":c.a,"j-footer":r.a,"j-sider":a.a}},u=n(56),o=Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("j-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("j-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("header")]),this._v(" "),e("j-layout",[e("j-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[this._v("sider")]),this._v(" "),e("j-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[this._v("content")])],1),this._v(" "),e("j-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("footer")])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);