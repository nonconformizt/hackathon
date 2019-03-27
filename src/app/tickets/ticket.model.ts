
export class Ticket {

    public arrival_parsed : Date;
    public departure_parsed : Date;

    constructor(
        public arrival_time: number,
        public departure_time: number,
        public price: number,
        public spaceship: {
            free_places: number,
            model_name: string
        },
        public way: {
            planet_name: string,
            port_name: {
                port_name: string
            }
        }[] ) 
    {

    }

    // public init () {
    //     this.arrival_parsed = new Date(this.arrival_time * 1000);
    //     this.departure_parsed = new Date(this.departure_time * 1000);
    // }

}