import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('movieSection') movieSection!: ElementRef;
  
  bannerImage: string = '';
  bannerTitle: string = '';
  bannerOverview: string = '';

  constructor(private service: MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  sciencefictionMovieResult:any = [];
  thrillerMovieResult:any = [];
  
  ngOnInit(): void {
    this.loadBannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  loadBannerData() {
    this.service.bannerApiData().subscribe({
      next: (result) => {
        console.log('Banner Data:', result);
        this.bannerImage = result.backdrop_path;
        this.bannerTitle = result.original_title;
        this.bannerOverview = result.overview;
        console.log('Banner Image Path:', this.bannerImage);
      },
      error: (error) => {
        console.error('Banner data error:', error);
        this.bannerImage = 'assets/img/default-banner.jpg';
      }
    });
  }

  handleImageError(event: any) {
    const imgElement = event.target as HTMLImageElement;
    console.error('Image load error:', imgElement.src);
    imgElement.src = 'assets/img/default-banner.jpg';
  }
  
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result,`trendingresult#`);
      this.trendingMovieResult = result.results;
      
    })
  }

  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.actionMovieResult = result.results;
      
    })
  }
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.adventureMovieResult = result.results;
      
    })
  }
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.animationMovieResult = result.results;
      
    })
  }
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.comedyMovieResult = result.results;
      
    })
  }
  documentaryMovie(){
    this.service.fetchDocumentMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.documentaryMovieResult = result.results;
      
    })
  }
  sciencefictionMovie(){
    this.service.fetchSlinceFictionMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.sciencefictionMovieResult = result.results;
      
    })
  }
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.thrillerMovieResult = result.results;
      
    })
  }

  scrollToMovies() {
    this.movieSection.nativeElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}
