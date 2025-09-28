import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetail } from './assignment-detail/assignment-detail';


import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { Rendu } from "../shared/rendu";
import { NonRendu } from "../shared/non-rendu";

import { Assignment } from './assignment.model';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-assignments',
  imports: [MatDividerModule, DatePipe, Rendu, NonRendu,
    MatFormFieldModule, MatInputModule, MatListModule, FormsModule, MatButtonModule,
    MatDatepickerModule, AssignmentDetail
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments implements OnInit {

  ajoutActive=false
  nomAssignment = "";
  dateDeRendu!: Date;
  assignmentSelectionne?: Assignment;


  assignments = [{
    nom: 'Angular Project',
    dateDeRendu: new Date('2024-12-01'),
    rendu: false
  },
  {
    nom: 'TypeScript Basics',
    dateDeRendu: new Date('2024-11-15'),
    rendu: true
  }];

  ngOnInit() {
    console.log("ngOnInit appelé");
    // Activer le bouton après 3 secondes
    setTimeout(() => {
      this.ajoutActive = true;
    }, 3000);
  }

  getColor(assignment: any) {
    if (assignment.rendu) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onAjouterAssignment(event:any) {
    console.log("Ajout NOM = " + this.nomAssignment + " date = " + this.dateDeRendu);
    
    const nouvelAssignment: Assignment = new Assignment();
    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    console.log(nouvelAssignment);

    // On l'ajoute à la liste
    this.assignments.push(nouvelAssignment);

  }

  onAssignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
}
