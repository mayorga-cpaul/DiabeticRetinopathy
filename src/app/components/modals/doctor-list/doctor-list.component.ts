import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { forkJoin, map, switchMap } from 'rxjs';
import { IData } from 'src/app/Interfaces/IData';
import { Doctor } from 'src/app/models/Doctor';
import { TypeService } from 'src/app/models/enums/TypeService';
import { DoctorMInimal } from 'src/app/models/results/DoctorMinimal';
import { UserMinimal } from 'src/app/models/results/UserMininal';
import { DoctorService } from 'src/app/services/Doctor.Service';
import { DoctorListService } from 'src/app/services/doctorList.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {

  public listDoctors: DoctorMInimal[];

  constructor(private modalController: ModalController, private userService: UserService) {
    userService.GetUserBy<IData<Doctor[]>>(TypeService.ROLE, 'Doctor')
      .pipe(
        switchMap((results) => {
          const doctorRequests = results.data.map((doctor) => {
            return userService.GetUserBy<UserMinimal>(TypeService.ID, doctor.userId);
          });

          return forkJoin(doctorRequests);
        })
      )
      .subscribe((detailedDoctors) => {
        this.listDoctors = detailedDoctors;
      });
  }

  ngOnInit() {
  }

  dimiss() {
    this.modalController.dismiss();
  }

  public assing(doctor: DoctorMInimal) {
    this.modalController.dismiss(doctor);
  }

}
