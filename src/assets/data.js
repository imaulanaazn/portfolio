let skillsData = [];
let worksData = [
    {
        id: 1,
        title: 'Furnme',
        descript: 'Sebuah e commerce yang ditujukan untuk pemilik usaha furniture, dengan fitur lengkap dan mudah dipahami pengguna',
        techStack: ['ReactJS', 'Tailwind', 'MongoDB', 'NodeJS', 'ExpressJS'],
        features: ['Authentication', 'Payment gateway', 'Admin dashboard'],
        img: '/images/work-furnme.webp',
        url: 'https://furnme.netlify.app/'
    },
    // {
    //     id: 2,
    //     title: 'StoreGG',
    //     descript: 'Layanan top up voucher game secara online. Kami menawarkan keamanan dan kemudahan top up voucher game apapun hanya dengan sekali tekan',
    //     techStack: ['ReactJS', 'NextJS', 'Tailwind', 'MongoDB', 'NodeJS', 'ExpressJS'],
    //     features: ['Authentication', 'Payment gateway', 'Multistep form', 'Role based action'],
    //     img: '/images/work-thumb2.webp',
    //     url: 'https://storegg-app.netlify.app/'
    // },
    {
        id: 2,
        title: 'Notebook',
        descript: 'Notebook, cara cepat menulis blog. siapapun kapanpun dan dimanapun bisa menulis blog mereka dan membagikannya pada dunia',
        techStack: ['ReactJS', 'NextJS', 'Material UI', 'MongoDB', 'NodeJS', 'ExpressJS'],
        features: ['Authentication', 'CRUD blog'],
        img: '/images/work-notebook.webp',
        url: 'https://notebook-me.vercel.app/'
    },
    {
        id: 3,
        title: 'Topup Gameku',
        descript: 'Layanan top up voucher game secara online. Kami menawarkan keamanan dan kemudahan top up voucher game apapun hanya dengan sekali tekan',
        techStack: ['ReactJS', 'NextJS', 'Tailwind', 'MYSQL', 'NodeJS', 'ExpressJS', 'MaterialUI'],
        features: ['Authentication', 'Payment gateway', 'Multistep form', 'Role based action'],
        img: '/images/work-gameku.png',
        url: 'https://topupgameku.vercel.app/'
    },
    {
        id: 4,
        title: 'Topup Gameku Dashboard',
        descript: 'Dashboard dari website topup voucher game Topup Gameku. dilengkapi dengan fitur CRUD untuk mengelola website',
        techStack: ['ExpressJS', 'Tailwind', 'MaterialUI', 'NodeJS', 'MYSQL'],
        features: ['Authentication', 'CRUD', "Statistic"],
        img: '/images/work-dashboard-gameku.png',
        url: 'https://github.com/imaulanaazn/fe_gameku_adm'
    },
    // {
    //     id: 4,
    //     title: 'StoreGG dashboard',
    //     descript: 'Dashboard dari website topup voucher game StoreGG. dilengkapi dengan fitur CRUD untuk mengelola website',
    //     techStack: ['ExpressJS', 'Bootstrap', 'NodeJS', 'MongoDB'],
    //     features: ['Authentication', 'CRUD'],
    //     img: '/images/work-thumb4.png',
    //     url: 'https://storegg-server-production.up.railway.app'
    // },
    {
        id: 5,
        title: 'Topup Gameku Bot',
        descript: 'Telegram bot untuk memenuhi kebutuhan top up dengan praktis melalui chat bot telegram. Dapat bekerja dalam jaringan lambat',
        techStack: ['Express JS', 'Grammy Bot'],
        features: ['Authentication', 'CRUD'],
        img: '/images/work-gameku-bot.png',
        url: 'https://github.com/imaulanaazn/topup_gameku_bot'
    },
    {
        id: 6,
        title: 'Hairnic',
        descript: 'An e-commerce selling natural & organic hair shampoo for healthy hair',
        techStack: ['PHP', 'Javascript', 'HTML', 'Bootstrap'],
        features: ['Authentication', 'Session Based Cart', "CRUD"],
        img: '/images/work-hairnic.png',
        url: 'https://hairnic.infinityfreeapp.com/'
    },
    {
        id: 7,
        title: 'Web Arsip',
        descript: 'A website for managing letter (Incoming, Outgoing, Disposition, Letter Composing)',
        techStack: ['PHP', 'Laravel', 'Blade Template', 'MYSQL'],
        features: ['Authentication', 'Dashboard', "CRUD", "Role Based Access"],
        img: '/images/work-web-arsip.png',
        url: 'https://web-arsip.zeabur.app/'
    }
]

export {skillsData, worksData};