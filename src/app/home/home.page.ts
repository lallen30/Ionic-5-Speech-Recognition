import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public speechRecognition: SpeechRecognition) {}

  checkPermission() {
    this.speechRecognition.hasPermission().then((permission) => {
      if (permission) {
        alert('You have permission for speech recongition');
      } else {
        alert('You do not have permission for speech recongition');
      }
    }, (err) => {
      alert(JSON.stringify(err));
    }
    );
  }

  requestPermission() {
    this.speechRecognition.requestPermission().then((data) => {
      alert(JSON.stringify(data));
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  startListening() {
    this.speechRecognition.startListening().subscribe((speeches) => {
      alert(speeches[0]);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

}
