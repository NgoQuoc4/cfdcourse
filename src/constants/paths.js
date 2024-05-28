const COURSE_PATH = "/course";
const PROFILE_PATH = "/profile";
const BLOG_PATH = "/blog";

const PATHS = {
    HOME: "/",
    COURSE: {
        INDEX: COURSE_PATH,
        DETAIL: COURSE_PATH + '/:courseSlug', // /course/khoa-hoc-lap-trinh-frontend-newbie-28
        ORDER: '/course-order/:courseSlug', // /course-order/khoa-hoc-lap-trinh-frontend-newbie-28
    },
    BLOG: {
        INDEX: BLOG_PATH,
        DETAIL: BLOG_PATH + '/:blogSlug'
    },
    PROFILE: {
        INDEX: PROFILE_PATH,
        MY_COURSE: PROFILE_PATH + "/my-course",
        MY_PAYMENT: PROFILE_PATH + "/my-payment"
    },
    PAYMENT: "/payment-method",
    CONTACT: "/contact",
    ABOUT: "/about",
    PRIVACY: "/privacy"
};

export default PATHS;