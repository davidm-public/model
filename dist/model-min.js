define("model/model",[],function(){function n(n){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,n()},0))}}function t(n){return!n.some(function(n){return"undefined"==typeof n||null===n})}return function(){function o(n,t){"string"==typeof n?c(n,t):e(n)}function e(n){Object.keys(n).forEach(function(t){c(t,n[t])})}function c(n,t){m[n]=t,h[n]&&h[n].forEach(function(n){n()})}function u(n){return m[n]}function r(){var o=[];return function e(c,r,i){c instanceof Array||(c=[c]);var l=n(function(){var n=c.map(u);t(n)&&f(r,i,n,c)});return l(),c.forEach(function(n){a(n,l),o.push({property:n,fn:l})}),{when:e,callbacks:o}}}function f(n,t,o,e){var u,r;p&&(u=c,r={},c=function(n,t){r[n]=!0,u(n,t)}),n.apply(t,o),p&&(c=u,console.log("detected ("+e.join(", ")+") -> ("+Object.keys(r)+")"))}function i(n){n.callbacks.forEach(function(n){l(n.property,n.fn)})}function a(n,t){h[n]||(h[n]=[]),h[n].push(t)}function l(n,t){h[n]=h[n].filter(function(n){return n!==t})}function d(n){p=n}var p,s={set:o,get:u,when:function(n,t,o){return r()(n,t,o)},cancel:i,detectFlowGraph:d},h={},m={};return s.detectFlowGraph(function(){}),s}}),define("model",["model/model"],function(n){return n});