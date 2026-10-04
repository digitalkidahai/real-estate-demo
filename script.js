/* ============================================================
   COASTLINE HOMES — site logic
   Replace PROJECTS / FAQS / BLOG_POSTS data with real content.
   Replace PHONE / WA_NUMBER with the real business numbers.
   ============================================================ */

const PHONE = "+919876543210";
const WA_NUMBER = "919876543210";

const PROJECTS = [
  {
    id: "aurum-heights", name: "Aurum Heights", locality: "Andheri West", station: "12 min from Andheri Station",
    config: "2 & 3 BHK", area: "685 – 1,140 sq.ft carpet", price: "₹1.85 Cr – ₹3.40 Cr", priceShort: "₹1.85 Cr onwards",
    possession: "Dec 2027", rera: "P51800012345", heights: [70,120,90,150,60,100],
    bhkOptions: [2,3], priceMinL: 185, priceMaxL: 340,
    description: "Aurum Heights sits in the heart of Andheri West, a short walk from Lokhandwala Market. Designed for families upgrading their lifestyle, the tower offers wide decks, a double-height lobby and homes planned around natural light.",
    highlights: ["12 minutes from Andheri Station on foot","Close to Lokhandwala Market & D N Nagar Metro","Reputed schools within 2 km","5-level basement parking"],
    amenities: ["Infinity pool & deck","Double-height clubhouse","Play area for children","Co-working lounge","Landscaped gardens","24x7 security & CCTV","Gymnasium","Multipurpose court"],
    tiers: [["2 BHK","685 sq.ft","₹1.85 Cr"],["2.5 BHK","865 sq.ft","₹2.42 Cr"],["3 BHK","1,140 sq.ft","₹3.40 Cr"]]
  },
  {
    id: "palm-court", name: "Palm Court Residences", locality: "Borivali West", station: "8 min from Borivali Station",
    config: "1 & 2 BHK", area: "410 – 720 sq.ft carpet", price: "₹78 L – ₹1.42 Cr", priceShort: "₹78 L onwards",
    possession: "Ready to move", rera: "P51800023456", heights: [60,95,70,110,80],
    bhkOptions: [1,2], priceMinL: 78, priceMaxL: 142,
    description: "Palm Court Residences is a ready-to-move project a short rickshaw ride from Borivali Station, close to Sanjay Gandhi National Park. It suits first-time buyers who want a settled neighbourhood with schools, markets and green cover close by.",
    highlights: ["8 minutes from Borivali Station","Opposite Sanjay Gandhi National Park entrance","Ready to move — no waiting on possession","Established residential pocket with daily markets"],
    amenities: ["Rooftop garden","Indoor games room","Senior citizen sit-out","24x7 water supply","Power backup","Gated community","CCTV surveillance","Visitor parking"],
    tiers: [["1 BHK","410 sq.ft","₹78 L"],["1.5 BHK","560 sq.ft","₹1.05 Cr"],["2 BHK","720 sq.ft","₹1.42 Cr"]]
  },
  {
    id: "silver-oak", name: "Silver Oak Residency", locality: "Kandivali East", station: "10 min from Kandivali Station",
    config: "2 & 3 BHK", area: "620 – 980 sq.ft carpet", price: "₹1.35 Cr – ₹2.10 Cr", priceShort: "₹1.35 Cr onwards",
    possession: "Jun 2026", rera: "P51800034567", heights: [85,60,130,95,70,110],
    bhkOptions: [2,3], priceMinL: 135, priceMaxL: 210,
    description: "Silver Oak Residency is coming up near Thakur Village in Kandivali East, an established pocket popular with families for its schools and upcoming metro connectivity. Near-completion construction means a shorter wait to move in.",
    highlights: ["10 minutes from Kandivali Station","Near Thakur Village schools & colleges","Upcoming metro corridor nearby","Under construction — possession in 2026"],
    amenities: ["Swimming pool","Jogging track","Amphitheatre","Yoga deck","Indoor games","Play zone for children","EV charging points","24x7 security"],
    tiers: [["2 BHK","620 sq.ft","₹1.35 Cr"],["2.5 BHK","780 sq.ft","₹1.68 Cr"],["3 BHK","980 sq.ft","₹2.10 Cr"]]
  },
  {
    id: "the-meadows", name: "The Meadows", locality: "Goregaon West", station: "15 min from Goregaon Station",
    config: "2 BHK", area: "590 – 640 sq.ft carpet", price: "₹1.55 Cr – ₹1.78 Cr", priceShort: "₹1.55 Cr onwards",
    possession: "Mar 2028", rera: "P51800045678", heights: [100,70,120,85],
    bhkOptions: [2], priceMinL: 155, priceMaxL: 178,
    description: "The Meadows is a boutique, low-density project in Goregaon West, close to Film City and surrounded by green cover. It is built for buyers who want a quieter address without losing easy access to the Western Express Highway.",
    highlights: ["15 minutes from Goregaon Station","Near Film City & Aarey green belt","Low-density layout, only 4 homes per floor","Landscaped decks facing the hills"],
    amenities: ["Sky garden","Meditation deck","Clubhouse with lounge","Play area for children","Pet-friendly common areas","Rainwater harvesting","Solar-lit walkways","Covered parking"],
    tiers: [["2 BHK","590 sq.ft","₹1.55 Cr"],["2 BHK (Larger)","640 sq.ft","₹1.78 Cr"]]
  },
  {
    id: "ocean-breeze", name: "Ocean Breeze Towers", locality: "Mira Road East", station: "6 min from Mira Road Station",
    config: "1 & 2 BHK", area: "395 – 655 sq.ft carpet", price: "₹58 L – ₹95 L", priceShort: "₹58 L onwards",
    possession: "Ready to move", rera: "P51800056789", heights: [55,90,65,105,75,95],
    bhkOptions: [1,2], priceMinL: 58, priceMaxL: 95,
    description: "Ocean Breeze Towers offers some of the most accessible pricing on this list, 6 minutes from Mira Road Station. With the coastal road extension underway, this is popular with both first-time buyers and investors chasing rental yield.",
    highlights: ["6 minutes from Mira Road Station","Upcoming coastal road connectivity","Strong rental demand from young professionals","Ready to move — immediate possession"],
    amenities: ["Terrace garden","Multipurpose hall","Indoor games","Gymnasium","24x7 security","Power backup","Ample parking","Play area for children"],
    tiers: [["1 BHK","395 sq.ft","₹58 L"],["1.5 BHK","510 sq.ft","₹74 L"],["2 BHK","655 sq.ft","₹95 L"]]
  }
];

const FAQS = [
  { q: "What is a channel partner, and do I pay extra for using one?",
    a: "A channel partner is an authorised representative of the developer. We're paid a commission by the developer, not by you — the price you pay is the same as booking directly, but you get a dedicated point of contact for the whole process." },
  { q: "How much is the stamp duty and registration charge in Maharashtra?",
    a: "Stamp duty and registration charges are levied by the Maharashtra state government and are revised from time to time, so exact rates depend on when you register and the property's agreement value. We'll work out the current applicable amount for your specific booking before you sign anything — always confirm the latest rate on the official registration department website too." },
  { q: "What documents do I need to check before booking?",
    a: "At minimum: the project's RERA registration certificate, the approved building plan, title documents / 7-12 extract, the developer's commencement certificate, and the payment schedule linked to construction stage. We share and explain all of these before you pay a rupee." },
  { q: "How does the home loan process work?",
    a: "Once you shortlist a unit, we help you get pre-approved with your bank of choice, coordinate the legal and technical valuation with the developer, and track disbursement against construction milestones so your EMIs and payment schedule stay in sync." },
  { q: "Is my booking amount refundable?",
    a: "This depends on the developer's booking agreement, which we walk you through before you pay anything. In general, RERA rules require developers to be transparent about cancellation and refund terms — we make sure you read and understand this clause first." },
  { q: "What is RERA and why does it matter?",
    a: "RERA (Real Estate Regulatory Authority) requires developers to register projects, disclose timelines and escrow project funds for construction. Checking a project's RERA status on the MahaRERA portal is one of the simplest ways to protect yourself before booking." }
];

