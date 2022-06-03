export interface Employee {
    name:string;
    mobile:number;
    email:string;
    dob:string;
    address: Address,
    education: Education[],
    role:string;
    id:number;
    html?:string;
    angular?:string;
    java?:string;
    sql?:string;
}

export interface Address{
    addressline: string,
    city: string,
    state: string,
    pincode: number
}
export interface Education{
    qulification: string,
    year: number,
    percentage: number
}
