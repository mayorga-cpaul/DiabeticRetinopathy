import { Component, OnInit } from '@angular/core';
import { DoctorViewHistorialAnalisisPage } from '../doctor-view-historial-analisis/doctor-view-historial-analisis.page';
import { Router } from '@angular/router';
import { ManagementService } from 'src/app/services/management.service';
import { LocalStorageRepository } from 'src/app/repository/LocalStorageRepository';
import { MetadataUser } from 'src/app/models/auth/MetadataUser';
import { UserbyDoctor } from 'src/app/models/results/UserMininal';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.page.html',
  styleUrls: ['./doctor-view.page.scss'],
})
export class DoctorViewPage implements OnInit {

 public ListPacients: UserbyDoctor[];

  constructor(
    private router: Router,
    private managueService: ManagementService,
    private localRepo: LocalStorageRepository) {

      const doctorID = localRepo.getData<MetadataUser>('AuthUser').data.userId;
      managueService.getPacients(doctorID).subscribe({
        next: (response) => {
         this.ListPacients = response;
          
        },
        error: (error) => {
          console.log(error);
          
        }
      })
  }

  ngOnInit() {
  }

 
  public results = [];

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.ListPacients.filter((d) => d.userName.toLowerCase().indexOf(query) > -1);
  }

  public IrHistorialDiagnostico(userID: number) {
    const doctorID = this.localRepo.getData<MetadataUser>('AuthUser').data.userId;
    this.managueService.getHistoryPacient(doctorID,userID).subscribe((response) => {

      const dataResponse = JSON.stringify(response);
      console.log(dataResponse);
      
      this.router.navigate(['historialAnalisis'],{queryParams:{data: dataResponse }});
    })
   
  }

}
