console.log("Example service has")
class Repository {
	constructor(name, star, note, link) {
	   this.name = name;
       this.star = star;
       this.note = note;
       this.link = link;
	}
}
var table = document.getElementById("tableId")

if (table == null) {
    console.log("table is null")
}

var repos = []

function setRepos(out)  {
    for (var i = 0; i < 10; i++) {
        var star = out[i].stargazers_count;
        var name = out[i].name;
        var description = out[i].description;
        var url = out[i].html_url;
        var repo = new Repository(name, star, description, url)
        repos[repos.length] = repo
    }

    showRepos(repos)
}

function showRepos(repos) {
    console.log("Repos: ")
    for (repo in repos) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.scope = "row"

        var starTd = document.createElement("td");
        starTd.style.fontSize = "20px";
        starTd.appendChild(document.createTextNode(repo.star))

        var nameTd = document.createElement("td");
        nameTd.style.fontSize = "20px";
        nameTd.appendChild(document.createTextNode(repo.name))

        
        var noteTd = document.createElement("td");
        noteTd.style.fontSize = "20px";
        noteTd.appendChild(document.createTextNode(repo.note))

        var urlTd = document.createElement("td");
        urlTd.style.fontSize = "20px";
        urlTd.appendChild(document.createTextNode(repo.url))



        tr.appendChild(th)
        tr.appendChild(starTd)
        tr.appendChild(nameTd)
        tr.appendChild(noteTd)
        tr.appendChild(urlTd)
        //table.appendChild(tr)
        console.log("eklendi!")

    }
    console.log(repos)
}

fetch('https://api.github.com/users/bingulhan/repos')
    .then(res => res.json())
    .then((out) => {
        setRepos(out)
}).catch(err => console.error(err));
