import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private service: MovieApiServiceService) { }
  
  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl('')  // Default empty string instead of null
  });

  ngOnInit(): void {
  }

  submitForm() {
    const searchValue = this.searchForm.value.movieName;
    if (searchValue && searchValue.trim() !== '') {
      this.service.getSearchMovie({ movieName: searchValue }).subscribe(
        (result) => {
          console.log('Search Results:', result);
          this.searchResult = result.results;
        },
        (error) => {
          console.error('Search Error:', error);
          this.searchResult = [];
        }
      );
    }
  }

  handleImageError(event: any) {
    const imgElement = event.target as HTMLImageElement;
    console.error('Image load error:', imgElement.src);
    imgElement.src = 'assets/img/notfound.jpg';
  }
}
