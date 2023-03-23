import moment from "moment";

export const headerData = [
  { id: 1, title: "store", linkTo: "/store" },
  { id: 2, title: "Mac", linkTo: "/mac" },
  { id: 3, title: "Iphone", linkTo: "/iphone" },
  { id: 4, title: "Samsung", linkTo: "/samsung" },
  { id: 5, title: "Microsoft", linkTo: "/microsoft" },
  { id: 6, title: "Huawei", linkTo: "/huawei" },
  { id: 7, title: "Airpod", linkTo: "/airpods" },
  { id: 8, title: "Watch", linkTo: "/watch" },
  { id: 9, title: "Accessories", linkTo: "/accessories" },
  { id: 10, title: "Support", linkTo: "/support" },
];

export const searchContaineDate = [
  { id: 1, title: "visting an Am store FAQ", linkTo: "/" },
  { id: 2, title: "airPod", linkTo: "/" },
  { id: 3, title: "Iphone", linkTo: "/" },
  { id: 4, title: "HeadPhone", linkTo: "/" },
  { id: 5, title: "Samsung", linkTo: "/" },
  { id: 6, title: "Gift", linkTo: "/" },
];

export const appleEeventCard = [
  {
    id: 1,
    title: "Apple Shopping Event",
    desc: "From November 25 to 28, get an Apple Gift Card when you buy an eligible product.",
    linkText: "Get an early look",
    image: "/assets/homeImages/hero_2022.jpg",
  },
];

export const heroAirpod = [
  {
    id: "airpod-3nd-0012",
    appleIcon: <i class='fa-brands fa-apple'></i>,
    title: "The best Aipods",
    desc: "feel the best music quality like your in the cincert",
    image: "/assets/homeImages/SeekPng.com_airpods-png_2982109.png",
    iconsTitle: "common used in",
    iconsDesc: "connect only with bluethooth",
    call: <i class='fa-solid fa-phone'></i>,
    music: <i class='fa-solid fa-music'></i>,
    mic: <i class='fa-solid fa-microphone'></i>,
    price: 449.0,
  },
];

export const s22title = [
  {
    id: 1,
    miniTitle: "camera",
    camerIcon: <i className='fa-solid fa-angle-down'></i>,
    lgTitle: "Make nights epic with Nightography",
    mdTitle: "Get the big picture",
    cameraImage: "/assets/homeImages/galaxy-s22-ultra_highlights_pro-grade.png",
  },
];

export const s22backCamera = [
  {
    id: 1,
    desc: "With the massive pixel sensors and shape-shifting pixels, this phone has our most advanced Pro-grade Camera yet, packing the power of a professional's kit in one handheld device. Shoot into the night without sacrificing quality.",
    frontCameraP: "40MP",
    frontCameraText: "selfie camera",
    frontCameraImage:
      "/assets/homeImages/galaxy-s22-ultra_highlights_pro-grade_front_motion.png",
  },
];

export const s22fronCamera = [
  {
    id: "samsung-s22-256",
    camera1title: "12MP",
    camera1text: "Ultra Wide Camera",
    camera2title: "108MP",
    camera2text: "Wide-angle Camera",
    camera3title: "10MP 3x Optical Zoom",
    camera3text: "Telephoto Camera 2",
    camera4title: "10MP 10x Optical Zoom",
    camera4text: "Telephoto Camera 1",

    frontCameraImage:
      "/assets/homeImages/galaxy-s22-ultra_highlights_pro-grade_back_motion.png",
  },
];

