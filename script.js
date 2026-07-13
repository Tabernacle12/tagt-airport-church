/* ==========================================================
   TAG-T MASTER SCRIPT - SYSTEM LOGIC & PREMIUM ADDONS
   ========================================================== */

// 1. DATA YA LUGHA MBILI (TRANSLATION DICTIONARY)
const translations = {
    sw: {
        // Navigation
        nav_home: "Nyumbani",
        nav_about: "Kuhusu Kanisa",
        nav_leaders: "Viongozi",
        nav_schedule: "Ratiba za Ibada",
        nav_sermons: "Mahubiri",
        nav_gallery: "Gallery",
        nav_giving: "Matoleo",
        nav_contact: "Mawasiliano",
        
        // Motto & Welcome
        logo_motto: '"Kanisa lisilotafuta waliopotea, limepotea lenyewe."',
        top_motto: "Karibu The Tabernacle Assemblies of God Tanzania (TAG-T)",
        hero_welcome: "KARIBU",
        hero_desc: "Tunamhubiri Kristo, tunafundisha Neno la Mungu na kuwafikia waliopotea kwa ajili ya Ufalme wa Mungu.",
        hero_btn1: "Karibu Kanisani",
        hero_btn2: "Tazama Video",
        scripture: '"Nanyi mtaifahamu kweli, nayo hiyo kweli itawaweka huru."',
        
        // Quick Cards
        card1_title: "Ibada zetu", card1_desc: "Jiunge nasi katika ibada zetu za kila wiki.", card1_btn: "Tazama Ratiba",
        card2_title: "Mahubiri", card2_desc: "Soma na sikiliza mahubiri yetu ya kuimarisha imani.", card2_btn: "Soma Zaidi",
        card3_title: "Viongozi", card3_desc: "Pata habari kuhusu viongozi wa kanisa letu.", card3_btn: "Tazama Zaidi",
        card4_title: "Gallery", card4_desc: "Matukio mbalimbali katika picha.", card4_btn: "Tazama Picha",
        card5_title: "Mawasiliano", card5_desc: "Wasiliana nasi au tupate kanisani.", card5_btn: "Wasiliana Nasi",
        
        // About & Bishop
        about_title: "Kuhusu The Tabernacle",
        about_desc: "Tunafurahi kukukaribisha kwenye familia ya waamini wanaosimama katika kweli ya Neno la Mungu. Lengo letu kuu ni kuhubiri kweli ya Kristo kwa watu wote. Tunaamini katika misingi 16 ya Kipentekoste, tukijikita katika kufanya huduma za kijamii na kiroho ili kuleta mabadiliko ya kweli katika maisha ya watu.",
        about_verse: '"Na itakuwa katika siku za mwisho, mlima wa nyumba ya BWANA utawekwa imara juu ya milima..."',
        bishop_pos: "Askofu Mkuu",
        bishop_welcome: "Karibu sana The Tabernacle Assemblies of God Tanzania. Tunaamini Mungu ana mpango mzuri kwa maisha yako. Tunakuomba ujiunge nasi katika kuabudu, kujifunza Neno la Mungu na kumjua Yesu Kristo kwa undani zaidi.",
        bishop_btn: "Karibu Tuabudu Pamoja",
        
        // Schedule & Sermons
        sched_title: "Ratiba ya Ibada", th_day: "Siku", th_sched: "Ratiba ya Siku",
        sermons_title: "Mahubiri & Vipindi", sermons_desc: "Fuata mafundisho yetu na ibada mubashara kupitia YouTube au sikiliza neno hapa chini.",
        audio_track: "Nguvu ya Kweli ya Neno", audio_preacher: "Bishop Godwin Yona",
        
        // Giving & Contact
        giving_title: "Matoleo na Sadaka", giving_desc: "Unaweza kuunga mkono huduma ya Mungu na upanuzi wa ufalme wake kupitia MPESA.",
        lbl_acc_name: "Jina la Akaunti:", giving_blessing: "Mungu akubariki kwa moyo wako wa utoaji.",
        contact_form_title: "Wasiliana Nasi / Tuma Ombi la Maombi",
        msg_type_normal: "Ujumbe wa Kawaida", msg_type_prayer: "Ombi la Maombi (Siri)",
        ph_name: "Jina Lako", ph_email: "Barua Pepe (Email)", ph_msg: "Andika ujumbe au hitaji lako la maombi hapa...",
        btn_submit: "Tuma Ujumbe", contact_hq: "Makao Makuu"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Church",
        nav_leaders: "Leaders",
        nav_schedule: "Service Schedule",
        nav_sermons: "Sermons",
        nav_gallery: "Gallery",
        nav_giving: "Giving",
        nav_contact: "Contact Us",
        
        // Motto & Welcome
        logo_motto: '"A church that is not looking for the lost, is lost itself."',
        top_motto: "Welcome to The Tabernacle Assemblies of God Tanzania (TAG-T)",
        hero_welcome: "WELCOME",
        hero_desc: "We preach Christ, teach the Word of Mungu, and reach out to the lost for the Kingdom of Mungu.",
        hero_btn1: "Welcome to Church",
        hero_btn2: "Watch Videos",
        scripture: '"And you shall know the truth, and the truth shall make you free."',
        
        // Quick Cards
        card1_title: "Our Services", card1_desc: "Join us in our weekly worship services.", card1_btn: "View Schedule",
        card2_title: "Sermons", card2_desc: "Read and listen to our faith-building sermons.", card2_btn: "Read More",
        card3_title: "Leaders", card3_desc: "Get information about our church leaders.", card3_btn: "View More",
        card4_title: "Gallery", card4_desc: "Various church events in pictures.", card4_btn: "View Images",
        card5_title: "Contact", card5_desc: "Contact us or find us at our church location.", card5_btn: "Contact Us",
        
        // About & Bishop
        about_title: "About The Tabernacle",
        about_desc: "We are delighted to welcome you to the family of believers standing on the truth of God's Word. Our main goal is to preach the truth of Christ to all people. We believe in the 16 Pentecostal fundamental truths, focusing on social and spiritual ministry to bring true transformation.",
        about_verse: '"Now it shall come to pass in the latter days that the mountain of the LORD’s house shall be established on the top of the mountains..."',
        bishop_pos: "General Bishop",
        bishop_welcome: "Welcome to The Tabernacle Assemblies of God Tanzania. We believe God has a wonderful plan for your life. Please join us for worship, Bible study, and knowing Jesus Christ deeply.",
        bishop_btn: "Welcome to Worship With Us",
        
        // Schedule & Sermons
        sched_title: "Service Schedule", th_day: "Day", th_sched: "Day Schedule",
        sermons_title: "Sermons & Programs", sermons_desc: "Follow our teachings and live services on YouTube or listen to the word below.",
        audio_track: "The True Power of the Word", audio_preacher: "Bishop Godwin Yona",
        
        // Giving & Contact
        giving_title: "Giving & Tithes", giving_desc: "You can support God's ministry and the expansion of His kingdom via MPESA.",
        lbl_acc_name: "Account Name:", giving_blessing: "God bless you for your giving heart.",
        contact_form_title: "Contact Us / Send a Prayer Request",
        msg_type_normal: "Normal Message", msg_type_prayer: "Prayer Request (Confidential)",
        ph_name: "Your Name", ph_email: "Your Email Address", ph_msg: "Write your message or prayer request here...",
        btn_submit: "Send Message", contact_hq: "Headquarters"
    }
};

