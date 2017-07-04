var webpack = require("webpack");
var path = require("path");
var pathMap = require('./src/pathmap.json');
var srcDir = path.resolve(process.cwd(), 'src');
var nodeModPath = path.resolve(__dirname, './node_modules');
module.exports = {
    entry: {
        swiper:"./src/js/swiper.min.js",
        index:"./src/js/index.js",
        header_footer:"./src/js/header_footer.js",
        register:"./src/js/register.js",
        login:"./src/js/login.js",
        newUserGuide:"./src/js/newUserGuide.js",
        netLoanClass:"./src/js/netLoanClass.js",
        loans:"./src/js/loans.js",
        activityCenter:"./src/js/activityCenter.js",
        aboutUs_nav:"./src/js/aboutUs_nav.js",
        about_team:"./src/js/about_team.js",
        about_accompany:"./src/js/about_accompany.js",
        about_partners:"./src/js/about_partners.js",
        about_joinus:"./src/js/about_joinus.js",
        transfer:"./src/js/transfer.js",
        riskControl:"./src/js/riskControl.js",
        userCenter_left:"./src/js/userCenter_left.js",
        userCenter_myAccount_accountSummary:"./src/js/userCenter_myAccount_accountSummary.js",
        userCenter_myAccount_transactionDetail:"./src/js/userCenter_myAccount_transactionDetail.js",
        userCenter_myAccount_recharge:"./src/js/userCenter_myAccount_recharge.js",
        userCenter_myAccount_withdraw:"./src/js/userCenter_myAccount_withdraw.js",
        userCenter_myAccount_settings:"./src/js/userCenter_myAccount_settings.js",
        userCenter_myInvest_investHistory:"./src/js/userCenter_myInvest_investHistory.js",
        userCenter_myInvest_hPlan:"./src/js/userCenter_myInvest_hPlan.js",
        userCenter_myChild_cashFlow:"./src/js/userCenter_myChild_cashFlow.js",
        userCenter_myChild_investRecord:"./src/js/userCenter_myChild_investRecord.js",
        userCenter_coupon:"./src/js/userCenter_coupon.js",
        userCenter_myChild_withdraw:"./src/js/userCenter_myChild_withdraw.js",
        userCenter_myChild_settings:"./src/js/userCenter_myChild_settings.js",
        userCenter_myInvest_transfer:"./src/js/userCenter_myInvest_transfer.js",
        userCenter_myBorrow_borrowHistory:"./src/js/userCenter_myBorrow_borrowHistory.js",
        userCenter_myBorrow_recentPayments:"./src/js/userCenter_myBorrow_recentPayments.js",
        userCenter_webNotice:"./src/js/userCenter_webNotice.js",
        userCenter_recommend:"./src/js/userCenter_recommend.js",
        userCenter_openAccount:"./src/js/userCenter_openAccount.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    resolve: {
        extensions: ['.js',"",".css"],
        root: [srcDir,nodeModPath],
        alias: pathMap,
        publicPath: '/'
    }
}