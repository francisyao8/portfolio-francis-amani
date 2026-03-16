import { Component } from '@angular/core';

interface Project {
  id: string;
  name: string;
  company: string;
  domain: string;
  type: string;
  description: string;
  logo: string;
  image: string;
  url: string;
  tags: string[];
  color: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-th-large"></i>Projets</div>
          <h2>Produits que j'ai <span>Construits</span></h2>
          <p>Des solutions réelles déployées pour des milliers d'utilisateurs à travers l'Afrique.</p>
        </div>

        <!-- Filter tabs -->
        <div class="filter-tabs fade-in-up">
          <button class="filter-btn" [class.active]="activeFilter === 'all'" (click)="setFilter('all')">
            Tous les projets
          </button>
          <button class="filter-btn" [class.active]="activeFilter === 'web'" (click)="setFilter('web')">
            Web
          </button>
          <button class="filter-btn" [class.active]="activeFilter === 'mobile'" (click)="setFilter('mobile')">
            Mobile
          </button>
          <button class="filter-btn" [class.active]="activeFilter === 'fintech'" (click)="setFilter('fintech')">
            Fintech
          </button>
        </div>

        <div class="projects-grid">
          <div class="project-card fade-in-up"
               *ngFor="let project of filteredProjects"
               [class.featured]="project.featured">

            <!-- Image Banner -->
            <div class="project-img" [style.background]="project.color">
              <img [src]="project.image" [alt]="project.name" (error)="onImgError($event)" />
              <div class="project-overlay">
                <a [href]="project.url" target="_blank" class="overlay-btn" *ngIf="project.url">
                  <i class="pi pi-external-link"></i>
                  Voir le site
                </a>
              </div>
              <div class="project-type-badge">{{ project.type }}</div>
            </div>

            <!-- Content -->
            <div class="project-content">
              <div class="project-header">
                <img [src]="project.logo" [alt]="project.name + ' logo'" class="project-logo"
                     (error)="onImgError($event)" />
                <div>
                  <h3>{{ project.name }}</h3>
                  <span class="project-company">{{ project.company }}</span>
                </div>
              </div>

              <div class="project-domain">
                <i class="pi pi-tag"></i>{{ project.domain }}
              </div>

              <p class="project-desc">{{ project.description }}</p>

              <div class="project-tags">
                <p-chip *ngFor="let tag of project.tags" [label]="tag"></p-chip>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  activeFilter = 'all';

  projects: Project[] = [
    {
      id: 'cashdash',
      name: 'CashDash',
      company: 'Tornixtech',
      domain: 'Fintech — Transfert d\'argent & Paiement',
      type: 'Web & Mobile',
      description: 'Solution de transfert d\'argent et gestion de paiements. Envoi entre particuliers ou entreprises avec intégration des moyens de paiement locaux (Orange Money, Moov, Wave) et options internationales.',
      logo: 'assets/images/logos/cashdash-logo.jpg',
      image: 'assets/images/projects/cashdash.png',
      url: 'http://www.cashdash.ci',
      tags: ['Angular', 'Spring Boot', 'Ionic', 'PostgreSQL', 'Fintech'],
      color: 'linear-gradient(135deg,#0f1f5c,#2a449e)',
      featured: true,
    },
    {
      id: 'keletick',
      name: 'Keletick',
      company: 'Tornixtech',
      domain: 'Billetterie événementielle & Marketing culturel',
      type: 'Web & Mobile',
      description: 'Plateforme dédiée à la vente de tickets pour des événements en Côte d\'Ivoire. Les organisateurs publient leurs événements, les utilisateurs réservent et paient leurs billets en toute simplicité.',
      logo: 'assets/images/logos/keletick-logo.png',
      image: 'assets/images/projects/keletick.png',
      url: 'http://www.keletick.ci',
      tags: ['Angular', 'Spring Boot', 'Flutter', 'MySQL', 'Billetterie'],
      color: 'linear-gradient(135deg,#1a5276,#117a65)',
      featured: true,
    },
    {
      id: 'onixmail',
      name: 'OnixMail',
      company: 'Tornixtech',
      domain: 'Communication professionnelle & Email Hosting',
      type: 'Web',
      description: 'Hébergement d\'e-mails professionnels avec interface intuitive, gestion de domaines personnalisés, carnet d\'adresses, calendrier intégré et sécurité renforcée. Alternative locale à Google Workspace.',
      logo: 'assets/images/logos/onixmail-logo.jpg',
      image: 'assets/images/projects/cashdash.png',
      url: 'http://www.onixmail.com',
      tags: ['Laravel', 'Angular', 'PostgreSQL', 'Email', 'SaaS'],
      color: 'linear-gradient(135deg,#2c3e50,#3498db)',
      featured: false,
    },
    {
      id: 'flotyshub',
      name: 'FlotyshHub',
      company: 'Tornixtech',
      domain: 'Suivi de flotte & Logistique',
      type: 'Web & Mobile',
      description: 'Gestion de flotte de véhicules intégrant la géolocalisation, le suivi en temps réel, la gestion des alertes et des rapports détaillés de conduite. Idéal pour les entreprises de transport et de livraison.',
      logo: 'assets/images/logos/flotyshub-logo.jpg',
      image: 'assets/images/projects/flotyshub.png',
      url: 'http://www.flotyshub.com',
      tags: ['Angular', 'Spring Boot', 'Maps API', 'IoT', 'Logistique'],
      color: 'linear-gradient(135deg,#1b4f72,#0e6655)',
      featured: false,
    },
    {
      id: 'flowhub',
      name: 'FlowHub',
      company: 'Tornixtech',
      domain: 'Paiement B2B, Finances, Compliance',
      type: 'Web',
      description: 'Plateforme dédiée à la gestion des transferts et paiements interentreprises. Facilite le traitement des virements réguliers vers les fournisseurs avec outils d\'export comptable et gestion de conformité.',
      logo: 'assets/images/logos/flowhub-logo.jpg',
      image: 'assets/images/projects/flowhub.png',
      url: 'http://www.flowhubnetwork.com',
      tags: ['Angular', 'Spring Boot', 'B2B', 'Compliance', 'Fintech'],
      color: 'linear-gradient(135deg,#7d3c98,#1a5276)',
      featured: false,
    },
    {
      id: 'snedai',
      name: 'Snedai Visa',
      company: 'Eburtis',
      domain: 'Administration numérique — Visa ivoirien',
      type: 'Web',
      description: 'Plateforme de pré-enrôlement au visa ivoirien avec espace client de gestion des demandes, documents et réclamations. Interface bilingue (FR/EN), 2400+ clients actifs, 98% de satisfaction.',
      logo: 'assets/images/logos/snedai-logo.png',
      image: 'assets/images/projects/snedai.png',
      url: '',
      tags: ['Angular', 'PrimeNG', 'Spring Boot', 'i18n', 'E-gov'],
      color: 'linear-gradient(135deg,#0f1f5c,#f26e23)',
      featured: true,
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    if (this.activeFilter === 'web') return this.projects.filter(p => p.type.includes('Web'));
    if (this.activeFilter === 'mobile') return this.projects.filter(p => p.type.includes('Mobile'));
    if (this.activeFilter === 'fintech') return this.projects.filter(p => p.domain.toLowerCase().includes('fintech') || p.domain.toLowerCase().includes('paiement'));
    return this.projects;
  }

  setFilter(filter: string): void { this.activeFilter = filter; }

  onImgError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.opacity = '0';
  }
}
