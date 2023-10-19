import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private doctorList: { id: number; name: string }[] = [];

  addDoctorToList(id: number, name: string) {
    this.doctorList.push({ id, name });
  }

  getDoctorList(): { id: number; name: string }[] {
    return this.doctorList;
  }
}
