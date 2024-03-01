(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{282:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Laratrust supports attaching roles/permissions to multiple user models.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Inside the "),s("code",[t._v("role_user")]),t._v(" and "),s("code",[t._v("permission_user")]),t._v(" tables the "),s("code",[t._v("user_type")]),t._v(" column will be set with the user's fully qualified class name, as the "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent-relationships#polymorphic-relations",target:"_blank",rel:"noopener noreferrer"}},[t._v("polymorphic"),s("OutboundLink")],1),t._v(" relations describe it in Laravel docs.")]),t._v(" "),t._m(6)])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"multiple-user-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-user-models"}},[this._v("#")]),this._v(" Multiple User Models")])},function(){var t=this,s=t._self._c;return s("p",[t._v("In the "),s("code",[t._v("config/laratrust.php")]),t._v(" file you will find an "),s("code",[t._v("user_models")]),t._v(" array, it contains the information about the multiple user models and the name of the relationships inside the "),s("code",[t._v("Role")]),t._v(" and "),s("code",[t._v("Permission")]),t._v(" models. For example:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_models'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'users'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'App\\User'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The value of the "),s("code",[t._v("key")]),t._v(" in the "),s("code",[t._v("key => value")]),t._v(" pair defines the name of the relationship inside the "),s("code",[t._v("Role")]),t._v(" and "),s("code",[t._v("Permission")]),t._v(" models.")])])},function(){var t=this._self._c;return t("p",[this._v("It means that there is only one user model using Laratrust, and the relationship with the "),t("code",[this._v("Role")]),this._v(" and "),t("code",[this._v("Permission")]),this._v(" models is going to be called like this:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("If you want to use the MorphMap feature just change the "),t("code",[this._v("use_morph_map")]),this._v(" value to "),t("code",[this._v("true")]),this._v(" in Laratrust's configuration file.")])}],!1,null,null,null);s.default=n.exports}}]);