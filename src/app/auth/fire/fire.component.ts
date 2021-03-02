import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss'],
})
export class FireComponent implements OnInit {
  // db: firebase.firestore.Firestore;
  db = firebase.firestore();

  constructor() {}

  ngOnInit(): void {
    const tabla = document.getElementById('tabla');
    this.db.collection('materias').onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
      querySnapshot.forEach((doc) => {
        tabla.innerHTML += `
          <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().title}</td>
            <td>${doc.data().grade}</td>
          </tr>
          `;
      });
    });
  }
}
