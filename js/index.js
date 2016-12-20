

//页面的点击函数
function query (idName) {
	//定义任意数组
	var arr = ["x","a","b","m","e","a","p","m","j","a"];
	var idE = document.getElementById(idName.substring(1));
	var char = getMax(arr);
	var item = [];
	var count = char[0].count;
	for (var i = 0; i < char.length; i++) {
		item.push(char[i].item);
	}
	idE.innerHTML = "数量最多的字母是:" +item+"</br>"+
					"字母出现的次数："+count+"</br>";
	for (var i = 0; i < char.length; i++) {
			idE.innerHTML+="字母"+char[i].item+"出现的位置是："+char[i].index+"</br>"
		}

	//获取数组中出现次数最多的字母并将所有出现的字母的对应的位置保存到对象中
	function getMax(arr) {
		var max = 0;
		var obj ={};
		var result=[];
		var temp = [];
		//遍历数组，将出现的字母保存到成对值
		for (var i = 0; i < arr.length; i++) {
			if (!obj[arr[i]]) {
				obj[arr[i]]={};
				obj[arr[i]].count=1;
				obj[arr[i]].item=arr[i];
				obj[arr[i]].index=[];
				obj[arr[i]].index.push(i);
			}else{
				obj[arr[i]].index.push(i);
				obj[arr[i]].count+=1;
			}
		}
		//将对象存入数组，方便遍历排序
		for(var i in obj){
			var item = obj[i];
			result.push(item);
		}
		/****************************************************
	这里的Object.keys(obj)就是把obj对象中的key值提取出来保存为一个数组返回
		var x = Object.keys(obj).sort(function (a,b) {
			return obj[b].count - obj[a].count;
		});
		alert(x);
		对数组按count的大小降序排列
		****************************************************/
		result.sort(function (a,b) {
			return b.count-a.count;
		})
		//获得其中出现次数多的数组
		for (var i = 0; i < result.length; i++) {
			if (max <= result[i].count) {
				max = result[i].count;
				temp.push(result[i]);
			}
		}
		return temp;
	}
			
}



