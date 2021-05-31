// 1.
// console.log("Hello World!");

// 2.
// console.log(process.argv);
// Exec : node main.js one two=three four
// <Process Object> Global Object.
// https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_process

// 3.

// commanderモジュールをprogramオブジェクトとしてインポート
const program = require("commander");
const fs = require("fs");
const marked = require("marked");

// オプションの定義
// GFM: https://github.github.com/gfm/
program.option("--gfm", "GMFを有効にする");
// コマンドライン引数をパース
program.parse(process.argv);
const filePath = program.args[0];

// オプションの取得
const options = program.opts();
const cliOptions = {
    gfm: options.gfm ?? false,
};

fs.readFile(filePath, { encoding: "utf8" },(err, file)=>{
    if(err){
        console.error(err.message);
        // processの終了
        process.exit(1);
        return;
    }
    const html = marked(file, {
        gfm: cliOptions.gfm,
    });
    console.log(html);
    // console.log(file);
});
// console.log(filePath);






