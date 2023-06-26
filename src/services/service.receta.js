import { Configuration, OpenAIApi } from "openai";

class ServiceRecetas {
    async getReceta(data) {
      const key= process.env.REACT_APP_OPENAI_KEY;
      const configuration = new Configuration({
        
        apiKey: "sk-"+key,
      });
        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.animal);
        if (!configuration.apiKey) {

            return {
                status: 500,
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            };
        }

        const animal = data.animal || '';
        if (animal.trim().length === 0) {

            return {
                status: 400,
                error: {
                    message: "Please enter a valid animal",
                }
            };
        }

        try {
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Write a recipe based on these ingredients: ${data.animal}`,
              temperature: 0.3,
              max_tokens: 200,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            return {
              status: 200,
              result: completion.data.choices[0].text,
              model: "text-davinci-003",
              prompt: `Write a recipe with the next ingredient: ${data.animal}`,
            }
          } catch (error) {
            if (error.response) {
              console.error(error.response.status, error.response.data);        
              return {
                status: error.response.data
              }
            } else {
              console.error(`Error with OpenAI API request: ${error.message}`);
              return {
                status: 500,
                error: {
                  message: 'An error occurred during your request.',
                }
              }
            }
          }
        }
      }
      
      const RecetaService = new ServiceRecetas();
      export default RecetaService;