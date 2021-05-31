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
// コマンドライン引数をパース
program.parse(process.argv);

const filePath = program.args[0];
fs.readFile(filePath, { encoding: "utf8" },(err, file)=>{
    if(err){
        console.error(err.message);
        // processの終了
        process.exit(1);
        return;
    }
    console.log(file);
});
// console.log(filePath);






