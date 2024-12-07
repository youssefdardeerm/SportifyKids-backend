import dotenv from 'dotenv'
import QRCode from 'qrcode';
import videoRoutes from './src/modules/Trainingvideolibrary/Trainingvideolibrary.router.js';
import healthfoodrouter from "./src/modules/Healthfood/Healthfood.router.js";
import Physicalactivityrouter from "./src/modules/Physicalactivityforchildren/Physicalactivityforchildren.router.js";
import childrendatarouter from "./src/modules/childdata/childdata.router.js";
import Sportscomdyrouter from "./src/modules/SportsComdy/SportsComdy.router.js";
import challengeday from "./src/modules/challengeday/challengeday.router.js";
import contestantRoutes from "./src/modules/quiz/quiz.router.js";
import EntertainmentvideoRoutes from "./src/modules/Entertainment/Entertainment.router.js";
import morgan from 'morgan'
import cors from 'cors';
dotenv.config()

export const appMethods=(app,express)=>{
  app.use(cors()); // تأكد من أن هذه السطر قبل أي مسارات

    //Global MiddleWare
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/Trainingvideolibrary', videoRoutes);
app.use('/api/Healthood', healthfoodrouter);
app.use('/api/Physicalactivity', Physicalactivityrouter);
app.use('/api/childrendata', childrendatarouter);
app.use('/api/sportscomdy', Sportscomdyrouter);
app.use('/api/challengeday', challengeday);
app.use('/api/quiz', contestantRoutes);
app.use('/api/Entertainment', EntertainmentvideoRoutes);



const Port=process.env.port;


app.get("/generate-qr", async (req, res) => {
  const url = "https://sportify-kids.web.app//HomePage"; // الرابط الذي سيتضمنه QR Code
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url);
    res.json({ qrCode: qrCodeDataURL });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate QR code" });
  }
});

app.get("/",(req,res,next)=>{
  const temp = `
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>مرحبًا بكم في موقع أطفال الرياضة</title>
<link rel="stylesheet" href="styles.css">
</head>
<style>
/* Reset */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

/* Body styling */
body {
font-family: Arial, sans-serif;
line-height: 1.6;
color: #333;
background-color: #f3f3f3;
text-align: center;
}

/* Header styling */
header {
background-color: #4CAF50;
color: white;
padding: 2rem;
}

header h1 {
font-size: 2.5rem;
margin-bottom: 0.5rem;
}

header p {
font-size: 1.2rem;
}

/* Features Section */
.features {
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 2rem;
}

.feature {
background-color: white;
border-radius: 10px;
width: 300px;
margin: 1rem;
padding: 1.5rem;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
transition: transform 0.3s;
}

.feature:hover {
transform: scale(1.05);
}

.feature h2 {
color: #4CAF50;
margin-bottom: 0.5rem;
}

.feature p {
color: #555;
}

/* Footer styling */
footer {
background-color: #4CAF50;
color: white;
padding: 1rem;
font-size: 0.9rem;
margin-top: 2rem;
}

</style>
<body>
<header>
  <h1>مرحبًا بكم في موقع أطفال الرياضة</h1>
  <p>نهدف لتعزيز النشاط البدني وتطوير لياقة الأطفال من خلال محتوى تعليمي وترفيهي متكامل!</p>
</header>

<section class="features">
  <div class="feature">
    <h2>مكتبة الفيديوهات التفاعلية</h2>
    <p>اكتشف مجموعة من الفيديوهات التدريبية التي تساعد الأطفال على تحسين لياقتهم.</p>
  </div>
  <div class="feature">
    <h2>تغذية صحية</h2>
    <p>شارك وصفات صحية للأطفال وشاهد فيديوهات تطبيقية من أصدقائك الصغار.</p>
  </div>
  <div class="feature">
    <h2>قصص توعوية</h2>
    <p>استمع إلى قصص من أبطال رياضيين تشجع الأطفال على النشاط البدني.</p>
  </div>
  <div class="feature">
    <h2>تتبع النشاط اليومي</h2>
    <p>تابع نشاطك اليومي وعدد خطواتك على مدار اليوم!</p>
  </div>
  <div class="feature">
    <h2>ترفيه وتعاون</h2>
    <p>استمتع بالقصص المصورة والرسوم الكرتونية التي تعزز روح التعاون بين الأصدقاء.</p>
  </div>
  <div class="feature">
    <h2>تحدي اليوم</h2>
    <p>شارك في تحديات أسبوعية رياضية وتنافس مع أصدقائك!</p>
  </div>
</section>

<footer>
  <p>© 2024 موقع أطفال الرياضة | كل الحقوق محفوظة</p>
</footer>
</body>
</html>

`
  res.status(200).header('Content-Type', 'text/html').send(temp);
})
//Not Found Page Router
app.all("*",(req, res, next)=>{
    return next(new Error("Not Found Page ! ",{causs:404}))
})
// Global Error Handler
app.use((error, req, res, next) => {
    const statusCode = error.cause || 500;
    const errorResponse = {
        success: false,
        status: statusCode,
        message: error.message,
        stack: error.stack
    };

  

    return res.status(statusCode).json(errorResponse);
});
app.listen(Port,()=>{
  console.log(`Server Is Running On Port ${Port}`);
})

}