import { Body, Controller, Get } from '@nestjs/common';
import { GenaiService } from './genai.service';
import { PromptRequestDTO } from 'src/_shared/dto/prompt-request.dto';

@Controller('genai')
export class GenaiController {

    constructor(private readonly genAIService: GenaiService) {}

    @Get()
    generateText(@Body() promptRequest: PromptRequestDTO) {
        return this.genAIService.getResponse(promptRequest);
    }
}
