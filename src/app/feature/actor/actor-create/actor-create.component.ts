import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = "Actor-Create";
  actor: Actor = new Actor();
  submitBtnTitle: string = "Create";

  constructor(private actorSvc: ActorService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.actorSvc.create(this.actor).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error creating new actor: ", this.actor);
      }
      else {
        console.log("Actor Saved: ", this.actor);
        this.router.navigateByUrl("/actor/list");
      }
    });
  }

  backClicked() {
    this.router.navigateByUrl("/actor/list");
  }

}
