(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(1),o=a.n(l),r=a(102),s=a(44),c=a(90),i=a.n(c),u=a(30),m=function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),r=a[0],s=a[1],c=Object(l.useState)(e.status),i=Object(n.a)(c,2),u=i[0],m=i[1];Object(l.useEffect)(function(){m(e.status)},[e.status]);return o.a.createElement("div",null,!r&&o.a.createElement("div",null,o.a.createElement("b",null,"Status: "),o.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"------------")),r&&o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},value:u,onBlur:function(){s(!1),e.updateStatus(u)},autoFocus:!0})))},f=a(26),d=a.n(f),E=a(17),b=function(e){var t=e.profile,a=e.saveProfile,n=e.setEditMode;return o.a.createElement(E.d,{initialValues:{profile:t},onSubmit:function(e){a(e).then(function(){n(!1)})}},function(e){var a=e.isSubmitting;return o.a.createElement(E.c,null,o.a.createElement("div",null,o.a.createElement("button",{type:"submit",disabled:a},"Save")),o.a.createElement("div",null,o.a.createElement("label",{for:"fullName"},o.a.createElement("b",null,"Full Name: ")),o.a.createElement(E.b,{type:"text",name:"fullName"})),o.a.createElement("div",null,o.a.createElement(E.b,{type:"checkbox",name:"lookingForAJob"}),"Looking for a job"),o.a.createElement("div",null,o.a.createElement("label",{for:"lookingForAJobDescription"},o.a.createElement("b",null,"My professinal skills: ")),o.a.createElement(E.b,{name:"lookingForAJobDescription",as:"textarea",placeholder:"Enter your skills",required:!0})),o.a.createElement("div",null,o.a.createElement("label",{for:"aboutMe"},o.a.createElement("b",null,"About Me: ")),o.a.createElement(E.b,{name:"aboutMe",as:"textarea",placeholder:"About Me",required:!0})),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map(function(e){return o.a.createElement("div",{key:e,className:i.a.contact},o.a.createElement("label",{for:"contacts."+e},o.a.createElement("b",null,e),":"),o.a.createElement(E.b,{type:"text",name:"contacts."+e}))})))})},p=function(e){var t=e.contactTitle,a=e.contactValue;return o.a.createElement("div",{className:i.a.contact},o.a.createElement("b",null,t,":")," ",a)},v=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return o.a.createElement("div",null,a&&o.a.createElement("button",{onClick:n},"Edit"),o.a.createElement("div",null,o.a.createElement("b",null,"Full name: "),t.fullName),o.a.createElement("div",null,o.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&o.a.createElement("div",null,o.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),o.a.createElement("div",null,o.a.createElement("b",null,"About me: "),t.aboutMe),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map(function(e){return o.a.createElement(p,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},g=function(e){var t=e.profile,a=e.status,r=e.updateStatus,s=e.isOwner,c=e.savePhoto,f=e.saveProfile,E=Object(l.useState)(!1),p=Object(n.a)(E,2),g=p[0],P=p[1];if(!t)return o.a.createElement(u.a,null);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:"https://open.lib.umn.edu/app/uploads/sites/5/2015/09/9.1.jpg",alt:"User mainPhoto",className:i.a.userMainPhoto})),o.a.createElement("div",{className:i.a.descriptionBlock},o.a.createElement("img",{src:t.photos.large||d.a,alt:"",className:i.a.userPhoto}),s&&o.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),g?o.a.createElement(b,{profile:t,saveProfile:f,setEditMode:P}):o.a.createElement(v,{profile:t,isOwner:s,goToEditMode:function(){P(!0)}}),o.a.createElement(m,{status:a,updateStatus:r})))},P=a(97),_=a.n(P),h=a(99),k=a.n(h),j=function(e){return o.a.createElement("div",{className:k.a.item},o.a.createElement("img",{src:"https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg",alt:""}),o.a.createElement("div",null,o.a.createElement("span",null,e.name,", ",e.age)),e.message,o.a.createElement("div",null,o.a.createElement("span",null,"Like ",e.likeCount)))},O=a(89),w=a(86),y=o.a.memo(function(e){var t=e.posts.map(function(e){return o.a.createElement(j,{name:e.name,message:e.message,id:e.id,age:e.age,likeCount:e.likesCount})});return o.a.createElement("div",{className:_.a.postsBlock},o.a.createElement("h3",null,"my posts"),o.a.createElement(M,{onAddPost:function(t){e.addPost(t)}}),o.a.createElement("div",{className:_.a.posts},t))}),M=function(e){return o.a.createElement(E.d,{initialValues:{newPostText:"",errorMessage:""},onSubmit:function(t,a){var n=a.setSubmitting,l=a.resetForm;e.onAddPost(t.newPostText),l(),n(!1)},validationSchema:O.b},function(e){var t=e.isSubmitting,a=e.errors;e.touched;return o.a.createElement(E.c,null,o.a.createElement("div",null,o.a.createElement(E.b,Object.assign({name:"newPostText",as:w.b,placeholder:"Enter your post"},a))),o.a.createElement("div",null,o.a.createElement("button",{disabled:t,type:"submit"},"Add Post")))})},S=y,x=a(20),C=Object(x.b)(function(e){return{posts:e.profilePage.posts}},function(e){return{addPost:function(t){e(Object(s.a)(t))}}})(S),N=function(e){return o.a.createElement("main",null,o.a.createElement(g,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),o.a.createElement(C,null))},A=a(0),B=a(24);t.default=Object(B.c)(Object(x.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}},{getUserProfile:s.d,getStatus:s.c,updateStatus:s.g,savePhoto:s.e,saveProfile:s.f}))(function(e){var t=Object(A.q)().userId;t||(t=29275);var a=Object(l.useState)(null),s=Object(n.a)(a,2),c=s[0],i=s[1];return Object(l.useEffect)(function(){r.a.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then(function(e){return e.data}).then(function(e){return i(e)})},[t]),e.getStatus(t),o.a.createElement("main",null,o.a.createElement(N,Object.assign({},e,{profile:c,status:e.status,updateStatus:e.updateStatus,isOwner:29275===t,savePhoto:e.savePhoto})))})},86:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return i});var n=a(17),l=a(1),o=a.n(l),r=a(87),s=a.n(r),c=function(e){return o.a.createElement("div",{className:e.newPostText&&s.a.formControl+" "+s.a.error},o.a.createElement("div",null,o.a.createElement(n.b,Object.assign({},e,{as:"textarea"}))),e.newPostText&&o.a.createElement("span",null,e.newPostText))},i=function(e){return o.a.createElement("div",{className:e.newMessageBody&&s.a.formControl+" "+s.a.error},o.a.createElement("div",null,o.a.createElement(n.b,Object.assign({},e,{as:"textarea"}))),e.newMessageBody&&o.a.createElement("span",null,e.newMessageBody))}},87:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2xvfE",error:"FormsControls_error__2B2Hh"}},89:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return o});var n=a(91),l=n.a().shape({newPostText:n.b().min(2,"Post is too short!").max(10,"Post is too Long!").required("Required")}),o=n.a().shape({newMessageBody:n.b().min(2,"Message is too short!").max(10,"Message is too Long!").required("Required")})},90:function(e,t,a){e.exports={userMainPhoto:"ProfileInfo_userMainPhoto__2PM_g",descriptionBlock:"ProfileInfo_descriptionBlock__1yNYD",description:"ProfileInfo_description__3neIC",fullName:"ProfileInfo_fullName__2H4Vh",userPhoto:"ProfileInfo_userPhoto__3ztja",contact:"ProfileInfo_contact__2Cu4X"}},97:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1SCmN",posts:"MyPosts_posts__2vhA_",input_error:"MyPosts_input_error__3PQcd"}},99:function(e,t,a){e.exports={item:"Post_item__alB57"}}}]);
//# sourceMappingURL=4.47d6715b.chunk.js.map