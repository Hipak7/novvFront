//webpack//webpack cli

var webpack=require ('webpack');
var path=require('path');

module.exports={
    entry:{
        'index':'./src/index.js'
    },
    output:{
        //path.resolve path.join
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    module:{
        rules:[//multiple rules//inside relate different
            {//babel use garera es6,7 es5, broser compatible
                //use babel on which files
                test:/\.js$/,
                exclude:/node_modules/,
                use:'babel-loader'
    
            }
        ]
    }

}   

