import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contact: string = ''
  answer: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  submit () {
    const payload = {
      contact: this.contact,
      answer: Number(this.answer)
    }
    console.log(payload)
    if (!payload.contact || !payload.answer) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the form buddy! Otherwise my server is gonna be blown :(',
        icon: 'error'
      })
      return
    }
    axios({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: payload
    })
      .then((response) => {
        Swal.fire({
          title: 'Success!',
          text: response.data.message + '! I\'ll get back to you if your answer is the closest.',
          icon: 'success'
        })
        this.contact = ''
        this.answer = 0
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          title: 'Error!',
          text: 'Sorry, something went wrong! ',
          icon: 'error'
        })
      })
  }

}
