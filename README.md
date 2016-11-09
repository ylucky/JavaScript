# JavaScript
JavaScript  
任何标签都可以加id；  
任何属性都可以修改；  
html怎么写，js就怎么写 （特例:class要用className) 
1.变量  
```
var oDiv = document.getElementById("div1");
var oTxt = document.getElementById("text1");
var oLi= document.getElementsByTagName("li");
```
2.操作属性  
```
oTxt.value='';

oBtn[i].index=i; //tab选项卡
this.index 


innerHTML 标签添加文字
html
 
隐式类型转换 == === -(减法)
显示类型转换 parseInt parseFloat

% 奇偶变色（i%2==0）

break 整个循环中断
continue 本次循环中断

js去掉字符前面的0
var s='002345';
alert(s.replace(/\b(0+)/gi,""));


获取行间样式
oDiv.style.width;
获取非行间样式
oDiv.currentStyle.width; //ie
getComputedStyle(oDiv,false).width;//ff chrome 第二个参数随便放什么  注意复合样式用backgroundColor

数组操作：
push 尾部添加
pop 尾部删除

shift  头部删除
unshift 头部添加

splice(起点位置，长度（删几个）) 中间删除
splice(起点位置，0,元素)  中间插入几个元素
splice(起点位置，2,元素)  替换2个元素操作

concat（数组） 连接数组
join（连接符）  拼接数组

sort 排序 只认识字符串哟
比较数字
sort(function(n1,n2){
	return n1-n2;
})
```

##DOM  
```
childNodes 子节点（会包含空白文本节点）
children  只包括元素！！！好用
nodeType  查看节点类型
parentNode 父节点
offsetParent 元素用来定位的
firstChild-（ie6-8） firstElementChild-（高级浏览器）
lastChild  lastElementChild
nextSibling nextElementSibling 
previousSibling previousElementSibling

setAttribute('name',value);
getAttribue(名称)
removeAttribute(名称)

className 封装函数
function getByClass(oParent,sClass){
	var aResult=[];
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
```

##DOM操作  
```
创建、插入、删除元素
createElement
appendChild 往后插入
insertBefore 往前插入  （注意没有元素的时候会报错）
removeChild 删除节点

createDocumentFragment 文档碎片 不常用了
``` 

##DOM高级应用  
```
#表格  
获取 
tBodies 取body
tHead 取头
tFoot 取尾
rows 行
cols 单元格

搜索

排序

#表单 
验证 
```
