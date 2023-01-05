// เลือกใช้อย่างใดอย่างหนึ่ง ตามภาษาที่ใช้บน IG
// IG ภาษาไทย
setInterval(function(){
	Array.from(document.querySelectorAll('button'))
	 .find(el => el.textContent === 'กำลังติดตาม').click();
	setTimeout(function(){
		Array.from(document.querySelectorAll('button'))
		.find(el => el.textContent === 'เลิกติดตาม').click();
	},2000)
},2000)


// IG English Language
setInterval(function(){
	Array.from(document.querySelectorAll('button'))
	 .find(el => el.textContent === 'Following').click();
	setTimeout(function(){
		Array.from(document.querySelectorAll('button'))
		.find(el => el.textContent === 'Unfollow').click();
	},2000)
},2000)
