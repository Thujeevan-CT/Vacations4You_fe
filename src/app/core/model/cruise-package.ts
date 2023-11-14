export interface CruisePackage {
    id?:string,
    title: string,
    departure_destination: string,
    arrival_destination: string,
    departure_date: number,
    arrival_date: number, 
    cabin_class: string,
    cruise_duration: number,
    cruise_provider: string,
    price: number,
}
