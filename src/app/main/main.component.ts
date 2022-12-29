import { Component, OnInit } from '@angular/core';
import { Repository, ReposService } from '../services/repos.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  name = "BingulHan";

  repList : Repository[];
  discordOnlineMemberCount! : number;
  discordTotalMemberCount! : number;

  constructor(private reposService : ReposService) {
    //readJson()
    this.repList = reposService.reposList
    fetch("https://discordapp.com/api/guilds/732983779110551622/widget.json").then(response => response.json()).then(out => {
       this.discordOnlineMemberCount = out.members.length; 
    })


  }

}
