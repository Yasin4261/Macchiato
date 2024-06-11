const express = require("express");
const app = express();

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./services/connect");
const sellProduct = require("./routes/sellProduct");
const userController = require("./controllers/userController");

// Load environment variables from .env file
dotenv.config();

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Use Helmet for security headers
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "trusted-cdn.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: true
        }
    })
); // İçerik Güvenlik Politikası (CSP)

app.use(helmet.dnsPrefetchControl()); // DNS Ön Bulma Kontrolü
app.use(helmet.expectCt()); // Expect-CT
app.use(helmet.frameguard()); // Frameguard
app.use(helmet.hidePoweredBy()); // Powered-By başlığını gizle
app.use(helmet.hsts()); // Strict-Transport-Security (HSTS)
app.use(helmet.ieNoOpen()); // IE Açmama
app.use(helmet.noSniff()); // X-Content-Type-Options: nosniff
app.use(helmet.permittedCrossDomainPolicies()); // İzin Verilen Çapraz Domain Politikaları
app.use(helmet.referrerPolicy()); // Referrer-Policy
app.use(helmet.xssFilter()); // XSS filtresi

app.use(morgan("common"));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:8800",
        credentials: true
    })
);

app.use("/api/auth", userController);
app.use("/api/buy", sellProduct);

app.listen(8800, () => {
    console.log("API started!");
});


//   Kaldığın yerden devam etmek için oku
// veritabanında user max 6 order verebilirdi 
// ama artık onu kaldırdın tekrar düzeltmelisin, 
// 6 kahvede 1 ücretsiz kahve hakkı birikmeli