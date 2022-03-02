
/*
let newsElement = function() {
    const node = document.createElement("li");
    const textNode = document.createTextNode("My news")
    node.appendChild(textNode);
    document.getElementById("news-list").appendChild(node);
}
*/


fetch('news.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
// my new code
    let appendData = function(data){
        let myTitle = document.getElementById("news-feed");
        let  myBody = document.getElementById("news-body");
        for(let i = 0; i < data.length; i++){
            let div = document.createElement("ul");
            let li = document.createElement("li");
            div.innerHTML = data[i].firstName;
            li.innerHTML = data[i].lastName;

            myTitle.appendChild(div);
            myBody.appendChild(li);
        }
    }
          
// my new code
/*
        function appendData(data) {
            var mainContainer = document.getElementById("news-feed");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }

*/