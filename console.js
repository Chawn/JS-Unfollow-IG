// เลือกใช้อย่างใดอย่างหนึ่ง ตามภาษาที่ใช้บน IG
// IG ภาษาไทย
setInterval(function() {
  const followingButton = document.querySelector('button:contains("'กำลังติดตาม').")');
  if (followingButton) {
    followingButton.click();
    setTimeout(function() {
      document.querySelector('button:contains("'เลิกติดตาม').")').click();
    }, 2000);
  }
}, 2000);


// IG English Language
setInterval(function() {
  const followingButton = document.querySelector('button:contains("Following")');
  if (followingButton) {
    followingButton.click();
    setTimeout(function() {
      document.querySelector('button:contains("Unfollow")').click();
    }, 2000);
  }
}, 2000);
