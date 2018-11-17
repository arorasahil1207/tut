import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hospitalityquiz',
  templateUrl: './hospitalityquiz.component.html',
  styleUrls: ['./hospitalityquiz.component.css']
})
export class HospitalityquizComponent implements OnInit {
responses
perquestion //variable use to display one question at a time 
questionNo=0  //counter for question
count
usersubmission={}
originalanswersheet={}
useranswer=[]  //bind with ng-model here

  constructor(private hotelservice:HotelService) { }

  ngOnInit() {
    this.getHotelView()
    
  }

  nextQuestion(){
    
    this.useranswer=null
    this.questionNo++
    this.perquestion=this.responses[this.questionNo]
  }

  uservalue 
  onSelectionChange(uservalue){
                this.usersubmission[this.perquestion.question] =uservalue
                this.uservalue=uservalue
                console.log(uservalue,"ye print ho rha hai ");
                

  }
  getHotelView(){
    this.hotelservice.getHospitalQuiz()
    .subscribe((responses)=>{
      this.responses=responses
      this.perquestion =this.responses[this.questionNo]
      this.count=this.responses.length
    
      this.responses.forEach(element => {
        this.originalanswersheet[element["question"]]=element["question"]
        this.originalanswersheet[element["question"]]=element["answer"]
        console.log(element['question']);
        console.log(element['answer']);
        
        
      });
    })
    
  }
//when user click submit button
  submit(){
console.log(this.originalanswersheet,"this is the original answer sheet")
console.log(this.originalanswersheet['answer']);
console.log(this.usersubmission,"this is user answer sheet")
  }

}
