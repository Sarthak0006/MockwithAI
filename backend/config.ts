import dotenv from 'dotenv';
dotenv.config();

interface Config {
    PORT: number;
    GEMINI_API_KEY: string;    
    GEMINI_MODEL: string;
    SYSTEM_PROMPT: string;
};

const config: Config = {

    PORT: parseInt(process.env.PORT || '3000', 10),

    // Gemini model environment variables
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    GEMINI_MODEL: process.env.GEMINI_MODEL || '',
    SYSTEM_PROMPT: process.env.SYSTEM_PROMPT || '',
};

export default config;
