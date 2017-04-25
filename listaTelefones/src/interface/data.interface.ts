export interface ILocationMenu{
    name:string;
    description: string;
    price: string;
    type: Array<String>;
}

export interface IPhones{
    number:string;
    type: Array<String>;
}

export interface ILocation{
    address : string;
    neighborhood : string;
    city:string;
    cep: string;
    googlePoint: Array<String>;
    phonesList:IPhones[];
}

export interface IDOW{
    dayName : string;
    schedule : any;
}

export interface IOpenedHours{
    dayOfWeek : IDOW[];
}

export interface IDelivery{
    active : boolean;
    price : number;
}

export interface IMagnetoData{
  name          :   string;
  description   :   string;
  verified      :   boolean;
  photoUrl      :   string
  webSiteUrl    :   string;
  views         :   number;
  delivery      :   IDelivery;
  rating        :   number;
  openingHours  :   IOpenedHours;
  locationList  :   ILocation[];
  group         :   Array<String>;
  services      :   ILocationMenu[];
}
