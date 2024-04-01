import { Body, Controller, Post } from '@nestjs/common';
import { GenaiService } from './genai.service';
import { PromptRequestDTO } from 'src/_shared/dto/prompt-request.dto';

@Controller('genai')
export class GenaiController {

    constructor(private readonly genAIService: GenaiService) {}

    @Post()
    generateText(@Body() promptRequest: PromptRequestDTO) {
        return this.genAIService.getResponse(promptRequest);
    }
}
