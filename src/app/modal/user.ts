export class User{
    constructor(){
        this.name = '';
        this.email= '';
    }
    name:string;
    email:string;
    ValidateNameMessage = '';
    ValidateEmailMessage = '';
    get validateName():boolean{
        this.ValidateNameMessage = '';
        if(!this.name){
            this.ValidateNameMessage = 'שם חובה';
            return false;
        }
        if(this.name.length<1){
            this.ValidateNameMessage = 'אורך השם קצר מדי'
            return false;
        }
        return true;
    }
    get ValidateEmail():boolean{
        if(!this.email){
            this.ValidateEmailMessage = 'דוא/"ל חובה';
            return false;
        }
        if(new RegExp(/^[A-z0-9._-]+@([A-z0-9-]+\.){1,6}[A-z]+(\.[A-z]{2,5})?$/g).test(this.email)){
            this.ValidateEmailMessage = 'דוא/"ל לא תקין'
            return false;
        }
        this.ValidateEmailMessage = '';
        return true;   
    }

    
}