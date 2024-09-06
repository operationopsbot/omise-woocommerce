(()=>{var e={21:function(e,t,n){e.exports=function(e){"use strict";var t=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(e);function o(e,t,n,o){return new(n||(n=Promise))((function(i,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function r(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((o=o.apply(e,t||[])).next())}))}let i={};class a{constructor(e){this.handleClick=e=>o(this,void 0,void 0,(function*(){const t=this.config;if(!t)throw new Error("google-pay-button: Missing configuration");const n=this.createLoadPaymentDataRequest(t);try{if(t.onClick&&t.onClick(e),e.defaultPrevented)return;const o=yield this.client.loadPaymentData(n);t.onLoadPaymentData&&t.onLoadPaymentData(o)}catch(e){"CANCELED"===e.statusCode?t.onCancel&&t.onCancel(e):t.onError?t.onError(e):console.error(e)}})),this.options=e}getElement(){return this.element}isGooglePayLoaded(){var e,t;return"google"in(window||n.g)&&!!(null===(t=null===(e=null===google||void 0===google?void 0:google.payments)||void 0===e?void 0:e.api)||void 0===t?void 0:t.PaymentsClient)}mount(e){var t;return o(this,void 0,void 0,(function*(){if(!this.isGooglePayLoaded())try{yield function(e){const t=i[e];if(t)return t;const n=new Promise(((t,n)=>{const o=document.createElement("script");o.src=e,o.async=!0;const a=()=>{t()},s=()=>{o.removeEventListener("load",a),o.removeEventListener("error",s),delete i[e],o.remove(),n(new Error(`Unable to load script ${e}`))};o.addEventListener("load",a),o.addEventListener("error",s),document.body.appendChild(o)}));return i[e]=n,n}("https://pay.google.com/gp/p/js/pay.js")}catch(e){return void((null===(t=this.config)||void 0===t?void 0:t.onError)?this.config.onError(e):console.error(e))}this.element=e,e&&(this.appendStyles(),this.config&&this.updateElement())}))}unmount(){this.element=void 0}configure(e){let t;return this.config=e,this.oldInvalidationValues&&!this.isClientInvalidated(e)||(t=this.updateElement()),this.oldInvalidationValues=this.getInvalidationValues(e),null!=t?t:Promise.resolve()}createClientOptions(e){const t={environment:e.environment,merchantInfo:this.createMerchantInfo(e)};return(e.onPaymentDataChanged||e.onPaymentAuthorized)&&(t.paymentDataCallbacks={},e.onPaymentDataChanged&&(t.paymentDataCallbacks.onPaymentDataChanged=t=>e.onPaymentDataChanged(t)||{}),e.onPaymentAuthorized&&(t.paymentDataCallbacks.onPaymentAuthorized=t=>e.onPaymentAuthorized(t)||{})),t}createIsReadyToPayRequest(e){const t=e.paymentRequest;return{apiVersion:t.apiVersion,apiVersionMinor:t.apiVersionMinor,allowedPaymentMethods:t.allowedPaymentMethods,existingPaymentMethodRequired:e.existingPaymentMethodRequired}}createLoadPaymentDataRequest(e){return Object.assign(Object.assign({},e.paymentRequest),{merchantInfo:this.createMerchantInfo(e)})}createMerchantInfo(e){const t=Object.assign({},e.paymentRequest.merchantInfo);return t.softwareInfo||(t.softwareInfo={id:this.options.softwareInfoId,version:this.options.softwareInfoVersion}),t}isMounted(){return null!=this.element&&!1!==this.element.isConnected}removeButton(){if(this.element instanceof ShadowRoot||this.element instanceof Element)for(const e of Array.from(this.element.children))"STYLE"!==e.tagName&&e.remove()}updateElement(){return o(this,void 0,void 0,(function*(){if(!this.isMounted())return;const e=this.getElement();if(!this.config)throw new Error("google-pay-button: Missing configuration");this.removeButton();try{this.client=new google.payments.api.PaymentsClient(this.createClientOptions(this.config))}catch(e){return void(this.config.onError?this.config.onError(e):console.error(e))}const t={buttonType:this.config.buttonType,buttonColor:this.config.buttonColor,buttonRadius:this.config.buttonRadius,buttonSizeMode:this.config.buttonSizeMode,buttonLocale:this.config.buttonLocale,onClick:this.handleClick,allowedPaymentMethods:this.config.paymentRequest.allowedPaymentMethods},n=e.getRootNode();n instanceof ShadowRoot&&(t.buttonRootNode=n);const o=this.client.createButton(t);this.setClassName(e,[e.className,"not-ready"]),e.appendChild(o);let i,a=!1;try{i=yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config)),a=i.result&&!this.config.existingPaymentMethodRequired||i.result&&i.paymentMethodPresent&&this.config.existingPaymentMethodRequired||!1}catch(e){this.config.onError?this.config.onError(e):console.error(e)}if(this.isMounted()){if(a){try{this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config))}catch(e){console.log("Error with prefetch",e)}this.setClassName(e,(e.className||"").split(" ").filter((e=>e&&"not-ready"!==e)))}if((this.isReadyToPay!==(null==i?void 0:i.result)||this.paymentMethodPresent!==(null==i?void 0:i.paymentMethodPresent))&&(this.isReadyToPay=!!(null==i?void 0:i.result),this.paymentMethodPresent=null==i?void 0:i.paymentMethodPresent,this.config.onReadyToPayChange)){const e={isButtonVisible:a,isReadyToPay:this.isReadyToPay};this.paymentMethodPresent&&(e.paymentMethodPresent=this.paymentMethodPresent),this.config.onReadyToPayChange(e)}}}))}setClassName(e,t){const n=t.filter((e=>e)).join(" ");n?e.className=n:e.removeAttribute("class")}appendStyles(){var e,t,n;if("undefined"==typeof document)return;const o=null===(e=this.element)||void 0===e?void 0:e.getRootNode(),i=`default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g,"")}-${null===(t=this.config)||void 0===t?void 0:t.buttonLocale}`;if(o&&!(null===(n=o.getElementById)||void 0===n?void 0:n.call(o,i))){const e=document.createElement("style");e.id=i,e.type="text/css",e.innerHTML=`\n          ${this.options.cssSelector} {\n            display: inline-block;\n          }\n          ${this.options.cssSelector}.not-ready {\n            width: 0;\n            height: 0;\n            overflow: hidden;\n          }\n        `,o instanceof Document&&o.head?o.head.appendChild(e):o.appendChild(e)}}isClientInvalidated(e){return!this.oldInvalidationValues||this.getInvalidationValues(e).some(((e,t)=>JSON.stringify(e)!==JSON.stringify(this.oldInvalidationValues[t])))}getInvalidationValues(e){var t,n;return[e.environment,e.existingPaymentMethodRequired,!!e.onPaymentDataChanged,!!e.onPaymentAuthorized,e.buttonType,e.buttonColor,e.buttonRadius,e.buttonLocale,e.buttonSizeMode,e.paymentRequest.merchantInfo.merchantId,e.paymentRequest.merchantInfo.merchantName,null===(t=e.paymentRequest.merchantInfo.softwareInfo)||void 0===t?void 0:t.id,null===(n=e.paymentRequest.merchantInfo.softwareInfo)||void 0===n?void 0:n.version,e.paymentRequest.allowedPaymentMethods]}}const s="google-pay-button-container";class r extends t.default.Component{constructor(){super(...arguments),this.manager=new a({cssSelector:`.${s}`,softwareInfoId:"@google-pay/button-react",softwareInfoVersion:"3.1.0"}),this.elementRef=t.default.createRef()}componentDidMount(){return o(this,void 0,void 0,(function*(){const e=this.elementRef.current;e&&(yield this.manager.configure(this.props),yield this.manager.mount(e))}))}componentWillUnmount(){this.manager.unmount()}componentDidUpdate(){this.manager.configure(this.props)}render(){return t.default.createElement("div",{ref:this.elementRef,className:[s,this.props.className].filter((e=>e)).join(" "),style:this.props.style})}}return r}(n(609))},609:e=>{"use strict";e.exports=window.React}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(609);const t=window.wp.element,o=window.wp.i18n,i=window.wp.htmlEntities,a=window.wc.wcBlocksRegistry,s=window.wc.wcSettings;var r=n(21),l=n.n(r);const d=(0,s.getSetting)("omise_googlepay_data",{}),c=(0,i.decodeEntities)(d.title)||"No title set",u=n=>{const a=(0,i.decodeEntities)(d.description||""),{data:s}=d,{eventRegistration:r,emitResponse:c,onSubmit:u}=n,{onPaymentSetup:h}=r,[m,y]=(0,t.useState)(null),[p,f]=(0,t.useState)(null);return(0,t.useEffect)((()=>{const e=h((async()=>m?{type:c.responseTypes.SUCCESS,meta:{paymentMethodData:{omise_token:m}}}:p?{type:c.responseTypes.ERROR,message:p}:void 0));return()=>e()}),[c.responseTypes.ERROR,c.responseTypes.SUCCESS,h,m,p]),(0,e.createElement)(e.Fragment,null,a&&(0,e.createElement)("p",null,a),(0,e.createElement)("fieldset",{id:"omise-form-googlepay"},(0,e.createElement)("div",{id:"googlepay-button-container"},(0,e.createElement)(l(),{environment:s.environment,paymentRequest:{apiVersion:s.api_version,apiVersionMinor:s.api_version_minor,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:s.allowed_auth_methods,allowedCardNetworks:s.allowed_card_networks,billingAddressRequired:s.billing_address_required,billingAddressParameters:{format:"FULL",phoneNumberRequired:s.phone_number_required}},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"omise",gatewayMerchantId:s.public_key}}}],merchantInfo:{merchantId:s.merchant_id},transactionInfo:{totalPriceStatus:s.price_status,currencyCode:s.currency}},onLoadPaymentData:e=>{const{paymentMethodData:t}=e,n={method:"googlepay",data:JSON.stringify(JSON.parse(t.tokenizationData.token))},o=t.info?.billingAddress;o&&(n={...n,billing_name:o.name,billing_city:o.locality,billing_country:o.countryCode,billing_postal_code:o.postalCode,billing_state:o.administrativeArea,billing_street1:o.address1,billing_street2:[o.address2,o.address3].filter((e=>e)).join(" "),billing_phone_number:o.phoneNumber}),Omise.setPublicKey(s.public_key),Omise.createToken("tokenization",n,((e,t)=>{200==e?(f(null),y(t.id),u()):(f(t.message),console.error({response:t}))}))}})),(0,e.createElement)("p",{id:"googlepay-text",className:"omise-secondary-text"},(0,o.__)("You will be prompted to select a credit card stored in your Google Account.","omise"))))};(0,a.registerPaymentMethod)({name:d.name||"",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:c})}),null),content:(0,e.createElement)(u,null),edit:(0,e.createElement)(u,null),canMakePayment:()=>d.is_active,ariaLabel:c,supports:{features:d.supports}})})()})();