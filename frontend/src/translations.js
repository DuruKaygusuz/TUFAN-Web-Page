// translations.js — Tüm sayfa metinleri burada tanımlıdır
// TUFAN, Elektromobil gibi özel isimler her iki dilde de aynı kalır.

export const translations = {
  tr: {
    // Navbar
    navAbout: 'Biz Kimiz',
    navProjects: 'Projeler',
    navMedia: 'Medya',
    navApply: 'Başvuru Yap',
    navLogout: 'Çıkış Yap',

    // Sections — Header
    brandSubtitle: 'ELEKTROMOBİL',

    // Sections — Hero (Fallback, admin değiştirebilir)
    heroTitle1Default: 'Dijital Çözümler.',
    heroTitle2Default: 'Maksimum Etki.',
    aboutTextDefault: 'TUFAN, teknoloji ve verimliliği merkeze alan kurumsal bir öğrenci ağıdır. Üniversite ekosistemini optimize etmek, operasyonel zorlukları dijital araçlarla çözmek ve sürdürülebilir altyapılar inşa etmek için çalışıyoruz.',

    // Feature Cards
    featureCards: [
      { id: 1, title: 'Bütünleşik Altyapı', description: 'Farklı disiplinlerden gelen yetenekleri tek bir sistem altında birleştirerek yüksek performanslı bir ağ oluşturuyoruz.' },
      { id: 2, title: 'İleri Teknoloji', description: "Modern framework'ler ve ölçeklenebilir mimariler ile sektörel standartlarda ürünler geliştiriyoruz." },
      { id: 3, title: 'Güvenilirlik', description: 'Sistemlerimiz, yüksek trafikli kampüs gereksinimlerini karşılamak üzere kesintisiz ve güvenli şekilde tasarlanmıştır.' },
    ],

    // Media Items
    mediaItems: [
      { id: 1, title: 'HACKATHON 2025' },
      { id: 2, title: 'KURUMSAL TANITIM' },
      { id: 3, title: 'BASIN KİTİ' },
    ],

    // Projects section
    projectsSectionTitle: 'Projeler ve Ürünler',
    noProjectsMsg: 'Henüz proje eklenmemiş. Lütfen admin panelinden proje ekleyin.',
    projectDetailsBtn: 'Detayları Görüntüle',

    // Media section
    mediaSectionTitle: 'Medya ve Arşiv',

    // Footer
    footerRights: '© 2026 TUFAN. Tüm hakları saklıdır.',
    footerManage: 'Yönetim',

    // Application Modal
    appModalTitle: 'Başvuru Formu',
    appsClosed: 'Başvurular Geçici Olarak Kapalıdır',
    appsClosedDesc: 'TUFAN Elektromobil ekibine gösterdiğiniz ilgi için teşekkür ederiz. Şu an yeni başvuru kabul edilmemektedir.',
    close: 'Kapat',
    fieldFirstName: 'Ad',
    fieldFirstNamePlaceholder: 'Adınız',
    fieldLastName: 'Soyad',
    fieldLastNamePlaceholder: 'Soyadınız',
    fieldPhone: 'Telefon No',
    fieldEmail: 'E-posta',
    fieldFaculty: 'Fakülte',
    fieldFacultyPlaceholder: 'Fakülteniz',
    fieldDepartment: 'Bölüm',
    fieldDepartmentPlaceholder: 'Bölümünüz',
    fieldClass: 'Sınıf',
    fieldClassPlaceholder: 'Sınıf seçiniz',
    fieldTeam: 'Hangi ekibe katılmak istersiniz?',
    fieldTeamPlaceholder: 'Ekip seçiniz',
    noActiveTeams: 'Şu an aktif ekip bulunmamaktadır.',
    fieldReason: "Neden TUFAN'ı Seçtin?",
    fieldReasonPlaceholder: "Neden TUFAN'da yer almak istiyorsunuz?",
    fieldAboutMe: 'Kendinden Bahset',
    fieldAboutMePlaceholder: 'Kendinizden kısaca bahsedin...',
    submitBtn: 'Başvuruyu Gönder',
    submittingBtn: 'Gönderiliyor...',

    // Validation errors
    errFirstName: 'Ad alanı zorunludur.',
    errLastName: 'Soyad alanı zorunludur.',
    errPhoneLength: 'Telefon numarası 11 haneli olmalıdır.',
    errPhoneStart: 'Telefon numarası 05 ile başlamalıdır.',
    errEmail: 'Geçerli bir e-posta adresi giriniz.',
    errFaculty: 'Fakülte alanı zorunludur.',
    errDepartment: 'Bölüm alanı zorunludur.',
    errClass: 'Sınıf seçimi zorunludur.',
    errTeam: 'Ekip seçimi zorunludur.',
    errRequired: 'Bu alan zorunludur.',
    errSubmit: 'Başvuru sırasında bir hata oluştu. Lütfen tekrar deneyin.',
    errServer: 'Sunucuya bağlanırken bir hata oluştu.',
  },

  en: {
    // Navbar
    navAbout: 'Who We Are',
    navProjects: 'Projects',
    navMedia: 'Media',
    navApply: 'Apply Now',
    navLogout: 'Log Out',

    // Sections — Header
    brandSubtitle: 'ELECTROMOBILE',

    // Sections — Hero (Fallback)
    heroTitle1Default: 'Digital Solutions.',
    heroTitle2Default: 'Maximum Impact.',
    aboutTextDefault: 'TUFAN is a corporate student network centered on technology and efficiency. We work to optimize the university ecosystem, solve operational challenges with digital tools, and build sustainable infrastructures.',

    // Feature Cards
    featureCards: [
      { id: 1, title: 'Integrated Infrastructure', description: 'We bring together talents from different disciplines under a single system to create a high-performance network.' },
      { id: 2, title: 'Advanced Technology', description: 'We develop industry-standard products using modern frameworks and scalable architectures.' },
      { id: 3, title: 'Reliability', description: 'Our systems are designed to operate continuously and securely to meet the demands of high-traffic campus environments.' },
    ],

    // Media Items
    mediaItems: [
      { id: 1, title: 'HACKATHON 2025' },
      { id: 2, title: 'CORPORATE INTRO' },
      { id: 3, title: 'PRESS KIT' },
    ],

    // Projects section
    projectsSectionTitle: 'Projects & Products',
    noProjectsMsg: 'No projects added yet. Please add projects from the admin panel.',
    projectDetailsBtn: 'View Details',

    // Media section
    mediaSectionTitle: 'Media & Archive',

    // Footer
    footerRights: '© 2026 TUFAN. All rights reserved.',
    footerManage: 'Management',

    // Application Modal
    appModalTitle: 'Application Form',
    appsClosed: 'Applications Are Temporarily Closed',
    appsClosedDesc: 'Thank you for your interest in the TUFAN Electromobile team. We are not accepting new applications at this time.',
    close: 'Close',
    fieldFirstName: 'First Name',
    fieldFirstNamePlaceholder: 'Your first name',
    fieldLastName: 'Last Name',
    fieldLastNamePlaceholder: 'Your last name',
    fieldPhone: 'Phone Number',
    fieldEmail: 'E-mail',
    fieldFaculty: 'Faculty',
    fieldFacultyPlaceholder: 'Your faculty',
    fieldDepartment: 'Department',
    fieldDepartmentPlaceholder: 'Your department',
    fieldClass: 'Year',
    fieldClassPlaceholder: 'Select your year',
    fieldTeam: 'Which team would you like to join?',
    fieldTeamPlaceholder: 'Select a team',
    noActiveTeams: 'No active teams at the moment.',
    fieldReason: 'Why Did You Choose TUFAN?',
    fieldReasonPlaceholder: 'Why do you want to be part of TUFAN?',
    fieldAboutMe: 'About Yourself',
    fieldAboutMePlaceholder: 'Tell us a little about yourself...',
    submitBtn: 'Submit Application',
    submittingBtn: 'Submitting...',

    // Validation errors
    errFirstName: 'First name is required.',
    errLastName: 'Last name is required.',
    errPhoneLength: 'Phone number must be 11 digits.',
    errPhoneStart: 'Phone number must start with 05.',
    errEmail: 'Please enter a valid email address.',
    errFaculty: 'Faculty is required.',
    errDepartment: 'Department is required.',
    errClass: 'Please select your year.',
    errTeam: 'Please select a team.',
    errRequired: 'This field is required.',
    errSubmit: 'An error occurred while submitting. Please try again.',
    errServer: 'An error occurred while connecting to the server.',
  },
};
