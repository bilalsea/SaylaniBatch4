/*!
 * ReactFire is an open-source JavaScript library that allows you to add a
 * realtime data source to your React apps by providing an easy way to let
 * Firebase populate the state of React components.
 *
 * ReactFire 1.0.0
 * https://github.com/firebase/reactfire/
 * License: MIT
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],function(){return e.ReactFireMixin=t()}):"object"==typeof exports?module.exports=t():e.ReactFireMixin=t()}(this,function(){"use strict";function e(e){var t;return t="function"==typeof e.key?e.key():"string"==typeof e.key||null===e.key?e.key:e.name()}function t(e){var t;return t="function"==typeof e.ref?e.ref():e.ref}function i(e,t){for(var i=0,n=e.length;n>i;++i)if(e[i][".key"]===t)return i;return-1}function n(e){throw new Error("ReactFire: "+e)}function s(e){var t;"string"!=typeof e?t="Bind variable must be a string. Got: "+e:0===e.length?t='Bind variable must be a non-empty string. Got: ""':e.length>768?t="Bind variable is too long to be stored in Firebase. Got: "+e:/[\[\].#$\/\u0000-\u001F\u007F]/.test(e)&&(t="Bind variable cannot contain any of the following characters: . # $ ] [ /. Got: "+e),"undefined"!=typeof t&&n(t)}function a(e,t){var i={};return"object"==typeof t&&null!==t?i=t:i[".value"]=t,i[".key"]=e,i}function r(t,i){var n=e(i),s=i.val();this.data[t]=a(n,s),this.setState(this.data)}function o(t,n,s){var r,o=e(n),f=n.val(),d=this.data[t];if(null===s)r=0;else{var h=i(d,s);r=h+1}d.splice(r,0,a(o,f)),this.setState(this.data)}function f(t,n){var s=this.data[t],a=i(s,e(n));s.splice(a,1),this.setState(this.data)}function d(t,n){var s=e(n),r=n.val(),o=this.data[t],f=i(o,s);o[f]=a(s,r),this.setState(this.data)}function h(t,n,s){var a,r=e(n),o=this.data[t],f=i(o,r),d=o.splice(f,1)[0];if(null===s)a=0;else{var h=i(o,s);a=h+1}o.splice(a,0,d),this.setState(this.data)}function c(e,i,a,c){"[object Object]"!==Object.prototype.toString.call(e)&&n("Invalid Firebase reference"),s(i),"undefined"!=typeof this.firebaseRefs[i]&&n("this.state."+i+" is already bound to a Firebase reference"),this.firebaseRefs[i]=t(e),c?(this.data[i]=[],this.setState(this.data),this.firebaseListeners[i]={child_added:e.on("child_added",o.bind(this,i),a),child_removed:e.on("child_removed",f.bind(this,i),a),child_changed:e.on("child_changed",d.bind(this,i),a),child_moved:e.on("child_moved",h.bind(this,i),a)}):this.firebaseListeners[i]={value:e.on("value",r.bind(this,i),a)}}var u={componentWillMount:function(){this.data={},this.firebaseRefs={},this.firebaseListeners={}},componentWillUnmount:function(){for(var e in this.firebaseRefs)this.firebaseRefs.hasOwnProperty(e)&&this.unbind(e)},bindAsArray:function(e,t,i){var n=c.bind(this);n(e,t,i,!0)},bindAsObject:function(e,t,i){var n=c.bind(this);n(e,t,i,!1)},unbind:function(e,t){s(e),"undefined"==typeof this.firebaseRefs[e]&&n("this.state."+e+" is not bound to a Firebase reference");for(var i in this.firebaseListeners[e])if(this.firebaseListeners[e].hasOwnProperty(i)){var a=this.firebaseListeners[e][i];this.firebaseRefs[e].off(i,a)}delete this.firebaseRefs[e],delete this.firebaseListeners[e];var r={};r[e]=void 0,this.setState(r,t)}};return u});
