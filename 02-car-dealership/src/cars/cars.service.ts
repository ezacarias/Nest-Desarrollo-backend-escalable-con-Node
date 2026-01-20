import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand:'Toyota',
            model:'Corola'
        },{
            id:2,
            brand:'Honda',
            model:'Civic'
        },{
            id:3,
            brand:'Jeep',
            model:'Cheroke'
        }
];
}
