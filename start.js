var one = new Vue({
	el:'#hoang',
	data:{
		name:'hoang',
		job:'vip',
		web:'http://localhost/eprojects_1/index.php',
		web1: '<a href="http://localhost/eprojects_1/index.php">vip</a>',
		age:18,
		x:0,
		y:0,
		a:0,
		b:0,
		Name:'',
		Age:'',
		available:true,
		vip:false,
		error:false,
		success:false,
		chapter:['hoang','vip','pro','3010'],
		ninjas:[
		    {Name:'hoang',oll:18},
		    {Name:'vip',oll:19},
		    {Name:'pro',oll:20}
		],
		health:0,
		ended:false
	},
	methods:{
		greet:function(time){
			return'good ' + time + ' ' + this.name;
		},

		add:function(inc){
			this.age += inc;
		},

		subtract:function(dec){
			this.age -= dec;
		},

		up:function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
		},

		logName:function(){
			console.log('you enter your name');
		},

		logage:function(){
			console.log('you enter your age');
		},

		/*addToA:function(){
			return this.a + this.age;
		},

		addToB:function(){
			return this.b + this.age;
		}*/

		punch:function() {
			this.health += 10;
			if(this.health >= 100){
				this.ended = true;
			}
		},

		restart:function() {
			this.health = 0;
			this.ended = false;
		}
	},

	computed:{
		addToA:function(){
			console.log('addToA');			
			return this.a + this.age;
		},

		addToB:function(){
			console.log('addToB');			
			return this.b + this.age;
		},

		compClasses:function(){
			return{
				available: this.available,
				vip:this.vip
			}
		}

	}
});

var two = new Vue({
	el:'vip',
	data:{

	},

	methods:{

	},

	computed:{

	}


})

