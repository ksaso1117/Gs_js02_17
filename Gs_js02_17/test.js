$("main").fadeIn(1000)

// 入力時の日付の取得
// https://www.sejuku.net/blog/30171

// let today = new Date();

// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();

// let inputdate = `${year}.${month}.${day} `
// console.log(inputdate); 


// 行を挿入する関数

// $(function(){
//     $('#tr').each(function(i){
//         $(this).after('id','newtr' + (i+1));
//     });
// }); 

  


function createRow(){
    $('#tr').after(
        '<tr id="newtr"></td>'
    );

    $('#newtr').append(
        '<td id="savedDate"></td>',
        '<td id="savedW"></td>',
        '<td id="savedB"></td>',
        '<td id="savedU"></td>',
        '<td id="savedT"></td>',
        '<td id="savedL"></td>',
        '<td id="savedM"></td>'
    );

}


// 既存データの表示



// クリックアクション
// 保存

$("#save").on("click", function(){
    // const inputdate = `${year}.${month}.${day} `
    const date = $("#date").val();
    const weight = $("#weight").val();
    const bodyfat = $("#bodyfat").val();
    const upperarm = $("#upperarm").val();
    const thigh = $("#thigh").val();
    // const lifeP = $("").val();
    const memo = $("#memo").val();
   
    const savedItems = [weight,bodyfat,upperarm,thigh,memo]
    // const len = savedItems.length; 
    // console.log(date); 
    // console.log(savedItems);

    // ローカルストレージに保存する。

    localStorage.setItem(date, savedItems);

    // if(inputdate.#savedDate == inputdate) {
        
    //     $("#savedDate").append(date);
    //     $("#savedW").append(savedItems[0]);
    //     $("#savedB").append(savedItems[1]);
    //     $("#savedU").append(savedItems[2]);
    //     $("#savedT").append(savedItems[3]);
    //     // $("#savedL").append(savedItems[4]);
    //     $("#savedM").append(savedItems[4]);
 
    // } 
    // else {
        createRow();

        $("#savedDate").append(date);
        $("#savedW").append(savedItems[0]);
        $("#savedB").append(savedItems[1]);
        $("#savedU").append(savedItems[2]);
        $("#savedT").append(savedItems[3]);
        // $("#savedL").append(savedItems[4]);
        $("#savedM").append(savedItems[4]);

    // 入力欄を空にする。Do not work...
        $("#date").html('');
        $("#weight").empty('');
        $("#bodyfat").html('');
        $("#upperarm").html('');
        $("#thigh").html('');
        $("#memo").empty('');
});


    // 取り消し機能

$("#clear").on("click", function(){
    localStorage.clear("");
    $("#newtr").remove();

});



// function add (){
//     const td = document.createElement("td"); 
//     td.innerText = measuredData; 
//     td.classList.add("list-group-item"); 

//     if (todo && todo.completed) {
//     li.classList.add("text-decoration-line-through");
//     }

//     li.addEventListener("contextmenu", function(event){
//     event.preventDefault();
//     li.remove();
//     saveData();
//     });

//     li.addEventListener("click", function(){
//     li.classList.toggle("text-decoration-line-through");
//     saveData(); 
//     });


//     ul.appendChild(li); 
//     input.value = ""; 
//     saveData();
