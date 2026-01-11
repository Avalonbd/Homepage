/*
 * Avalon Security Services - Main Script
 * Handles navigation, theming, translations, and animations.
 */

/* ---------- Internationalization (i18n) ---------- */
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            whyUs: "Why Us",
            clients: "Clients",
            leadership: "Leadership",
            pricing: "Pricing",
            contact: "Contact Us"
        },
        hero: {
            titleSub: "Services Limited",
            tagline: "\"Assurance Beyond Protection\"",
            description: "Your steadfast guardian in Bangladesh, providing tailored security solutions to protect what matters most.",
            btnPrimary: "Get Protected Today",
            btnSecondary: "Our Services",
            statClients: "Satisfied Clients",
            statService: "Dedicated Service",
            statExp: "Years Experience",
            scroll: "Scroll Down"
        },
        about: {
            tag: "Who We Are",
            title: "About Us",
            text1: "Avalon Security Services Limited is your <strong>steadfast guardian</strong> in Bangladesh. Our dedicated team, armed with advanced tools, provides tailored security solutions to protect what matters most.",
            text2: "From homes to businesses, events to corporations, we are your unwavering shield, ensuring safety and peace of mind. We are a licensed limited company registered with the Government of Bangladesh, consistently updating our documents to ensure optimal operations and uphold our high standards of quality.",
            feat1Title: "Licensed & Registered",
            feat1Desc: "Government certified security provider",
            feat2Title: "Military-Grade Training",
            feat2Desc: "Guards trained to the highest standards",
            feat3Title: "Quality Assured",
            feat3Desc: "Innovative customer-focused approach",
            mainImgOverlay: "Excellence in Training"
        },
        services: {
            tag: "What We Offer",
            title: "Our Services & Training",
            desc: "We provide cutting-edge technology to provide security and support to our clients. Our emphasis on quality combined with an innovative and customer-focused approach differentiates us from other organizations.",
            card1Title: "Security Guards",
            card1Desc: "Highly trained professional security personnel for residential, commercial, and industrial protection.",
            card2Title: "CCTV & Surveillance",
            card2Desc: "State-of-the-art surveillance systems with trained operators for 24/7 monitoring.",
            card3Title: "Armed Response",
            card3Desc: "Licensed armed security personnel for high-risk environments requiring extra protection.",
            card4Title: "Event Security",
            card4Desc: "Comprehensive security solutions for corporate events, exhibitions, and public gatherings.",
            card5Title: "Fire Safety",
            card5Desc: "Fire prevention equipment and trained personnel to protect your premises.",
            card6Title: "Access Control",
            card6Desc: "Metal detectors, scanners, and reception management for secure entry points."
        },
        whyUs: {
            tag: "Our Advantages",
            title: "Why Choose Us",
            card1Title: "Expertise & Experience",
            card1Desc: "Our team brings years of experience and in-depth knowledge to every project. With a strong military background in leadership, operations, and emergency response.",
            card2Title: "Innovative Approach",
            card2Desc: "We prioritize quality in everything we do, from training our personnel to implementing advanced technology that keeps you ahead of security threats.",
            card3Title: "Superior Armed Response",
            card3Desc: "We work closely with you to understand your unique needs and deliver tailored solutions with rapid response capabilities.",
            card4Title: "24/7 Dedicated Personnel",
            card4Desc: "Avalon Security provides peace of mind, enabling clients to focus on their business objectives rather than security concerns.",
            quote: "\"A well-trained security force is the cornerstone of a safe community.\""
        },
        clients: {
            tag: "Our Portfolio",
            title: "Our Esteemed Clients",
            desc: "We are proud to serve a diverse client base, ranging from renowned corporations to residential communities across Bangladesh.",
            cat1: "Hospitals",
            cat2: "Embassies",
            cat3: "Power Plants",
            cat4: "IT Companies",
            cat5: "Educational Institutes",
            cat6: "Garments Factories",
            cat7: "Housing Societies",
            cat8: "Apartments",
            listTitle: "Some of Our Valued Clients",
            more: "And 200+ more satisfied clients continuing to rely on our services with confidence."
        },
        leadership: {
            tag: "Our Team",
            title: "Honorable Board Members",
            L1Name: "Lt Cdr Monirul Islam (retd) BN",
            L1Title: "Chairman",
            L1Desc: "A retired naval officer with extensive experience in management and security. His military background and professional skills make him a valuable asset in the field of security services.",
            L2Name: "MD Saiful Islam",
            L2Title: "Managing Director",
            L2Desc: "A retired junior commissioned naval officer with a strong background in leadership, operations, and emergency response. He has completed training at the naval academy and fire service department, equipping him with expertise in security and safety."
        },
        guardTypes: {
            tag: "Uniform Options",
            title: "Choose Guard Dress According to Your Needs",
            card1Title: "Corporate Guard",
            card1Desc: "Professional attire for corporate environments",
            card2Title: "Millennium Guard",
            card2Desc: "Modern uniform for contemporary settings",
            card3Title: "Standard Guard",
            card3Desc: "Classic uniform for general security",
            card4Title: "General Guard",
            card4Desc: "Versatile uniform for various environments"
        },
        pricing: {
            tag: "Our Rates",
            title: "Choose Your Plan",
            desc: "We designed our pricing to be available for small, mid, and large enterprise environments. Contact us for custom packages.",
            thService: "Service Type",
            thHours: "Hours",
            thRate: "Monthly Rate (BDT)",
            note1Title: "📋 Guard Qualifications",
            note1Li1: "<strong>Education:</strong> JSC, SSC, HSC",
            note1Li2: "<strong>Age:</strong> 22-45 years",
            note1Li3: "<strong>Experience:</strong> 3 months and above",
            note1Li4: "<strong>Height:</strong> 5'5\" and above",
            note1Li5: "<strong>Training:</strong> Minimum two weeks",
            note2Title: "💰 Additional Benefits",
            note2Li1: "Two Eid festival bonuses (50% of monthly salary each)",
            note2Li2: "One month salary advance before deployment",
            note2Li3: "Custom packages available upon request",
            note2Li4: "Flexible contract terms"
        },
        contact: {
            tag: "Get In Touch",
            title: "Contact Us",
            desc: "We're here to answer your questions and provide security solutions tailored to your needs.",
            lblAddress: "Address",
            valAddress: "137/2A Ibrahimpur, Kafrul, Mirpur 14,<br>Dhaka Cantonment-1206",
            lblPhone: "Phone",
            lblEmail: "Email",
            formName: "Full Name",
            formEmail: "Email Address",
            formPhone: "Phone Number",
            formService: "Service Interested In",
            optSelect: "Select a Service",
            optGuard: "Security Guard",
            optCCTV: "CCTV & Surveillance",
            optArmed: "Armed Response",
            optEvent: "Event Security",
            optFire: "Fire Safety",
            optOther: "Other",
            formMessage: "Message",
            formBtn: "Send Message"
        },
        footer: {
            slogan: "The future of security lies in the fusion of human ingenuity and technological advancements.",
            quickLinks: "Quick Links",
            ourServices: "Our Services",
            contactInfo: "Contact Info",
            rights: "&copy; 2026 Avalon Security Services Limited. All Rights Reserved.",
            printBtn: "Print as Company Profile"
        }
    },
    bn: {
        nav: {
            home: "মূলপাতা",
            about: "আমাদের সম্পর্কে",
            services: "সেবা সমূহ",
            whyUs: "আমাদের বিশেষত্ব",
            clients: "গ্রাহকবৃন্দ",
            leadership: "পরিচালনা পর্ষদ",
            pricing: "মূল্য তালিকা",
            contact: "যোগাযোগ"
        },
        hero: {
            titleSub: "সার্ভিসেস লিমিটেড",
            tagline: "\"সম্পূর্ণ নিরাপত্তার বিশ্বস্ত প্রতিশ্রুতি\"",
            description: "বাংলাদেশে আপনার বিশ্বস্ত অভিভাবক, আপনার মূল্যবান সম্পদ রক্ষায় আমরা প্রদান করি সুনিপুণ নিরাপত্তা সমাধান।",
            btnPrimary: "নিরাপত্তা নিশ্চিত করুন",
            btnSecondary: "আমাদের সেবাসমূহ",
            statClients: "সন্তুষ্ট গ্রাহক",
            statService: "নিবেদিত সেবা",
            statExp: "বছরের অভিজ্ঞতা",
            scroll: "নিচে দেখুন"
        },
        about: {
            tag: "আমাদের পরিচয়",
            title: "আমাদের সম্পর্কে",
            text1: "অ্যাভালন সিকিউরিটি সার্ভিসেস লিমিটেড বাংলাদেশে আপনার <strong>বিশ্বস্ত অভিভাবক</strong>। আমাদের নিবেদিত দল এবং আধুনিক সরঞ্জামাদির সমন্বয়ে আমরা প্রদান করি আপনার সুরক্ষার সম্পূর্ণ নিশ্চয়তা।",
            text2: "বাসাবাড়ি থেকে ব্যবসা প্রতিষ্ঠান, করপোরেট অফিস বা যেকোনো অনুষ্ঠান—আমরা সর্বদা আপনার নিরাপত্তায় নিয়োজিত। আমরা বাংলাদেশ সরকার কর্তৃক অনুমোদিত একটি নিবন্ধিত লিমিটেড কোম্পানি এবং সেবার মান অক্ষুণ্ণ রাখতে আমরা সর্বদা আমাদের নথিপত্র হালনাগাদ রাখি।",
            feat1Title: "নিবন্ধিত ও লাইসেন্সপ্রাপ্ত",
            feat1Desc: "সরকারি অনুমোদনপ্রাপ্ত নিরাপত্তা প্রতিষ্ঠান",
            feat2Title: "মিলিটারি-গ্রেড প্রশিক্ষণ",
            feat2Desc: "সামরিক কায়দায় প্রশিক্ষিত রক্ষী বাহিনী",
            feat3Title: "মানসম্মত সেবা",
            feat3Desc: "গ্রাহক সন্তুষ্টিই আমাদের প্রধান লক্ষ্য",
            mainImgOverlay: "উন্নত প্রশিক্ষণ ব্যবস্থা"
        },
        services: {
            tag: "আমাদের সেবা",
            title: "সেবা ও প্রশিক্ষণ",
            desc: "আমরা আধুনিক প্রযুক্তির সমন্বয়ে আমাদের গ্রাহকদের নিরাপত্তা ও সহায়তা প্রদান করি। গুণগত মান এবং উদ্ভাবনী গ্রাহকসেবার প্রতি আমাদের বিশেষ গুরুত্ব আমাদের অন্যান্য প্রতিষ্ঠানের চেয়ে আলাদা করে তোলে।",
            card1Title: "নিরাপত্তা রক্ষী",
            card1Desc: "আবাসিক, বাণিজ্যিক এবং শিল্প এলাকার নিরাপত্তার জন্য উচ্চ প্রশিক্ষণপ্রাপ্ত পেশাদার নিরাপত্তা কর্মী।",
            card2Title: "সিসিটিভি ও নজরদারি",
            card2Desc: "২৪/৭ মনিটরিংয়ের জন্য প্রশিক্ষিত অপারেটর সহ অত্যাধুনিক নজরদারি ব্যবস্থা।",
            card3Title: "আর্মড ফোর্স",
            card3Desc: "উচ্চ ঝুঁকি পূর্ণ স্থানের নিরাপত্তার জন্য লাইসেন্সধারী সশস্ত্র নিরাপত্তা কর্মী।",
            card4Title: "ইভেন্ট সিকিউরিটি",
            card4Desc: "কর্পোরেট অনুষ্ঠান, প্রদর্শনী এবং জনসমাগমের জন্য সম্পূর্ণ নিরাপত্তা সমাধান।",
            card5Title: "অগ্নি নিরাপত্তা",
            card5Desc: "আপনার প্রতিষ্ঠান সুরক্ষায় অগ্নি নির্বাপক সরঞ্জাম এবং প্রশিক্ষিত কর্মী।",
            card6Title: "অ্যাক্সেস কন্ট্রোল",
            card6Desc: "নিরাপদ প্রবেশ নিশ্চিত করতে মেটাল ডিটেক্টর, স্ক্যানার এবং অভ্যর্থনা ব্যবস্থাপনা।"
        },
        whyUs: {
            tag: "কেন আমরা",
            title: "কেন আমাদের বেছে নেবেন",
            card1Title: "অভিজ্ঞতা ও দক্ষতা",
            card1Desc: "প্রতিটি প্রকল্পে আমাদের দল নিয়ে আসে দীর্ঘ বছরের অভিজ্ঞতা। নেতৃত্ব, অপারেশন এবং জরুরি সাড়াদানে আমাদের রয়েছে শক্তিশালী সামরিক ব্যাকগ্রাউন্ড।",
            card2Title: "উদ্ভাবনী পদ্ধতি",
            card2Desc: "আমরা আমাদের প্রতিটি কাজে গুণগত মান বজায় রাখি, কর্মীদের প্রশিক্ষণ থেকে শুরু করে আধুনিক প্রযুক্তির ব্যবহার—সবকিছুতেই আমরা আপসহীন।",
            card3Title: "শ্রেষ্ঠ আর্মড রেসপন্স",
            card3Desc: "আমরা আপনার প্রয়োজন বুঝে দ্রুত সাড়াদানের ক্ষমতা সম্পন্ন বিশেষ নিরাপত্তা সমাধান প্রদান করি।",
            card4Title: "২৪/৭ নিবেদিত কর্মী",
            card4Desc: "অ্যাভালন সিকিউরিটি আপনাকে দেয় মানসিক প্রশান্তি, যেন আপনি নিরাপত্তার চিন্তা ভুলে নিজের ব্যবসায় মনোনিবেশ করতে পারেন।",
            quote: "\"একটি সুপ্রশিক্ষিত নিরাপত্তা বাহিনীই নিরাপদ সমাজের ভিত্তি।\""
        },
        clients: {
            tag: "আমাদের পোর্টফোলিও",
            title: "আমাদের সম্মানিত গ্রাহকবৃন্দ",
            desc: "আমরা গর্বের সাথে বাংলাদেশের স্বনামধন্য কর্পোরেশন থেকে শুরু করে আবাসিক কমিউনিটি পর্যন্ত বিভিন্ন শ্রেণীর গ্রাহকদের সেবা প্রদান করছি।",
            cat1: "হাসপাতাল",
            cat2: "দূতাবাস",
            cat3: "পাওয়ার প্ল্যান্ট",
            cat4: "আইটি কোম্পানি",
            cat5: "শিক্ষা প্রতিষ্ঠান",
            cat6: "গার্মেন্টস ফ্যাক্টরি",
            cat7: "হাউজিং সোসাইটি",
            cat8: "অ্যাপার্টমেন্ট",
            listTitle: "আমাদের কিছু মূল্যবান গ্রাহক",
            more: "এবং ২০০+ এর বেশি সন্তুষ্ট গ্রাহক যারা আমাদের সেবার ওপর আস্থাশীল।"
        },
        leadership: {
            tag: "আমাদের দল",
            title: "পরিচালনা পর্ষদ",
            L1Name: "লেঃ কমান্ডার মনিরুল ইসলাম (অবঃ) বিএন",
            L1Title: "চেয়ারম্যান",
            L1Desc: "ব্যবস্থাপনা ও নিরাপত্তায় দীর্ঘ অভিজ্ঞতাসম্পন্ন একজন অবসরপ্রাপ্ত নৌবাহিনী কর্মকর্তা। তাঁর সামরিক পটভূমি এবং পেশাদার দক্ষতা নিরাপত্তা সেবার ক্ষেত্রে তাকে এক অনন্য উচ্চতায় নিয়ে গেছে।",
            L2Name: "মোঃ সাইফুল ইসলাম",
            L2Title: "ব্যবস্থাপনা পরিচালক",
            L2Desc: "নেতৃত্ব ও জরুরি সাড়াদানে দক্ষ একজন অবসরপ্রাপ্ত জুনিয়র কমিশনড নেভাল অফিসার। নেভাল একাডেমি ও ফায়ার সার্ভিস থেকে প্রশিক্ষণপ্রাপ্ত হয়ে তিনি নিরাপত্তা ও সুরক্ষা নিশ্চিতকরণে বিশেষ পারদর্শী।"
        },
        guardTypes: {
            tag: "ইউনিফর্ম অপশন",
            title: "প্রয়োজন অনুযায়ী গার্ডের পোশাক নির্বাচন করুন",
            card1Title: "কর্পোরেট গার্ড",
            card1Desc: "কর্পোরেট পরিবেশের জন্য পেশাদার পোশাক",
            card2Title: "মিলেনিয়াম গার্ড",
            card2Desc: "আধুনিক প্রতিষ্ঠানের জন্য সমসাময়িক ইউনিফর্ম",
            card3Title: "স্ট্যান্ডার্ড গার্ড",
            card3Desc: "সাধারণ নিরাপত্তার জন্য ক্লাসিক ইউনিফর্ম",
            card4Title: "জেনারেল গার্ড",
            card4Desc: "বিভিন্ন পরিবেশের জন্য মানানসই ইউনিফর্ম"
        },
        pricing: {
            tag: "আমাদের রেট",
            title: "আপনার প্ল্যান নির্বাচন করুন",
            desc: "ছোট, মাঝারি এবং বড় প্রতিষ্ঠানের জন্য আমাদের রয়েছে ভিন্ন ভিন্ন প্যাকেজ। কাস্টম প্যাকেজের জন্য যোগাযোগ করুন।",
            thService: "সেবার ধরণ",
            thHours: "কর্মঘণ্টা",
            thRate: "মাসিক রেট (টাকা)",
            note1Title: "📋 গার্ড যোগ্যতা",
            note1Li1: "<strong>শিক্ষাগত যোগ্যতা:</strong> জেএসসি, এসএসসি, এইচএসসি",
            note1Li2: "<strong>বয়স:</strong> ২২-৪৫ বছর",
            note1Li3: "<strong>অভিজ্ঞতা:</strong> ৩ মাস বা তদূর্ধ",
            note1Li4: "<strong>উচ্চতা:</strong> ৫'৫\" বা তদূর্ধ",
            note1Li5: "<strong>প্রশিক্ষণ:</strong> ন্যূনতম দুই সপ্তাহ",
            note2Title: "💰 অতিরিক্ত সুবিধাদি",
            note2Li1: "দুটি ঈদ উৎসব বোনাস (প্রতিটি মূল বেতনের ৫০%)",
            note2Li2: "ডিউটিতে যোগদানের পূর্বে এক মাসের বেতন অগ্রিম",
            note2Li3: "চাহিদা অনুযায়ী কাস্টম প্যাকেজের সুবিধা",
            note2Li4: "নমনীয় চুক্তির শর্তাবলী"
        },
        contact: {
            tag: "যোগাযোগ",
            title: "যোগাযোগ করুন",
            desc: "আপনার প্রশ্নের উত্তর দিতে এবং আপনার প্রয়োজন অনুযায়ী নিরাপত্তা সমাধান দিতে আমরা প্রস্তুত।",
            lblAddress: "ঠিকানা",
            valAddress: "১৩৭/২এ ইব্রাহিমপুর, কাফরুল, মিরপুর ১৪,<br>ঢাকা ক্যান্টনমেন্ট-১২০৬",
            lblPhone: "ফোন",
            lblEmail: "ইমেইল",
            formName: "আপনার নাম",
            formEmail: "ইমেইল অ্যাড্রেস",
            formPhone: "ফোন নম্বর",
            formService: "পছন্দনীয় সেবা",
            optSelect: "সেবা নির্বাচন করুন",
            optGuard: "নিরাপত্তা রক্ষী",
            optCCTV: "সিসিটিভি ও নজরদারি",
            optArmed: "আর্মড ফোর্স",
            optEvent: "ইভেন্ট সিকিউরিটি",
            optFire: "অগ্নি নিরাপত্তা",
            optOther: "অন্যান্য",
            formMessage: "আপনার বার্তা",
            formBtn: "বার্তা পাঠান"
        },
        footer: {
            slogan: "মানব মেধা এবং প্রযুক্তিগত অগ্রগতির সংমিশ্রণেই নিহিত নিরাপত্তার ভবিষ্যৎ।",
            quickLinks: "লিঙ্কসমূহ",
            ourServices: "আমাদের সেবা",
            contactInfo: "যোগাযোগ তথ্য",
            rights: "&copy; ২০২৬ অ্যাভালন সিকিউরিটি সার্ভিসেস লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
            printBtn: "কোম্পানি প্রোফাইল প্রিন্ট করুন"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLanguageToggle();
    initNavigation();
    initCounters();
    initScrollAnimations();
});

