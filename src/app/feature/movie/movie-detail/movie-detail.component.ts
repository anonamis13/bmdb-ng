import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = new Movie();
  title: string = "Movie-Detail";
  id: number = 0;
  movieId: number = 0;
  credits: Credit[] = [];

  constructor(private movieSvc: MovieService,
              private creditSvc: CreditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.movieId = parms["id"]);
    this.movieSvc.get(this.movieId).subscribe(jr => {
      this.movie = jr.data as Movie;
      console.log("Movie Found! ", this.movie);
    });
    this.creditSvc.getAllByMovieId(this.movieId).subscribe(
      jr => {
        this.credits = jr.data as Credit[];
        console.log(this.credits);
    });
  }

  delete() {
    this.movieSvc.delete(this.movie.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting movie: ", this.movie);
      }
      else {
        console.log("Movie Deleted: ", this.movie);
        this.router.navigateByUrl("/movie/list");
      }
    });
  }

}
