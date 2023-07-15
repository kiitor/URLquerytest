function getUserinfo() {
    let inputname = document.getElementById('nameinput').value;
    let inputage = document.getElementById('ageinput').value;
    return [inputname, inputage];
  }
  
  function eventListener() {
    // セーブイベントリスナ
    let submit = document.getElementById("submit");
    submit.addEventListener("click", save);
  }
  
  function save() {
    let userdata = getUserinfo();
    console.log(userdata);
    // URLにクエリ文字列を追加
    let currentUrl = window.location.href;
    let cleanUrl = currentUrl.split("?")[0].split("#")[0];
    let namevalue = userdata[0];
    let agevalue = userdata[1];
    let newquery = `name=${namevalue}&age=${agevalue}`;
    let newUrl = cleanUrl + "?" + newquery;
    window.location.href = newUrl;
  }
  
  function userdata() {
    // URLのクエリパラメータを取得
    var queryString = window.location.search;
  
    // クエリパラメータをオブジェクトに変換
    var params = new URLSearchParams(queryString);
  
    // 特定のクエリパラメータの値を取得
    var username = params.get('name');
    var age = params.get('age');
  
    // 取得した値を利用してサイトの表示を変更
    console.log(username);
    console.log(age);
  
    document.getElementById('name').textContent = username + "さん";
    document.getElementById('age').textContent = age + "歳";
  }
  
  window.onload = function() {
    userdata();
    eventListener();
  };
