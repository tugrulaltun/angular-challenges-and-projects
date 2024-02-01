import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) {}

  updateProfile(email: string, avatarFile: File) {
    const emailUpdate$ = this.http.post('/api/updateEmail', { email });
    const avatarUpdate$ = this.uploadAvatar(avatarFile);

    forkJoin([emailUpdate$, avatarUpdate$]).subscribe({
      next: ([emailResponse, avatarResponse]) => {
        // Both requests have completed successfully
        // Update the UI accordingly
      },
      error: (error) => {
        // One or both requests failed
        // Handle the error (e.g., show an error message)
      },
    });
  }

  uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('avatar', file);
    return this.http.post('/api/uploadAvatar', formData);
  }
}
