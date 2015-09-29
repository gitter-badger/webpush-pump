var
  base= require( "../base"),
  classiness= require( "insure-classiness"),

function Subscriber( opts){
	var self= classiness( this, Subscriber, opts)
	base( self, opts)
	self.subscribe= self.subscribe|| opts.subscribe
	self.tick= self.tick|| opts.tick|| 0
	return self
}

Subscriber.prototype[ "@type"]= Subscriber.name.toLowerCase()