export const heroIntroCardData = [
  {
    id: "headphone-0004-0004",
    price: 203.99,
    linkTo: "headphone-detials",
    textImage: "/assets/homeImages/abg.png",
    image: "/assets/homeImages/a.png",
    title: "new headPhone",
    mainPageLinks: "/airpods",
    mainPageName: "airpods",
    name: "airpod pro",
    // detial show on detail page
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials:
      "Up to 6 hours of listening time with one charge \nUp to 30 hours of total listening time with the case",
    memoryIcons: "Pinch-perfect control.",
    memoryDetials2:
      "The force sensor gives you even more control\n over your entertainment.You can press to play, \npause, and skip through songs, \nor answer and end calls.",
    detialTitle: "airpod pro max",
    newText: "new",
    partOneImage: "/assets/homeImages/airpodMax/partOneImage.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",

    partOneText:
      "Crafted with acoustically engineered memory foam, the ear cushions gently create an immersive seal that is the foundation of incredible sound.",
    desc1:
      "The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.",
    videoBg: "/assets/homeImages/airpodMax/videoBg.mp4",
    videoTitle1: "hight quality",
    videoTitle2: "active nois concellation with transparency mode",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/airpodMax/photo1.jpg",
    photos2: "/assets/homeImages/airpodMax/photo2.jpg",
    photos3: "/assets/homeImages/airpodMax/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/airpodMax/a1.jpg",
        title: "airpod max",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/airpodMax/a2.jpg",
        title: "Smart Case",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "Lightning to USB-C Cable",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpodMax/blue.png",
        name: "blue",
      },
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/airpodMax/black.png",
        name: "black",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/airpodMax/red.png",
        name: "red",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/green.png",
        name: "green",
      },
      {
        id: "airpod-pro-g5",
        image: "/assets/homeImages/airpodMax/silver.png",
        name: "silver",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/airpodMax/1.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpodMax/2.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpodMax/3.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpodMax/4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpodMax/5.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 27 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
];

