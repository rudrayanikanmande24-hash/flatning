import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ShowsService } from '../../service/shows.service';

@Component({
  selector: 'app-shows-search',
  templateUrl: './shows-search.component.html',
  styleUrls: ['./shows-search.component.scss']
})
export class ShowsSearchComponent implements OnInit {
 
  serchControl:FormControl<any>=new FormControl()
  constructor(
    private _showService : ShowsService
  ) { }

  ngOnInit(): void {
    this.onSerch()
  }

  onSerch(){
    this.serchControl.valueChanges
     .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val=>{
        return this._showService.fetchSearchShows(val)
      })
     )
     .subscribe({
      next:data=>{
        console.log(data);
     
      }
     })
  }
}
