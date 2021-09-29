!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){},function(e,t){var n,o,a,r,s,i,l,c,u,d,p,g=(a={},r={speed:600,easing:"ease",pager:!0,horizontal:!1,startSpeed:null,scrollReset:!1,complete:function(){},beforeChange:function(){},afterChange:function(){},setInitCss:function(e,t){var n={};return n[t?"left":"top"]=100*e+"%",n},setChangeCss:function(e,t,n,o,a){var r=a?"X":"Y",s={transitionProperty:"transform"};return s.transitionDuration=n+"ms",s.transitionTimingFunction=o,s.transform="translate"+r+"(-"+100*t+"%)",s}},s=function(e){if(void 0!==e){for(var t=Object.keys(e),n=0;n<t.length;n++){var o=t[n];r[o]=e[o]}r.pager||(p.updatePager=function(){})}},i=function(){var e=document.querySelector(".docSlider"),t=document.createElement("div"),n=document.querySelectorAll(".docSlider > *:not(.docSlider-pager)");t.classList.add("docSlider-inner");for(var o=0;o<n.length;o++){for(var a=n[o],s=r.setInitCss(o,r.horizontal),i=0;i<Object.keys(s).length;i++){var l=Object.keys(s)[i];a.style[l]=s[l]}a.classList.add("docSlider-page"),a.classList.add("docSlider-scroll"),a.setAttribute("data-ds-index",o.toString()),a.setAttribute("tabindex","0"),t.appendChild(a)}e.appendChild(t)},l=function(){if(r.pager){var e=document.querySelectorAll(".docSlider-inner > *").length;if(document.querySelector(".docSlider-pager"))for(var t=document.querySelectorAll(".docSlider-button"),n=0;n<t.length;n++){var o=t[n];o.setAttribute("data-ds-jump",n.toString()),o.setAttribute("tabindex","-1")}else{var a=document.createElement("nav");a.classList.add("docSlider-pager");for(var s=0;s<e;s++){var i=document.createElement("button");i.classList.add("docSlider-button"),i.setAttribute("data-ds-jump",s.toString()),i.setAttribute("tabindex","-1"),a.appendChild(i)}document.querySelector(".docSlider").appendChild(a)}}},c=function(){a.html=document.documentElement,a.wrapper=document.querySelector(".docSlider"),a.pages=document.querySelectorAll(".docSlider-inner > *"),a.pager=document.querySelector(".docSlider-pager"),a.buttons=document.querySelectorAll(".docSlider-pager .docSlider-button"),a.length=a.pages.length,a.now=0,a.past=0,a.xy=r.horizontal?"X":"Y",a.yx=r.horizontal?"Y":"X",a.wheel="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll",a.wheelTick=!0,a.wheelEnable=!0,a.fromPoint="elementsFromPoint"in document?"elementsFromPoint":"msElementsFromPoint",a.isTouch="ontouchstart"in window,a.isMobile=/iPhone|Android.+Mobile/.test(navigator.userAgent),a.resizeTimer=0,a.speed=null,a.easing=null,a.enable=!0,a.type=null,a.pastType=null,a.active=null,p.updatePager(),p.updateClass(),a.active=a.pages[a.now],a.pages[a.now].focus({preventScroll:!1})},u=function(){for(var e=0;e<a.length;e++){var t=a.pages[e],n=a.buttons[e];t.addEventListener("focusin",p.focusin),void 0!==n&&n.addEventListener("click",p.pagerClick)}document.addEventListener("keyup",p.keyup),document.addEventListener(a.wheel,p.wheel),a.pages[0].addEventListener("transitionstart",p.transitionstart),a.pages[0].addEventListener("transitionend",p.transitionend),a.isTouch&&(a.touch={move:!1,nextX:"right",prevX:"left",nextY:"bottom",prevY:"top",X:{},Y:{}},a.wrapper.addEventListener("touchstart",p.touchstart,!1),a.wrapper.addEventListener("touchmove",p.touchmove,!1),a.wrapper.addEventListener("touchend",p.touchend,!1)),a.isMobile&&(p.setFV(),window.addEventListener("resize",p.resize))},d=function(){var e=p.hashToIndex(location.hash);return e!==a.now&&(a.speed=null===r.startSpeed?r.speed:r.startSpeed,a.type="anchor",a.speed?setTimeout((function(){p.pageChange(e)}),200):p.pageChange(e),!0)},p={hashToIndex:function(e){return function(){if(e.length){var t=document.querySelector(e);return t&&t.hasAttribute("data-ds-index")?Number(t.getAttribute("data-ds-index")):0}return 0}()},indexCheck:function(e){return e>=0&&e<a.length?e:a.now},pageChange:function(e){if("focus"!==a.type&&a.pages[e].focus(),a.active=a.pages[e],e!==a.now){a.type=a.type?a.type:"focus",a.past=a.now,a.now=e;for(var t=null===a.speed?r.speed:a.speed,s=null===a.easing?r.easing:a.easing,i=0;i<a.length;i++)for(var l=a.pages[i],c=r.setChangeCss(i,a.now,t,s,r.horizontal),u=0;u<Object.keys(c).length;u++){var d=Object.keys(c)[u];l.style[d]=c[d]}t||(r.scrollReset&&p.scrollReset(a.pages[a.now]),o&&p.animationReset(a.past),r.beforeChange(a.past,a.pages[a.past],a.now,a.pages[a.now],a.type),a.pastType=a.type,a.type=null,n&&scrollCue._updateWithDocSlider(),r.afterChange(a.now,a.pages[a.now],a.past,a.pages[a.past],a.pastType),a.pastType=null),a.speed=null,a.easing=null,p.updatePager(),p.updateClass()}},focusin:function(){var e=Number(this.getAttribute("data-ds-index"));a.type=a.type?a.type:"focus",p.pageChange(e)},focusinx:function(){var e=Number(this.getAttribute("data-ds-index"));if(a.active=a.pages[e],e!==a.now){a.type=a.type?a.type:"focus",a.past=a.now,a.now=e;for(var t=null===a.speed?r.speed:a.speed,s=null===a.easing?r.easing:a.easing,i=0;i<a.length;i++)for(var l=a.pages[i],c=r.setChangeCss(i,a.now,t,s,r.horizontal),u=0;u<Object.keys(c).length;u++){var d=Object.keys(c)[u];l.style[d]=c[d]}t||(r.scrollReset&&p.scrollReset(a.pages[a.now]),o&&p.animationReset(a.past),r.beforeChange(a.past,a.pages[a.past],a.now,a.pages[a.now],a.type),a.pastType=a.type,a.type=null,n&&scrollCue._updateWithDocSlider(),r.afterChange(a.now,a.pages[a.now],a.past,a.pages[a.past],a.pastType),a.pastType=null),a.speed=null,a.easing=null,p.updatePager(),p.updateClass()}},pagerClick:function(){if(a.enable){var e=Number(this.getAttribute("data-ds-jump"));a.type="pager",p.pageChange(e)}},updatePager:function(){for(var e=0;e<a.length;e++){var t=a.buttons[e];void 0!==t&&t.classList.remove("selected")}void 0!==a.buttons[a.now]&&a.buttons[a.now].classList.add("selected")},updateClass:function(){var e=a.pages[a.past],t=e.getAttribute("data-ds-index"),n=Number(t)+1,o=!!e.hasAttribute("id")&&e.getAttribute("id"),r=a.pages[a.now],s=r.getAttribute("data-ds-index"),i=Number(s)+1,l=!!r.hasAttribute("id")&&r.getAttribute("id");a.html.classList.remove("docSlider-index_"+t),a.html.classList.remove("docSlider-page_"+n),a.html.classList.remove("docSlider-id_"+o),a.html.classList.add("docSlider-index_"+s),a.html.classList.add("docSlider-page_"+i),l&&a.html.classList.add("docSlider-id_"+l),a.pages[a.past].classList.remove("docSlider-current"),a.pages[a.now].classList.add("docSlider-current")},keyup:function(e){if(a.enable&&a.pages[a.now]===document.activeElement){var t,n=e.key,o=e.shiftKey,s=a.pages[a.now];if((o&&/ |Spacebar/.test(n)||!o&&/ArrowUp|Up|PageUp/.test(n))&&p.scrollEnd(s,"top"))t=a.now-1;else if(!o&&/ |Spacebar|ArrowDown|Down|PageDown/.test(n)&&p.scrollEnd(s,"bottom"))t=a.now+1;else if(o||"Home"!==n)if(o||"End"!==n)if(!o&&r.horizontal&&/ArrowLeft|Left/.test(n))t=a.now-1;else{if(o||!r.horizontal||!/ArrowRight|Right/.test(n))return;t=a.now+1}else t=a.length-1;else t=0;p.indexCheck(t)!==a.now&&(a.type="key",p.pageChange(t))}},scrollEnd:function(e,t){switch(t){case"top":return e.scrollTop<=0;case"bottom":return e.scrollTop>=e.scrollHeight-e.clientHeight;case"left":return e.scrollLeft<=0;case"right":return e.scrollLeft>=e.scrollWidth-e.clientWidth;default:return t}},wheel:function(e){a.wheelTick&&(requestAnimationFrame((function(){if(a.wheelTick=!0,a.enable&&a.wheelEnable){var t=e.deltaY?-e.deltaY:e.wheelDelta?e.wheelDelta:-e.detail,n=document[a.fromPoint](e.pageX,e.pageY),o=t>0?"top":"bottom",r=p.indexCheck("top"===o?a.now-1:a.now+1);if(a.active===a.pages[a.now]&&r!==a.now){for(var s=0;s<n.length;s++){var i=n[s];if(i.classList.contains("docSlider-scroll")&&!p.scrollEnd(i,o))return}a.type="scroll",p.pageChange(r)}}})),a.wheelTick=!1)},transitionstart:function(){a.wheelEnable=!1,r.scrollReset&&p.scrollReset(a.pages[a.now]),o&&p.animationReset(a.past),r.beforeChange(a.past,a.pages[a.past],a.now,a.pages[a.now],a.type),a.pastType=a.type,a.type=null},transitionend:function(){a.wheelEnable=!0,n&&scrollCue._updateWithDocSlider(),r.afterChange(a.now,a.pages[a.now],a.past,a.pages[a.past],a.pastType),a.pastType=null},resize:function(){a.resizeTimer>0&&clearTimeout(a.resizeTimer),a.resizeTimer=setTimeout(p.setFV,200)},setFV:function(){a.wrapper.style.height=window.innerHeight+"",a.wrapper.style.height=window.innerHeight+"px"},touchstart:function(e){a.enable&&(e.touches.length>1||(a.touch.move=!1,a.touch.X.start=e.touches[0].pageX,a.touch.Y.start=e.touches[0].pageY))},touchmove:function(e){a.enable&&(e.touches.length>1?e.preventDefault():(a.touch.move=!0,a.touch.X.move=e.changedTouches[0].pageX,a.touch.Y.move=e.changedTouches[0].pageY))},touchend:function(e){if(a.enable&&!(e.touches.length>1)&&a.touch.move&&(a.touch.X.distance=a.touch.X.move-a.touch.X.start,a.touch.Y.distance=a.touch.Y.move-a.touch.Y.start,!(Math.abs(a.touch[a.xy].distance)<Math.abs(a.touch[a.yx].distance)))){var t=a.touch[a.xy].distance<0?"next":"prev",n=p.indexCheck("next"===t?a.now+1:a.now-1);if(n!==a.now&&!(0===a.now&&"prev"===t||a.now===a.length-1&&"next"===t)){for(var o=a.touch[t+a.xy],r=document[a.fromPoint](a.touch.X.start,a.touch.Y.start),s=0;s<r.length;s++){var i=r[s];if(i.classList.contains("docSlider-scroll")&&!p.scrollEnd(i,o))return}a.type="scroll",p.pageChange(n)}}},scrollReset:function(e){e.scrollTop=0,e.scrollLeft=0},animationReset:function(e){var t=document.querySelectorAll('[data-scpage][data-show="true"]');if(!t.length)return!1;for(var n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-addClass");if(o.getAttribute("data-scpage")!==e+""&&(o.removeAttribute("style"),o.removeAttribute("data-show"),a)){a=a.split(" ");for(var r=0;r<a.length;r++){var s=a[r];o.classList.remove(s)}}}scrollCue._searchElements()}},{init:function(e){var t;s(e),i(),l(),c(),u(),t=d(),n="undefined"!=typeof scrollCue&&scrollCue._hasDocSlider(),o="undefined"!=typeof scrollCue&&scrollCue._hasPageChangeReset(),n&&scrollCue._initWithDocSlider(t),r.complete(r,g.getElements())},jumpPage:function(e,t,n){var o;void 0!==e&&(o=isNaN(e)?p.hashToIndex("#"+e.replace("#","")):p.indexCheck(e<0?a.length+e:e),a.speed=void 0===t?null:t,a.easing=void 0===n?null:n,a.type="jumpPage",p.pageChange(o))},nextPage:function(e,t){var n=p.indexCheck(a.now+1);a.speed=void 0===e?null:e,a.easing=void 0===t?null:t,a.type="nextPage",p.pageChange(n)},prevPage:function(e,t){var n=p.indexCheck(a.now-1);a.speed=void 0===e?null:e,a.easing=void 0===t?null:t,a.type="prevPage",p.pageChange(n)},getOptions:function(){return r},getElements:function(){return{wrapper:a.wrapper,pages:a.pages,pager:a.pager,buttons:a.buttons}},getCurrentIndex:function(){return a.now},getCurrentPage:function(){return a.pages[a.now]},enable:function(e){a.enable=void 0===e?!a.enable:e;for(var t=a.enable?"0":"-1",n=0;n<a.length;n++)a.pages[n].setAttribute("tabindex",t)},_getWheelEnable:function(){return a.wheelEnable}});g.init()}]);