export const heroIpadCardData = [
  {
    id: "apple-ipad-pro-0004",
    price: 780.99,
    linkTo: "ipad-detials",
    image: "/assets/homeImages/ipad.jpg",
    title: "iPad Pro",
    mainPageLinks: "/mac",
    mainPageName: "ipad",
    name: "ipad pro",
    // *****************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "upto 28hr",
    ramImage: "/assets/ram.png",
    ramDetails: "upto 64GB",
    memoryIcons: <i class='fa-solid fa-sd-card'></i>,
    memoryDetials1: "256GB SSD",
    memoryDetials3: "UPTO",
    memoryDetials4: "5TB SSD",
    detialTitle: "apple ipad pro",
    newText: "new",
    partOneImage: "/assets/homeImages/ipad/a1.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",
    partOneText:
      "iPhone 14 Pro has Dynamic Island, a magical new way to interact with iPhone. And an Always‑On display, which keeps your important info at a glance.",
    desc1:
      "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
    videoBg: "/assets/homeImages/ipad/videoBg.mp4",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/ipad/photo1.webp",
    photos2: "/assets/homeImages/ipad/photo2.jpg",
    photos3: "/assets/homeImages/ipad/photo3.webp",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/ipad/a1.png",
        title: "airpod cover",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "cable charger",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/ipad/2.png",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/ipad/3.png",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/ipad/4.png",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/ipad/1.png",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/ipad/s1.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/ipad/s2.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/ipad/s3.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/ipad/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/ipad/s5.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
];

export const heroCardData = [
  // iphone 14
  {
    id: "iphone14-800400",
    title: "iphone 14",
    slogan: "big and bigger",
    model: "promax 512G",
    image: "/assets/homeImages/iphone_14.png",
    logo: "/assets/appleLogo.png",
    linkTo: "iphone14-details",
    price: 1399.76,
    mainPageLinks: "/iphone",
    mainPageName: "iphone",
    name: "iPhone 14",
    // *****************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "4323 mAh",
    ramImage: "/assets/ram.png",
    ramDetails: "6GB",
    memoryIcons: <i class='fa-solid fa-sd-card'></i>,
    memoryDetials1: "64GB",
    memoryDetials2: "128GB",
    memoryDetials3: "256GB",
    memoryDetials4: "512GB",
    cameraIcon: <i class='fa-solid fa-camera-retro'></i>,
    camerfront: "font camera 12px",
    camerBack: "back camera 24px",
    detialTitle: "iphone 14 pro",
    newText: "new",
    partOneImage: "/assets/homeImages/iphone14/partOneImage.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",
    partOneText:
      "iPhone 14 Pro has Dynamic Island, a magical new way to interact with iPhone. And an Always‑On display, which keeps your important info at a glance.",
    desc1:
      "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
    imageBg: "/assets/homeImages/iphone14/imageBg.jpg",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/iphone14/photo1.jpg",
    photos2: "/assets/homeImages/iphone14/photo2.jpeg",
    photos3: "/assets/homeImages/iphone14/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/iphone14/1.png",
        title: "iphone 14",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "Lightning to USB-C Cable",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone14/1.png",
        name: "deep purple",
      },
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/iphone14/2.png",
        name: "gold",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/iphone14/3.png",
        name: "black",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/iphone14/4.png",
        name: "silver",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone14/s1.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone14/s2.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone14/s3.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone14/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone14/s5.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 27 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  // samsung galaxy s22
  {
    id: "samsung-s22-256",
    title: "galaxy s22",
    slogan: "get memoey upgrade with us",
    model: "s22 256G",
    image: "/assets/homeImages/s22.png",
    linkTo: "samsung-s22-details",
    price: 1255.06,
    mainPageLinks: "/samsung",
    mainPageName: "samsung",
    name: "galaxy s22",
    // *********************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "5000 mAh",
    ramImage: "/assets/ram.png",
    ramDetails: "12GB",
    memoryIcons: <i class='fa-solid fa-sd-card'></i>,
    memoryDetials2: "128GB",
    memoryDetials3: "256GB",
    memoryDetials4: "512GB",
    cameraIcon: <i class='fa-solid fa-camera-retro'></i>,
    camerfront: "font camera 16px",
    camerBack: "main camera 48px",
    detialTitle: "samsung galaxy s22 25G",
    newText: "new",
    partOneImage: "/assets/homeImages/s22/photo.webp",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/homeImages/s22/logo.png",
    partOneText:
      "samsung galaxy s22 has Dynamic Island, a magical new way to interact with iPhone. And an Always‑On display, which keeps your important info at a glance.",
    desc1:
      "Anderoid 11 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
    videoBg: "/assets/homeImages/s22/videoBg.mp4",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/s22/photo1.jpg",
    photos2: "/assets/homeImages/s22/photo2.jpg",
    photos3: "/assets/homeImages/s22/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/s22/1.jpg",
        title: "phone",
      },

      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "Lightning to USB-C Cable",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/s22/1.jpg",
        name: "sliver",
      },
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/s22/2.jpg",
        name: "black",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/s22/3.jpg",
        name: "coffee",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/s22/4.jpg",
        name: "white",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/s22/s1.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/s22/s2.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/s22/s3.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/s22/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  // samsung galaxy z flip 4
  {
    id: "z-flip-4-00004",
    title: "Gallaxy z flip 4",
    slogan: "cool and smarter",
    model: "z flip 4 1T",
    image: "/assets/homeImages/zFlip4.png",
    linkTo: "galaxy-z-flip-4-details",
    price: 1230.88,
    mainPageLinks: "/samsung",
    mainPageName: "samsung",
    name: "galaxy z flip 4",
    // *********************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "5500 mAh",
    ramImage: "/assets/ram.png",
    ramDetails: "12GB",
    memoryIcons: <i class='fa-solid fa-sd-card'></i>,
    memoryDetials2: "128GB",
    memoryDetials3: "256GB",
    memoryDetials4: "512GB",
    cameraIcon: <i class='fa-solid fa-camera-retro'></i>,
    camerfront: "font camera 16px",
    camerBack: "main camera 48px",
    imageBg: "/assets/homeImages/flip/imageBg.webp",
    detialTitle: "Galaxy z flip 4",
    newText: "new",
    partOneImage: "/assets/homeImages/flip/1.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/homeImages/s22/logo.png",
    partOneText:
      "Galaxy devices give you more ways to connect and the freedom to make your experience exactly how you want it..",
    desc1:
      "Flexibility has never been so strong. An IPX8 rating makes Flip4 the only water-resistant foldable smartphone.2 Its scratch-defying front and back covers are made of the toughest glass on a foldable device: Corning® Gorilla® Glass Victus™+. Meanwhile, the hinge is caged in lightweight Armor Aluminum, the strongest in the mobile industry, and Ultra Thin Glass protects the Main Screen, fold after fold.",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/flip/photo1.webp",
    photos2: "/assets/homeImages/flip/photo2.jpg",
    photos3: "/assets/homeImages/s22/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/flip/1.png",
        title: "phone",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "Lightning to USB-C Cable",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/flip/1.webp",
        name: "blue",
      },
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/flip/2.webp",
        name: "gold",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/flip/3.webp",
        name: "black",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/flip/4.webp",
        name: "purple",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/flip/s1.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/flip/s2.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/flip/s3.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/flip/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  // apple watch ultra
  {
    id: "apple-watch-ultra-0004",
    title: "Apple Watch ultra",
    slogan: "adventure awaits",
    model: "s8",
    image: "/assets/homeImages/w.jpg",
    logo: "/assets/appleLogo.png",
    linkTo: "apple=watch-ultra-details",
    price: 679.3,
    mainPageLinks: "/watch",
    mainPageName: "watches",
    name: "apple watch s8",
    // *********************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "Up to \n 60hrs \n on low power settings",
    memoryIcons: <i class='fa-solid fa-droplet'></i>,
    memoryDetials2: "Water resistance 100m*",
    imageBg: "/assets/homeImages/watch/imageBg.jpg",
    detialTitle: "apple watch ultra",
    newText: "new",
    partOneImage: "/assets/homeImages/watch/watch.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",
    partOneText:
      "Galaxy devices give you more ways to connect and the freedom to make your experience exactly how you want it..",
    desc1:
      "Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life,1 the freedom of cellular,2 and three specialized bands made for athletes and adventurers of all kinds.",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/watch/photo1.jpg",
    photos2: "/assets/homeImages/watch/photo2.webp",
    photos3: "/assets/homeImages/watch/photo3.png",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/watch/b1.jpg",
        title: "watch",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/watch/b2.jpg",
        title: "handle",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "USB-C Cable (1m)",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/watch/1.jpg",
        name: "color 1",
      },
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/watch/2.jpg",
        name: "color 2",
      },
      {
        id: "airpod-pro-g2",
        image: "/assets/homeImages/watch/3.jpg",
        name: "color 3",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/watch/4.jpg",
        name: "color 4",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/watch/5.jpg",
        name: "color 5",
      },
      {
        id: "airpod-pro-g6",
        image: "/assets/homeImages/watch/6.jpg",
        name: "color 6",
      },
      {
        id: "airpod-pro-g7",
        image: "/assets/homeImages/watch/7.jpg",
        name: "color 7",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/watch/s1.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/watch/s2.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/watch/s3.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/watch/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/watch/s5.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  // apple airpod 3nd generation
  {
    id: "airpod-3nd-0012",
    title: "AirPods",
    slogan: "3rd generation",
    model: "From $169",
    image: "/assets/homeImages/airpod.png",
    logo: "/assets/homeImages/appleLogo.png",
    linkTo: "airpod-details",
    price: 245.8,
    mainPageLinks: "/airpods",
    mainPageName: "airpods",
    name: "airpod",
    // *********************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials:
      "Up to 6 hours of listening time with one charge \nUp to 30 hours of total listening time with the case",
    memoryIcons: "Pinch-perfect control.",
    memoryDetials2:
      "The force sensor gives you even more control\n over your entertainment.You can press to play, \npause, and skip through songs, \nor answer and end calls.",
    videoBg: "/assets/homeImages/airpod/videoBg.mp4",
    detialTitle: "apple airpod \n3nd (generation)",
    newText: "new",
    partOneImage: "/assets/homeImages/airpod/a2.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",
    partOneText:
      "Galaxy devices give you more ways to connect and the freedom to make your experience exactly how you want it..",
    desc1:
      "Music on a more personal note. Adaptive EQ automatically tunes music to your ears. Inward-facing microphones detect what you’re hearing, then adjust low and midrange frequencies to deliver the rich details in every song, customized for you in real time.",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/airpod/photo1.jpg",
    photos2: "/assets/homeImages/airpod/photo2.jpg",
    photos3: "/assets/homeImages/airpod/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/airpod/a2.png",
        title: "airpod cover",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "cable charger",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpod/2.jpg",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpod/3.jpg",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpod/4.jpg",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/airpod/5.jpg",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/airpod/s1.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpod/s2.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpod/s3.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpod/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/airpod/s5.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  // iphone 13
  {
    id: "iphone13-256-0004",
    title: "iphone 13",
    slogan: "look the worl from a mirror",
    model: "iphone13 256G",
    image: "/assets/homeImages/iphone_13.png",
    logo: "/assets/homeImages/appleLogo.png",
    linkTo: "iphone13-details",
    price: 830.99,
    mainPageLinks: "/iphone",
    mainPageName: "iphone",
    name: "iphone 13",
    // *****************************************
    batteryIcon: <i class='fa-solid fa-battery-half'></i>,
    batteryDetials: "4023 mAh",
    ramImage: "/assets/ram.png",
    ramDetails: "6GB",
    memoryIcons: <i class='fa-solid fa-sd-card'></i>,
    memoryDetials1: "64GB",
    memoryDetials2: "128GB",
    memoryDetials3: "256GB",
    memoryDetials4: "512GB",
    cameraIcon: <i class='fa-solid fa-camera-retro'></i>,
    camerfront: "font camera 12px",
    camerBack: "back camera 24px",
    detialTitle: "iphone 13",
    newText: "new",
    partOneImage: "/assets/homeImages/iphone14/partOneImage.png",
    partOneTitle: "exclusive products",
    partOneLogo: "/assets/appleLogo.png",
    partOneText:
      "iPhone 14 Pro has Dynamic Island, a magical new way to interact with iPhone. And an Always‑On display, which keeps your important info at a glance.",
    desc1:
      "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.",
    videoBg: "/assets/homeImages/iphone13/videoBg.mp4",
    videoTitle1: "hight quality",
    videoTitle2: "Crash Detection calls for help when you can’t.",
    videoTitle3:
      "parsonalize this products setting with your favourite setting",
    photos1: "/assets/homeImages/iphone13/photo1.jpg",
    photos2: "/assets/homeImages/iphone13/photo2.jpg",
    photos3: "/assets/homeImages/iphone13/photo3.jpg",
    boxImage: [
      {
        id: "airpod-pro-g1",
        image: "/assets/homeImages/iphone13/1.png",
        title: "iphone",
      },
      {
        id: "airpod-pro-g3",
        image: "/assets/homeImages/airpodMax/a3.jpg",
        title: "cable charger",
      },
    ],
    images: [
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone13/1.png",
        name: "blue",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone13/2.png",
        name: "pink",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone13/3.png",
        name: "black",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone13/4.png",
        name: "light",
      },
      {
        id: "airpod-pro-g4",
        image: "/assets/homeImages/iphone13/5.png",
        name: "red",
      },
    ],
    story: [
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone13/s1.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 28 2022 10:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone13/s2.webp",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 20 2022 19:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone13/s3.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 23 2022 18:33:03 UTC+3:30").fromNow(),
      },
      {
        id: "2323214124",
        image: "/assets/homeImages/iphone13/s4.jpg",
        text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
        time: moment("Mo Nov 10 2022 18:33:03 UTC+3:30").fromNow(),
      },
    ],
  },
  {
    id: "07",
    title: "fitness+",
    slogan: "fiteness for every one",
    model: "now you all need is a phone",
    image: "/assets/homeImages/fitness.jpg",
    logo: "/assets/homeImages/appleLogo.png",
    linkTo: "fitness+",
  },
  {
    id: "08",
    title: "iCard",
    slogan: "Get Up To 3% Dialy Cash Back",
    model: " width every purchase",
    image: "/assets/homeImages/icard.png",
    logo: "/assets/appleLogo.png",
    linkTo: "icard",
  },
];

