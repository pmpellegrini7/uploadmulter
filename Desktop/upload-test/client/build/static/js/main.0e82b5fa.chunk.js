(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),l=a.n(r),i=(a(29),a(7)),o=a.n(i),s=a(22),m=a(10),u=a(8),p=a.n(u),f=a(53),d=a(54),b=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(m.a)(l,2),u=i[0],b=i[1];function E(){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("api");case 2:t=e.sent,b(t.data.users);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){E()}),[]),c.a.createElement("div",{className:"container-fluid mt-3"},c.a.createElement("h1",{className:"text-center mb-4"},"Upload Images to MongoDB"),c.a.createElement(f.a,{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("profileImg",a),p.a.post("api/user-profile",t,{}).then((function(e){console.log(e)})),E()}},c.a.createElement("div",{className:"mb-3"},c.a.createElement(f.a.File,{id:"formcheck-api-custom",custom:!0},c.a.createElement(f.a.File.Input,{isValid:!0,onChange:function(e){r(e.target.files[0])}}),c.a.createElement(f.a.File.Label,{"data-browse":"Select Image"},"Select Image...")),c.a.createElement(d.a,{className:"float-right mt-2",type:"submit",block:!0},"Upload image to a database"))),u.map((function(e){return c.a.createElement("img",{key:e._id,src:e.profileImg,alt:e._id,className:"w-25 mt-5"})})))};var E=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(b,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0e82b5fa.chunk.js.map