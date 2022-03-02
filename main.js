
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
       // let myTitle = document.getElementById("news-feed");
        //let  myBody = document.getElementById("news-body");
        let articleNews = document.getElementById("news-feed");
        for(let i = 0; i < data.length; i++){
            let p = document.createElement("p");
            //let li = document.createElement("li");
            //ul.innerHTML = data[i].firstName;            
            //li.innerHTML = data[i].lastName;

            p.innerHTML = '<br>'+data[i].firstName +'<br>'+ data[i].lastName 
            
            

            //li.insertAdjacentText('afterend', data[i].lastName);
            //div.insertBefore(data[i].lastName, data[i].lastName);
            //myTitle.appendChild(ul);
            //myBody.appendChild(li);

            articleNews.appendChild(p);
            
           // myTitle.appendChild(ul).insertBefore(myBody.appendChild(li));

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


let navRight = function navigation(name) {
    let a = document.createElement('a');
    a.textContent = name;
    a.className='nav-element';
    a.setAttribute('href','#'+ name)
    return a;
}

// get the nav  menu
const menu = document.querySelector('#right-nav');
// add navigation element
menu.appendChild(navRight('Home'));
menu.appendChild(navRight('Haiti'));
menu.appendChild(navRight('World'));
menu.appendChild(navRight('Society'));
menu.appendChild(navRight('Flashback'));

console.log(menu);


let navleft = function navigation(name) {
    let a = document.createElement('a');
    a.textContent = name;
    a.className='nav-element nav-logo';
    a.setAttribute('href','#home')
    return a;
}

// get the nav  menu
const menuLeft = document.querySelector('#left-nav');
// add navigation element
menuLeft.appendChild(navleft('Haitian News'));


console.log(menuLeft);