export const footerPatagraph = [
  {
    id: 1,
    pare: " iPhone 8 or later or Apple Watch Series 3 or later paired with iPhone 6s or later required. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.",
  },
  { id: 2, pare: "A subscription is required for Apple Fitness+." },
  {
    id: 3,
    pare: "Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later.",
  },
  {
    id: 4,
    pare: "To get the newest features, make sure your devices are running the latest software version.",
  },
  {
    id: 5,
    pare: "To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.",
  },
  { id: 6, pare: "Available for qualifying applicants in the United States." },
  {
    id: 7,
    pare: "Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
  },
  {
    id: 8,
    pare: "Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.",
  },
];

export const shopAndLearn = [
  { id: 1, title: "store", linkTo: "/store" },
  { id: 2, title: "mac", linkTo: "/mac" },
  { id: 3, title: "ipad", linkTo: "/ipad" },
  { id: 4, title: "iphone", linkTo: "/iphone" },
  { id: 5, title: "watch", linkTo: "/watch" },
  { id: 6, title: "airpods", linkTo: "/airpods" },
  { id: 7, title: "samsung", linkTo: "/samsung-mobile" },
  { id: 8, title: "acessories", linkTo: "/accessories" },
  { id: 9, title: "support", linkTo: "/support" },
  { id: 10, title: "microsoft", linkTo: "/microsoft" },
];

