## 557. 反转字符串中的单词 III
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
### 解题方法1
采用数组原生方法
```javascript
   let str = "Let's take LeetCode contest"
   let arr = str.split(' ')
   // 对数组进行遍历，然后每个元素进行反转
   let result = arr.map(item => {
     return item.split('').reverse().join('')
  })
    console.log(result.join(' '))

```
### 解题方法2
应用正则表达式

```javascript
	let str = "Let's take LeetCode contest"
  	str.match(/[\S]+/g).map(item => {
    		return item.split('').reverse().join('')
 	 }).join(' ') 

	console.log(str)		
```

