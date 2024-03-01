(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{277:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"upgrade-from-6-x-to-7-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-6-x-to-7-x"}},[t._v("#")]),t._v(" Upgrade from 6.x to 7.x")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),a("p",[t._v("Laratrust 7.x requires Laravel 9.x")])]),t._v(" "),a("p",[t._v("In order to upgrade from Laratrust 6.x to 7.x you have to follow these steps:")]),t._v(" "),a("ol",[a("li",[t._v("Change your "),a("code",[t._v("composer.json")]),t._v(" to require the 7.x version of Laratrust:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"santigarcor/laratrust"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^7.0"')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("Run "),a("code",[t._v("composer update")]),t._v(" to update the source code.")])]),t._v(" "),a("li",[a("p",[t._v("Run "),a("code",[t._v("php artisan config:clear")]),t._v(" and "),a("code",[t._v("php artisan cache:clear")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Update your "),a("code",[t._v("config/laratrust.php")]),t._v(":")]),t._v(" "),a("p",[t._v("4.1. Backup your "),a("code",[t._v("config/laratrust.php")]),t._v(" configuration values.")]),t._v(" "),a("p",[t._v("4.2. Delete the "),a("code",[t._v("config/laratrust.php")]),t._v(" file.")]),t._v(" "),a("p",[t._v("4.3. Run "),a("code",[t._v("php artisan vendor:publish --tag=laratrust")]),t._v(".")]),t._v(" "),a("p",[t._v("4.4. Update the "),a("code",[t._v("config/laratrust.php")]),t._v(" file with your old values.")])])]),t._v(" "),a("p",[t._v("Now you can use the 7.x version without any problem.")])])}],!1,null,null,null);a.default=s.exports}}]);