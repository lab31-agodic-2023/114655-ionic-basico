"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9820],{9820:(x,d,u)=>{u.r(d),u.d(d,{ion_picker_internal:()=>b});var f=u(5861),a=u(8423),p=u(839);const b=class{constructor(i){(0,a.r)(this,i),this.ionInputModeChange=(0,a.d)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:e}=this;if(!e)return!1;const r=e.getBoundingClientRect();return!(t.clientX<r.left||t.clientX>r.right||t.clientY<r.top||t.clientY>r.bottom)},this.onFocusOut=t=>{const{relatedTarget:e}=t;(!e||"ION-PICKER-COLUMN-INTERNAL"!==e.tagName&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:e}=t;"ION-PICKER-COLUMN-INTERNAL"!==e.tagName||this.actionOnClick||(e.numericInput?this.enterInputMode(e,!1):this.exitInputMode())},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{useInputMode:e,inputModeColumn:r,el:o}=this;if(this.isInHighlightBounds(t))if(e)this.actionOnClick="ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?r&&r===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const n=1===o.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(n)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{const{inputEl:r,el:o}=this;!r||!o.querySelector("ion-picker-column-internal.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),r.focus()):(o.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{o.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:e}=this;if(!e)return;const r=parseInt(t.key,10);Number.isNaN(r)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:r}=this;if(!t||!e)return;const o=e.items.filter(n=>!0!==n.disabled);if(r&&clearTimeout(r),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){const l=t.value.substring(t.value.length-2);return t.value=l,void this.selectSingleColumn()}const s=o.find(({text:n})=>n.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===t.value);if(s)e.setValue(s.value);else if(2===t.value.length){const n=t.value.substring(t.value.length-1);t.value=n,this.selectSingleColumn()}},this.searchColumn=(t,e,r="start")=>{const o="start"===r?/^0+/:/0$/,s=t.items.find(({text:n,disabled:l})=>!0!==l&&n.replace(o,"")===e);s&&t.setValue(s.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:e}=this;if(!t)return;const r=Array.from(e.querySelectorAll("ion-picker-column-internal")).filter(c=>c.numericInput),o=r[0],s=r[1];let l,n=t.value;switch(n.length){case 1:this.searchColumn(o,n);break;case 2:const c=t.value.substring(0,1);n="0"===c||"1"===c?t.value:c,this.searchColumn(o,n),1===n.length&&(l=t.value.substring(t.value.length-1),this.searchColumn(s,l,"end"));break;case 3:const g=t.value.substring(0,1);n="0"===g||"1"===g?t.value.substring(0,2):g,this.searchColumn(o,n),l=t.value.substring(1===n.length?1:2),this.searchColumn(s,l,"end");break;case 4:const h=t.value.substring(0,1);n="0"===h||"1"===h?t.value.substring(0,2):h,this.searchColumn(o,n);const v=t.value.substring(1===n.length?1:2,t.value.length);this.searchColumn(s,v,"end");break;default:const I=t.value.substring(t.value.length-4);t.value=I,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode:t,inputEl:e,inputModeColumn:r}=this;!t||!e||(r?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:e})}}preventTouchStartPropagation(i){i.stopPropagation()}componentWillLoad(){(0,p.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,p.g)(this.el).addEventListener("focusout",this.onFocusOut)}exitInputMode(){var i=this;return(0,f.Z)(function*(){const{inputEl:t,useInputMode:e}=i;!e||!t||(i.useInputMode=!1,i.inputModeColumn=void 0,t.blur(),t.value="",i.destroyKeypressListener&&(i.destroyKeypressListener(),i.destroyKeypressListener=void 0),i.emitInputModeChange())})()}render(){return(0,a.h)(a.H,{onPointerDown:i=>this.onPointerDown(i),onClick:()=>this.onClick()},(0,a.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:i=>this.inputEl=i,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,a.h)("div",{class:"picker-before"}),(0,a.h)("div",{class:"picker-after"}),(0,a.h)("div",{class:"picker-highlight",ref:i=>this.highlightEl=i}),(0,a.h)("slot",null))}get el(){return(0,a.f)(this)}};b.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--wheel-highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--wheel-highlight-background, var(--ion-color-step-150, #eeeeef))}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--wheel-highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}"}}}]);