export const serVices = [
  { id: 1, title: "music+", linkTo: "" },
  { id: 2, title: "tv+", linkTo: "" },
  { id: 3, title: "news", linkTo: "" },
  { id: 4, title: "fitness", linkTo: "" },
  { id: 5, title: "apple arcade", linkTo: "" },
  { id: 6, title: "icloud", linkTo: "" },
  { id: 7, title: "app store", linkTo: "" },
  { id: 8, title: "books", linkTo: "" },
  { id: 9, title: "podcasts", linkTo: "" },
];

export const acount = [
  { id: 1, title: "manage your account", linkTo: "/" },
  { id: 2, title: "create your account" },
];

export const appleStore = [
  { id: 1, title: "find a store", linkTo: "/" },
  { id: 2, title: "genuis bar", linkTo: "/" },
  { id: 3, title: "today at store", linkTo: "" },
  { id: 4, title: "camp", linkTo: "" },
  { id: 5, title: "mobile app", linkTo: "" },
  { id: 6, title: "refurbushid and clearance", linkTo: "" },
  { id: 7, title: "financing", linkTo: "" },
  { id: 8, title: "trade in", linkTo: "" },
  { id: 9, title: "orderr status", linkTo: "" },
  { id: 10, title: "shopping help", linkTo: "" },
];

