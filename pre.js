var
  time= require("./util/time")

function pre(ctx){
	function *pre( next){
		var reqCtx= this[ ctx.ctxName]
		if( !reqCtx){
			reqCtx= this[ ctx.ctxName]= {ctx: ctx}
		}else if( !reqCtx.ctx){
			reqCtx.ctx= ctx
		}
		this.timestamp= reqCtx.timestamp= (new Date()).getTime()
		yield next
	}
	Object.defineProperty(pre, "ctx", {
		get: function(){ return ctx},
		set: function(val){ ctx= val },
		enumerable: true
	})
	return pre
}

module.exports= pre
