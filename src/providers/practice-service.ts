import { Injectable } from '@angular/core';

import firebase from 'firebase';

/**
 * Practice サービス
 * 丸パクリ
 */
@Injectable()
export class PracticeService {

  // Firebase インスタンス
  private fdb: firebase.database.Database;
  
  // Firebase接続情報
  private static readonly config = {
    apiKey: "AIzaSyAFRtnubsXxgVsNe4N-ZCOlypmyJQ6GE4E",
    authDomain: "integral4-24674.firebaseapp.com",
    databaseURL: "https://integral4-24674.firebaseio.com",
    storageBucket: "integral4-24674.appspot.com",
    messagingSenderId: "28997175305"
  };
  
  /**
   * 
   */
  constructor() {

    // Initialize Firebase
    firebase.initializeApp(PracticeService.config);
    this.fdb = firebase.database();
  }
  
  writeData(name: string, keyword: string): void {
    let newId = this.fdb.ref().child('items').push().key;
    this.fdb.ref('items/' + newId).set({
        name: name,
        keyword: keyword
    });
  }
  
  getData(okFunc): void {
    let ref = this.fdb.ref("items");
    
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      okFunc(snapshot.val());
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    
  }
  
}