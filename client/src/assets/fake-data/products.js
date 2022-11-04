const product_01_image_01 = require('../images/products/Udemy-Python-Learning-Courses-for-Beginners.png')
const product_01_image_02 = require('../images/products/python-course.PNG')
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/javascript.png')
const product_02_image_02 = require('../images/products/python-course.PNG')

const product_03_image_01 = require('../images/products/php.jpg')
const product_03_image_02 = require('../images/products/python-course.PNG')

const product_04_image_01 = require('../images/products/nodejs.jpg')
const product_04_image_02 = require('../images/products/python-course.PNG')

const product_05_image_01 = require('../images/products/react.png')
const product_05_image_02 = require('../images/products/python-course.PNG')

const product_06_image_01 = require('../images/products/html-css.jpg')
const product_06_image_02 = require('../images/products/python-course.PNG')

const product_07_image_01 = require('../images/products/ruby.png')
const product_07_image_02 = require('../images/products/python-course.PNG')

const product_08_image_01 = require('../images/products/laravel.jpg')
const product_08_image_02 = require('../images/products/python-course.PNG')

const product_09_image_01 = require('../images/products/angular.jpg')
const product_09_image_02 = require('../images/products/python-course.PNG')

const product_10_image_01 = require('../images/products/mysql.jpg')
const product_10_image_02 = require('../images/products/python-course.PNG')

const product_11_image_01 = require('../images/products/c-programming.jpg')
const product_11_image_02 = require('../images/products/python-course.PNG')

const product_12_image_01 = require('../images/products/c++.jpg')
const product_12_image_02 = require('../images/products/python-course.PNG')

const products = [
    {
        title: "Learn Python: The Complete Python Programming Course",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "python-course",
        slug: "python-course-01",
    },
    {
        title: "The Complete JavaScript Course 2022: From Zero to Expert!",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "javascript-course",
        slug: "javascript-course",
        
    },
    {
        title: "PHP for Beginners - Become a PHP Master - CMS Project",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "php-course",
        slug: "php-course-01",
    },
    {
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "node-course",
        slug: "node-course-01",

    },
    {
        title: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "react-course",
        slug: "react-course-01",

    },
    {
        title: "Build Responsive Real-World Websites with HTML and CSS",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "htmlcss-course",
        slug: "htmlcss-course-01"
    },
    {
        title: "The Complete Ruby on Rails Developer Course 2022",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ruby-course",
        slug: "ruby-course-01"
    },
    {
        title: "PHP with Laravel for beginners - Become a Master in Laravel",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "laravel-course",
        slug: "laravel-course-01"
    },
    {
        title: "Complete Angular Developer in 2022: Zero to Mastery",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "angular-course",
        slug: "angular-course-01",

    },
    {
        title: "SQL - MySQL for Data Analytics and Business Intelligence",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "sql-course",
        slug: "sql-course-01",
    },
    {
        title: "C Programming For Beginners - Master the C Language",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "c-course",
        slug: "c-course-01",
    },
    {
        title: "Beginning C++ Programming - From Beginner to Beyond",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "c-course",
        slug: "c-course-02",
    },


    // 12 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}
const getProductBySlug = (slug) => products.find(e => e.slug === slug)
const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData