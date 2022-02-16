import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [
    new Category(1, 'Necklaces', './assets/pics/neck1.jpg'),
    new Category(2, 'Bracelets', './assets/pics/neck2.jpg'),
    new Category(3, 'Earings', './assets/pics/neck3.jpg'),
    new Category(4, 'Rings', './assets/pics/neck4.jpg'),
    new Category(5, 'Scarfs', './assets/pics/neck5.jpg'),
    new Category(6, 'Bags', './assets/pics/neck6.jpg'),
  ];

  constructor(private router: Router) { }

  ngOnInit() {}
  
  openItemsByCategory(catId) {
    this.router.navigate(['items'], { state: catId });
  }

}
