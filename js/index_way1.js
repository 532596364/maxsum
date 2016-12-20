

//页面的点击函数
function query (idName) {
	var idE = document.getElementById(idName.substring(1));
	var char = getMax(this.arr,this.obj);
	//输出到页面
	idE.innerHTML = "数量最多的字母是："+char+"</br>"
					+"字母出现的次数："+this.obj[char].length+"</br>"
					+"字母出现的位置为："+this.obj[char];	
}

//定义任意数组
query.prototype.arr = ["a","x","b","d","m","a","k","m","p","j","a"];
//26个字母数组对象，保存字母出现的位置
query.prototype.obj ={
		"a":[],
		"b":[],
		"c":[],
		"d":[],
		"e":[],
		"f":[],
		"g":[],
		"h":[],
		"i":[],
		"j":[],
		"k":[],
		"l":[],
		"m":[],
		"n":[],
		"o":[],
		"p":[],
		"q":[],
		"r":[],
		"s":[],
		"t":[],
		"u":[],
		"v":[],
		"w":[],
		"x":[],
		"y":[],
		"z":[]
}

//获取数组中出现次数最多的字母并将所有出现的字母的对应的位置保存到对象中
function getMax(arr,obj) {
	var max = 0;
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]].push(i);
	}
	for (var i = 0; i < arr.length; i++) {
		if (max < obj[arr[i]].length) {
			max = obj[arr[i]].length;
			var temp = arr[i];
		}
	}
	return temp;
}
