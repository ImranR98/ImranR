import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout'

import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { StudiesComponent } from './studies/studies.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    TypewriterComponent,
    SocialLinksComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    StudiesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