const BLOG_POSTS = [
  {
    slug: "stamp-duty-maharashtra-guide",
    title: "Stamp Duty & Registration Charges in Maharashtra: A Simple Guide",
    tag: "Buying Guide", readTime: "4 min read",
    excerpt: "A plain-language walkthrough of what stamp duty and registration actually cost, and when you pay them.",
    body: [
      "When you buy a flat in Maharashtra, you'll come across two separate government charges: stamp duty and registration charge. Both are paid at the time of registering your sale agreement, and both are calculated on whichever is higher — the agreement value or the government's ready reckoner value for that area.",
      "Stamp duty is typically the larger of the two costs and is charged as a percentage of the property value. Registration charge is usually a smaller, flat percentage or a fixed amount above a certain property value. Because state governments revise these rates periodically — and sometimes offer temporary concessions — the exact percentage that applies to your purchase can change from year to year.",
      "Our advice to every buyer: don't rely on a number you read online, including this article. Before you budget for a booking, ask your channel partner or a chartered accountant to calculate the current applicable stamp duty and registration charge for your specific agreement value, and cross-check it against the Maharashtra government's official registration department website.",
      "Beyond these two charges, keep some budget aside for GST (on under-construction properties), society formation or maintenance deposits, and legal fees — these are often overlooked in a buyer's first cost estimate."
    ]
  },
  {
    slug: "western-line-vs-central-line",
    title: "Western Line vs Central Line: Which Mumbai Suburb Fits Your Budget?",
    tag: "Area Guide", readTime: "5 min read",
    excerpt: "A broad comparison of Mumbai's two big suburban rail corridors — commute, pricing trends and lifestyle.",
    body: [
      "Mumbai's two major suburban rail corridors — Western and Central — each attract a different kind of buyer, and the right one depends far more on where you work and how you live than on which is objectively \"better\".",
      "The Western Line, running from Churchgate through Bandra, Andheri, Borivali and up to Virar, tends to command a premium closer to South Mumbai and in areas like Bandra and Andheri, with prices easing as you move towards Borivali, Kandivali and further north to Mira-Bhayandar. It's popular with buyers who work in the Bandra-Kurla Complex, Andheri's business districts, or who value proximity to the coast and newer infrastructure like the coastal road.",
      "The Central Line, running through Dadar, Kurla, Ghatkopar, Thane and beyond, is generally considered more budget-friendly per square foot in comparable suburbs, and appeals to buyers working around Powai, Thane, Navi Mumbai or the eastern business hubs.",
      "Rather than picking a \"side\" of the city on price alone, map your daily commute first — to work, to your children's school, to family — and then compare 2–3 specific localities on each line within your budget. This is exactly the kind of shortlisting we do for buyers every week; happy to run the comparison for your specific situation."
    ]
  },
  {
    slug: "rera-checklist-before-booking",
    title: "RERA Checklist: 7 Things to Verify Before You Book a Flat",
    tag: "Buyer Safety", readTime: "4 min read",
    excerpt: "Seven quick checks on the MahaRERA portal that can save you from a costly mistake.",
    body: [
      "RERA (the Real Estate Regulatory Authority) exists to protect buyers, but its protections only help you if you actually check them before booking — not after. Here are seven things worth five minutes on the MahaRERA website.",
      "1. RERA registration number: confirm it exists, is active, and matches the exact project name and developer being marketed to you.",
      "2. Approved layout: check that the sanctioned building plan matches what's shown in the brochure — floor count, tower count and open spaces included.",
      "3. Promised possession date: compare the date filed with RERA against the date your sales executive quotes verbally; these can differ.",
      "4. Carpet area definition: RERA mandates pricing be quoted on carpet area, not the older, larger \"super built-up area\" — make sure your agreement uses RERA's definition.",
      "5. Construction-linked payment schedule: your payment plan should track actual construction milestones, not arbitrary dates.",
      "6. Complaints and litigation history: the MahaRERA portal lists any complaints filed against a project or promoter — worth ten minutes of reading.",
      "7. Escrow compliance: RERA requires 70% of buyer payments to sit in a separate project-specific bank account, used only for that project's construction and land cost. This is one of RERA's strongest buyer protections — and worth asking your channel partner to confirm in writing."
    ]
  }
];

/* ============================================================
   LANGUAGE (EN / HI / MR)
   Covers navigation, key CTAs, headings, form labels and FAQ
   questions. Long-form content (descriptions, blog articles,
   FAQ answers) stays in English for this demo.
   ============================================================ */
let currentLang = "en";
let currentViewId = "home";

