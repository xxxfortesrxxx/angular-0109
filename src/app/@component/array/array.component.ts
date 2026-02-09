import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  imports: [],
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})



export class ArrayComponent {

  //arr = [10,20,3,5,8,9,23,657,123,67];

    /*arrData = [4, 5, 6];
    arrData2 = [
      {id: 1, name: 'a'},
      {id: 2, name: 'b'},
      {id: 3, name: 'c'}
    ];

    arrData3 = [
      {id: 1,
      name: 'a',
      userData:[
        {userId: '1'}
      ]
    },
    {id: 2,
      name: 'b',
      userData:[
        {userId: '2'}
      ]
    },
    {id: 3,
      name: 'c',
      userData:[
        {userId: '3'}
      ]
    }];

  //練習2
    players = [
      {userName: '玩家A',
        lev: 10,
        item:[
          {
          itemName:'蘑菇',
          amount: 5
          },
          {
          itemName:'金幣',
          amount: 15
          }
        ]
      },
      {userName: '玩家B',
        lev: 15,
        item:[
          {
          itemName:'龜殼',
          amount: 1
          },
          {
          itemName:'砲彈',
          amount: 15
          }
        ]
      }
    ];*/

  testNum = 1;


  ngOnInit(): void {
    /*let arrayData = [1, 2, 3];

    for (let data of arrayData){
      console.log(data); // TS專屬寫法
    };

    let arr = [10,20,3,5,8,9,23,657,123,67];

    for (let i = 0; i < arr.length; i++) {
      arr[i] == 9 && console.log(i);
    };

    for (let data of this.arrData3){
      for (let user of data.userData) {
        console.log(user.userId);
      }
    };*/

    switch(this.testNum){
      case(1):
        console.log(1);
        break;
      case(2):
        console.log(2);
        break;
      case(3):
        console.log('saas');
        break;
      default:
        console.log('xxx')
    }


    }





}
