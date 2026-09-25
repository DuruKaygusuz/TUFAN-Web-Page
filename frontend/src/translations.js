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

    // Media Items (Default Polaroid gallery fallback)
    mediaItems: [
      {
        id: 1,
        title: 'TEKNOFEST Hackathon 2025',
        date: 'Mayıs 2025',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        description: 'TUFAN Elektromobil ekibi olarak katıldığımız TEKNOFEST 2025 Hackathon etkinliğinde geliştirdiğimiz yerli batarya yönetim yazılımı ve telemetri altyapımızla birincilik ödülüne layık görüldük.'
      },
      {
        id: 2,
        title: 'Elektromobil Şasi Test Etkinliği',
        date: 'Nisan 2025',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        description: 'Yeni nesil karbon fiber şasi testlerimizi başarıyla tamamladık. Aracımızın aerodinamik sürtünme katsayısı ve mukavemet testleri hedeflenen standartların üzerine çıktı.'
      },
      {
        id: 3,
        title: 'Kurumsal Sponsorluk Zirvesi',
        date: 'Mart 2025',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        description: 'Sanayi ortaklarımız ve ana sponsorlarımızla bir araya gelerek TUFAN Elektromobil vizyonunu ve yeni araç konseptimizi tanıttığımız gala organizasyonumuz.'
      },
      {
        id: 4,
        title: 'Otonom Sürüş Çalıştayı',
        date: 'Şubat 2025',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        description: 'Yapay zeka ve bilgisayarlı görü ekibimizin düzenlediği 3 günlük kampüs çalıştayında araç içi görüntü işleme ve şerit takip sistemleri canlı olarak test edildi.'
      },
      {
        id: 5,
        title: 'Yerli İnovasyon Sergisi',
        date: 'Ocak 2025',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        description: 'Kendi geliştirdiğimiz yüksek verimlilikli motor sürücü kartlarımızı ve yerleşik şarj ünitelerimizi üniversitemiz inovasyon sergisinde öğrencilere ve akademisyenlere sunduk.'
      }
    ],

    // Projects section
    projectsSectionTitle: 'Projeler ve Ürünler',
    noProjectsMsg: 'Henüz proje eklenmemiş. Lütfen admin panelinden proje ekleyin.',
    projectDetailsBtn: 'Detayları Görüntüle',

    // Media section
    mediaSectionTitle: 'Medya ve Arşiv',
    mediaDragHint: '← Sürükleyerek inceleyin • Detay için fotoğrafa tıklayın →',
    noMediaMsg: 'Henüz medya veya fotoğraf eklenmemiş.',
    eventDetailTitle: 'Etkinlik Detayı',

    // Footer
    footerRights: '© 2026 TUFAN. Tüm hakları saklıdır.',
    footerManage: 'Yönetim',

    // Application Modal
    appModalTitle: 'Başvuru Formu',
    appsClosed: 'Başvurular Geçici Olarak Kapalıdır',
    appsClosedDesc: 'Thank you for your interest in the TUFAN Electromobile team. We are not accepting new applications at this time.',
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
      {
        id: 1,
        title: 'TEKNOFEST Hackathon 2025',
        date: 'May 2025',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        description: 'Our TUFAN Electromobile team won 1st place at the TEKNOFEST 2025 Hackathon with our custom battery management software and telemetry infrastructure.'
      },
      {
        id: 2,
        title: 'Electromobile Chassis Test',
        date: 'April 2025',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        description: 'Successfully completed structural drag coefficient and durability testing on our next-generation carbon fiber vehicle chassis.'
      },
      {
        id: 3,
        title: 'Corporate Sponsorship Summit',
        date: 'March 2025',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        description: 'Gathered with industry partners and sponsors to present TUFAN Electromobile 2025 roadmap and new vehicle prototype concept.'
      },
      {
        id: 4,
        title: 'Autonomous Driving Workshop',
        date: 'February 2025',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        description: '3-day campus workshop on computer vision and neural networks for in-vehicle lane tracking and real-time obstacle detection.'
      },
      {
        id: 5,
        title: 'Domestic Innovation Expo',
        date: 'January 2025',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        description: 'Showcasing our in-house high-efficiency motor driver PCBs and onboard charger units to students and faculty members.'
      }
    ],

    // Projects section
    projectsSectionTitle: 'Projects & Products',
    noProjectsMsg: 'No projects added yet. Please add projects from the admin panel.',
    projectDetailsBtn: 'View Details',

    // Media section
    mediaSectionTitle: 'Media & Archive',
    mediaDragHint: '← Drag to explore • Click photo for details →',
    noMediaMsg: 'No media or photos added yet.',
    eventDetailTitle: 'Event Details',

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
