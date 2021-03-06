

var Person = Class.extend({
    init: function(isDancing){
        this.dancing = isDancing;
    },
    dance: function(){
        return this.dancing;
    }
});

var Ninja = Person.extend({
    init: function(){
        this._super( false );
    },
    dance: function(){
        // Call the inherited version of dance()
        return this._super();
    },
    swingSword: function(){
        return true;
    }
});

var p = new Person(true);
p.dance(); // => true

var n = new Ninja();
n.dance(); // => false
n.swingSword(); // => true



