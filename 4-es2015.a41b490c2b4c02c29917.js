(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cAcB:function(n,l,u){"use strict";u.r(l);var o=u("8Y7J");class t{constructor(n){this.authService=n,this.email="",this.password="",this.confirmPassword=""}ngOnInit(){}register(){this.password===this.confirmPassword?this.authService.createAccount(this.email,this.password).subscribe(n=>{console.log("Usu\xe1rio criado com sucesso ",n),localStorage.setItem("token",n.idToken),this.authService.setUser({id:n.localId,email:n.email})}):alert("Senha e confirmar senha n\xe3o conferem")}}class e{constructor(n){this.authService=n,this.email="",this.password=""}ngOnInit(){}login(){this.authService.login(this.email,this.password).subscribe(n=>{console.log("Usu\xe1rio logado com sucesso"),localStorage.setItem("token",n.idToken),this.authService.setUser({id:n.localId,email:n.email})},n=>{switch(console.log(n),n.error.error.message){case"EMAIL_NOT_FOUND":alert("E-mail n\xe3o encontrado");break;case"INVALID_PASSWORD":alert("Senha inv\xe1lida");break;default:alert("Houve um erro")}})}}class i{}var a=u("pMnS"),s=u("s7LF"),r=u("qXBG"),d=o.lb({encapsulation:0,styles:[[""]],data:{}});function g(n){return o.Cb(0,[(n()(),o.Ab(-1,null,["E-mail: "])),(n()(),o.nb(1,0,null,null,5,"input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==o.vb(n,2)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==o.vb(n,2).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.vb(n,2)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.vb(n,2)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(e.email=u)&&t),t},null,null)),o.mb(2,16384,null,0,s.d,[o.B,o.k,[2,s.a]],null,null),o.yb(1024,null,s.g,function(n){return[n]},[s.d]),o.mb(4,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.yb(2048,null,s.h,null,[s.l]),o.mb(6,16384,null,0,s.i,[[4,s.h]],null,null),(n()(),o.Ab(-1,null,["\nSenha: "])),(n()(),o.nb(8,0,null,null,5,"input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==o.vb(n,9)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==o.vb(n,9).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.vb(n,9)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.vb(n,9)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(e.password=u)&&t),t},null,null)),o.mb(9,16384,null,0,s.d,[o.B,o.k,[2,s.a]],null,null),o.yb(1024,null,s.g,function(n){return[n]},[s.d]),o.mb(11,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.yb(2048,null,s.h,null,[s.l]),o.mb(13,16384,null,0,s.i,[[4,s.h]],null,null),(n()(),o.nb(14,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o},null,null)),(n()(),o.Ab(-1,null,["Entrar"]))],function(n,l){var u=l.component;n(l,4,0,u.email),n(l,11,0,u.password)},function(n,l){n(l,1,0,o.vb(l,6).ngClassUntouched,o.vb(l,6).ngClassTouched,o.vb(l,6).ngClassPristine,o.vb(l,6).ngClassDirty,o.vb(l,6).ngClassValid,o.vb(l,6).ngClassInvalid,o.vb(l,6).ngClassPending),n(l,8,0,o.vb(l,13).ngClassUntouched,o.vb(l,13).ngClassTouched,o.vb(l,13).ngClassPristine,o.vb(l,13).ngClassDirty,o.vb(l,13).ngClassValid,o.vb(l,13).ngClassInvalid,o.vb(l,13).ngClassPending)})}function c(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,1,"app-login",[],null,null,null,g,d)),o.mb(1,114688,null,0,e,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var b=o.jb("app-login",e,c,{},{},[]),p=o.lb({encapsulation:0,styles:[[""]],data:{}});function v(n){return o.Cb(0,[(n()(),o.Ab(-1,null,["E-mail: "])),(n()(),o.nb(1,0,null,null,5,"input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==o.vb(n,2)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==o.vb(n,2).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.vb(n,2)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.vb(n,2)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(e.email=u)&&t),t},null,null)),o.mb(2,16384,null,0,s.d,[o.B,o.k,[2,s.a]],null,null),o.yb(1024,null,s.g,function(n){return[n]},[s.d]),o.mb(4,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.yb(2048,null,s.h,null,[s.l]),o.mb(6,16384,null,0,s.i,[[4,s.h]],null,null),(n()(),o.Ab(-1,null,["\nSenha: "])),(n()(),o.nb(8,0,null,null,5,"input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==o.vb(n,9)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==o.vb(n,9).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.vb(n,9)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.vb(n,9)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(e.password=u)&&t),t},null,null)),o.mb(9,16384,null,0,s.d,[o.B,o.k,[2,s.a]],null,null),o.yb(1024,null,s.g,function(n){return[n]},[s.d]),o.mb(11,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.yb(2048,null,s.h,null,[s.l]),o.mb(13,16384,null,0,s.i,[[4,s.h]],null,null),(n()(),o.Ab(-1,null,["\nConfirmar Senha: "])),(n()(),o.nb(15,0,null,null,5,"input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==o.vb(n,16)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==o.vb(n,16).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.vb(n,16)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.vb(n,16)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(e.confirmPassword=u)&&t),t},null,null)),o.mb(16,16384,null,0,s.d,[o.B,o.k,[2,s.a]],null,null),o.yb(1024,null,s.g,function(n){return[n]},[s.d]),o.mb(18,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.yb(2048,null,s.h,null,[s.l]),o.mb(20,16384,null,0,s.i,[[4,s.h]],null,null),(n()(),o.nb(21,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.register()&&o),o},null,null)),(n()(),o.Ab(-1,null,["Entrar"]))],function(n,l){var u=l.component;n(l,4,0,u.email),n(l,11,0,u.password),n(l,18,0,u.confirmPassword)},function(n,l){n(l,1,0,o.vb(l,6).ngClassUntouched,o.vb(l,6).ngClassTouched,o.vb(l,6).ngClassPristine,o.vb(l,6).ngClassDirty,o.vb(l,6).ngClassValid,o.vb(l,6).ngClassInvalid,o.vb(l,6).ngClassPending),n(l,8,0,o.vb(l,13).ngClassUntouched,o.vb(l,13).ngClassTouched,o.vb(l,13).ngClassPristine,o.vb(l,13).ngClassDirty,o.vb(l,13).ngClassValid,o.vb(l,13).ngClassInvalid,o.vb(l,13).ngClassPending),n(l,15,0,o.vb(l,20).ngClassUntouched,o.vb(l,20).ngClassTouched,o.vb(l,20).ngClassPristine,o.vb(l,20).ngClassDirty,o.vb(l,20).ngClassValid,o.vb(l,20).ngClassInvalid,o.vb(l,20).ngClassPending)})}function m(n){return o.Cb(0,[(n()(),o.nb(0,0,null,null,1,"app-register",[],null,null,null,v,p)),o.mb(1,114688,null,0,t,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var h=o.jb("app-register",t,m,{},{},[]),C=u("SVse"),f=u("iInd");u.d(l,"AuthModuleNgFactory",function(){return y});var y=o.kb(i,[],function(n){return o.tb([o.ub(512,o.j,o.X,[[8,[a.a,b,h]],[3,o.j],o.v]),o.ub(4608,C.m,C.l,[o.s,[2,C.s]]),o.ub(4608,s.o,s.o,[]),o.ub(1073742336,C.c,C.c,[]),o.ub(1073742336,s.n,s.n,[]),o.ub(1073742336,s.e,s.e,[]),o.ub(1073742336,f.m,f.m,[[2,f.r],[2,f.k]]),o.ub(1073742336,i,i,[]),o.ub(1024,f.i,function(){return[[{path:"login",component:e},{path:"register",component:t}]]},[])])})}}]);