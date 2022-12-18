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

  constructor(private reposService : ReposService) {
    //readJson()
    this.repList = reposService.reposList
  }

}
