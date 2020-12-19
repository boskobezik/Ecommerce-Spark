(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,m=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a334aec0"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("a65d"),o=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"container flex"},[n("h1",{staticClass:"logo"},[t._v("Ecommerce")]),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),n("li",[n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1)])])])])},u=[],l={name:"Header"},d=l,m=n("2877"),p=Object(m["a"])(d,c,u,!1,null,null,null),f=p.exports,v={components:{Header:f}},h=v,g=(n("034f"),Object(m["a"])(h,i,s,!1,null,null,null)),b=g.exports,C=(n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductsComponent")},y=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"flex"},t._l(t.getProducts,(function(e,r){return n("div",{key:r,staticClass:"product"},[n("div",{staticClass:"card"},[n("img",{attrs:{src:e.img}}),n("h1",[t._v(t._s(e.name))]),n("div",{staticClass:"flex"},[n("p",[t._v("$"+t._s(e.price))]),n("p",[t._v("Quantity: "+t._s(e.quantity))])]),n("div",{staticClass:"flex"},[n("a",{staticClass:"btn",on:{click:function(n){return n.preventDefault(),t.submit(e)}}},[t._v("BUY")]),n("router-link",{staticClass:"btn",attrs:{to:{path:"/product/"+e._id}}},[t._v("INFO")])],1)])])})),0)])},P=[],k=n("5530"),w=n("2f62"),j={name:"Products",created:function(){this.fetchProducts()},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])(["fetchProducts","addToCart"])),{},{submit:function(t){this.addToCart(t),this.$toasted.show("You have sucessfully added this item to your cart.",{duration:3e3,icon:"check-circle"})}}),computed:Object(k["a"])({},Object(w["c"])(["getProducts"]))},x=j,I=Object(m["a"])(x,O,P,!1,null,null,null),E=I.exports,$={name:"Home",components:{ProductsComponent:E}},D=$,T=Object(m["a"])(D,_,y,!1,null,null,null),L=T.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ProductInfo")},q=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-info"},[n("div",{staticClass:"container flex"},[n("div",{staticClass:"product-img"},[n("img",{attrs:{src:t.getProduct.img}}),n("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.submit(t.getProduct)}}},[t._v("ADD TO CART")])]),n("div",{staticClass:"flex"},[n("div",{staticClass:"product-title"},[n("h1",[t._v(t._s(t.getProduct.name))])]),n("div",{staticClass:"product-description"},[n("p",[t._v(" "+t._s(t.getProduct.description)+" ")])]),n("p",[t._v(" Price: $"+t._s(t.getProduct.price)+" | "),n("span",[t._v("Quantity: "+t._s(t.getProduct.quantity)+" ")])])])])])},N=[],A={name:"ProductInfo",created:function(){this.getProductInfo(this.$route.params.id)},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])(["getProductInfo","addToCart"])),{},{submit:function(t){this.addToCart(t),this.$toasted.show("You have sucessfully added this item to your cart.",{duration:3e3,icon:"check-circle"})}}),computed:Object(k["a"])({},Object(w["c"])(["getProduct"]))},H=A,Q=Object(m["a"])(H,R,N,!1,null,null,null),z=Q.exports,U={name:"Product",components:{ProductInfo:z}},F=U,M=Object(m["a"])(F,S,q,!1,null,null,null),Y=M.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CartInfo")},G=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getCart[0]?n("div",{staticClass:"card-container"},[t._l(t.getCart,(function(e,r){return n("div",{key:r,staticClass:"cart"},[n("div",{staticClass:"container flex"},[n("div",{staticClass:"cart-img"},[n("img",{staticClass:"card",attrs:{src:e.img}})]),n("div",{staticClass:"cart-details"},[n("p",[t._v("Quantity: "+t._s(e.quantity))]),n("p",[t._v("Price: $"+t._s(e.total))]),n("div",{staticClass:"cart-buttons"},[n("button",{staticClass:"btn",on:{click:function(n){return n.preventDefault(),t.addQuantity({item:e,number:1})}}},[t._v(" + ")]),n("button",{staticClass:"btn",on:{click:function(n){return n.preventDefault(),t.addQuantity({item:e,number:-1})}}},[t._v(" - ")])])])])])})),n("div",{staticClass:"checkout-button"},[n("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.$router.push("/checkout")}}},[t._v("CHECKOUT")])])],2):n("div",{staticClass:"container"},[n("h1",[t._v(" There is no items in your cart ")])])},K=[],W={name:"CartInfo",methods:Object(k["a"])({},Object(w["b"])(["addQuantity"])),computed:Object(k["a"])({},Object(w["c"])(["getCart"]))},Z=W,V=Object(m["a"])(Z,B,K,!1,null,null,null),X=V.exports,tt={name:"Cart",components:{CartInfo:X}},et=tt,nt=Object(m["a"])(et,J,G,!1,null,null,null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getLoggedIn?n("ProfileInfo"):n("LoginComponent")},ot=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-info"},[n("div",{staticClass:"profile-info-header"},[n("h1",[t._v("PROFILE")]),n("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.logOut()}}},[t._v("LOGOUT")])]),n("div",{staticClass:"profile-main"},[n("div",{staticClass:"personal-details"},[n("h1",[t._v("PERSONAL DETAILS")]),n("img",{attrs:{src:"https://www.buzzsneakers.com/files/thumbs/files/images/product/brand/adidas/thumbs_600/FW3639_600_600px.jpg"}}),n("div",{staticClass:"flex"},[n("h1",[t._v("NAME: "+t._s(t.getProfileData.name))]),n("h1",[t._v("EMAIL: "+t._s(t.getProfileData.email))]),n("h1",[t._v("BIRTHDAY: "+t._s(t.getProfileData.birthDay))]),n("h1",[t._v("PHONE: "+t._s(t.getProfileData.phone))])])]),t._m(0)])])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-about"},[n("div",{staticClass:"about-header"},[n("h1",[t._v("ABOUT ME")])]),n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem cupiditate accusamus dolores inventore neque in? Eligendi dolorem provident ipsa voluptate dolor vero explicabo sunt officiis consequatur. Molestiae, architecto nulla! ")])])}],ct={name:"ProfileInfo",created:function(){this.getProfileInfo(this.getToken)},methods:Object(k["a"])({},Object(w["b"])(["logOut","getProfileInfo"])),computed:Object(k["a"])({},Object(w["c"])(["getToken","getProfileData"]))},ut=ct,lt=Object(m["a"])(ut,it,st,!1,null,null,null),dt=lt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("h1",[t._v("Login")]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter your e-mail",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter your password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"grid"},[n("div",{staticClass:"form-control"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"LOGIN",required:""},on:{click:function(e){return e.preventDefault(),t.submit({email:t.email,password:t.password})}}})]),n("div",{staticClass:"form-control"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"REGISTER",required:""},on:{click:function(e){return e.preventDefault(),t.$router.push("/register")}}})])])])])])])},pt=[],ft=(n("96cf"),n("1da1")),vt={name:"Login",data:function(){return{email:"",password:""}},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])(["loginUser","capitalizeFirstLetter"])),{},{submit:function(t){var e=this;this.loginUser(t).then((function(t){e.$store.commit("setToken",t.data.token),e.$toasted.show("Successfully logged in.",{duration:3e3,icon:"check-circle"})})).catch(function(){var t=Object(ft["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email&&e.password){t.next=4;break}e.$toasted.show("Please fill all the fields.",{duration:3e3,icon:"exclamation-circle"}),t.next=8;break;case 4:return t.next=6,e.capitalizeFirstLetter(n.response.data.error);case 6:r=t.sent,e.$toasted.show(r,{duration:3e3,icon:"exclamation-circle"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})},ht=vt,gt=Object(m["a"])(ht,mt,pt,!1,null,null,null),bt=gt.exports,Ct={name:"Profile",components:{ProfileInfo:dt,LoginComponent:bt},created:function(){this.checkLogged()},methods:Object(k["a"])({},Object(w["b"])(["checkLogged"])),computed:Object(k["a"])({},Object(w["c"])(["getLoggedIn"]))},_t=Ct,yt=Object(m["a"])(_t,at,ot,!1,null,null,null),Ot=yt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("RegisterComponent")},kt=[],wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("h1",[t._v("Register")]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter your name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter your e-mail",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.birthDay,expression:"birthDay"}],attrs:{type:"text",placeholder:"13/01/1999",required:""},domProps:{value:t.birthDay},on:{input:function(e){e.target.composing||(t.birthDay=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"061234567",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter your password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"grid"},[n("div",{staticClass:"form-control"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"REGISTER",required:""},on:{click:function(e){return e.preventDefault(),t.submit({name:t.name,email:t.email,password:t.password,phone:t.phone,birthDay:t.birthDay})}}})])])])])])])},jt=[],xt=(n("ac1f"),n("5319"),{name:"Register",data:function(){return{name:"",email:"",password:"",phone:"",birthDay:""}},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])(["register","capitalizeFirstLetter"])),{},{submit:function(t){var e=this;this.register(t).then((function(){e.$toasted.show("You have sucessfully registered your customer account.",{duration:3e3,icon:"check-circle"}),e.$router.push("/")})).catch(function(){var t=Object(ft["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.response.data.error,t.next=3,e.capitalizeFirstLetter(r.replace(/[^a-zA-Z ]/g,""));case 3:r=t.sent,e.$toasted.show(r,{duration:3e3,icon:"exclamation-circle"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})}),It=xt,Et=Object(m["a"])(It,wt,jt,!1,null,null,null),$t=Et.exports,Dt={name:"Register",components:{RegisterComponent:$t}},Tt=Dt,Lt=Object(m["a"])(Tt,Pt,kt,!1,null,null,null),St=Lt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CheckoutComponent")},Rt=[],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getCart[0]?n("div",{staticClass:"checkout"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"grid"},[n("div",{staticClass:"card"},[n("form",[n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"Enter your address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),n("div",{staticClass:"form-control"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"CHECKOUT"},on:{click:function(e){return e.preventDefault(),t.submit()}}})])])]),n("div",{staticClass:"card"},[n("h3",{attrs:{id:"items"}},[t._v("Items")]),t._l(t.getCart,(function(e,r){return n("p",{key:r},[t._v(" "+t._s(e.name)+" | Quantity: "+t._s(e.quantity)+" | Price: $"+t._s(e.total)+" ")])})),n("h3",{attrs:{id:"total"}},[t._v("Total: $"+t._s(t.sum(t.getCart,"total")))])],2)])])]):n("div",[t._v(" "+t._s(t.$router.push("/"))+" ")])},At=[],Ht=(n("99af"),n("13d5"),n("b0c0"),{name:"Checkout",data:function(){return{name:"",address:""}},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])(["checkout"])),{},{sum:function(t,e){return t.reduce((function(t,n){return t+n[e]}),0)},submit:function(){var t=this;if(this.name&&this.address){var e="".concat(this.name,", ").concat(this.address),n={deliveryAddress:e,cost:this.sum(this.getCart,"total")};this.checkout(n).then((function(){t.$toasted.show("You have successfully ordered items from your cart.",{duration:3e3,icon:"check-circle"}),t.$router.push("/"),t.$store.commit("removeCart")})).catch((function(e){t.$toasted.show(e,{duration:3e3,icon:"exclamation-circle"})}))}else this.$toasted.show("Please fill all the fields.",{duration:3e3,icon:"exclamation-circle"})}}),computed:Object(k["a"])({},Object(w["c"])(["getCart"]))}),Qt=Ht,zt=Object(m["a"])(Qt,Nt,At,!1,null,null,null),Ut=zt.exports,Ft={name:"Checkout",components:{CheckoutComponent:Ut}},Mt=Ft,Yt=Object(m["a"])(Mt,qt,Rt,!1,null,null,null),Jt=Yt.exports;r["a"].use(C["a"]);var Gt=[{path:"/",name:"Home",component:L},{path:"/cart",name:"Cart",component:rt},{path:"/profile",name:"Profile",component:Ot},{path:"/register",name:"Register",component:St},{path:"/checkout",name:"Checkout",component:Jt},{path:"/product/:id",name:"Product",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Bt=new C["a"]({routes:Gt,mode:"history"}),Kt=Bt,Wt=(n("c740"),n("a434"),n("bc3a")),Zt=n.n(Wt),Vt={product:"",products:[],cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]},Xt={getProduct:function(t){return t.product},getProducts:function(t){return t.products},getCart:function(t){return t.cart}},te={checkout:function(t,e){return Zt.a.post("/api/orders",e)},getProductInfo:function(t,e){var n=t.commit;Zt.a.get("/api/products/".concat(e)).then((function(t){n("setProductInfo",t.data)})).catch((function(t){console.log(t),Kt.push("/")}))},fetchProducts:function(t){var e=t.commit;Zt.a.get("/api/products").then((function(t){var n=t.error;n?console.log(n):e("setProducts",t.data)})).catch((function(t){console.log(t)}))},addToCart:function(t,e){var n=t.commit,r={_id:e._id,name:e.name,quantity:1,total:e.price,price:e.price,img:e.img};return n("setCart",r),new Promise((function(t){t({msg:"You have successfully added item to your cart."})}))},addQuantity:function(t,e){var n=t.commit;n("setQuantity",e)}},ee={setProductInfo:function(t,e){t.product=e},setProducts:function(t,e){t.products=e},setCart:function(t,e){var n=t.cart.findIndex((function(t){return t._id===e._id}));-1!==n?(t.cart[n].quantity+=1,t.cart[n].total+=e.price):t.cart.push(e),localStorage.setItem("cart",JSON.stringify(t.cart))},setQuantity:function(t,e){var n=t.cart.findIndex((function(t){return t._id===e.item._id}));-1!==n&&(t.cart[n].quantity+=e.number,t.cart[n].total+=e.item.price*e.number,t.cart[n].quantity<=0&&t.cart.splice(n,1),localStorage.setItem("cart",JSON.stringify(t.cart)))},removeCart:function(t){t.cart=[],localStorage.removeItem("cart")}},ne={state:Vt,getters:Xt,actions:te,mutations:ee},re=(n("fb6a"),n("1276"),n("1232")),ae={loggedIn:!1,token:localStorage.getItem("token"),profileInfo:""},oe={getLoggedIn:function(t){return t.loggedIn},getToken:function(t){return t.token},getProfileData:function(t){return t.profileInfo}},ie={loginUser:function(t,e){return Zt.a.post("/api/customers/login",e)},checkLogged:function(t){var e=t.commit;e("isLogged")},logOut:function(t){var e=t.commit;e("logOut")},register:function(t,e){return Zt.a.post("/api/customers",e)},capitalizeFirstLetter:function(t,e){return e.charAt(0).toUpperCase()+e.slice(1)},getProfileInfo:function(t,e){var n=t.commit;Zt.a.get("/api/customers/profile",{headers:{Authorization:e}}).then((function(t){n("setProfileInfo",t.data)})).catch((function(t){console.log(t)}))}},se={setToken:function(t,e){t.loggedIn=!0,t.token=e,localStorage.setItem("token",e)},isLogged:function(t){if(t.token){var e=t.token.split(" ");if(e)try{var n=Object(re["a"])(e[1]);n.id&&(t.loggedIn=!0)}catch(r){t.loggedIn=!1,t.token="",localStorage.setItem("token",t.token)}else t.loggedIn=!1,t.token="",localStorage.setItem("token",t.token)}else t.loggedIn=!1},logOut:function(t){t.token="",t.loggedIn=!1,localStorage.setItem("token",t.token)},setProfileInfo:function(t,e){t.profileInfo=e}},ce={state:ae,getters:oe,actions:ie,mutations:se};r["a"].use(w["a"]);var ue=new w["a"].Store({modules:{products:ne,customers:ce}});r["a"].config.productionTip=!1,r["a"].use(o.a,{iconPack:"fontawesome"}),new r["a"]({router:Kt,store:ue,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.8f63c9c9.js.map