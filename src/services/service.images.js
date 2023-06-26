import { Configuration, OpenAIApi } from "openai";

class ServiceImage003 {

  async getDaVinci(data) {
    const key= process.env.REACT_APP_OPENAI_KEY;
    const configuration = new Configuration({
      
      apiKey: "sk-"+key,
    });
    const openai = new OpenAIApi(configuration);
    console.log(configuration);
    console.log(data.animal);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const animal = data.animal || '';
      if (animal.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid animal",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createImage({
          prompt: `${data.animal}`,
          n: 2,
          size: "1024x1024",
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        return {
            status: 200,
            result: completion.data.data[0].url,
            result2: completion.data.data[1].url,
            model: "Dall-E",
            prompt: `Generate an image based on the following text:${data.animal}`,
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
  }

    generatePrompt(text) {
        return `Generate an image based on the following text:${text}`;
    }
}
const serviceImage003= new ServiceImage003();
export default serviceImage003;
