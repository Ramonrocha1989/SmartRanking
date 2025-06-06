import { Body, Controller, Post } from '@nestjs/common';
import {CreatePlayerDto} from './dtos/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {    
    
    @Post()
    async createUpdateJogador(
        @Body() createPlayerDto: CreatePlayerDto){       
        const {email} = createPlayerDto;
        return JSON.stringify(`{
            "email": ${email},
        }`)

    }

}
