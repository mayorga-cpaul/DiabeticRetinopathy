import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private storage: AngularFireStorage) { 

  }

  public uploadImage(file: File, namePaciente: string){
    const filepath = `images/${namePaciente}`
    const pathRef = this.storage.ref(filepath);

    const uploadTask = this.storage.upload(filepath,file);

    return new Observable<string>((observer) => {
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          pathRef.getDownloadURL().subscribe((url) => {
            observer.next(url);
            observer.complete();
          })
        })
      ).subscribe()
    });
  }
}