/* ---------- Theme Toggle (Light/Dark) ---------- */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check local storage or system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.body.classList.add('dark-theme');
    } else if (currentTheme == 'light') {
        document.body.classList.remove('dark-theme');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }
}

/* ---------- Language Toggle Logic ---------- */
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');

        let content = translations[lang];
        keys.forEach(k => {
            if (content) content = content[k];
        });

        if (content) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = content;
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = content;
            } else {
                element.innerHTML = content;
            }
        }
    });

    // Update Toggle Button Text
    const langText = document.getElementById('currentLang');
    if (langText) {
        langText.textContent = lang === 'en' ? 'EN' : 'BN';
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');

    // Check local storage or default to English
    let currentLang = localStorage.getItem('site-lang') || 'en';

    // Apply initial language
    updateContent(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'bn' : 'en';
            localStorage.setItem('site-lang', currentLang);
            updateContent(currentLang);
        });
    }
}

/* ---------- Navigation & UI ---------- */
function initNavigation() {
    // Sticky Header
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ---------- Counter Animation ---------- */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger on scroll intersection
    const counterSection = document.querySelector('.hero-stats');
    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.unobserve(counterSection);
            }
        });
        observer.observe(counterSection);
    }
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.service-card, .why-card, .feature-item, .section-title, .about-content');
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/* ---------- Print Function Enhancement ---------- */
window.printProfile = function () {
    // Hide any notifications before printing
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(n => n.remove());

    // Add print class for any last-minute adjustments
    document.body.classList.add('printing');

    // Trigger print
    window.print();

    // Remove print class after printing
    setTimeout(() => {
        document.body.classList.remove('printing');
    }, 1000);
};

/* ---------- Contact Form Handling (Mock) ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you would verify inputs and send data here
        alert('Thank you for your message! We will contact you shortly.');
        contactForm.reset();
    });
}
