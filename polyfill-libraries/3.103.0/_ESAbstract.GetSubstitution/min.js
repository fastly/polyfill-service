var GetSubstitution=function(){function e(e){return/^[0-9]$/.test(e)}return function t(n,r,l,i,a,f){for(var s=n.length,h=r.length,c=l+s,u=i.length,v="",g=0;g<f.length;g+=1){var o=f.charAt(g),$=g+1>=f.length,d=g+2>=f.length;if("$"!==o||$)v+=f.charAt(g);else{var p=f.charAt(g+1);if("$"===p)v+="$",g+=1;else if("&"===p)v+=n,g+=1;else if("`"===p)v+=0===l?"":r.slice(0,l-1),g+=1;else if("'"===p)v+=c>=h?"":r.slice(c),g+=1;else{var A=d?null:f.charAt(g+2);if(!e(p)||"0"===p||!d&&e(A))if(e(p)&&(d||e(A))){var y=p+A,I=parseInt(y,10)-1;v+=y<=u&&"Undefined"===Type(i[I])?"":i[I],g+=2}else v+="$";else{var T=parseInt(p,10);v+=T<=u&&"Undefined"===Type(i[T-1])?"":i[T-1],g+=1}}}}return v}}();