export const business = [
  { id: 1, title: "with business", linkTo: "" },
  { id: 2, title: "shop for business", linkTo: "" },
];

export const education = [
  { id: 1, title: "for education", linkTo: "" },
  { id: 2, title: "for collages", linkTo: "" },
];

export const healthCate = [
  { id: 1, title: "for health care", linkTo: "" },
  { id: 2, title: "health on apple watch", linkTo: "" },
  { id: 3, title: "health record on smart phones", linkTo: "" },
];

export const appleValue = [
  { id: 1, title: "Accessibility", linkTo: "" },
  { id: 2, title: "Education", linkTo: "" },
  { id: 3, title: "Environment", linkTo: "" },
  { id: 4, title: "Inclusion and Diversity", linkTo: "" },
  { id: 5, title: "Privacy", linkTo: "" },
  { id: 6, title: "Racial Equity and Justice", linkTo: "" },
  { id: 7, title: "Supplier Responsibility", linkTo: "" },
];

export const aboutUs = [
  { id: 1, title: "Newsroom", linkTo: "" },
  { id: 2, title: "Apple Leadership", linkTo: "" },
  { id: 3, title: "Career Opportunities", linkTo: "" },
  { id: 4, title: "Investors", linkTo: "" },
  { id: 5, title: "Ethics & Compliance", linkTo: "" },
  { id: 6, title: "Events", linkTo: "" },
  { id: 7, title: "Contact Apple", linkTo: "" },
];

export const homeStoryData = [
  {
    id: "iphone14-800400",
    title: "about iphone 8",
    image: "/assets/homeImages/iPhone-X.png",
    text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
    time: moment("Mo Nov 27 2022 18:33:03 UTC+3:30").fromNow(),
  },
  {
    id: "iphone13-256-0004",
    title: "about iphone 13",
    image: "/assets/homeImages/iphone13.jpg",
    text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
    time: moment("Mo Nov 27 2022 12:20:03 UTC+3:30").fromNow(),
  },
  {
    id: "airpod-3nd-0012",
    title: "about airpod pro",
    image:
      "/assets/homeImages/portrait-joiyful-carefree-happy-charming-european-woman-with-curly-hairstyle-laughing-out-lou.jpg",
    text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
    time: moment("Mo Nov 27 2022 12:20:03 UTC+3:30").fromNow(),
  },
  {
    id: "samsung-s22-256",
    title: "about galaxy s22 ultra",
    image: "/assets/homeImages/s22-ultra.jpg",
    text: "It's being rumored that the upcoming iPhone 8 will feature a stainless steel band around the smartphone. This is something which Apple brought to the table with the iPhone 4 and iPhone 4s. It looks sleek and would definitely fit well with fans who have been loyal to Apple since the early days.",
    time: moment("Mo Nov 27 2022 12:20:03 UTC+3:30").fromNow(),
  },
];
