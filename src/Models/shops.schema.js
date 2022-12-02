const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    shopId: {
        type: "string",
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopLogo: {
        type: String,
        required: true
    },
    shopOwnerId: {
        type: "string",
        required: true,
    },
    settings: {
        type: [{header:{logo: String, shopName: String, isShopNameVisible: Boolean, tagline: String, isTaglineVisible: Boolean, email: String, phoneNumber: String }, welcomeBanner: {}, footer: {address: String, isAddressVisible: Boolean, copyrightMessage: String, isSocialSitesVisible: Boolean, facebookUrl: String, instgramUrl: String, youtubeUrl: String, termsAndConditions: String}, about: {description: String}, team: [{imgUrl: String, name: String, role: String, instaUrl: String, facebookUrl: String, linkdinUrl: String}]}],
        default: [{header:{logo: "https://res.cloudinary.com/aguruprasad/image/upload/v1669717427/woodline/product-images/Logo_2_xastkj.png", shopName: "HRI", isShopNameVisible: true, tagline: "We Care For Your Skin", isTaglineVisible: true, email: 'support@hri.com', phoneNumber: "+91-9848012345" }, welcomeBanner: {}, footer: {address: "7 , Siyag House Gotan Tehsil Merta 342902", isAddressVisible: true, copyrightMessage: "(c) ALL RIGHTS RESERVED | HRI", isSocialSitesVisible: true, facebookUrl: "www.facebook.com", instgramUrl: "www.instagram.com", youtubeUrl: "www.youtube.com", termsAndConditions: "Our policy(return, delivery, etc.)- document file/Company details-image of business proof document/MSME certificate"}, about: {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."}, team: [{profileUrl: "https://res.cloudinary.com/aguruprasad/image/upload/v1669724946/woodline/product-images/about_rzck7b.png", name: "Arushka", role: "DEV", instaUrl: "www.instagram.com", facebookUrl: "www.facebook.com", linkdinUrl: "www.linkdin.com"}]}]
    },
    categorys: {
        type: Array,
        required: true,
        default: [{categoryImg: "https://res.cloudinary.com/aguruprasad/image/upload/v1669871942/woodline/product-images/allProducts_fyituv.png", category: 'All Categorys'}]
    },
    products: {
        type: Array,
        required: true
    },
    upiId: {
        type: String,
    },
    paymentMethod: {
        type: String,
        required: true
    },
    gstNumber: String
})

module.exports = mongoose.model("Shop", ShopSchema)