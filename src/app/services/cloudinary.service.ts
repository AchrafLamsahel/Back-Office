import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  private YOUR_CLOUD_NAME = 'dgsucldvy'
  private cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dgsucldvy/image/upload';
  private uploadPreset = 'Images-Cloud';

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', this.uploadPreset);
    return this.http.post(this.cloudinaryUrl, formData);
  }

  uploadImageTest(image: any): Observable<any> {
    image.append('upload_preset', this.uploadPreset);
    return this.http.post(this.cloudinaryUrl,image)
    //return this.http.post('/api/image/upload', image);
  }
 
}
