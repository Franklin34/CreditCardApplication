import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public message:string | any;
  public progress:number | any;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files: File | any) => {
    if(files.lenght === 0){
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);

    this.http.post('https://localhost:44335/api/Files/', formData, { reportProgress:true,observe:'events'})
      .subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          var any:number| any  = event.total;
          this.progress = Math.round(100 * event.loaded/any);
     
          
        }
        else if(event.type ===  HttpEventType.Response){
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }

      })
    
  }
}
