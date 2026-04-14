/**
 * This file is manually created based on the Chatterbox TTS API (chatterbox_tts.py).
 * If the API server becomes available, regenerate with `npm run sync-api`.
 *
 * API: Chatterbox TTS - Text-to-speech with voice cloning
 */

export interface paths {
  "/generate": {
    post: {
      requestBody: {
        content: {
          "application/json": {
            /** @description Text prompt to synthesize (1–5000 chars) */
            prompt: string;
            /** @description R2 object key for the voice sample (1–300 chars) */
            voice_key: string;
            /**
             * @description Sampling temperature
             * @default 0.8
             */
            temperature?: number;
            /**
             * @description Top-p (nucleus) sampling
             * @default 0.95
             */
            top_p?: number;
            /**
             * @description Top-k sampling
             * @default 1000
             */
            top_k?: number;
            /**
             * @description Repetition penalty
             * @default 1.2
             */
            repetition_penalty?: number;
            /**
             * @description Whether to normalize loudness
             * @default true
             */
            norm_loudness?: boolean;
          };
        };
      };
      responses: {
        /** @description Successful Response — WAV audio stream */
        200: {
          content: {
            "audio/wav": string;
          };
        };
        /** @description Bad Request (e.g. voice not found) */
        400: {
          content: {
            "application/json": {
              detail: string;
            };
          };
        };
        /** @description Forbidden — invalid API key */
        403: {
          content: {
            "application/json": {
              detail: string;
            };
          };
        };
        /** @description Validation Error */
        422: {
          content: {
            "application/json": {
              detail: Array<{
                loc: Array<string | number>;
                msg: string;
                type: string;
              }>;
            };
          };
        };
        /** @description Internal Server Error */
        500: {
          content: {
            "application/json": {
              detail: string;
            };
          };
        };
      };
    };
  };
}
