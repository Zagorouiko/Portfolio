import fs from 'fs'
import OpenAI from 'openai'

const openai = new OpenAI({apiKey: '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'})

async function createFile() { 
    // Upload training file
    // const file = await openai.files.create({ file: fs.createReadStream('trainingData2.jsonl'), purpose: 'fine-tune' })
    // console.log(file)

    // Create fine-tuned model
    // const fineTune = await openai.fineTuning.jobs.create({ training_file: 'file-b5A2i1gjg1yuPI4LuEDzACl2', model: 'ft:gpt-3.5-turbo-0125:plusqa::9gdUt71U' })
    // console.log(fineTune)

    // Retrieve fine-tuned model
    let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-iqnhlzv4wfLIoOx3mFEZcbJp')
    console.log(fineTune)

    // Delete model
    // let model = await openai.models.delete('ft:gpt-3.5-turbo-0125:plusqa::9dkcNeBQ')
}

createFile()


// training_file: file-5zEZKj9kTwFux2zrJpRuZRHq
// training_file2: file-aK4ydA7AvePV4jWQ60DvKd3H
// training_file3: file-d59dNJ2iHzmLpd0Fnf4FZGbp


// {
//     object: 'fine_tuning.job',
//     id: 'ftjob-gFiStEjI80L2MVWAk9VO5yYu',
//     model: 'ft:gpt-3.5-turbo-0125:plusqa::9dkcNeBQ',
//     created_at: 1719947181,
//     finished_at: 1719948629,
//     fine_tuned_model: 'ft:gpt-3.5-turbo-0125:plusqa::9gdUt71U',
//     organization_id: 'org-95AywUJeKBAVq6HcKJlbvFtE',
//     result_files: [ 'file-Fibp6HIcPVM3JW0RpvOZ7gkY' ],
//     status: 'succeeded',
//     validation_file: null,
//     training_file: 'file-d59dNJ2iHzmLpd0Fnf4FZGbp',
//     hyperparameters: { n_epochs: 3, batch_size: 1, learning_rate_multiplier: 2 },
//     trained_tokens: 40188,
//     error: {},
//     user_provided_suffix: null,
//     seed: 1667110735,
//     estimated_finish: null,
//     integrations: []
//   }

// fine_tuned_model: 'ft:gpt-3.5-turbo-0125:plusqa::9hnTjdsW'