const I18N = {
  en: {
    nav_home:"Home", nav_projects:"Projects", nav_insights:"Insights", nav_about:"About", nav_contact:"Contact",
    btn_call:"Call Now", btn_enquire:"Enquire Now", btn_view_details:"View details", btn_read_more:"Read more",
    btn_submit:"Submit enquiry", btn_send:"Send enquiry", btn_close:"Close", btn_clear_filters:"Clear filters",
    hero_eyebrow:"Your channel partner for the Western Line",
    hero_h1:"Homes that fit the rhythm of your Mumbai commute.",
    hero_lead:"We work directly with 5 trusted developers from Andheri to Mira Road, so you get verified projects, honest pricing and one point of contact — from site visit to sale deed.",
    stat_projects:"Live projects", stat_years:"Years on this line", stat_families:"Families settled", stat_stations:"Stations covered",
    sec_projects_h:"Curated homes along the Western Line",
    sec_projects_sub:"Five live projects, hand-picked and personally verified by our team — from Andheri to Mira Road.",
    filter_search_ph:"Search by project or locality",
    filter_all_localities:"All localities", filter_any_budget:"Any budget", filter_any_config:"Any configuration",
    filter_budget1:"Under ₹1 Cr", filter_budget2:"₹1 Cr – ₹2 Cr", filter_budget3:"₹2 Cr – ₹3 Cr", filter_budget4:"Above ₹3 Cr",
    no_results:"No projects match your filters right now. Try widening your search.",
    nav_resale:"Resale", nav_rent:"Rent", browse:"Browse", tab_new:"New", tab_new_s:"Builder projects", tab_resale:"Resale", tab_resale_s:"Ready-to-move homes", tab_rent:"Rent", tab_rent_s:"Flats for rent", pill_new:"New projects", pill_resale:"Resale homes", pill_rent:"Rentals", lx_search_ph:"Search by locality or building", lx_any_bhk:"Any BHK", bud_resale:"Any budget|Under ₹50 L|₹50 L – ₹1 Cr|₹1 Cr – ₹2 Cr|Above ₹2 Cr", bud_rent:"Any monthly rent|Under ₹20,000|₹20,000 – ₹35,000|₹35,000 – ₹60,000|Above ₹60,000", lx_none_resale:"No resale homes match these filters. Try a wider budget or another locality.", lx_none_rent:"No rentals match these filters. Try a wider budget or another locality.", lx_note:"Resale and rental listings are indicative. Price, availability and terms are confirmed when you enquire.", tag_resale:"Resale", tag_rent:"For rent", stn:"Station", u_cr:"Cr", u_l:"L", u_mo:"/month", carpet:"sq.ft carpet", lx_floor:"Floor {x}", lx_dep:"Deposit {x}", lx_age:"Property age", lx_yrs:"{x} years", lx_avail:"Available", av_now:"Immediate", av_from:"From {x}", fur_f:"Fully furnished", fur_s:"Semi-furnished", fur_u:"Unfurnished", lx_enq:"Enquire", lx_looking:"I'm looking to", kind_new:"Buy a new project", kind_resale:"Buy a resale home", kind_rent:"Rent a home",
    sec_why_h:"Why buyers work with Coastline",
    why1_t:"Verified paperwork", why2_t:"No inflated pricing", why3_t:"One point of contact", why4_t:"Loan & paperwork help",
    sec_how_h:"How buying with us works",
    step1_t:"Tell us what you need", step2_t:"Visit & compare", step3_t:"Book & move in",
    sec_about_h:"15 years of homes along the coast",
    about_stat1:"Years in business", about_stat2:"Families settled", about_stat3:"Builder partnerships", about_stat4:"Western Line stations",
    sec_testi_h:"What our buyers say",
    sec_insights_h:"Insights for Western Line buyers",
    sec_faq_h:"Frequently asked questions",
    sec_contact_h:"Get in touch",
    sec_contact_sub:"Drop your details and our team calls you back within 30 minutes on working hours.",
    form_name:"Full name *", form_phone:"Phone number *", form_email:"Email", form_message:"Message",
    form_project:"Interested project", form_config:"Preferred configuration",
    modal_title:"Enquire now", modal_sub:"Share your details — we'll call you back within 30 minutes.",
    success_title:"Thanks — you're on our list!", success_msg:"Our team will call you within 30 minutes during working hours.",
    footer_quicklinks:"Quick links", footer_projects:"Projects",
    faq_q_0: FAQS[0].q, faq_q_1: FAQS[1].q, faq_q_2: FAQS[2].q, faq_q_3: FAQS[3].q, faq_q_4: FAQS[4].q, faq_q_5: FAQS[5].q
  },
  hi: {
    nav_home:"होम", nav_projects:"प्रोजेक्ट्स", nav_insights:"जानकारी", nav_about:"हमारे बारे में", nav_contact:"संपर्क करें",
    btn_call:"अभी कॉल करें", btn_enquire:"अभी पूछताछ करें", btn_view_details:"विवरण देखें", btn_read_more:"और पढ़ें",
    btn_submit:"पूछताछ भेजें", btn_send:"पूछताछ भेजें", btn_close:"बंद करें", btn_clear_filters:"फ़िल्टर हटाएं",
    hero_eyebrow:"वेस्टर्न लाइन के लिए आपका चैनल पार्टनर",
    hero_h1:"ऐसे घर जो आपकी मुंबई यात्रा की लय से मेल खाते हैं।",
    hero_lead:"हम अंधेरी से मीरा रोड तक 5 भरोसेमंद डेवलपर्स के साथ सीधे काम करते हैं, ताकि आपको सत्यापित प्रोजेक्ट, ईमानदार कीमत और साइट विज़िट से रजिस्ट्री तक एक ही संपर्क व्यक्ति मिले।",
    stat_projects:"लाइव प्रोजेक्ट्स", stat_years:"इस लाइन पर वर्ष", stat_families:"बसे हुए परिवार", stat_stations:"कवर किए गए स्टेशन",
    sec_projects_h:"वेस्टर्न लाइन के किनारे चुने हुए घर",
    sec_projects_sub:"पांच लाइव प्रोजेक्ट्स, हमारी टीम द्वारा खुद चुने और सत्यापित — अंधेरी से मीरा रोड तक।",
    filter_search_ph:"प्रोजेक्ट या इलाके से खोजें",
    filter_all_localities:"सभी लोकेशन", filter_any_budget:"कोई भी बजट", filter_any_config:"कोई भी कॉन्फ़िगरेशन",
    filter_budget1:"₹1 करोड़ से कम", filter_budget2:"₹1 – ₹2 करोड़", filter_budget3:"₹2 – ₹3 करोड़", filter_budget4:"₹3 करोड़ से ऊपर",
    no_results:"फ़िलहाल आपके फ़िल्टर से कोई प्रोजेक्ट मेल नहीं खाता। खोज को थोड़ा बढ़ाएं।",
    nav_resale:"रीसेल", nav_rent:"किराया", browse:"देखें", tab_new:"नए", tab_new_s:"बिल्डर प्रोजेक्ट्स", tab_resale:"रीसेल", tab_resale_s:"तुरंत रहने लायक घर", tab_rent:"किराया", tab_rent_s:"किराए के फ्लैट", pill_new:"नए प्रोजेक्ट्स", pill_resale:"रीसेल घर", pill_rent:"किराये के घर", lx_search_ph:"इलाके या बिल्डिंग से खोजें", lx_any_bhk:"कोई भी BHK", bud_resale:"कोई भी बजट|₹50 लाख से कम|₹50 लाख – ₹1 करोड़|₹1 – ₹2 करोड़|₹2 करोड़ से ऊपर", bud_rent:"कोई भी किराया|₹20,000 से कम|₹20,000 – ₹35,000|₹35,000 – ₹60,000|₹60,000 से ऊपर", lx_none_resale:"इन फ़िल्टर से कोई रीसेल घर मेल नहीं खाता। बजट बढ़ाएं या दूसरा इलाका चुनें।", lx_none_rent:"इन फ़िल्टर से कोई किराये का घर मेल नहीं खाता। बजट बढ़ाएं या दूसरा इलाका चुनें।", lx_note:"रीसेल और किराये की लिस्टिंग सांकेतिक हैं। कीमत, उपलब्धता और शर्तें पूछताछ पर पक्की की जाती हैं।", tag_resale:"रीसेल", tag_rent:"किराए पर", stn:"स्टेशन", u_cr:"करोड़", u_l:"लाख", u_mo:"/माह", carpet:"वर्ग फ़ीट कारपेट", lx_floor:"मंज़िल {x}", lx_dep:"डिपॉज़िट {x}", lx_age:"प्रॉपर्टी की उम्र", lx_yrs:"{x} साल", lx_avail:"उपलब्ध", av_now:"तुरंत", av_from:"{x} से", fur_f:"पूरी तरह फ़र्निश्ड", fur_s:"सेमी-फ़र्निश्ड", fur_u:"बिना फ़र्नीचर", lx_enq:"पूछताछ", lx_looking:"मेरी ज़रूरत", kind_new:"नया प्रोजेक्ट खरीदना", kind_resale:"रीसेल घर खरीदना", kind_rent:"किराये पर घर लेना",
    sec_why_h:"खरीदार Coastline के साथ क्यों काम करते हैं",
    why1_t:"सत्यापित कागज़ी कार्रवाई", why2_t:"कोई बढ़ी हुई कीमत नहीं", why3_t:"एक ही संपर्क व्यक्ति", why4_t:"लोन और कागज़ी कार्रवाई में मदद",
    sec_how_h:"हमारे साथ खरीदारी कैसे होती है",
    step1_t:"हमें अपनी ज़रूरत बताएं", step2_t:"विज़िट करें और तुलना करें", step3_t:"बुक करें और शिफ्ट हों",
    sec_about_h:"तट के किनारे 15 साल के घर",
    about_stat1:"व्यवसाय में वर्ष", about_stat2:"बसे हुए परिवार", about_stat3:"बिल्डर पार्टनरशिप", about_stat4:"वेस्टर्न लाइन स्टेशन",
    sec_testi_h:"हमारे खरीदार क्या कहते हैं",
    sec_insights_h:"वेस्टर्न लाइन खरीदारों के लिए जानकारी",
    sec_faq_h:"अक्सर पूछे जाने वाले सवाल",
    sec_contact_h:"संपर्क करें",
    sec_contact_sub:"अपनी जानकारी दें, हमारी टीम कार्य समय में 30 मिनट में आपको कॉल करेगी।",
    form_name:"पूरा नाम *", form_phone:"फ़ोन नंबर *", form_email:"ईमेल", form_message:"संदेश",
    form_project:"रुचि का प्रोजेक्ट", form_config:"पसंदीदा कॉन्फ़िगरेशन",
    modal_title:"अभी पूछताछ करें", modal_sub:"अपनी जानकारी साझा करें — हम 30 मिनट में आपको वापस कॉल करेंगे।",
    success_title:"धन्यवाद — आप हमारी सूची में हैं!", success_msg:"हमारी टीम कार्य समय में 30 मिनट के भीतर आपको कॉल करेगी।",
    footer_quicklinks:"क्विक लिंक्स", footer_projects:"प्रोजेक्ट्स",
    faq_q_0:"चैनल पार्टनर क्या होता है, और क्या इसका इस्तेमाल करने पर मुझे अतिरिक्त पैसे देने होंगे?",
    faq_q_1:"महाराष्ट्र में स्टाम्प ड्यूटी और रजिस्ट्रेशन चार्ज कितना है?",
    faq_q_2:"बुकिंग से पहले मुझे कौन से दस्तावेज़ जांचने चाहिए?",
    faq_q_3:"होम लोन की प्रक्रिया कैसे काम करती है?",
    faq_q_4:"क्या मेरी बुकिंग राशि वापस मिल सकती है?",
    faq_q_5:"RERA क्या है और यह क्यों ज़रूरी है?"
  },
  mr: {
    nav_home:"मुख्यपृष्ठ", nav_projects:"प्रकल्प", nav_insights:"माहिती", nav_about:"आमच्याबद्दल", nav_contact:"संपर्क साधा",
    btn_call:"आता कॉल करा", btn_enquire:"आता चौकशी करा", btn_view_details:"तपशील पहा", btn_read_more:"अधिक वाचा",
    btn_submit:"चौकशी पाठवा", btn_send:"चौकशी पाठवा", btn_close:"बंद करा", btn_clear_filters:"फिल्टर काढा",
    hero_eyebrow:"वेस्टर्न लाइनसाठी तुमचा चॅनल पार्टनर",
    hero_h1:"तुमच्या मुंबई प्रवासाच्या लयीशी जुळणारी घरे.",
    hero_lead:"आम्ही अंधेरी ते मीरा रोडपर्यंत ५ विश्वासार्ह डेव्हलपर्ससोबत थेट काम करतो, त्यामुळे तुम्हाला पडताळणी केलेले प्रकल्प, प्रामाणिक किंमत आणि साइट व्हिजिटपासून रजिस्ट्रीपर्यंत एकच संपर्क व्यक्ती मिळते.",
    stat_projects:"सुरू असलेले प्रकल्प", stat_years:"या मार्गावरील वर्षे", stat_families:"स्थायिक झालेली कुटुंबे", stat_stations:"समाविष्ट स्थानके",
    sec_projects_h:"वेस्टर्न लाइनवरील निवडक घरे",
    sec_projects_sub:"पाच सुरू असलेले प्रकल्प, आमच्या टीमने स्वतः निवडलेले आणि पडताळलेले — अंधेरी ते मीरा रोडपर्यंत.",
    filter_search_ph:"प्रकल्प किंवा ठिकाणानुसार शोधा",
    filter_all_localities:"सर्व ठिकाणे", filter_any_budget:"कोणतेही बजेट", filter_any_config:"कोणतेही कॉन्फिगरेशन",
    filter_budget1:"₹1 कोटीपेक्षा कमी", filter_budget2:"₹1 – ₹2 कोटी", filter_budget3:"₹2 – ₹3 कोटी", filter_budget4:"₹3 कोटीपेक्षा जास्त",
    no_results:"सध्या तुमच्या फिल्टरशी जुळणारा प्रकल्प नाही. शोध थोडा वाढवून पहा.",
    nav_resale:"रीसेल", nav_rent:"भाडे", browse:"पहा", tab_new:"नवीन", tab_new_s:"बिल्डर प्रकल्प", tab_resale:"रीसेल", tab_resale_s:"लगेच राहण्यायोग्य घरे", tab_rent:"भाडे", tab_rent_s:"भाड्याचे फ्लॅट", pill_new:"नवीन प्रकल्प", pill_resale:"रीसेल घरे", pill_rent:"भाड्याची घरे", lx_search_ph:"ठिकाण किंवा इमारतीनुसार शोधा", lx_any_bhk:"कोणताही BHK", bud_resale:"कोणतेही बजेट|₹50 लाखांपेक्षा कमी|₹50 लाख – ₹1 कोटी|₹1 – ₹2 कोटी|₹2 कोटीपेक्षा जास्त", bud_rent:"कोणतेही भाडे|₹20,000 पेक्षा कमी|₹20,000 – ₹35,000|₹35,000 – ₹60,000|₹60,000 पेक्षा जास्त", lx_none_resale:"या फिल्टरशी जुळणारे रीसेल घर नाही. बजेट वाढवा किंवा दुसरे ठिकाण निवडा.", lx_none_rent:"या फिल्टरशी जुळणारे भाड्याचे घर नाही. बजेट वाढवा किंवा दुसरे ठिकाण निवडा.", lx_note:"रीसेल आणि भाड्याच्या लिस्टिंग सूचक आहेत. किंमत, उपलब्धता आणि अटी चौकशीनंतर निश्चित केल्या जातात.", tag_resale:"रीसेल", tag_rent:"भाड्याने", stn:"स्टेशन", u_cr:"कोटी", u_l:"लाख", u_mo:"/महिना", carpet:"चौ.फू. कारपेट", lx_floor:"मजला {x}", lx_dep:"डिपॉझिट {x}", lx_age:"मालमत्तेचे वय", lx_yrs:"{x} वर्षे", lx_avail:"उपलब्ध", av_now:"लगेच", av_from:"{x} पासून", fur_f:"पूर्ण फर्निश्ड", fur_s:"सेमी-फर्निश्ड", fur_u:"फर्निचर नाही", lx_enq:"चौकशी", lx_looking:"माझी गरज", kind_new:"नवीन प्रकल्प खरेदी करणे", kind_resale:"रीसेल घर खरेदी करणे", kind_rent:"भाड्याने घर घेणे",
    sec_why_h:"खरेदीदार Coastline सोबत का काम करतात",
    why1_t:"पडताळणी केलेली कागदपत्रे", why2_t:"फुगवलेली किंमत नाही", why3_t:"एकच संपर्क व्यक्ती", why4_t:"कर्ज आणि कागदपत्रांसाठी मदत",
    sec_how_h:"आमच्याकडून खरेदी कशी होते",
    step1_t:"तुमची गरज आम्हाला सांगा", step2_t:"भेट द्या आणि तुलना करा", step3_t:"बुक करा आणि रहायला जा",
    sec_about_h:"किनाऱ्यावरील १५ वर्षांची घरे",
    about_stat1:"व्यवसायातील वर्षे", about_stat2:"स्थायिक झालेली कुटुंबे", about_stat3:"बिल्डर भागीदारी", about_stat4:"वेस्टर्न लाइन स्थानके",
    sec_testi_h:"आमचे खरेदीदार काय म्हणतात",
    sec_insights_h:"वेस्टर्न लाइन खरेदीदारांसाठी माहिती",
    sec_faq_h:"वारंवार विचारले जाणारे प्रश्न",
    sec_contact_h:"संपर्क करा",
    sec_contact_sub:"तुमची माहिती द्या, आमची टीम कामाच्या वेळेत ३० मिनिटांत तुम्हाला कॉल करेल.",
    form_name:"पूर्ण नाव *", form_phone:"फोन नंबर *", form_email:"ईमेल", form_message:"संदेश",
    form_project:"स्वारस्य असलेला प्रकल्प", form_config:"पसंतीचे कॉन्फिगरेशन",
    modal_title:"आता चौकशी करा", modal_sub:"तुमची माहिती द्या — आम्ही ३० मिनिटांत तुम्हाला परत कॉल करू.",
    success_title:"धन्यवाद — तुम्ही आमच्या यादीत आहात!", success_msg:"आमची टीम कामाच्या वेळेत ३० मिनिटांत तुम्हाला कॉल करेल.",
    footer_quicklinks:"क्विक लिंक्स", footer_projects:"प्रकल्प",
    faq_q_0:"चॅनल पार्टनर म्हणजे काय, आणि त्याचा वापर केल्यास मला जास्त पैसे द्यावे लागतील का?",
    faq_q_1:"महाराष्ट्रात मुद्रांक शुल्क आणि नोंदणी शुल्क किती आहे?",
    faq_q_2:"बुकिंगपूर्वी मी कोणती कागदपत्रे तपासावीत?",
    faq_q_3:"गृहकर्जाची प्रक्रिया कशी असते?",
    faq_q_4:"माझी बुकिंग रक्कम परत मिळू शकते का?",
    faq_q_5:"RERA म्हणजे काय आणि ते का महत्त्वाचे आहे?"
  }
};

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || key;
}

