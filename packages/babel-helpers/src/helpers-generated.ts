/*
 * This file is auto-generated! Do not modify it directly.
 * To re-generate run 'yarn gulp generate-runtime-helpers'
 */

import template from "@babel/template";

function helper(minVersion: string, source: string) {
  return Object.freeze({
    minVersion,
    ast: () => template.program.ast(source, { preserveComments: true }),
  });
}

export default Object.freeze({
  AsyncGenerator: helper(
    "7.0.0-beta.0",
    'import OverloadYield from"OverloadYield";export default function AsyncGenerator(gen){var front,back;function resume(key,arg){try{var result=gen[key](arg),value=result.value,overloaded=value instanceof OverloadYield;Promise.resolve(overloaded?value.v:value).then((function(arg){if(overloaded){var nextKey="return"===key?"return":"next";if(!value.k||arg.done)return resume(nextKey,arg);arg=gen[nextKey](arg).value}settle(result.done?"return":"normal",arg)}),(function(err){resume("throw",err)}))}catch(err){settle("throw",err)}}function settle(type,value){switch(type){case"return":front.resolve({value:value,done:!0});break;case"throw":front.reject(value);break;default:front.resolve({value:value,done:!1})}(front=front.next)?resume(front.key,front.arg):back=null}this._invoke=function(key,arg){return new Promise((function(resolve,reject){var request={key:key,arg:arg,resolve:resolve,reject:reject,next:null};back?back=back.next=request:(front=back=request,resume(key,arg))}))},"function"!=typeof gen.return&&(this.return=void 0)}AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},AsyncGenerator.prototype.next=function(arg){return this._invoke("next",arg)},AsyncGenerator.prototype.throw=function(arg){return this._invoke("throw",arg)},AsyncGenerator.prototype.return=function(arg){return this._invoke("return",arg)};',
  ),
  OverloadYield: helper(
    "7.18.14",
    "export default function _OverloadYield(value,kind){this.v=value,this.k=kind}",
  ),
  applyDecs: helper(
    "7.17.8",
    'function createMetadataMethodsForProperty(metadataMap,kind,property,decoratorFinishedRef){return{getMetadata:function(key){assertNotFinished(decoratorFinishedRef,"getMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0!==metadataForKey)if(1===kind){var pub=metadataForKey.public;if(void 0!==pub)return pub[property]}else if(2===kind){var priv=metadataForKey.private;if(void 0!==priv)return priv.get(property)}else if(Object.hasOwnProperty.call(metadataForKey,"constructor"))return metadataForKey.constructor},setMetadata:function(key,value){assertNotFinished(decoratorFinishedRef,"setMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0===metadataForKey&&(metadataForKey=metadataMap[key]={}),1===kind){var pub=metadataForKey.public;void 0===pub&&(pub=metadataForKey.public={}),pub[property]=value}else if(2===kind){var priv=metadataForKey.priv;void 0===priv&&(priv=metadataForKey.private=new Map),priv.set(property,value)}else metadataForKey.constructor=value}}}function convertMetadataMapToFinal(obj,metadataMap){var parentMetadataMap=obj[Symbol.metadata||Symbol.for("Symbol.metadata")],metadataKeys=Object.getOwnPropertySymbols(metadataMap);if(0!==metadataKeys.length){for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i],metaForKey=metadataMap[key],parentMetaForKey=parentMetadataMap?parentMetadataMap[key]:null,pub=metaForKey.public,parentPub=parentMetaForKey?parentMetaForKey.public:null;pub&&parentPub&&Object.setPrototypeOf(pub,parentPub);var priv=metaForKey.private;if(priv){var privArr=Array.from(priv.values()),parentPriv=parentMetaForKey?parentMetaForKey.private:null;parentPriv&&(privArr=privArr.concat(parentPriv)),metaForKey.private=privArr}parentMetaForKey&&Object.setPrototypeOf(metaForKey,parentMetaForKey)}parentMetadataMap&&Object.setPrototypeOf(metadataMap,parentMetadataMap),obj[Symbol.metadata||Symbol.for("Symbol.metadata")]=metadataMap}}function createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){assertNotFinished(decoratorFinishedRef,"addInitializer"),assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function memberDec(dec,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var metadataKind,metadataName,ctx={kind:kindStr,name:isPrivate?"#"+name:name,isStatic:isStatic,isPrivate:isPrivate},decoratorFinishedRef={v:!1};if(0!==kind&&(ctx.addInitializer=createAddInitializerMethod(initializers,decoratorFinishedRef)),isPrivate){metadataKind=2,metadataName=Symbol(name);var access={};0===kind?(access.get=desc.get,access.set=desc.set):2===kind?access.get=function(){return desc.value}:(1!==kind&&3!==kind||(access.get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(access.set=function(v){desc.set.call(this,v)})),ctx.access=access}else metadataKind=1,metadataName=name;try{return dec(value,Object.assign(ctx,createMetadataMethodsForProperty(metadataMap,metadataKind,metadataName,decoratorFinishedRef)))}finally{decoratorFinishedRef.v=!0}}function assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function assertMetadataKey(key){if("symbol"!=typeof key)throw new TypeError("Metadata keys must be symbols, received: "+key)}function assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&assertCallable(value.get,"accessor.get"),void 0!==value.set&&assertCallable(value.set,"accessor.set"),void 0!==value.init&&assertCallable(value.init,"accessor.init"),void 0!==value.initializer&&assertCallable(value.initializer,"accessor.initializer")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function getInit(desc){var initializer;return null==(initializer=desc.init)&&(initializer=desc.initializer)&&"undefined"!=typeof console&&console.warn(".initializer has been renamed to .init as of March 2022"),initializer}function applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers){var desc,initializer,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=memberDec(decs,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value))&&(assertValidReturnValue(kind,newValue),0===kind?initializer=newValue:1===kind?(initializer=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=memberDec(decs[i],name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value)))assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===initializer?initializer=newInit:"function"==typeof initializer?initializer=[initializer,newInit]:initializer.push(newInit))}if(0===kind||1===kind){if(void 0===initializer)initializer=function(instance,init){return init};else if("function"!=typeof initializer){var ownInitializers=initializer;initializer=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=initializer;initializer=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(initializer)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function applyMemberDecs(ret,Class,protoMetadataMap,staticMetadataMap,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,metadataMap,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,metadataMap=staticMetadataMap,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,metadataMap=protoMetadataMap,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers)}}pushInitializers(ret,protoInitializers),pushInitializers(ret,staticInitializers)}function pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function applyClassDecs(ret,targetClass,metadataMap,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var ctx=Object.assign({kind:"class",name:name,addInitializer:createAddInitializerMethod(initializers,decoratorFinishedRef)},createMetadataMethodsForProperty(metadataMap,0,name,decoratorFinishedRef)),nextNewClass=classDecs[i](newClass,ctx)}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs(targetClass,memberDecs,classDecs){var ret=[],staticMetadataMap={},protoMetadataMap={};return applyMemberDecs(ret,targetClass,protoMetadataMap,staticMetadataMap,memberDecs),convertMetadataMapToFinal(targetClass.prototype,protoMetadataMap),applyClassDecs(ret,targetClass,staticMetadataMap,classDecs),convertMetadataMapToFinal(targetClass,staticMetadataMap),ret}',
  ),
  asyncGeneratorDelegate: helper(
    "7.0.0-beta.0",
    'import OverloadYield from"OverloadYield";export default function _asyncGeneratorDelegate(inner){var iter={},waiting=!1;function pump(key,value){return waiting=!0,value=new Promise((function(resolve){resolve(inner[key](value))})),{done:!1,value:new OverloadYield(value,1)}}return iter["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},iter.next=function(value){return waiting?(waiting=!1,value):pump("next",value)},"function"==typeof inner.throw&&(iter.throw=function(value){if(waiting)throw waiting=!1,value;return pump("throw",value)}),"function"==typeof inner.return&&(iter.return=function(value){return waiting?(waiting=!1,value):pump("return",value)}),iter}',
  ),
  asyncIterator: helper(
    "7.15.9",
    'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}',
  ),
  awaitAsyncGenerator: helper(
    "7.0.0-beta.0",
    'import OverloadYield from"OverloadYield";export default function _awaitAsyncGenerator(value){return new OverloadYield(value,0)}',
  ),
  jsx: helper(
    "7.0.0-beta.0",
    'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}',
  ),
  objectSpread2: helper(
    "7.5.0",
    'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}',
  ),
  regeneratorRuntime: helper(
    "7.18.0",
    'export default function _regeneratorRuntime(){"use strict";\n/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a \'throw\' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}',
  ),
  typeof: helper(
    "7.0.0-beta.0",
    'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}',
  ),
  wrapRegExp: helper(
    "7.2.6",
    'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){var i=g[name];if("number"==typeof i)groups[name]=result[i];else{for(var k=0;void 0===result[i[k]]&&k+1<i.length;)k++;groups[name]=result[i[k]]}return groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}',
  ),
});
