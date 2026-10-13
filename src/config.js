// "local" бол src/data/nutritions.json-оос, "api" бол API-аас авна
export const DATA_MODE = "local";

// config.js-тэй харьцангуй зам. Хаанаас ачаалсан ч зөв ажиллана
export const LOCAL_NUTRITIONS_URL = new URL(
  "./data/nutritions.json",
  import.meta.url
).href;

export const API_NUTRITIONS_URL = "https://your-api.com/nutritions";