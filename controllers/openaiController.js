const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  //   console.log("image generated");
  //   res.status(200).json({
  //     success: true,
  //   });

  try {
    const response = await openai.createImage({
      model: "dall-e-3",
      //   quality: "hd",
      promt: "A scared developer",
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data.data[0].url;
    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "The image cannot be generated",
    });
  }
};

module.exports = { generateImage };