// Kazi ya Kubadili Lugha Kwenye Screen
function setLanguage(lang) {
    const data = translations[lang];
    
    // Mstari wa juu na Logo
    document.getElementById("topMottoText").innerText = data.top_motto;
    document.getElementById("logoMotto").innerText = data.logo_motto;
    
    // Navigation Links
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (data[key]) element.innerText = data[key];
    });
    
    // Hero
    document.getElementById("heroWelcome").innerText = data.hero_welcome;
    document.getElementById("heroDesc").innerText = data.hero_desc;
    document.getElementById("heroBtn1").innerHTML = `<i class="fas fa-church"></i> ${data.hero_btn1}`;
    document.getElementById("heroBtn2").innerHTML = `<i class="fas fa-play-circle"></i> ${data.hero_btn2}`;
    document.getElementById("scriptureText").innerText = data.scripture;
    
    // About & Bishop
    document.getElementById("aboutTitle").innerText = data.about_title;
    document.getElementById("aboutDescText").innerText = data.about_desc;
    document.getElementById("aboutVerseText").innerText = data.about_verse;
    document.getElementById("bishopPosition").innerText = data.bishop_pos;
    document.getElementById("bishopWelcomeText").innerText = data.bishop_welcome;
    document.getElementById("bishopBtn").innerText = data.bishop_btn;
    
    // Schedule & Sermons
    document.getElementById("schedTitle").innerText = data.sched_title;
    document.getElementById("thDay").innerText = data.th_day;
    document.getElementById("thSchedule").innerText = data.th_sched;
    document.getElementById("sermonsTitle").innerText = data.sermons_title;
    document.getElementById("sermonsDesc").innerText = data.sermons_desc;
    document.getElementById("audioTrackTitle").innerText = data.audio_track;
    document.getElementById("audioTrackPreacher").innerText = data.audio_preacher;
    
    // Giving & Contact
    document.getElementById("givingTitle").innerText = data.giving_title;
    document.getElementById("givingDesc").innerText = data.giving_desc;
    document.getElementById("lblAccName").innerText = data.lbl_acc_name;
    document.getElementById("givingBlessing").innerText = data.giving_blessing;
    document.getElementById("contactFormTitle").innerText = data.contact_form_title;
    document.getElementById("btnTypeNormal").innerText = data.msg_type_normal;
    document.getElementById("btnTypePrayer").innerText = data.msg_type_prayer;
    document.getElementById("contactHqTitle").innerText = data.contact_hq;
    
    // Placeholders za Fomu
    document.getElementById("formName").placeholder = data.ph_name;
    document.getElementById("formEmail").placeholder = data.ph_email;
    document.getElementById("formMessage").placeholder = data.ph_msg;
    document.getElementById("formSubmitBtn").innerText = data.btn_submit;
    
    // Weka kitufe kionekane kuwa kipo "Active"
    if (lang === 'sw') {
        document.getElementById("btnSw").classList.add("active");
        document.getElementById("btnEn").classList.remove("active");
    } else {
        document.getElementById("btnEn").classList.add("active");
        document.getElementById("btnSw").classList.remove("active");
    }
}

