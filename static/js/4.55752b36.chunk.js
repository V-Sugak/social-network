(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{100:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1bzl3",statusBlock:"ProfileInfo_statusBlock__1SR2F",name:"ProfileInfo_name__Zkq0T",photo:"ProfileInfo_photo__uqaTe"}},101:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3iT9U",posts:"MyPosts_posts__3m4x2"}},102:function(t,e,s){t.exports={item:"Post_item__XfNqU"}},107:function(t,e,s){"use strict";s.r(e);var i=s(25),o=s(26),r=s(28),c=s(27),n=s(0),a=s.n(n),u=s(100),l=s.n(u),j=s(31),p=s(58),d=s(60),b=s(1),h=function(t){var e=Object(n.useState)(!1),s=Object(d.a)(e,2),i=s[0],o=s[1],r=Object(n.useState)(t.status),c=Object(d.a)(r,2),a=c[0],u=c[1];Object(n.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsx)("div",{children:i?Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,type:"text",value:a,onChange:function(t){return u(t.currentTarget.value)},onBlur:function(){t.updateUserStatus(a),o(!1)}})}):Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){return o(!0)},children:t.status||"No status"})})})},f=function(t){return t.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:l.a.descriptionBlock,children:[Object(b.jsx)("div",{className:l.a.photo,children:Object(b.jsx)("img",{src:null!==t.profile.photos.large?t.profile.photos.large:p.a})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:l.a.statusBlock,children:[Object(b.jsx)("span",{className:l.a.name,children:t.profile.fullName}),Object(b.jsx)(h,{updateUserStatus:t.updateUserStatus,status:t.status})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"About me: "})," ",t.profile.aboutMe]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for a job: "}),Object(b.jsx)("input",{type:"checkbox",checked:t.profile.lookingForAJob})]})]})]})}):Object(b.jsx)(j.a,{})},O=s(46),x=s(101),v=s.n(x),m=s(102),g=s.n(m),k=function(t){return Object(b.jsxs)("div",{className:g.a.item,children:[Object(b.jsx)("img",{src:"https://bigpicture.ru/wp-content/uploads/2019/11/mixedblood00.jpg",alt:""}),t.message,Object(b.jsxs)("div",{children:[t.likeCount," like"]})]})},_=s(99),S=a.a.memo((function(t){console.log("MyPosts");var e=t.posts.map((function(t){return Object(b.jsx)(k,{message:t.message,likeCount:t.likesCount},t.id)}));return Object(b.jsxs)("div",{className:v.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)("div",{children:Object(b.jsx)(_.a,{buttonName:"Add post",onSubmit:t.addPost})}),Object(b.jsx)("div",{className:v.a.posts,children:e})]})})),U=s(18),P=Object(U.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:O.a})(S),N=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{status:t.status,profile:t.profile,updateUserStatus:t.updateUserStatus}),Object(b.jsx)(P,{})]})},y=s(3),B=s(14),F=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=Number(this.props.match.params.userId);t||(this.props.authorizedUserId?t||(t=this.props.authorizedUserId):this.props.history.push("/login")),this.props.getUsersProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.props.isFetching?Object(b.jsx)(j.a,{}):Object(b.jsx)(N,{status:this.props.status,profile:this.props.profile,updateUserStatus:this.props.updateUserStatus})})}}]),s}(a.a.Component);e.default=Object(B.c)(Object(U.b)((function(t){return{profile:t.profilePage.profile,isFetching:t.app.isFetching,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUsersProfile:O.b,getUserStatus:O.c,updateUserStatus:O.e}),y.f)(F)},99:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s(2),o=(s(0),s(47)),r=s(19),c=s.n(r),n=s(1),a=function(t){var e=Object(o.a)({initialValues:{value:""},validate:function(t){var e={};return t.value&&t.value.length>10&&(e.value="Max length is 10 symbols"),e},onSubmit:function(){t.onSubmit(e.values.value),e.resetForm()}});return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",Object(i.a)({},e.getFieldProps("value")))}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"submit",children:t.buttonName}),e.touched.value&&e.errors.value&&Object(n.jsx)("div",{className:c.a.error,children:e.errors.value})]})]})}}}]);
//# sourceMappingURL=4.55752b36.chunk.js.map