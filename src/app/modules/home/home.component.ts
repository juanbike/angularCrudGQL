import { Component, OnInit } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { map, of } from 'rxjs';
import { GET_Fruits } from '../gql/fruits-query';
import { Fruits } from '../interface/fruits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private apollo: Apollo){}

   allFruits$= Observable<Fruits[]> = of([]);

  
  ngOnInit(): void{
    this.allFruits$ = this.apollo.
    watchQuery<{allFruits: Fruits[]}>({query: GET_Fruits})
    .valueChanges.pipe(map((result) => result.data.allFruits));
  }
}
