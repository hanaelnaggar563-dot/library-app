export class AuthEntity {  
id: number;
name : string;
email : string;
password : string;
 
constructor(partial: Partial<AuthEntity>) {  
Object.assign(this, partial);  
}
} 