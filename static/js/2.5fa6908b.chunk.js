(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1JIW_",dialogsItems:"Dialogs_dialogsItems__3N2eh",active:"Dialogs_active__2lwpj",messages:"Dialogs_messages__1BNwA",message:"Dialogs_message__1n2KW",messageWrapper:"Dialogs_messageWrapper__3ZhDC",myMessage:"Dialogs_myMessage__3hAt-",notMyMessage:"Dialogs_notMyMessage__3l0bD",messageCard:"Dialogs_messageCard__3HYXD",messageHeader:"Dialogs_messageHeader__3Pa5v",about:"Dialogs_about__1loBv",authorName:"Dialogs_authorName__g4_i9",locationNDate:"Dialogs_locationNDate__1H23t",location:"Dialogs_location__1rPV0",datetime:"Dialogs_datetime__30Dly",authorImage:"Dialogs_authorImage__JHOeJ",messageText:"Dialogs_messageText__t2BSt"}},106:function(e,a,s){"use strict";s.r(a);var t=s(52),n=s(1),l=s.n(n),o=s(102),c=s.n(o),i=s(15),m=function(e){var a="/dialogs/"+e.id;return l.a.createElement("div",{className:c.a.dialog},l.a.createElement(i.b,{to:a},e.name))},r=function(e){var a="Me"===e.author?c.a.myMessage:c.a.notMyMessage;return l.a.createElement("div",{className:"".concat(c.a.message," ").concat(a)},l.a.createElement("div",{className:c.a.messageWrapper},l.a.createElement("div",{className:c.a.messageCard},l.a.createElement("div",{className:c.a.messageHeader},l.a.createElement("img",{className:c.a.authorImage,src:"https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg",alt:"Michael John"}),l.a.createElement("div",{className:c.a.about},l.a.createElement("p",{className:c.a.authorName},e.author),l.a.createElement("div",{className:c.a.locationNDate},l.a.createElement("p",{className:"".concat(c.a.location," ").concat(c.a.smallParagraph)},e.location),l.a.createElement("p",{className:"".concat(c.a.datetime," ").concat(c.a.smallParagraph)},e.date)))),l.a.createElement("p",{className:"".concat(c.a.messageText," ").concat(c.a.smallParagraph)},e.message))))},g=s(18),d=s(54),_=s(53),u=function(e){return l.a.createElement(g.d,{initialValues:{newMessageBody:""},onSubmit:function(a,s){var t=s.setSubmitting,n=s.resetForm;e.onSendMessageClick(a.newMessageBody),n(),t(!1)},validationSchema:_.a},function(e){var a=e.isSubmitting,s=e.errors;e.touched;return l.a.createElement(g.c,null,l.a.createElement("div",null,l.a.createElement(g.b,Object.assign({name:"newMessageBody",as:d.a,placeholder:"Enter your message"},s))),l.a.createElement("div",null,l.a.createElement("button",{disabled:a},"Send")))})},E=function(e){var a=e.dialogsPage,s=a.dialogs.map(function(e){return l.a.createElement(m,{name:e.name,id:e.id})}),t=a.messages.map(function(e){return l.a.createElement(r,{message:e.message,author:e.author,location:e.location,date:e.date})});return l.a.createElement("div",null,"Dialogs",l.a.createElement("div",{className:c.a.dialogs},l.a.createElement("div",{className:c.a.dialogsItems},s),l.a.createElement("div",{className:c.a.messages},t,l.a.createElement(u,{onSendMessageClick:function(a){e.sendMessage(a)}}))))},p=s(19),v=s(65),h=s(21);a.default=Object(h.c)(Object(p.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(t.b)(a))}}}),v.a)(E)}}]);
//# sourceMappingURL=2.5fa6908b.chunk.js.map