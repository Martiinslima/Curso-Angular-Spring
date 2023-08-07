import { Component} from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    { _id: '0', name: 'Angular', category: 'Front-end'},
    { _id: '1', name:'Java', category:'Back-end'}
  ];
  // interação das colunas
  displayedColumns = ['name','category'];

}
