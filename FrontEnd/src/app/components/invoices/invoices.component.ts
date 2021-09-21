import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from 'src/app/models/invoice';
import { FilesService } from 'src/app/services/files.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private invoiceService:FilesService) {
    this.form = this.formBuilder.group({
      file:  ['',[Validators.required],]
    })
   }

  ngOnInit(): void {
  }
  
  savePdf(){

    var input: any = document.getElementById('file');
    var files = input.files[0];
    console.log('Hola');

    var formData = new FormData();
    formData.append("file", files, files.name);

    const file: Invoice = {
      file: formData
    }

    this.invoiceService.saveFile(file).subscribe(data => {
      console.log("Se guardo el PDF exitosamente...");
    })
  }

}
