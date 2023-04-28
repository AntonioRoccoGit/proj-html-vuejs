import { reactive } from "vue";

export const store = reactive({
    navBarLink: {
        "Home": ["esempio1", "esempio2"],
        "Pages": ["esempio1", "esempio2"],
        "Courses": ["esempio1", "esempio2"],
        "Features": ["esempio1", "esempio2"],
        "Blog": ["esempio1", "esempio2"],
        "Shop": ["esempio1", "esempio2"]
    },
    footerLink: [
        {
            name: "Address",
            address: "382 NE 191st St # 87394 Miami, FL 33179-3899",
            number: "+1(305) 547-9909 (9am - 5pm EST,Monday-Friday)",
            mail: "support@maxcoach.com"
        },
        {
            name: "Explore",
            link: ["Start here", "Blog", "About us", "Sucess story", "Courses", "Contact us"],

        },
        {
            name: "Information",
            link: ["Membership", "Purchase guide", "Privacy policy", "Terms of service"]
        }
    ],
    carouselImgArray: [
        {
            img: "03-480x298.jpg",
            price: 0.00,
            title: "Customer-centric info-Tech Strategies",
            lessons: 24,
            students: 769
        },
        {
            img: "04-480x298.jpg",
            price: 19.00,
            title: "Open Programming Courses for Everyone: Python",
            lessons: 17,
            students: 62
        },
        {
            img: "06-480x298.jpg",
            price: 35.00,
            title: "Learn to train your self",
            lessons: 20,
            students: 350
        },
        {
            img: "10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg",
            price: 40.00,
            title: "Learning to write as a Professional Author",
            lessons: 20,
            students: 50
        },
        {
            img: "11-670x450.jpg",
            price: 15.00,
            title: "Unlock all the premium content",
            lessons: "1 month",
            students: 1200
        },
    ],
    ourBlogsImgArray: [
        {
            img: "03-480x325.jpeg",
            type: "artist",
            title: "Pocket-Sized Notebooks Hold Miniature Paintings",
            date: "May 15, 2020",
            views: 603
        },
        {
            img: "01-480x325.jpg",
            type: "artist",
            title: "Brush Strokes Energize Trees in Paintings",
            date: "May 15, 2020",
            views: 688
        },
        {
            img: "02-480x325.jpg",
            type: "artist",
            title: "Connection Between Self-Portraits and Identify",
            date: "May 15, 2020",
            views: 397
        },
    ]
});