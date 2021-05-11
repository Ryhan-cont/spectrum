/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/site/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('./pages/Home.vue'),
                    meta: {pageTitle: 'Home',}
                },
                {
                    path: '/about-us',
                    name: 'AboutUs',
                    component: () => import('./pages/AboutUs.vue'),
                    meta: {pageTitle: 'About Us',}
                },
                {
                    path: '/contact-us',
                    name: 'ContactUs',
                    component: () => import('./pages/ContactUs.vue'),
                    meta: {pageTitle: 'Contact Us',}
                },
                {
                    path: '/booking/:userCat/:roomId/:adult/:children',
                    name: 'Booking',
                    component: () => import('./pages/booking.vue'),
                    meta: {pageTitle: 'Booking',}
                },
            ],
        },

        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import('./pages/auth/Login.vue'),
                    meta: {pageTitle: 'login',}
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            component: () => import('./pages/errors/Error-404'),
        }
    ],
})


export default router
