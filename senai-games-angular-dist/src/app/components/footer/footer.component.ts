import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  // Método para voltar ao topo da página
  voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Mostrar/esconder botão "Voltar ao Topo" baseado na posição de rolagem
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const voltarTopoBtn = document.getElementById('voltar-topo');
    if (voltarTopoBtn) {
      if (window.scrollY > 300) {
        voltarTopoBtn.style.display = 'block';
      } else {
        voltarTopoBtn.style.display = 'none';
      }
    }
  }
}
