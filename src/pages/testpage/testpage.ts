import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { PracticeService } from '../../providers/practice-service';

@Component({
  selector: 'page-testpage',
  providers: [PracticeService],
  templateUrl: 'testpage.html'
})
export class TestPage {
  constructor(public navCtrl: NavController, private practiceService: PracticeService) {
  }
  
  btnTapped(form: NgForm): void {
    this.practiceService.writeData(form.value.name, form.value.keyword); 
    
  }
}
