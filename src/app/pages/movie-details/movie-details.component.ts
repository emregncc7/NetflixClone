import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }
  
  movieDetails: any;
  
  ngOnInit(): void {
    const movieId = this.router.snapshot.paramMap.get('id');
    if (movieId) {
      this.getMovie(movieId);
    }
  }

  getMovie(id: string): void {
    this.service.getMovieDetails(id).subscribe(
      (result) => {
        console.log('Movie Details:', result);
        this.movieDetails = result;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  handleImageError(event: any) {
    const imgElement = event.target as HTMLImageElement;
    console.error('Image load error:', imgElement.src);
    imgElement.src = 'assets/img/notfound.jpg';
  }
}
