function CreateRegExpStringIterator(e,t,r,n){var a={};return CreateMethodProperty(a,"next",function i(){if(!0===this["[[Done]]"])return CreateIterResultObject(undefined,!0);var a=RegExpExec(e,t);if(null===a)return this["[[Done]]"]=!0,CreateIterResultObject(undefined,!0);if(!1===r){var i=CreateIterResultObject(a,!1);return this["[[Done]]"]=!0,i}if(""===ToString(Get(a,"0"))){var o=ToLength(Get(e,"lastIndex")),u=AdvanceStringIndex(t,o,n);e.lastIndex=u}return CreateIterResultObject(a,!1)}),Object.defineProperty(a,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:"RegExp String Iterator"}),CreateMethodProperty(a,Symbol.iterator,function o(){return this}),a}