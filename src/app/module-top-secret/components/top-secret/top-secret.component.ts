import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { TopSecretService } from '../../services/top-secret/top-secret.service';

@Component({
  selector: 'top-secret',
  templateUrl: './top-secret.component.html',
  styleUrls: ['./top-secret.component.scss']
})
export class TopSecretComponent implements OnInit {

  claims=null;
  busy: boolean;

  constructor(private authService: AuthService, private topSecretService: TopSecretService, private spinner: NgxSpinnerService) {
    debugger;
  }

  ngOnInit() { 
    debugger;   
    this.busy = true;
    this.spinner.show();
    this.topSecretService.fetchTopSecretData(this.authService.authorizationHeaderValue)
    .pipe(finalize(() => {
      this.spinner.hide();
      this.busy = false;
    })).subscribe(
    result => {         
      this.claims = result;
   });
  }
}
