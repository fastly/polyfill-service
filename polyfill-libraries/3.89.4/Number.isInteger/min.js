CreateMethodProperty(Number,"isInteger",function e(n){return"number"===Type(n)&&(!isNaN(n)&&n!==Infinity&&n!==-Infinity&&ToInteger(n)===n)});