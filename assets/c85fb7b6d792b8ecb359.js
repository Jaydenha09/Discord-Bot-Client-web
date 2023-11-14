/*! For license information please see c85fb7b6d792b8ecb359.js.LICENSE.txt */
(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[9402],{59402:(r,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.convertToMinorCurrencyUnits=e.convertToMajorCurrencyUnits=e.CurrencyExponents=e.formatPrice=void 0;var t,i,o=(t=n(29887))&&t.__esModule?t:{default:t},s=n(78036),u=["convertToMajorUnits"];function f(){return(f=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}e.formatPrice=function(r,e,n,t){void 0===t&&(t={});var i=t,o=i.convertToMajorUnits,s=void 0===o||o,c=function(r,e){if(null==r)return{};var n,t,i={},o=Object.keys(r);for(t=0;t<o.length;t++){n=o[t];e.indexOf(n)>=0||(i[n]=r[n])}return i}(i,u);return Intl.NumberFormat(n,f({style:"currency",currency:e},c)).format(s?l(r,e):r)};var c=((i={})[s.CurrencyCodes.USD]=2,i[s.CurrencyCodes.CAD]=2,i[s.CurrencyCodes.EUR]=2,
i[s.CurrencyCodes.AUD]=2,i[s.CurrencyCodes.GBP]=2,i[s.CurrencyCodes.NOK]=2,i[s.CurrencyCodes.RUB]=2,i[s.CurrencyCodes.JPY]=0,i[s.CurrencyCodes.BRL]=2,i[s.CurrencyCodes.PLN]=2,i[s.CurrencyCodes.TRY]=2,i);e.CurrencyExponents=c;var l=function(r,e){var n=c[e];if(null==n)throw new Error("Unexpected currency "+e);return new o.default(r).dividedBy(Math.pow(10,n)).toNumber()};e.convertToMajorCurrencyUnits=l;e.convertToMinorCurrencyUnits=function(r,e){var n=c[e];if(null==n)throw new Error("Unexpected currency "+e);return new o.default(r).times(Math.pow(10,n)).toNumber()}},29887:function(r,e,n){var t;!function(i){"use strict";var o,s={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},u=!0,f="[DecimalError] ",c=f+"Invalid argument: ",l=f+"Exponent out of range: ",h=Math.floor,a=Math.pow,d=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,g=1e7,p=h(1286742750677284.5),v={}
;v.absoluteValue=v.abs=function(){var r=new this.constructor(this);r.s&&(r.s=1);return r};v.comparedTo=v.cmp=function(r){var e,n,t,i,o=this;r=new o.constructor(r);if(o.s!==r.s)return o.s||-r.s;if(o.e!==r.e)return o.e>r.e^o.s<0?1:-1;for(e=0,n=(t=o.d.length)<(i=r.d.length)?t:i;e<n;++e)if(o.d[e]!==r.d[e])return o.d[e]>r.d[e]^o.s<0?1:-1;return t===i?0:t>i^o.s<0?1:-1};v.decimalPlaces=v.dp=function(){var r=this,e=r.d.length-1,n=7*(e-r.e);if(e=r.d[e])for(;e%10==0;e/=10)n--;return n<0?0:n};v.dividedBy=v.div=function(r){return N(this,new this.constructor(r))};v.dividedToIntegerBy=v.idiv=function(r){var e=this.constructor;return U(N(this,new e(r),0,1),e.precision)};v.equals=v.eq=function(r){return!this.cmp(r)};v.exponent=function(){return C(this)};v.greaterThan=v.gt=function(r){return this.cmp(r)>0};v.greaterThanOrEqualTo=v.gte=function(r){return this.cmp(r)>=0};v.isInteger=v.isint=function(){return this.e>this.d.length-2};v.isNegative=v.isneg=function(){return this.s<0}
;v.isPositive=v.ispos=function(){return this.s>0};v.isZero=function(){return 0===this.s};v.lessThan=v.lt=function(r){return this.cmp(r)<0};v.lessThanOrEqualTo=v.lte=function(r){return this.cmp(r)<1};v.logarithm=v.log=function(r){var e,n=this,t=n.constructor,i=t.precision,s=i+5;if(void 0===r)r=new t(10);else if((r=new t(r)).s<1||r.eq(o))throw Error(f+"NaN");if(n.s<1)throw Error(f+(n.s?"NaN":"-Infinity"));if(n.eq(o))return new t(0);u=!1;e=N(b(n,s),b(r,s),s);u=!0;return U(e,i)};v.minus=v.sub=function(r){var e=this;r=new e.constructor(r);return e.s==r.s?L(e,r):w(e,(r.s=-r.s,r))};v.modulo=v.mod=function(r){var e,n=this,t=n.constructor,i=t.precision;if(!(r=new t(r)).s)throw Error(f+"NaN");if(!n.s)return U(new t(n),i);u=!1;e=N(n,r,0,1).times(r);u=!0;return n.minus(e)};v.naturalExponential=v.exp=function(){return y(this)};v.naturalLogarithm=v.ln=function(){return b(this)};v.negated=v.neg=function(){var r=new this.constructor(this);r.s=-r.s||0;return r};v.plus=v.add=function(r){var e=this
;r=new e.constructor(r);return e.s==r.s?w(e,r):L(e,(r.s=-r.s,r))};v.precision=v.sd=function(r){var e,n,t,i=this;if(void 0!==r&&r!==!!r&&1!==r&&0!==r)throw Error(c+r);e=C(i)+1;n=7*(t=i.d.length-1)+1;if(t=i.d[t]){for(;t%10==0;t/=10)n--;for(t=i.d[0];t>=10;t/=10)n++}return r&&e>n?e:n};v.squareRoot=v.sqrt=function(){var r,e,n,t,i,o,s,c=this,l=c.constructor;if(c.s<1){if(!c.s)return new l(0);throw Error(f+"NaN")}r=C(c);u=!1;if(0==(i=Math.sqrt(+c))||i==1/0){((e=E(c.d)).length+r)%2==0&&(e+="0");i=Math.sqrt(e);r=h((r+1)/2)-(r<0||r%2);t=new l(e=i==1/0?"1e"+r:(e=i.toExponential()).slice(0,e.indexOf("e")+1)+r)}else t=new l(i.toString());i=s=(n=l.precision)+3;for(;;){t=(o=t).plus(N(c,o,s+2)).times(.5);if(E(o.d).slice(0,s)===(e=E(t.d)).slice(0,s)){e=e.slice(s-3,s+1);if(i==s&&"4999"==e){U(o,n+1,0);if(o.times(o).eq(c)){t=o;break}}else if("9999"!=e)break;s+=4}}u=!0;return U(t,n)};v.times=v.mul=function(r){var e,n,t,i,o,s,f,c,l,h=this,a=h.constructor,d=h.d,p=(r=new a(r)).d;if(!h.s||!r.s)return new a(0)
;r.s*=h.s;n=h.e+r.e;if((c=d.length)<(l=p.length)){o=d;d=p;p=o;s=c;c=l;l=s}o=[];for(t=s=c+l;t--;)o.push(0);for(t=l;--t>=0;){e=0;for(i=c+t;i>t;){f=o[i]+p[t]*d[i-t-1]+e;o[i--]=f%g|0;e=f/g|0}o[i]=(o[i]+e)%g|0}for(;!o[--s];)o.pop();e?++n:o.shift();r.d=o;r.e=n;return u?U(r,a.precision):r};v.toDecimalPlaces=v.todp=function(r,e){var n=this,t=n.constructor;n=new t(n);if(void 0===r)return n;m(r,0,1e9);void 0===e?e=t.rounding:m(e,0,8);return U(n,r+C(n)+1,e)};v.toExponential=function(r,e){var n,t=this,i=t.constructor;if(void 0===r)n=P(t,!0);else{m(r,0,1e9);void 0===e?e=i.rounding:m(e,0,8);n=P(t=U(new i(t),r+1,e),!0,r+1)}return n};v.toFixed=function(r,e){var n,t,i=this,o=i.constructor;if(void 0===r)return P(i);m(r,0,1e9);void 0===e?e=o.rounding:m(e,0,8);n=P((t=U(new o(i),r+C(i)+1,e)).abs(),!1,r+C(t)+1);return i.isneg()&&!i.isZero()?"-"+n:n};v.toInteger=v.toint=function(){var r=this,e=r.constructor;return U(new e(r),C(r)+1,e.rounding)};v.toNumber=function(){return+this};v.toPower=v.pow=function(r){
var e,n,t,i,s,c,l=this,a=l.constructor,d=+(r=new a(r));if(!r.s)return new a(o);if(!(l=new a(l)).s){if(r.s<1)throw Error(f+"Infinity");return l}if(l.eq(o))return l;t=a.precision;if(r.eq(o))return U(l,t);c=(e=r.e)>=(n=r.d.length-1);s=l.s;if(c){if((n=d<0?-d:d)<=9007199254740991){i=new a(o);e=Math.ceil(t/7+4);u=!1;for(;;){n%2&&_((i=i.times(l)).d,e);if(0===(n=h(n/2)))break;_((l=l.times(l)).d,e)}u=!0;return r.s<0?new a(o).div(i):U(i,t)}}else if(s<0)throw Error(f+"NaN");s=s<0&&1&r.d[Math.max(e,n)]?-1:1;l.s=1;u=!1;i=r.times(b(l,t+12));u=!0;(i=y(i)).s=s;return i};v.toPrecision=function(r,e){var n,t,i=this,o=i.constructor;if(void 0===r)t=P(i,(n=C(i))<=o.toExpNeg||n>=o.toExpPos);else{m(r,1,1e9);void 0===e?e=o.rounding:m(e,0,8);t=P(i=U(new o(i),r,e),r<=(n=C(i))||n<=o.toExpNeg,r)}return t};v.toSignificantDigits=v.tosd=function(r,e){var n=this.constructor;if(void 0===r){r=n.precision;e=n.rounding}else{m(r,1,1e9);void 0===e?e=n.rounding:m(e,0,8)}return U(new n(this),r,e)}
;v.toString=v.valueOf=v.val=v.toJSON=function(){var r=this,e=C(r),n=r.constructor;return P(r,e<=n.toExpNeg||e>=n.toExpPos)};function w(r,e){var n,t,i,o,s,f,c,l,h=r.constructor,a=h.precision;if(!r.s||!e.s){e.s||(e=new h(r));return u?U(e,a):e}c=r.d;l=e.d;s=r.e;i=e.e;c=c.slice();if(o=s-i){if(o<0){t=c;o=-o;f=l.length}else{t=l;i=s;f=c.length}if(o>(f=(s=Math.ceil(a/7))>f?s+1:f+1)){o=f;t.length=1}t.reverse();for(;o--;)t.push(0);t.reverse()}if((f=c.length)-(o=l.length)<0){o=f;t=l;l=c;c=t}for(n=0;o;){n=(c[--o]=c[o]+l[o]+n)/g|0;c[o]%=g}if(n){c.unshift(n);++i}for(f=c.length;0==c[--f];)c.pop();e.d=c;e.e=i;return u?U(e,a):e}function m(r,e,n){if(r!==~~r||r<e||r>n)throw Error(c+r)}function E(r){var e,n,t,i=r.length-1,o="",s=r[0];if(i>0){o+=s;for(e=1;e<i;e++){(n=7-(t=r[e]+"").length)&&(o+=O(n));o+=t}(n=7-(t=(s=r[e])+"").length)&&(o+=O(n))}else if(0===s)return"0";for(;s%10==0;)s/=10;return o+s}var N=function(){function r(r,e){var n,t=0,i=r.length;for(r=r.slice();i--;){n=r[i]*e+t;r[i]=n%g|0;t=n/g|0}
t&&r.unshift(t);return r}function e(r,e,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(r[i]!=e[i]){o=r[i]>e[i]?1:-1;break}return o}function n(r,e,n){for(var t=0;n--;){r[n]-=t;t=r[n]<e[n]?1:0;r[n]=t*g+r[n]-e[n]}for(;!r[0]&&r.length>1;)r.shift()}return function(t,i,o,s){var u,c,l,h,a,d,p,v,w,m,E,N,y,x,O,b,M,L,P=t.constructor,_=t.s==i.s?1:-1,D=t.d,R=i.d;if(!t.s)return new P(t);if(!i.s)throw Error(f+"Division by zero");c=t.e-i.e;M=R.length;O=D.length;v=(p=new P(_)).d=[];for(l=0;R[l]==(D[l]||0);)++l;R[l]>(D[l]||0)&&--c;if((N=null==o?o=P.precision:s?o+(C(t)-C(i))+1:o)<0)return new P(0);N=N/7+2|0;l=0;if(1==M){h=0;R=R[0];N++;for(;(l<O||h)&&N--;l++){y=h*g+(D[l]||0);v[l]=y/R|0;h=y%R|0}}else{if((h=g/(R[0]+1)|0)>1){R=r(R,h);D=r(D,h);M=R.length;O=D.length}x=M;m=(w=D.slice(0,M)).length;for(;m<M;)w[m++]=0;(L=R.slice()).unshift(0);b=R[0];R[1]>=g/2&&++b;do{h=0;if((u=e(R,w,M,m))<0){E=w[0];M!=m&&(E=E*g+(w[1]||0));if((h=E/b|0)>1){h>=g&&(h=g-1);if(1==(u=e(a=r(R,h),w,d=a.length,m=w.length))){h--
;n(a,M<d?L:R,d)}}else{0==h&&(u=h=1);a=R.slice()}(d=a.length)<m&&a.unshift(0);n(w,a,m);if(-1==u&&(u=e(R,w,M,m=w.length))<1){h++;n(w,M<m?L:R,m)}m=w.length}else if(0===u){h++;w=[0]}v[l++]=h;if(u&&w[0])w[m++]=D[x]||0;else{w=[D[x]];m=1}}while((x++<O||void 0!==w[0])&&N--)}v[0]||v.shift();p.e=c;return U(p,s?o+C(p)+1:o)}}();function y(r,e){var n,t,i,s,f,c=0,h=0,d=r.constructor,g=d.precision;if(C(r)>16)throw Error(l+C(r));if(!r.s)return new d(o);if(null==e){u=!1;f=g}else f=e;s=new d(.03125);for(;r.abs().gte(.1);){r=r.times(s);h+=5}f+=Math.log(a(2,h))/Math.LN10*2+5|0;n=t=i=new d(o);d.precision=f;for(;;){t=U(t.times(r),f);n=n.times(++c);if(E((s=i.plus(N(t,n,f))).d).slice(0,f)===E(i.d).slice(0,f)){for(;h--;)i=U(i.times(i),f);d.precision=g;return null==e?(u=!0,U(i,g)):i}i=s}}function C(r){for(var e=7*r.e,n=r.d[0];n>=10;n/=10)e++;return e}function x(r,e,n){if(e>r.LN10.sd()){u=!0;n&&(r.precision=n);throw Error(f+"LN10 precision limit exceeded")}return U(new r(r.LN10),e)}function O(r){
for(var e="";r--;)e+="0";return e}function b(r,e){var n,t,i,s,c,l,h,a,d,g=1,p=r,v=p.d,w=p.constructor,m=w.precision;if(p.s<1)throw Error(f+(p.s?"NaN":"-Infinity"));if(p.eq(o))return new w(0);if(null==e){u=!1;a=m}else a=e;if(p.eq(10)){null==e&&(u=!0);return x(w,a)}a+=10;w.precision=a;t=(n=E(v)).charAt(0);s=C(p);if(!(Math.abs(s)<15e14)){h=x(w,a+2,m).times(s+"");p=b(new w(t+"."+n.slice(1)),a-10).plus(h);w.precision=m;return null==e?(u=!0,U(p,m)):p}for(;t<7&&1!=t||1==t&&n.charAt(1)>3;){t=(n=E((p=p.times(r)).d)).charAt(0);g++}s=C(p);if(t>1){p=new w("0."+n);s++}else p=new w(t+"."+n.slice(1));l=c=p=N(p.minus(o),p.plus(o),a);d=U(p.times(p),a);i=3;for(;;){c=U(c.times(d),a);if(E((h=l.plus(N(c,new w(i),a))).d).slice(0,a)===E(l.d).slice(0,a)){l=l.times(2);0!==s&&(l=l.plus(x(w,a+2,m).times(s+"")));l=N(l,new w(g),a);w.precision=m;return null==e?(u=!0,U(l,m)):l}l=h;i+=2}}function M(r,e){var n,t,i;(n=e.indexOf("."))>-1&&(e=e.replace(".",""));if((t=e.search(/e/i))>0){n<0&&(n=t);n+=+e.slice(t+1)
;e=e.substring(0,t)}else n<0&&(n=e.length);for(t=0;48===e.charCodeAt(t);)++t;for(i=e.length;48===e.charCodeAt(i-1);)--i;if(e=e.slice(t,i)){i-=t;n=n-t-1;r.e=h(n/7);r.d=[];t=(n+1)%7;n<0&&(t+=7);if(t<i){t&&r.d.push(+e.slice(0,t));for(i-=7;t<i;)r.d.push(+e.slice(t,t+=7));t=7-(e=e.slice(t)).length}else t-=i;for(;t--;)e+="0";r.d.push(+e);if(u&&(r.e>p||r.e<-p))throw Error(l+n)}else{r.s=0;r.e=0;r.d=[0]}return r}function U(r,e,n){var t,i,o,s,f,c,d,v,w=r.d;for(s=1,o=w[0];o>=10;o/=10)s++;if((t=e-s)<0){t+=7;i=e;d=w[v=0]}else{if((v=Math.ceil((t+1)/7))>=(o=w.length))return r;d=o=w[v];for(s=1;o>=10;o/=10)s++;i=(t%=7)-7+s}if(void 0!==n){f=d/(o=a(10,s-i-1))%10|0;c=e<0||void 0!==w[v+1]||d%o;c=n<4?(f||c)&&(0==n||n==(r.s<0?3:2)):f>5||5==f&&(4==n||c||6==n&&(t>0?i>0?d/a(10,s-i):0:w[v-1])%10&1||n==(r.s<0?8:7))}if(e<1||!w[0]){if(c){o=C(r);w.length=1;e=e-o-1;w[0]=a(10,(7-e%7)%7);r.e=h(-e/7)||0}else{w.length=1;w[0]=r.e=r.s=0}return r}if(0==t){w.length=v;o=1;v--}else{w.length=v+1;o=a(10,7-t)
;w[v]=i>0?(d/a(10,s-i)%a(10,i)|0)*o:0}if(c)for(;;){if(0==v){if((w[0]+=o)==g){w[0]=1;++r.e}break}w[v]+=o;if(w[v]!=g)break;w[v--]=0;o=1}for(t=w.length;0===w[--t];)w.pop();if(u&&(r.e>p||r.e<-p))throw Error(l+C(r));return r}function L(r,e){var n,t,i,o,s,f,c,l,h,a,d=r.constructor,p=d.precision;if(!r.s||!e.s){e.s?e.s=-e.s:e=new d(r);return u?U(e,p):e}c=r.d;a=e.d;t=e.e;l=r.e;c=c.slice();if(s=l-t){if(h=s<0){n=c;s=-s;f=a.length}else{n=a;t=l;f=c.length}if(s>(i=Math.max(Math.ceil(p/7),f)+2)){s=i;n.length=1}n.reverse();for(i=s;i--;)n.push(0);n.reverse()}else{(h=(i=c.length)<(f=a.length))&&(f=i);for(i=0;i<f;i++)if(c[i]!=a[i]){h=c[i]<a[i];break}s=0}if(h){n=c;c=a;a=n;e.s=-e.s}f=c.length;for(i=a.length-f;i>0;--i)c[f++]=0;for(i=a.length;i>s;){if(c[--i]<a[i]){for(o=i;o&&0===c[--o];)c[o]=g-1;--c[o];c[i]+=g}c[i]-=a[i]}for(;0===c[--f];)c.pop();for(;0===c[0];c.shift())--t;if(!c[0])return new d(0);e.d=c;e.e=t;return u?U(e,p):e}function P(r,e,n){var t,i=C(r),o=E(r.d),s=o.length;if(e){
n&&(t=n-s)>0?o=o.charAt(0)+"."+o.slice(1)+O(t):s>1&&(o=o.charAt(0)+"."+o.slice(1));o=o+(i<0?"e":"e+")+i}else if(i<0){o="0."+O(-i-1)+o;n&&(t=n-s)>0&&(o+=O(t))}else if(i>=s){o+=O(i+1-s);n&&(t=n-i-1)>0&&(o=o+"."+O(t))}else{(t=i+1)<s&&(o=o.slice(0,t)+"."+o.slice(t));if(n&&(t=n-s)>0){i+1===s&&(o+=".");o+=O(t)}}return r.s<0?"-"+o:o}function _(r,e){if(r.length>e){r.length=e;return!0}}function D(r){if(!r||"object"!=typeof r)throw Error(f+"Object expected");var e,n,t,i=["precision",1,1e9,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<i.length;e+=3)if(void 0!==(t=r[n=i[e]])){if(!(h(t)===t&&t>=i[e+1]&&t<=i[e+2]))throw Error(c+n+": "+t);this[n]=t}if(void 0!==(t=r[n="LN10"])){if(t!=Math.LN10)throw Error(c+n+": "+t);this[n]=new this(t)}return this}(s=function r(e){var n,t,i;function o(r){var e=this;if(!(e instanceof o))return new o(r);e.constructor=o;if(r instanceof o){e.s=r.s;e.e=r.e;e.d=(r=r.d)?r.slice():r}else{if("number"==typeof r){if(0*r!=0)throw Error(c+r);if(r>0)e.s=1;else{
if(!(r<0)){e.s=0;e.e=0;e.d=[0];return}r=-r;e.s=-1}if(r===~~r&&r<1e7){e.e=0;e.d=[r];return}return M(e,r.toString())}if("string"!=typeof r)throw Error(c+r);if(45===r.charCodeAt(0)){r=r.slice(1);e.s=-1}else e.s=1;if(!d.test(r))throw Error(c+r);M(e,r)}}o.prototype=v;o.ROUND_UP=0;o.ROUND_DOWN=1;o.ROUND_CEIL=2;o.ROUND_FLOOR=3;o.ROUND_HALF_UP=4;o.ROUND_HALF_DOWN=5;o.ROUND_HALF_EVEN=6;o.ROUND_HALF_CEIL=7;o.ROUND_HALF_FLOOR=8;o.clone=r;o.config=o.set=D;void 0===e&&(e={});if(e){i=["precision","rounding","toExpNeg","toExpPos","LN10"];for(n=0;n<i.length;)e.hasOwnProperty(t=i[n++])||(e[t]=this[t])}o.config(e);return o}(s)).default=s.Decimal=s;o=new s(1);void 0!==(t=function(){return s}.call(e,n,e,r))&&(r.exports=t)}()}}]);
//# sourceMappingURL=c85fb7b6d792b8ecb359.js.map