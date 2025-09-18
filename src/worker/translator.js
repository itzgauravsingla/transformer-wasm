import { pipeline, env } from "../transformer/js/transformers.js";

// Specify a custom location for models (defaults to '/models/').
// env.localModelPath = '../../models/';

// Disable the loading of remote models from the Hugging Face Hub:
// env.allowRemoteModels = false;

env.backends.onnx.wasm.wasmPaths = '../transformer/wasm/';

class TranslationPipeline {
  static task = 'translation';
  // static model = 'facebook/nllb-200-distilled-1.3B';
  static model = 'Xenova/nllb-200-distilled-600M';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}

self.addEventListener('message', async (event) => {
  // Retrieve the translation pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
  let translator1 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator2 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator3 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator4 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator5 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator6 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator7 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator8 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator9 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator10 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator11 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator12 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });
  let translator13 = await TranslationPipeline.getInstance(x => {
       // We also add a progress callback to the pipeline so that we can
        // track model loading.
        if(x.status == 'ready') {
          //once model is loaded completely
          postMessage(x);
        }
  });

  const data = event.data;
  if (data.type !== 'init') {
    switch(data.targetLanguage) {
      case "on":
        let output1 = await translator1(data.text, {
          tgt_lang: data.targetLanguage,
          src_lang: data.sourceLanguage,
        });
      // Send the output back to the main thread
        postMessage({
          status: 'complete',
          output: {label: data.label, translation: output1, language: data.targetLanguage},
        });
        break;
      case "hin_Deva":
        let output2 = await translator2(data.text, {
          tgt_lang: data.targetLanguage,
          src_lang: data.sourceLanguage,
        });
      // Send the output back to the main thread
      postMessage({
        status: 'complete',
        output: {label: data.label, translation: output2, language: data.targetLanguage},
      });
        break;
      case "zho_Hant":
        let output3 = await translator3(data.text, {
          tgt_lang: data.targetLanguage,
          src_lang: data.sourceLanguage,
        });
      // Send the output back to the main thread
      postMessage({
        status: 'complete',
        output: {label: data.label, translation: output3, language: data.targetLanguage},
      });
        break;
      case "ace_Arab":
        let output4 = await translator4(data.text, {
          tgt_lang: data.targetLanguage,
          src_lang: data.sourceLanguage,
        });
      // Send the output back to the main thread
      postMessage({
        status: 'complete',
        output: {label: data.label, translation: output4, language: data.targetLanguage},
      });
        break;
      case "fra_Latn":
        let output5 = await translator5(data.text, {
          tgt_lang: data.targetLanguage,
          src_lang: data.sourceLanguage,
        });
      // Send the output back to the main thread
      postMessage({
        status: 'complete',
        output: {label: data.label, translation: output5, language: data.targetLanguage},
      });
        break;
      case "spa_Latn":

        break;
      case "deu_Latn":

        break;
      case "nld_Latn":

        break;
      case "rus_Cyrl":

        break;
      case "bul_Cyrl":

        break;
      case "ron_Latn":

        break;
      case "por_Latn":

        break;
      case "ita_Latn":

        break;
    }
    // Actually perform the translation
    // let output = await translator(data.text, {
    //   tgt_lang: data.targetLanguage,
    //   src_lang: data.sourceLanguage,

    //   // Allows for partial output
    //   // callback_function: x => {
    //   //   postMessage({
    //   //     status: 'update',
    //   //     output: translator.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
    //   //   });
    //   // }
    // });
    // // Send the output back to the main thread
    // postMessage({
    //   status: 'complete',
    //   output: {label: data.label, translation: output, language: data.targetLanguage},
    // });
  }
});

let output = await translator(data.text, {
    tgt_lang: data.targetLanguage,
    src_lang: data.sourceLanguage,
  });
// Send the output back to the main thread
postMessage({
  status: 'complete',
  output: {label: data.label, translation: output, language: data.targetLanguage},
});