// Mapokezi ya Vitufe vya Lugha
document.getElementById("btnSw").addEventListener("click", () => setLanguage('sw'));
document.getElementById("btnEn").addEventListener("click", () => setLanguage('en'));


/* ==========================================================
   2. PREMIUM AUDIO PLAYER LOGIC
   ========================================================== */
const audio = document.getElementById("mainAudio");
const playBtn = document.getElementById("audioPlayBtn");
const progressBar = document.getElementById("audioProgressBar");
const currentTimeDisplay = document.getElementById("audioCurrentTime");
const durationDisplay = document.getElementById("audioDuration");

// Kazi ya Play na Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
});

// Kugeuza sekunde kuwa muundo wa Dakika (Mfano 3:45)
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = `0${sec}`;
    return `${min}:${sec}`;
}

// Kulisha muda wa Audio punde tu inapofunguka
audio.addEventListener("loadedmetadata", () => {
    durationDisplay.innerText = formatTime(audio.duration);
});

// Kuisogeza progress bar audio inapoendelea ku-play
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress ? progress : 0;
    currentTimeDisplay.innerText = formatTime(audio.currentTime);
});

// Mtumiaji akisogeza progress bar kwa mkono wake
progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});


/* ==========================================================
   3. UNIVERSAL FORM HANDLING (CONVERT BETWEEN CONTACT & PRAYER)
   ========================================================== */
let currentFormType = "Normal"; // Aina ya ujumbe (Normal au Prayer)
const btnNormal = document.getElementById("btnTypeNormal");
const btnPrayer = document.getElementById("btnTypePrayer");

btnNormal.addEventListener("click", () => {
    currentFormType = "Normal";
    btnNormal.classList.add("active");
    btnPrayer.classList.remove("active");
});

btnPrayer.addEventListener("click", () => {
    currentFormType = "Prayer";
    btnPrayer.classList.add("active");
    btnNormal.classList.remove("active");
});

// Fomu Ikitumwa (Hapa ndipo tutakapounganisha Firebase mbeleni)
document.getElementById("universalContactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const message = document.getElementById("formMessage").value;
    const statusMsg = document.getElementById("formStatusMessage");
    
    statusMsg.className = "status-message success";
    
    if (currentFormType === "Normal") {
        statusMsg.innerText = "Asante! Ujumbe wako wa kawaida umepokelewa salama.";
    } else {
        statusMsg.innerText = "Ombi lako la maombi limetumbukizwa kwenye sanduku la siri la maombi la Kanisa kwa usalama. Mungu akubariki!";
        statusMsg.style.color = "#0d47a1"; // Rangi maalum ya siri ya kiroho
    }
    
    // Kusafisha fomu baada ya kutuma
    this.reset();
    setTimeout(() => { statusMsg.innerText = ""; }, 5000);
});

// Kuweka mwaka wa sasa hivi kiotomatiki kwenye footer
document.getElementById("year").innerText = new Date().getFullYear();
