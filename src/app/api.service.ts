import { Injectable } from "@angular/core";

interface userData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isAudit: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  tableList = [];
  private usersList = [{email:'mahesh@gmail.com', password:'mahesh', firstName:'mahesh', lastName:'Sainoju', isAudit:true}];
  constructor() {
    for(var i=0; i< 20;i++){
      this.tableList.push({name:`mahesh`+i, date:`09/08/202`+i})
    }
  }

  getTableData() {
    return this.tableList;
  }
  updateUsers(list: userData) {
    this.usersList.push(list);
    console.log('20:::::', this.usersList);
  }
  getUsers() {
    return this.usersList;
  }
  isValidUser(data) {
    let users = this.getUsers();
    let user = users.filter((res) => {
     return res.email == data.email && res.password == data.password;
    });
    return user;
  }
}
