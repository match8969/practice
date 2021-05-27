// console.log("index.js: loaded");

function main() {

    // var rrr = fetchUserInfo("js-primer-example");
    // NOTE: fetchUserInfoのreturn(response.json())　はPromise型なのに、なぜかthenでチェーンできてないっぽい。
    //　なので、createViewまでうまくいってなそう。
    fetchUserInfo("js-primer-example")
        // ここではJSONオブジェクトで解決されるPromise
        .then((userInfo) => createView(userInfo))
        // ここではHTML文字列で解決されるPromise
        .then((view) => displayView(view))
        // Promiseチェーンでエラーがあった場合はキャッチされる
        .catch((error) => {
            console.error(`エラーが発生しました (${error})`);
        });
}

// async function main() {
//     try {
//         const userInfo = await fetchUserInfo("js-primer-example");
//         const view = createView(userInfo);
//         displayView(view);
//     } catch (error) {
//         console.error(`エラーが発生しました (${error})`);
//     }
// }

function fetchUserInfo(userId){

    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    // arrow :
    .then(response =>{
        if(response.ok){
            // 200
            console.log("200!!");
            console.log("response.json", response.json());
            return response.json();
        }else{
            // 200以外
            // console.log(response.status);
            return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
        }

    });
}

function createView(userInfo) {
    return escapeHTML`
                <h4>${userInfo.name} (@${userInfo.login})</h4>
                <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
                <dl>
                    <dt>Location</dt>
                    <dd>${userInfo.location}</dd>
                    <dt>Repositories</dt>
                    <dd>${userInfo.public_repos}</dd>
                </dl>
                `;

}

function displayView(view){
    const result = document.getElementById('result');
    result.innerHTML = view;
}


function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}