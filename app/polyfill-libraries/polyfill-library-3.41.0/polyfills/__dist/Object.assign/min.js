CreateMethodProperty(Object,"assign",function e(r,t){var n=ToObject(r);if(1===arguments.length)return n;var a,o,c,l,p=Array.prototype.slice.call(arguments,1);for(a=0;a<p.length;a++){var b=p[a];for(b===undefined||null===b?c=[]:(l=ToObject(b),c=Object.keys(l)),o=0;o<c.length;o++){var i,u=c[o];try{var y=Object.getOwnPropertyDescriptor(l,u);i=y!==undefined&&!0===y.enumerable}catch(O){i=Object.prototype.propertyIsEnumerable.call(l,u)}if(i){var f=Get(l,u);n[u]=f}}}return n});