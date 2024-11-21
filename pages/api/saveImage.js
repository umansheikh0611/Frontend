import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { imageUrl, imageName } = req.body;

        if (!imageUrl || !imageName) {
            return res.status(400).json({ error: "Missing imageUrl or imageName" });
        }

        try {
            // Construct the full URL
            const fullUrl = `http://127.0.0.1:8000/${imageUrl.replace(/^\/+/, "")}`;

            // Fetch the image from the server
            const response = await fetch(fullUrl);

            if (!response.ok) {
                return res.status(400).json({ error: "Failed to fetch the image" });
            }

            // Convert the response to an ArrayBuffer and then to a Node.js Buffer
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Define the path to save the image
            const imagePath = path.join(process.cwd(), "public", imageName);

            // Save the image to the public folder
            fs.writeFileSync(imagePath, buffer);

            return res.status(200).json({ message: "Image saved successfully", path: `/${imageName}` });
        } catch (error) {
            console.error("Error saving image:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
