import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahl-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nomsupermarket :string = "Chez Nous";
  lesCategories= [
    {nom:'informatique', image:'/Angular/assets/Images/informatique.jpg'},
    {nom:'alimentation', image:'/Angular/assets/Images/alimentation.jpg'},
    {nom:'vetements', image:'/Angular/assets/Images/habits.png'},
    {nom:'electroménager', image:'/Angular/assets/Images/electromenager.jpg'}
    ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
