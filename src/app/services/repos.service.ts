import { Injectable } from '@angular/core';


export class Repository {

  name: string;
  star: number;
  note: string;
  link: string;

  constructor(name: string, star: number, note: string, link: string) {
    this.name = name;
    this.star = star;
    this.note = note;
    this.link = link;
  }
};


export interface reposData {
  name: string;
  stargazers_count: number;
  description: string;
  html_url: string;
}


export let repos: Repository[] = []

function readJson() {
  fetch('https://api.github.com/users/bingulhan/repos')
  .then(res => res.json())
  .then((out) => {
      readData(out)

}).catch(err => console.error(err));
}

function readData(data : Array<JSON>) {
   for (var i = 0; i < data.length; i++) {
      let c = data[i] as unknown as reposData

      repos.push(new Repository(c.name, c.stargazers_count, c.description, c.html_url))
   }
   repos.sort((a, b) => b.star - a.star);
   repos = repos.slice(0,10)


}


@Injectable({
  providedIn: 'root'
})

export class ReposService  {

  
  reposList : Repository[]
  constructor() { 

    readJson()
    this.reposList = repos

  }
}
