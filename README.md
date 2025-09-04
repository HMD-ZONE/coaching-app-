<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>برنامج التمرين</title>
  <style>
    body { font-family: Tahoma, Arial, sans-serif; margin:0; background:#f4f4f9; text-align:center; }
    header { background:#222; color:white; padding:20px; }
    .container { padding:40px; }
    .btn { display:inline-block; padding:12px 20px; margin:10px; background:#4CAF50; color:white; text-decoration:none; border-radius:8px; transition:0.3s; }
    .btn:hover { background:#45a049; }
    .card { background:white; padding:20px; margin:15px auto; max-width:400px; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.15);}
    input, select { width:90%; padding:12px; margin:10px; border:1px solid #ccc; border-radius:6px; }
    section { min-height: 90vh; display:flex; flex-direction:column; justify-content:center; align-items:center; }
  </style>
</head>
<body>

<!-- الصفحة الرئيسية -->
<section id="landing">
  <header><h1>🏋️ برنامج التمرين</h1></header>
  <div class="container">
    <p>ابدأ رحلتك نحو جسم صحي ولياقة عالية 💪</p>
    <a href="#login" class="btn">ابدأ الآن</a>
  </div>
</section>

<!-- تسجيل الدخول -->
<section id="login" style="display:none;">
  <header><h2>🔑 تسجيل الدخول</h2></header>
  <div class="container">
    <input type="text" placeholder="البريد الإلكتروني">
    <input type="password" placeholder="كلمة المرور">
    <a href="#quiz" class="btn">دخول</a>
  </div>
</section>

<!-- الاستبيان -->
<section id="quiz" style="display:none;">
  <header><h2>📋 الأسئلة الغذائية</h2></header>
  <div class="container">
    <select>
      <option>اختر هدفك</option>
      <option>خسارة وزن</option>
      <option>بناء عضل</option>
      <option>تحسين لياقة</option>
    </select>
    <input type="number" placeholder="الوزن (كجم)">
    <input type="number" placeholder="الطول (سم)">
    <a href="#payment" class="btn">التالي</a>
  </div>
</section>

<!-- الدفع -->
<section id="payment" style="display:none;">
  <header><h2>💳 صفحة الدفع</h2></header>
  <div class="container">
    <p>الاشتراك: <strong>100 ريال / شهر</strong></p>
    <a href="#dashboard" class="btn">ادفع الآن</a>
  </div>
</section>

<!-- الرئيسية -->
<section id="dashboard" style="display:none;">
  <header><h2>🏠 لوحة التحكم</h2></header>
  <div class="container">
    <div class="card"><h3>تمارين اليوم</h3><p>✅ سكوات 3x12<br>✅ ضغط صدر 3x10</p></div>
    <div class="card"><h3>الكارديو</h3><p>🏃‍♂️ 20 دقيقة جري</p></div>
    <div class="card"><h3>النظام الغذائي</h3><p>🍗 صدر دجاج + 🥦 خضار + 🍚 رز</p></div>
  </div>
</section>

<script>
  // التنقل بين الصفحات
  document.querySelectorAll("a[href^='#']").forEach(link=>{
    link.addEventListener("click", e=>{
      e.preventDefault();
      document.querySelectorAll("section").forEach(sec=>sec.style.display="none");
      let target = document.querySelector(link.getAttribute("href"));
      if(target) target.style.display="flex";
    });
  });
</script>

</body>
</html>