function setLanguage(lang){
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
  populateBudgetOptions();
  populateProjectSelects();
  renderProjectCards(getFilteredProjects());
  renderFAQ();
  renderBlogCards();
  renderBlogViews();
  renderProjectViews();
  renderFooterLinks();
  lxBuild("resale"); lxBuild("rent");
  showView(currentViewId, { skipScroll: true });
}

/* ============================================================
   DECORATIVE SVG ILLUSTRATIONS (no external images / no licensing risk)
   ============================================================ */
function skylineSVG(heights, opts){
  opts = opts || {};
  const w = opts.w || 420, h = opts.h || 280;
  const n = heights.length, bw = w / n;
  let rects = "";
  heights.forEach((hh,i)=>{
    const x = i*bw + bw*0.14, bw2 = bw*0.72, by = h - hh;
    const fill = i % 2 === 0 ? "rgba(241,244,238,0.14)" : "var(--gold)";
    rects += `<rect x="${x}" y="${by}" width="${bw2}" height="${hh}" rx="4" fill="${fill}" opacity="${i%2===0?0.9:0.85}"/>`;
    const winRows = Math.max(2, Math.floor(hh/28));
    for(let r=1;r<winRows;r++){
      rects += `<rect x="${x+bw2*0.18}" y="${by + r*(hh/winRows)}" width="${bw2*0.64}" height="4" fill="rgba(14,42,37,0.35)"/>`;
    }
  });
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    ${rects}
    <path d="M0 ${h-4} Q ${w*0.25} ${h-16} ${w*0.5} ${h-4} T ${w} ${h-6} V ${h} H0 Z" fill="rgba(199,154,75,0.22)"/>
  </svg>`;
}
function amenitySVG(opts){
  opts = opts || {};
  const w = opts.w || 420, h = opts.h || 280;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect x="0" y="0" width="${w}" height="${h}" fill="#123A34"/>
    <rect x="${w*0.12}" y="${h*0.42}" width="${w*0.76}" height="${h*0.4}" rx="18" fill="#1D4A41"/>
    <path d="M${w*0.14} ${h*0.5} q ${w*0.06} -14 ${w*0.12} 0 t ${w*0.12} 0 t ${w*0.12} 0 t ${w*0.12} 0 t ${w*0.12} 0 v${h*0.24} h-${w*0.6} z" fill="#9FC8C2" opacity="0.85"/>
    <rect x="${w*0.2}" y="${h*0.3}" width="${w*0.1}" height="${h*0.14}" rx="4" fill="var(--gold)"/>
    <rect x="${w*0.7}" y="${h*0.3}" width="${w*0.1}" height="${h*0.14}" rx="4" fill="var(--gold)"/>
    <circle cx="${w*0.25}" cy="${h*0.28}" r="${w*0.03}" fill="#E8CE9A"/>
    <circle cx="${w*0.75}" cy="${h*0.28}" r="${w*0.03}" fill="#E8CE9A"/>
    <rect x="0" y="${h*0.86}" width="${w}" height="${h*0.14}" fill="#0E2A25"/>
  </svg>`;
}
function lobbySVG(opts){
  opts = opts || {};
  const w = opts.w || 420, h = opts.h || 280;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect x="0" y="0" width="${w}" height="${h}" fill="#0E2A25"/>
    <path d="M${w*0.1} ${h} V${h*0.4} a${w*0.15} ${w*0.15} 0 0 1 ${w*0.3} 0 V${h} Z" fill="#1D4A41"/>
    <path d="M${w*0.6} ${h} V${h*0.4} a${w*0.15} ${w*0.15} 0 0 1 ${w*0.3} 0 V${h} Z" fill="#1D4A41"/>
    <rect x="${w*0.38}" y="${h*0.55}" width="${w*0.24}" height="${h*0.3}" rx="4" fill="var(--gold)"/>
    <circle cx="${w*0.5}" cy="${h*0.22}" r="${w*0.025}" fill="#E8CE9A"/>
    <line x1="${w*0.5}" y1="${h*0.06}" x2="${w*0.5}" y2="${h*0.2}" stroke="#E8CE9A" stroke-width="2"/>
    <rect x="0" y="${h*0.88}" width="${w}" height="${h*0.12}" fill="#153B34"/>
  </svg>`;
}
function floorplanSVG(opts){
  opts = opts || {};
  const w = opts.w || 420, h = opts.h || 280;
  const rooms = [
    {x:0.06,y:0.12,w:0.4,h:0.36,label:"Living Room"},
    {x:0.5,y:0.12,w:0.28,h:0.36,label:"Bedroom 1"},
    {x:0.06,y:0.52,w:0.28,h:0.36,label:"Kitchen"},
    {x:0.38,y:0.52,w:0.4,h:0.36,label:"Bedroom 2"},
    {x:0.8,y:0.12,w:0.14,h:0.76,label:"Balcony"}
  ];
  const rects = rooms.map(r => `
    <rect x="${r.x*w}" y="${r.y*h}" width="${r.w*w}" height="${r.h*h}" fill="none" stroke="var(--gold)" stroke-width="2"/>
    <text x="${(r.x+r.w/2)*w}" y="${(r.y+r.h/2)*h}" fill="#E8CE9A" font-size="11" font-family="Inter,sans-serif" text-anchor="middle">${r.label}</text>
  `).join("");
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect x="0" y="0" width="${w}" height="${h}" fill="#123A34"/>
    ${rects}
    <text x="${w/2}" y="${h*0.96}" fill="rgba(232,206,154,0.6)" font-size="10" font-family="Inter,sans-serif" text-anchor="middle">Indicative floor plan — actual layout may vary</text>
  </svg>`;
}
function heroArtSVG(){
  return `<svg viewBox="0 0 560 460" xmlns="http://www.w3.org/2000/svg">
    <circle cx="430" cy="110" r="70" fill="var(--gold)" opacity="0.9"/>
    <circle cx="430" cy="110" r="70" fill="none" stroke="var(--gold-light)" stroke-width="1" opacity="0.5"/>
    ${[[40,410,60,220],[110,410,64,300],[184,410,70,180],[258,410,58,340],[326,410,80,150],[416,410,66,260],[492,410,50,210]].map(([x,base,w,h])=>{
      const y = base-h;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#12332C" stroke="rgba(232,206,154,0.25)" stroke-width="1"/>` +
        Array.from({length:Math.floor(h/34)}).map((_,r)=>{
          const wy = y+18+r*34;
          return `<rect x="${x+10}" y="${wy}" width="${w-20}" height="10" fill="rgba(232,206,154,${r%2?0.55:0.85})"/>`;
        }).join("");
    }).join("")}
    <path d="M0 428 C 120 400, 240 448, 360 418 C 440 398, 500 430, 560 412 V460 H0 Z" fill="#0B221D"/>
    <path d="M0 440 C 140 420, 260 452, 400 430 C 470 418, 520 440, 560 428 V460 H0 Z" fill="#0E2A25" opacity="0.9"/>
  </svg>`;
}
function aboutArtSVG(){
  return `<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="500" height="380" rx="24" fill="#E6EBE1"/>
    ${[[40,320,64,160],[120,320,70,230],[204,320,60,190],[280,320,78,260],[372,320,56,150],[440,320,44,200]].map(([x,base,w,h])=>{
      const y=base-h;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#153B34"/>` +
        Array.from({length:Math.floor(h/30)}).map((_,r)=>`<rect x="${x+8}" y="${y+14+r*30}" width="${w-16}" height="8" fill="#C79A4B" opacity="${r%2?0.85:0.5}"/>`).join("");
    }).join("")}
    <rect x="0" y="332" width="500" height="48" fill="#D8E0D2"/>
  </svg>`;
}

/* ============================================================
   PROJECT CARDS + FILTERS
   ============================================================ */
function populateLocalityOptions(){
  const sel = document.getElementById("filterLocality");
  if(!sel) return;
  const localities = [...new Set(PROJECTS.map(p => p.locality))];
  sel.innerHTML = `<option value="">${t("filter_all_localities")}</option>` + localities.map(l => `<option value="${l}">${l}</option>`).join("");
}
function populateBudgetOptions(){
  const sel = document.getElementById("filterBudget");
  if(!sel) return;
  const current = sel.value;
  sel.innerHTML = `
    <option value="">${t("filter_any_budget")}</option>
    <option value="0-100">${t("filter_budget1")}</option>
    <option value="100-200">${t("filter_budget2")}</option>
    <option value="200-300">${t("filter_budget3")}</option>
    <option value="300-99999">${t("filter_budget4")}</option>`;
  sel.value = current;
}
function populateBhkOptions(){
  const sel = document.getElementById("filterBhk");
  if(!sel) return;
  sel.innerHTML = `<option value="">${t("filter_any_config")}</option><option value="1">1 BHK</option><option value="2">2 BHK</option><option value="3">3 BHK</option>`;
}
function getFilteredProjects(){
  const search = (document.getElementById("filterSearch")?.value || "").trim().toLowerCase();
  const locality = document.getElementById("filterLocality")?.value || "";
  const budget = document.getElementById("filterBudget")?.value || "";
  const bhk = document.getElementById("filterBhk")?.value || "";

  return PROJECTS.filter(p => {
    if(search && !(p.name.toLowerCase().includes(search) || p.locality.toLowerCase().includes(search))) return false;
    if(locality && p.locality !== locality) return false;
    if(bhk && !p.bhkOptions.includes(Number(bhk))) return false;
    if(budget){
      const [bMin,bMax] = budget.split("-").map(Number);
      if(!(p.priceMinL <= bMax && bMin <= p.priceMaxL)) return false;
    }
    return true;
  });
}
function applyFilters(){
  renderProjectCards(getFilteredProjects());
}
function clearFilters(){
  const s = document.getElementById("filterSearch"); if(s) s.value = "";
  const l = document.getElementById("filterLocality"); if(l) l.value = "";
  const b = document.getElementById("filterBudget"); if(b) b.value = "";
  const k = document.getElementById("filterBhk"); if(k) k.value = "";
  applyFilters();
}
function renderProjectCards(list){
  const projects = list || PROJECTS;
  const grid = document.getElementById("projectGrid");
  const noResults = document.getElementById("noResults");
  if(!grid) return;
  if(projects.length === 0){
    grid.innerHTML = "";
    if(noResults){ noResults.style.display = "block"; noResults.querySelector("p").textContent = t("no_results"); }
    return;
  }
  if(noResults) noResults.style.display = "none";
  grid.innerHTML = projects.map(p => `
    <div class="pcard">
      <div class="pcard-art">
        <span class="pcard-tag">${p.station}</span>
        ${skylineSVG(p.heights,{w:400,h:260})}
      </div>
      <div class="pcard-body">
        <div class="pcard-loc">${p.locality.toUpperCase()}</div>
        <h3>${p.name}</h3>
        <p style="margin:0;font-size:13.5px;">${p.config} · ${p.area}</p>
        <div class="pcard-meta"><span>Possession</span><span>${p.possession}</span></div>
        <div class="pcard-cta">
          <span class="pcard-price">${p.priceShort}</span>
          <button class="view-link" onclick="showView('${p.id}')">${t("btn_view_details")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   PROJECT DETAIL VIEWS + GALLERY CAROUSEL
   ============================================================ */
const galleryState = {};
function galleryGoTo(id, idx){
  const total = 4;
  idx = (idx + total) % total;
  galleryState[id] = idx;
  const track = document.querySelector(`#view-${id} .gallery-track`);
  if(track) track.style.transform = `translateX(-${idx*25}%)`;
  document.querySelectorAll(`#view-${id} .dot`).forEach((d,i)=> d.classList.toggle("active", i===idx));
}
function galleryNext(id){ galleryGoTo(id, (galleryState[id]||0)+1); }
function galleryPrev(id){ galleryGoTo(id, (galleryState[id]||0)-1); }

function renderProjectViews(){
  const wrap = document.getElementById("project-views");
  if(!wrap) return;
  wrap.innerHTML = PROJECTS.map(p => {
    const slides = [
      { svg: skylineSVG(p.heights,{w:1200,h:420}), cap: "Exterior view" },
      { svg: amenitySVG({w:1200,h:420}), cap: "Clubhouse & amenities" },
      { svg: lobbySVG({w:1200,h:420}), cap: "Lobby & common areas" },
      { svg: floorplanSVG({w:1200,h:420}), cap: "Indicative floor plan" }
    ];
    return `
    <div class="view" id="view-${p.id}">
      <section class="pd-hero">
        <div class="wrap">
          <div class="breadcrumb"><button onclick="showView('home')">${t("nav_home")}</button> / <button onclick="showView('home');scrollToSection('projects')">${t("nav_projects")}</button> / <span>${p.name}</span></div>
          <div class="pd-top">
            <div>
              <div class="pd-loc">${p.locality.toUpperCase()} · ${p.station.toUpperCase()}</div>
              <h1>${p.name}</h1>
            </div>
            <div class="cta-row">
              <a class="btn btn-gold" href="tel:${PHONE}">${t("btn_call")}</a>
              <button class="btn btn-outline" onclick="openEnquire('${p.name}')">${t("btn_enquire")}</button>
              <a class="btn btn-whatsapp" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I am interested in "+p.name+" ("+p.locality+"). Please share more details.")}" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <div class="pd-meta-row">
            <div><span>Configuration</span><b>${p.config}</b></div>
            <div><span>Carpet area</span><b>${p.area}</b></div>
            <div><span>Price range</span><b>${p.price}</b></div>
            <div><span>Possession</span><b>${p.possession}</b></div>
            <div><span>RERA no.</span><b>${p.rera}</b></div>
          </div>
          <div class="pd-art">
            <div class="gallery">
              <div class="gallery-track">
                ${slides.map(s => `<div class="gallery-slide">${s.svg}<span class="slide-cap">${s.cap}</span></div>`).join("")}
              </div>
              <span class="gallery-disclaimer">Illustrative — actual finishes may vary</span>
              <button class="gallery-nav prev" onclick="galleryPrev('${p.id}')" aria-label="Previous image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 6l-6 6 6 6"/></svg></button>
              <button class="gallery-nav next" onclick="galleryNext('${p.id}')" aria-label="Next image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg></button>
              <div class="gallery-dots">
                ${slides.map((_,i)=>`<button class="dot ${i===0?'active':''}" onclick="galleryGoTo('${p.id}',${i})" aria-label="Show image ${i+1}"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrap pd-body">
          <div>
            <div class="pd-block">
              <h2>Overview</h2>
              <p>${p.description}</p>
            </div>
            <div class="pd-block">
              <h2>Configurations & pricing</h2>
              <table class="config-table">
                <tr><th>Type</th><th>Carpet area</th><th>Price</th></tr>
                ${p.tiers.map(tier=>`<tr><td>${tier[0]}</td><td>${tier[1]}</td><td>${tier[2]}</td></tr>`).join("")}
              </table>
            </div>
            <div class="pd-block">
              <h2>Amenities</h2>
              <div class="amen-grid">
                ${p.amenities.map(a=>`<div class="amen-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>${a}</div>`).join("")}
              </div>
            </div>
            <div class="pd-block">
              <h2>Location highlights</h2>
              <ul class="highlight-list">
                ${p.highlights.map(h=>`<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>${h}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="pd-sidebar">
            <div class="price">${p.priceShort}</div>
            <div class="price-note">${p.config} · ${p.possession}</div>
            <div class="cta-row" style="flex-direction:column;">
              <a class="btn btn-gold btn-block" href="tel:${PHONE}">${t("btn_call")}</a>
              <button class="btn btn-outline-dark btn-block" onclick="openEnquire('${p.name}')">${t("btn_enquire")} (Get callback)</button>
              <a class="btn btn-whatsapp btn-block" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I am interested in "+p.name+" ("+p.locality+"). Please share more details.")}" target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section class="alt">
        <div class="wrap">
          <div class="section-head"><div><h2>Other projects on the line</h2></div></div>
          <div class="related-strip">
            ${PROJECTS.filter(x=>x.id!==p.id).map(x=>`<button class="related-chip" onclick="showView('${x.id}')">${x.name} — ${x.locality}</button>`).join("")}
          </div>
        </div>
      </section>
    </div>`;
  }).join("");
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function toggleFaq(btn){
  btn.parentElement.classList.toggle("open");
}
function renderFAQ(){
  const list = document.getElementById("faqList");
  if(!list) return;
  list.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">
        <span data-i18n="faq_q_${i}">${t("faq_q_"+i)}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");
}

/* ============================================================
   BLOG / INSIGHTS
   ============================================================ */
function renderBlogCards(){
  const grid = document.getElementById("blogGrid");
  if(!grid) return;
  grid.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card">
      <div class="blog-tag">${post.tag} · ${post.readTime}</div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <button class="view-link" onclick="showView('blog-${post.slug}')">${t("btn_read_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
    </div>
  `).join("");
}
function renderBlogViews(){
  const wrap = document.getElementById("blog-views");
  if(!wrap) return;
  wrap.innerHTML = BLOG_POSTS.map(post => `
    <div class="view" id="view-blog-${post.slug}">
      <section class="pd-hero" style="padding-bottom:40px;">
        <div class="wrap">
          <div class="breadcrumb"><button onclick="showView('home')">${t("nav_home")}</button> / <button onclick="showView('home');scrollToSection('insights')">${t("nav_insights")}</button> / <span>${post.title}</span></div>
          <div class="pd-loc">${post.tag.toUpperCase()} · ${post.readTime.toUpperCase()}</div>
          <h1 style="color:var(--sage-50);max-width:26ch;">${post.title}</h1>
        </div>
      </section>
      <section>
        <div class="wrap" style="max-width:760px;">
          ${post.body.map(para => `<p style="font-size:16px;color:var(--ink);max-width:none;">${para}</p>`).join("")}
          <div class="cta-banner" style="margin-top:20px;">
            <div><h2 style="font-size:22px;">Have a specific question?</h2><p>Our team can walk you through this for your exact situation.</p></div>
            <div class="cta-row">
              <a class="btn btn-gold" href="tel:${PHONE}">${t("btn_call")}</a>
              <button class="btn btn-outline" onclick="openEnquire()">${t("btn_enquire")}</button>
            </div>
          </div>
        </div>
      </section>
      <section class="alt">
        <div class="wrap">
          <div class="section-head"><div><h2>More insights</h2></div></div>
          <div class="related-strip">
            ${BLOG_POSTS.filter(x=>x.slug!==post.slug).map(x=>`<button class="related-chip" onclick="showView('blog-${x.slug}')">${x.title}</button>`).join("")}
          </div>
        </div>
      </section>
    </div>
  `).join("");
}

/* ============================================================
   NAVIGATION / VIEW SWITCHING
   ============================================================ */
function showView(id, opts){
  opts = opts || {};
  currentViewId = id;
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-"+id);
  if(target) target.classList.add("active");
  if(!opts.skipScroll) window.scrollTo({ top: 0, behavior: "auto" });
  const mm = document.getElementById("mobileMenu");
  if(mm) mm.classList.remove("open");
}
function scrollToSection(sectionId){
  showView("home");
  requestAnimationFrame(()=>{
    const el = document.getElementById(sectionId);
    if(el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
function toggleMobileMenu(){
  document.getElementById("mobileMenu").classList.toggle("open");
}

/* ============================================================
   ENQUIRE MODAL
   ============================================================ */
function populateProjectSelects(){
  const optionsHTML = `<option value="">General enquiry</option>` + PROJECTS.map(p => `<option value="${p.name}">${p.name} — ${p.locality}</option>`).join("");
  const a = document.getElementById("enquireProjectSelect"); if(a) a.innerHTML = optionsHTML;
  const b = document.getElementById("contactProjectSelect"); if(b) b.innerHTML = optionsHTML;
}
function openEnquire(projectName, kind){
  document.getElementById("enquireFormWrap").style.display = "block";
  document.getElementById("enquireFormSuccess").style.display = "none";
  document.getElementById("enquireForm").reset();
  const lk = document.getElementById("lxKind"); if(lk) lk.value = kind || (projectName ? "new" : lxCur);
  if(projectName){
    const ps = document.getElementById("enquireProjectSelect");
    if(![...ps.options].some(o => o.value === projectName)) ps.add(new Option(projectName, projectName));
    ps.value = projectName;
  }
  document.getElementById("enquireOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeEnquire(){
  document.getElementById("enquireOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
function handleFormSubmit(e, formId){
  e.preventDefault();
  if(formId === "enquireForm"){
    document.getElementById("enquireFormWrap").style.display = "none";
    document.getElementById("enquireFormSuccess").style.display = "block";
  } else {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactFormSuccess").style.display = "block";
  }
  return false;
}

/* ============================================================
   FOOTER LINKS
   ============================================================ */
function renderFooterLinks(){
  const el = document.getElementById("footerProjectLinks");
  if(el) el.innerHTML = PROJECTS.map(p => `<button onclick="showView('${p.id}')">${p.name}</button>`).join("");
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
let backToTopTicking = false;
window.addEventListener("scroll", () => {
  if(backToTopTicking) return;
  backToTopTicking = true;
  requestAnimationFrame(() => {
    const btn = document.getElementById("backToTop");
    if(btn) btn.classList.toggle("show", window.scrollY > 640);
    backToTopTicking = false;
  });
});
function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   RESALE & RENT LISTINGS  (SAMPLE DATA: replace with your real inventory)
   ============================================================ */
const LISTINGS = {
  resale: [
    {id:"RS-101",t:"2 BHK in Lokhandwala Complex",loc:"Andheri West",st:"Andheri",bhk:2,area:845,floor:"7 of 14",age:6,price:21500000},
    {id:"RS-102",t:"3 BHK off Link Road",loc:"Goregaon West",st:"Goregaon",bhk:3,area:1180,floor:"11 of 22",age:4,price:31500000},
    {id:"RS-103",t:"1 BHK near Malad station",loc:"Malad West",st:"Malad",bhk:1,area:480,floor:"3 of 7",age:9,price:9800000},
    {id:"RS-104",t:"2 BHK in Thakur Village",loc:"Kandivali East",st:"Kandivali",bhk:2,area:760,floor:"9 of 18",age:5,price:14200000},
    {id:"RS-105",t:"2 BHK near Borivali station",loc:"Borivali West",st:"Borivali",bhk:2,area:690,floor:"5 of 12",age:8,price:15800000},
    {id:"RS-106",t:"1 BHK in Mira Road",loc:"Mira Road East",st:"Mira Road",bhk:1,area:410,floor:"8 of 16",age:3,price:6900000}
  ],
  rent: [
    {id:"RN-201",t:"2 BHK in Andheri West",loc:"Andheri West",st:"Andheri",bhk:2,area:820,floor:"6 of 12",rent:65000,dep:300000,fur:"f",av:""},
    {id:"RN-202",t:"1 BHK near Goregaon station",loc:"Goregaon East",st:"Goregaon",bhk:1,area:540,floor:"4 of 10",rent:38000,dep:190000,fur:"s",av:"1 Nov"},
    {id:"RN-203",t:"2 BHK in Malad West",loc:"Malad West",st:"Malad",bhk:2,area:760,floor:"8 of 15",rent:52000,dep:260000,fur:"s",av:"1 Nov"},
    {id:"RN-204",t:"1 BHK in Kandivali West",loc:"Kandivali West",st:"Kandivali",bhk:1,area:500,floor:"5 of 9",rent:28000,dep:140000,fur:"u",av:""},
    {id:"RN-205",t:"2 BHK near Borivali station",loc:"Borivali West",st:"Borivali",bhk:2,area:700,floor:"3 of 8",rent:42000,dep:210000,fur:"f",av:"15 Nov"},
    {id:"RN-206",t:"1 BHK in Mira Road",loc:"Mira Road East",st:"Mira Road",bhk:1,area:420,floor:"9 of 17",rent:19000,dep:95000,fur:"s",av:""}
  ]
};
const LX_BUD = { resale:[0,5e6,1e7,2e7,1e9], rent:[0,2e4,35e3,6e4,1e9] };
let lxCur = "new";
const lxFill = (k, x) => t(k).replace("{x}", x);
const lxInr = n => "₹" + n.toLocaleString("en-IN");
const lxMoney = n => "₹" + parseFloat((n / (n >= 1e7 ? 1e7 : 1e5)).toFixed(2)) + " " + t(n >= 1e7 ? "u_cr" : "u_l");

function lxCard(d, type){
  const rent = type === "rent";
  const hs = [...d.id].map((c, i) => 60 + (c.charCodeAt(0) * (i + 3)) % 80);
  const price = rent ? lxInr(d.rent) + " <small>" + t("u_mo") + "</small>" : lxMoney(d.price);
  const line2 = rent ? t("fur_" + d.fur) + " · " + lxFill("lx_dep", lxInr(d.dep)) : lxFill("lx_floor", d.floor);
  const meta = rent ? [t("lx_avail"), d.av ? lxFill("av_from", d.av) : t("av_now")] : [t("lx_age"), lxFill("lx_yrs", d.age)];
  const wa = "Hi, I'm interested in " + (rent ? "renting" : "buying") + " listing " + d.id + ": " + d.t + ", " + d.loc + ".";
  return `
    <div class="pcard">
      <div class="pcard-art">
        <span class="pcard-tag">${d.st} ${t("stn")}</span>
        <span class="lx-badge">${t(rent ? "tag_rent" : "tag_resale")}</span>
        ${skylineSVG(hs, {w:400, h:260})}
      </div>
      <div class="pcard-body">
        <div class="pcard-loc">${d.loc.toUpperCase()}</div>
        <h3>${d.t}</h3>
        <p style="margin:0;font-size:13.5px;">${d.bhk} BHK · ${d.area} ${t("carpet")}</p>
        <p class="lx-sub">${line2}</p>
        <div class="pcard-meta"><span>${meta[0]}</span><span>${meta[1]}</span></div>
        <div class="pcard-cta">
          <span class="pcard-price">${price}</span>
          <span class="lx-links">
            <button class="view-link" onclick="lxEnquire('${d.id}')">${t("lx_enq")}</button>
            <a class="view-link" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(wa)}">WhatsApp</a>
          </span>
        </div>
      </div>
    </div>`;
}
function lxEnquire(id){
  const type = LISTINGS.resale.some(d => d.id === id) ? "resale" : "rent";
  const d = LISTINGS[type].find(x => x.id === id);
  openEnquire(d.id + ": " + d.t + ", " + d.loc, type);
}
function lxBuild(type){
  const el = document.getElementById("panel-" + type); if(!el) return;
  const prev = {};
  el.querySelectorAll("[data-f]").forEach(x => prev[x.dataset.f] = x.value);
  const b = LX_BUD[type], labels = t("bud_" + type).split("|");
  const locs = [...new Set(LISTINGS[type].map(d => d.loc))].sort();
  el.innerHTML = `
    <div class="filter-bar">
      <input type="text" data-f="q" placeholder="${t("lx_search_ph")}" />
      <select data-f="loc"><option value="">${t("filter_all_localities")}</option>${locs.map(l => `<option>${l}</option>`).join("")}</select>
      <select data-f="bud">${labels.map((l, i) => `<option value="${i ? b[i-1] + "-" + b[i] : ""}">${l}</option>`).join("")}</select>
      <select data-f="bhk"><option value="">${t("lx_any_bhk")}</option><option value="1">1 BHK</option><option value="2">2 BHK</option><option value="3">3 BHK</option></select>
      <button type="button" class="btn btn-outline-dark" data-clear>${t("btn_clear_filters")}</button>
    </div>
    <div class="project-grid"></div>
    <div class="no-results" style="display:none"><p>${t("lx_none_" + type)}</p><button type="button" class="btn btn-gold" data-clear>${t("btn_clear_filters")}</button></div>`;
  const fields = el.querySelectorAll("[data-f]");
  fields.forEach(x => { if(prev[x.dataset.f] !== undefined) x.value = prev[x.dataset.f]; });
  function render(){
    const f = {}; fields.forEach(x => f[x.dataset.f] = x.value);
    const r = f.bud ? f.bud.split("-").map(Number) : [0, Infinity], q = f.q.trim().toLowerCase();
    const out = LISTINGS[type].filter(d => {
      const p = type === "rent" ? d.rent : d.price;
      return (!f.loc || d.loc === f.loc) && (!f.bhk || String(d.bhk) === f.bhk) && p >= r[0] && p <= r[1]
        && (!q || (d.t + " " + d.loc + " " + d.st).toLowerCase().includes(q));
    });
    el.querySelector(".project-grid").innerHTML = out.map(d => lxCard(d, type)).join("");
    el.querySelector(".no-results").style.display = out.length ? "none" : "block";
  }
  fields.forEach(x => x.addEventListener(x.tagName === "INPUT" ? "input" : "change", render));
  el.querySelectorAll("[data-clear]").forEach(x => x.addEventListener("click", () => { fields.forEach(f => f.value = ""); render(); }));
  render();
}
function lxSetTab(tab){
  lxCur = tab;
  document.querySelectorAll(".lx-tab").forEach(b => { const on = b.dataset.t === tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
  ["new","resale","rent"].forEach(k => { const p = document.getElementById("panel-" + k); if(p) p.hidden = (k !== tab); });
}
function goListing(tab){ lxSetTab(tab); scrollToSection("projects"); }
function lxInit(){
  lxBuild("resale"); lxBuild("rent");
  document.querySelectorAll(".lx-tab").forEach(b => b.addEventListener("click", () => lxSetTab(b.dataset.t)));
  const h = location.hash.replace("#", "");
  if(h === "resale" || h === "rent") lxSetTab(h);
}

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("heroArt").innerHTML = heroArtSVG();
document.getElementById("aboutArt").innerHTML = aboutArtSVG();
populateLocalityOptions();
populateBudgetOptions();
populateBhkOptions();
renderProjectCards(PROJECTS);
renderProjectViews();
populateProjectSelects();
renderFooterLinks();
renderFAQ();
renderBlogCards();
renderBlogViews();
lxInit();
