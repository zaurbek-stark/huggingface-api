const { HfInference } = require('@huggingface/inference')

const hf = new HfInference(process.env.HF_TOKEN)

const translateText = async (textToTranslate) => {
  console.log('textToTranslate:', textToTranslate);

  const textTranslationResponse = await hf.translation({
    model: 'facebook/mbart-large-50-many-to-many-mmt',
    inputs: textToTranslate,
    parameters: {
        src_lang: "en_XX",
        tgt_lang: "ru_RU"
    }
  })

  const translatedText = textTranslationResponse.translation_text;
  console.log("translation: ", translatedText);

  return translatedText;
}

const text = "What's up man?";
translateText(text).then();
