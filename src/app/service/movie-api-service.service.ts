import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface OmdbResponse {
  Search?: Array<{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }>;
  totalResults?: string;
  Response: string;
}

interface OmdbMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://www.omdbapi.com';
  private apiKey = '406daf91';

  // Yüksek kaliteli banner görselleri için film ID'leri ve görselleri
  private bannerMovies = [
    {
      id: 'tt0468569',
      title: 'The Dark Knight',
      backdrop: '/assets/img/dark-knight.jpg'
    },
    {
      id: 'tt1375666',
      title: 'Inception',
      backdrop: '/assets/img/inception.jpg'
    },
    {
      id: 'tt0167260',
      title: 'The Lord of the Rings: The Return of the King',
      backdrop: '/assets/img/lord-of-the-rings.jpg'
    },
    {
      id: 'tt0133093',
      title: 'The Matrix',
      backdrop: '/assets/img/matrix.jpg'
    }
  ];

  bannerApiData(): Observable<any> {
    const randomBanner = this.bannerMovies[Math.floor(Math.random() * this.bannerMovies.length)];
    
    return this.http.get<OmdbMovieDetails>(`${this.baseUrl}?apikey=${this.apiKey}&i=${randomBanner.id}&plot=full`).pipe(
      map((movie) => ({
        backdrop_path: randomBanner.backdrop,
        original_title: movie.Title,
        overview: movie.Plot,
        id: movie.imdbID
      }))
    );
  }

  trendingMovieApiData(): Observable<any> {
    const trendingSearches = ['2024', 'award', 'best', 'new'];
    const randomSearch = trendingSearches[Math.floor(Math.random() * trendingSearches.length)];
    return this.searchMovies(randomSearch).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  getSearchMovie(data: { movieName: string }): Observable<any> {
    return this.searchMovies(data.movieName).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type
        })) || []
      }))
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<OmdbMovieDetails>(`${this.baseUrl}?apikey=${this.apiKey}&i=${id}&plot=full`).pipe(
      map((movie) => ({
        backdrop_path: movie.Poster,
        poster_path: movie.Poster,
        title: movie.Title,
        overview: movie.Plot,
        release_date: movie.Released,
        vote_average: movie.imdbRating,
        genres: movie.Genre.split(', ').map(genre => ({ name: genre })),
        runtime: movie.Runtime,
        spoken_languages: [{ english_name: movie.Language }],
        director: movie.Director,
        actors: movie.Actors,
        writer: movie.Writer,
        ratings: movie.Ratings,
        boxOffice: movie.BoxOffice,
        production: movie.Production,
        awards: movie.Awards
      }))
    );
  }

  private searchMovies(query: string): Observable<OmdbResponse> {
    return this.http.get<OmdbResponse>(`${this.baseUrl}?apikey=${this.apiKey}&s=${query}&type=movie`);
  }

  // Kategori bazlı film aramaları için özel anahtar kelimeler
  fetchActionMovies(): Observable<any> {
    const actionKeywords = ['action', 'mission impossible', 'die hard', 'james bond'];
    const randomKeyword = actionKeywords[Math.floor(Math.random() * actionKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchAdventureMovies(): Observable<any> {
    const adventureKeywords = ['indiana jones', 'lord of the rings', 'harry potter', 'pirates'];
    const randomKeyword = adventureKeywords[Math.floor(Math.random() * adventureKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchAnimationMovies(): Observable<any> {
    const animationKeywords = ['pixar', 'disney', 'animation', 'dreamworks'];
    const randomKeyword = animationKeywords[Math.floor(Math.random() * animationKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchComedyMovies(): Observable<any> {
    const comedyKeywords = ['comedy', 'hangover', 'superbad', 'bridesmaids'];
    const randomKeyword = comedyKeywords[Math.floor(Math.random() * comedyKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchDocumentMovies(): Observable<any> {
    const documentaryKeywords = ['documentary', 'nature', 'history', 'science'];
    const randomKeyword = documentaryKeywords[Math.floor(Math.random() * documentaryKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchSlinceFictionMovies(): Observable<any> {
    const scifiKeywords = ['star wars', 'star trek', 'alien', 'matrix'];
    const randomKeyword = scifiKeywords[Math.floor(Math.random() * scifiKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }

  fetchThrillerMovies(): Observable<any> {
    const thrillerKeywords = ['thriller', 'psycho', 'silence of the lambs', 'seven'];
    const randomKeyword = thrillerKeywords[Math.floor(Math.random() * thrillerKeywords.length)];
    return this.searchMovies(randomKeyword).pipe(
      map((response: OmdbResponse) => ({
        results: response.Search?.map(movie => ({
          poster_path: movie.Poster,
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year
        })) || []
      }))
    );
  }
}

