import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  studentList = new Array<Student>()

  email:string
  lastName:string
  id: number
  firstName: string
  dni: string
  cohort = 10
  status = 'aaa'
  phone = 'bbb'
  address = 'ccc'
  gender = 'ddd'


  ngOnInit() {
    this.get()
  }

  get() {
    this.studentService.get().subscribe(response => {
      this.studentList = response
      console.log(this.studentList)
    })
  }

  save() {
    var student = new Student()
    student.dni = this.dni
    student.lastName = this.lastName
    student.email = this.email
    student.firstName = this.firstName
    student.cohort = this.cohort
    student.address = this.address
    student.gender = this.gender
    student.status = this.status
    student.phone = this.phone

    this.studentService.save(student).subscribe(() => {
      location.reload()
    })
  }

  delete(id:number) {
    this.studentService.delete(id).subscribe(() => {
      location.reload()
    })
  }

  update() {
    //...
  }
}
