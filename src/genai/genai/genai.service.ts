import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';
import { PromptRequestDTO } from 'src/_shared/dto/prompt-request.dto';

@Injectable()
export class GenaiService {
    genAI: any;
    model: any;

    constructor(private _configService: ConfigService) {
        // Access your API key as an environment variable (see "Set up your API key" above)
        this.genAI = new GoogleGenerativeAI(_configService.get('API_KEY'));

        // For text-only input, use the gemini-pro model
        this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    async getResponse(promptRequest: PromptRequestDTO): Promise<string> {
        const result = await this.model.generateContent(promptRequest.prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}
