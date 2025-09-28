import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  imports: [],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})
export class AssignmentDetail {

  @Input() 
  assignmentTransmis?: Assignment;

}