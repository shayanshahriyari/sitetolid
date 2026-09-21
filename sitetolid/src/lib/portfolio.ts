import tex1 from "@/assets/tex-1.jpg";
import tex2 from "@/assets/tex-2.jpg";
import tex3 from "@/assets/tex-3.jpg";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  client: string;
  industry: string;
  cover: string;
  gallery: string[];
  serviceSlugs: string[];
  overview: string;
  challenge: string;
  strategy: string;
  process: { step: string; title: string; text: string }[];
  servicesProvided: string[];
  results: { value: string; label: string }[];
};

const shots = [tex1, tex2, tex3, heroImg, aboutImg];

export const projects: Project[] = [
  {
    slug: "arka-invest",
    title: "پلتفرم سرمایه‌گذاری آرکا",
    category: "طراحی سایت + محصول",
    year: "۱۴۰۴",
    metric: "+۲۴۰٪ ثبت‌نام",
    client: "گروه مالی آرکا",
    industry: "فین‌تک",
    cover: heroImg,
    gallery: [tex1, tex2, tex3],
    serviceSlugs: ["web-design", "ui-ux"],
    overview:
      "بازطراحی کامل پلتفرم سرمایه‌گذاری آرکا؛ از معماری اطلاعات تا سیستم طراحی و توسعه اختصاصی، با هدف تبدیل بازدیدکننده محتاط به کاربر فعال.",
    challenge:
      "پلتفرم قبلی پیچیده، کند و بی‌اعتماد به‌نظر می‌رسید. کاربران در مرحله احراز هویت رها می‌کردند و نرخ تکمیل ثبت‌نام زیر ۱۸٪ بود.",
    strategy:
      "شفافیت را به قلب تجربه بردیم: زبان ساده فارسی، نمایش مرحله‌به‌مرحله ریسک و بازده، و یک مسیر ثبت‌نام کوتاه‌شده با بازخورد آنی در هر گام.",
    process: [
      { step: "۰۱", title: "کشف", text: "مصاحبه با ۱۴ کاربر واقعی و تحلیل قیف ثبت‌نام." },
      { step: "۰۲", title: "معماری", text: "بازتعریف ساختار محصول و کوتاه‌سازی مسیر احراز هویت." },
      { step: "۰۳", title: "طراحی", text: "سیستم طراحی مالی با تایپوگرافی فارسی و داده‌نمایی روشن." },
      { step: "۰۴", title: "توسعه", text: "پیاده‌سازی سریع با تست کارایی و انتشار مرحله‌ای." },
    ],
    servicesProvided: ["پژوهش کاربر", "سیستم طراحی", "طراحی رابط", "توسعه فرانت‌اند", "بهینه‌سازی سرعت"],
    results: [
      { value: "+۲۴۰٪", label: "رشد ثبت‌نام" },
      { value: "۹۷", label: "امتیاز کارایی" },
      { value: "−۴۱٪", label: "کاهش ریزش قیف" },
    ],
  },
  {
    slug: "caspian-hotel",
    title: "بوتیک هتل کاسپین",
    category: "هویت بصری + وب",
    year: "۱۴۰۳",
    metric: "۳.۱× رزرو مستقیم",
    client: "بوتیک هتل کاسپین",
    industry: "مهمان‌پذیری",
    cover: tex2,
    gallery: [tex3, aboutImg, tex1],
    serviceSlugs: ["branding", "web-design"],
    overview:
      "ساخت هویت بصری و وب‌سایت رزرو مستقیم برای یک بوتیک هتل ساحلی، با روایتی آرام و سینمایی از تجربه اقامت.",
    challenge:
      "بیش از ۸۰٪ رزروها از طریق واسطه‌ها انجام می‌شد و حاشیه سود را می‌بلعید. برند حضور دیجیتال منسجمی نداشت.",
    strategy:
      "هویتی ساختیم که حس سکوت و نور دریا را منتقل می‌کند و سایت را حول یک مسیر رزرو بدون اصطکاک بازطراحی کردیم.",
    process: [
      { step: "۰۱", title: "کارگاه برند", text: "تعریف شخصیت، لحن و وعده برند." },
      { step: "۰۲", title: "هویت بصری", text: "نشانه، پالت رنگ، تایپوگرافی و سبک عکاسی." },
      { step: "۰۳", title: "تجربه رزرو", text: "طراحی مسیر رزرو سه‌مرحله‌ای." },
      { step: "۰۴", title: "انتشار", text: "پیاده‌سازی، اتصال موتور رزرو و آموزش تیم." },
    ],
    servicesProvided: ["استراتژی برند", "هویت بصری", "هنر کارگردانی عکاسی", "طراحی و توسعه وب"],
    results: [
      { value: "۳.۱×", label: "رزرو مستقیم" },
      { value: "−۲۸٪", label: "کاهش وابستگی به واسطه" },
      { value: "+۶۵٪", label: "مدت ماندگاری در سایت" },
    ],
  },
  {
    slug: "reveya-store",
    title: "فروشگاه لوکس رِویا",
    category: "تجارت الکترونیک",
    year: "۱۴۰۳",
    metric: "+۱۸۰٪ فروش",
    client: "رِویا",
    industry: "خرده‌فروشی لوکس",
    cover: tex1,
    gallery: [tex2, heroImg, tex3],
    serviceSlugs: ["web-design", "digital-marketing"],
    overview:
      "طراحی و توسعه فروشگاه آنلاین لوکس با تمرکز بر کیفیت تصویر، سرعت و مسیر خرید کوتاه.",
    challenge: "تجربه خرید موبایل کند و شلوغ بود و سبد خرید رهاشده به ۷۴٪ می‌رسید.",
    strategy:
      "صفحه محصول را به یک ویترین سینمایی تبدیل کردیم و پرداخت را به دو مرحله رساندیم؛ سپس کمپین‌های بازگشت سبد خرید را اجرا کردیم.",
    process: [
      { step: "۰۱", title: "ممیزی", text: "تحلیل رفتار خرید و نقاط ریزش." },
      { step: "۰۲", title: "طراحی", text: "ویترین محصول، فیلترهای هوشمند و پرداخت کوتاه." },
      { step: "۰۳", title: "توسعه", text: "پیاده‌سازی سریع با بهینه‌سازی تصاویر." },
      { step: "۰۴", title: "رشد", text: "اتوماسیون بازاریابی و کمپین‌های بازگشت." },
    ],
    servicesProvided: ["تجربه خرید", "توسعه فروشگاه", "بهینه‌سازی تصویر", "اتوماسیون بازاریابی"],
    results: [
      { value: "+۱۸۰٪", label: "رشد فروش" },
      { value: "−۳۳٪", label: "کاهش سبد رهاشده" },
      { value: "۱.۱s", label: "زمان بارگذاری موبایل" },
    ],
  },
  {
    slug: "mana-clinic",
    title: "کلینیک زیبایی مانا",
    category: "سئو + کمپین",
    year: "۱۴۰۴",
    metric: "صفحه اول ۴۲ کلمه",
    client: "کلینیک مانا",
    industry: "سلامت و زیبایی",
    cover: tex3,
    gallery: [aboutImg, tex1, tex2],
    serviceSlugs: ["seo", "digital-marketing"],
    overview:
      "برنامه رشد ارگانیک یک‌ساله همراه با کمپین‌های هدفمند برای جذب مراجعه‌کننده واقعی، نه کلیک بی‌کیفیت.",
    challenge: "رقابت سنگین محلی و محتوای ضعیف باعث شده بود سایت در نتایج جست‌وجو دیده نشود.",
    strategy:
      "خوشه‌های محتوایی تخصصی ساختیم، ساختار فنی سایت را اصلاح کردیم و صفحات خدمات را برای جست‌وجوی محلی بهینه کردیم.",
    process: [
      { step: "۰۱", title: "ممیزی فنی", text: "رفع خطاهای خزش و سرعت." },
      { step: "۰۲", title: "نقشه محتوا", text: "۶۰ عنوان بر اساس نیت جست‌وجو." },
      { step: "۰۳", title: "تولید", text: "محتوای تخصصی با بازبینی پزشکی." },
      { step: "۰۴", title: "تقویت", text: "لینک‌سازی معتبر و سئو محلی." },
    ],
    servicesProvided: ["ممیزی فنی سئو", "استراتژی محتوا", "سئو محلی", "کمپین جذب"],
    results: [
      { value: "۴۲", label: "کلمه در صفحه اول" },
      { value: "+۳۱۰٪", label: "ترافیک ارگانیک" },
      { value: "×۲.۶", label: "سرنخ ورودی" },
    ],
  },
  {
    slug: "nova-architects",
    title: "استودیو معماری نُوا",
    category: "پرتفولیو سینمایی",
    year: "۱۴۰۲",
    metric: "۹۹ امتیاز کارایی",
    client: "استودیو نُوا",
    industry: "معماری",
    cover: aboutImg,
    gallery: [heroImg, tex3, tex2],
    serviceSlugs: ["web-design", "ui-ux"],
    overview:
      "یک پرتفولیوی سینمایی که پروژه‌های معماری را مثل یک فیلم کوتاه روایت می‌کند؛ سبک، سریع و بی‌صدا.",
    challenge: "تصاویر سنگین و گالری‌های قدیمی، تجربه‌ای کند و بی‌روح ساخته بودند.",
    strategy:
      "روایت اسکرول‌محور با تصاویر بهینه، حرکت آرام و تایپوگرافی فارسی درشت؛ بدون هیچ کتابخانه سنگین انیمیشن.",
    process: [
      { step: "۰۱", title: "روایت", text: "تعریف قصه هر پروژه و ترتیب صحنه‌ها." },
      { step: "۰۲", title: "طراحی", text: "چیدمان سینمایی و ریتم اسکرول." },
      { step: "۰۳", title: "بهینه‌سازی", text: "فشرده‌سازی تصویر و بارگذاری تنبل." },
      { step: "۰۴", title: "انتشار", text: "استقرار روی زیرساخت لبه." },
    ],
    servicesProvided: ["هنر کارگردانی", "طراحی تجربه", "توسعه فرانت‌اند", "بودجه کارایی"],
    results: [
      { value: "۹۹", label: "امتیاز کارایی" },
      { value: "+۸۰٪", label: "زمان مشاهده پروژه‌ها" },
      { value: "۰.۹s", label: "نمایش محتوای اصلی" },
    ],
  },
  {
    slug: "homa-finance",
    title: "اپلیکیشن مالی هما",
    category: "رابط کاربری",
    year: "۱۴۰۴",
    metric: "۴.۸ امتیاز کاربران",
    client: "هما",
    industry: "بانکداری دیجیتال",
    cover: tex2,
    gallery: [tex1, aboutImg, heroImg],
    serviceSlugs: ["ui-ux", "branding"],
    overview:
      "طراحی سیستم رابط کاربری اپلیکیشن مالی هما با تمرکز بر وضوح داده و آرامش بصری.",
    challenge: "کاربران در انبوه اعداد گم می‌شدند و پشتیبانی پر از سؤالات تکراری بود.",
    strategy:
      "سلسله‌مراتب اطلاعات را بازنویسی کردیم، داده‌نمایی ساده ساختیم و یک سیستم طراحی ۱۲۰ کامپوننتی تحویل دادیم.",
    process: [
      { step: "۰۱", title: "پژوهش", text: "تحلیل تیکت‌های پشتیبانی و تست کاربری." },
      { step: "۰۲", title: "ساختار", text: "بازطراحی داشبورد و جریان تراکنش." },
      { step: "۰۳", title: "سیستم", text: "ساخت کتابخانه کامپوننت و توکن‌ها." },
      { step: "۰۴", title: "تست", text: "پروتوتایپ تعاملی و دو دور تست کاربر." },
    ],
    servicesProvided: ["پژوهش کاربر", "سیستم طراحی", "داده‌نمایی", "پروتوتایپ تعاملی"],
    results: [
      { value: "۴.۸/۵", label: "رضایت کاربران" },
      { value: "−۳۵٪", label: "کاهش تیکت پشتیبانی" },
      { value: "۱۲۰+", label: "کامپوننت سیستم طراحی" },
    ],
  },
];

export const projectCategories = [
  "همه",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsForService(serviceSlug: string) {
  const matched = projects.filter((p) => p.serviceSlugs.includes(serviceSlug));
  return matched.length ? matched.slice(0, 3) : projects.slice(0, 3);
}

export const projectShots = shots;
