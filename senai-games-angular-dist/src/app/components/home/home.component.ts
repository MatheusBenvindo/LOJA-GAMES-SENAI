import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface para tipagem do Bootstrap
interface WindowWithBootstrap extends Window {
  bootstrap?: any;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Inicializar o carrossel do Bootstrap após o carregamento do componente
    setTimeout(() => {
      const carouselElement = document.getElementById('carouselExampleIndicators');
      const windowWithBootstrap = window as WindowWithBootstrap;
      
      if (carouselElement && typeof window !== 'undefined' && windowWithBootstrap.bootstrap) {
        new windowWithBootstrap.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          wrap: true
        });
      }
    }, 100);
  }
}
