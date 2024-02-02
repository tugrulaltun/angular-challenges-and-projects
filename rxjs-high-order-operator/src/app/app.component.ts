import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DataService} from "./data.service";
import {from, mergeMap, reduce} from "rxjs";
import {NgForOf} from "@angular/common";

interface TopicObject {
  id: string;
  topic: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-high-order-operator';

  topics = ['TopicA', 'TopicB', 'TopicC'];
  deletionMessage = '';

  constructor(private dataService: DataService) {
  }

  deleteTopic(topic: string) {
    const objectsToDelete: TopicObject[] = this.getObjectsToDeleteForTopic(topic);

    from(objectsToDelete).pipe(
      mergeMap(object => this.dataService.deleteObject(object.topic)),
      reduce((acc, value) => acc && value, true),
    ).subscribe(allDeleted => {
      this.deletionMessage = allDeleted
        ? `All ${topic} have been deleted.`
        : `Error: deletion of some ${topic} failed.`;
    });
  }

  getObjectsToDeleteForTopic(topic: string): TopicObject[] {
    return [
      {id: '1', topic: topic},
      {id: '2', topic: topic},
    ];
  }
}
